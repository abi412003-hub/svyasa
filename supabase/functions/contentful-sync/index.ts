import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/contentful";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Auth check
    const authHeader = req.headers.get("authorization");
    if (!authHeader) throw new Error("Unauthorized");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify admin role
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user) throw new Error("Invalid token");

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .single();
    if (!roleData) throw new Error("Admin access required");

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const CONTENTFUL_API_KEY = Deno.env.get("CONTENTFUL_API_KEY");
    if (!CONTENTFUL_API_KEY) throw new Error("CONTENTFUL_API_KEY not configured");

    const SPACE_ID = Deno.env.get("CONTENTFUL_SPACE_ID");
    if (!SPACE_ID) throw new Error("CONTENTFUL_SPACE_ID not configured");

    const { action, contentType } = await req.json();

    const headers = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": CONTENTFUL_API_KEY,
    };

    if (action === "list") {
      // List entries from Contentful
      const limit = 100;
      let skip = 0;
      let allItems: any[] = [];
      let total = 0;

      do {
        const res = await fetch(
          `${GATEWAY_URL}/spaces/${SPACE_ID}/entries?content_type=${contentType}&limit=${limit}&skip=${skip}&include=2`,
          { headers }
        );
        if (!res.ok) throw new Error(`Contentful API error [${res.status}]: ${await res.text()}`);
        const data = await res.json();
        total = data.total;
        
        // Resolve assets
        const assets = (data.includes?.Asset || []).reduce((acc: any, a: any) => {
          acc[a.sys.id] = `https:${a.fields.file.url}`;
          return acc;
        }, {});

        // Resolve linked entries (departments etc.)
        const entries = (data.includes?.Entry || []).reduce((acc: any, e: any) => {
          acc[e.sys.id] = e.fields;
          return acc;
        }, {});

        const enriched = data.items.map((item: any) => ({
          ...item,
          _resolved: { assets, entries },
        }));

        allItems = allItems.concat(enriched);
        skip += limit;
      } while (skip < total);

      return new Response(JSON.stringify({ items: allItems, total }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "sync") {
      // Fetch all entries
      const limit = 100;
      let skip = 0;
      let allItems: any[] = [];
      let total = 0;
      let allAssets: Record<string, string> = {};
      let allEntries: Record<string, any> = {};

      do {
        const res = await fetch(
          `${GATEWAY_URL}/spaces/${SPACE_ID}/entries?content_type=${contentType}&limit=${limit}&skip=${skip}&include=2`,
          { headers }
        );
        if (!res.ok) throw new Error(`Contentful API error [${res.status}]: ${await res.text()}`);
        const data = await res.json();
        total = data.total;

        for (const a of data.includes?.Asset || []) {
          allAssets[a.sys.id] = `https:${a.fields.file.url}`;
        }
        for (const e of data.includes?.Entry || []) {
          allEntries[e.sys.id] = e.fields;
        }

        allItems = allItems.concat(data.items);
        skip += limit;
      } while (skip < total);

      let synced = 0;

      if (contentType === "course") {
        for (const item of allItems) {
          const f = item.fields;
          const deptName = f.department?.sys?.id
            ? allEntries[f.department.sys.id]?.name || ""
            : "";

          const courseData = {
            slug: f.slug,
            title: f.title,
            short_title: f.title?.substring(0, 30) || f.title,
            degree: f.programLevel || "",
            duration: f.duration || "",
            campus: deptName || "S-VYASA",
            category: f.programLevel?.toLowerCase() || "",
            banner_image: f.image?.sys?.id ? allAssets[f.image.sys.id] || "" : "",
            hook_line: extractPlainText(f.description),
            apply_link: f.applicationUrl || "",
            brochure_link: f.brochure?.sys?.id ? allAssets[f.brochure.sys.id] || null : null,
            overview: f.description ? [{ heading: "Overview", body: extractPlainText(f.description) }] : [],
            eligibility: f.eligibility ? { criteria: f.eligibility } : {},
            fee: f.fee ? { amount: f.fee } : {},
            is_published: f.admissionOpen !== false,
          };

          const { error } = await supabase
            .from("courses")
            .upsert(courseData, { onConflict: "slug" });
          if (!error) synced++;
        }
      }

      if (contentType === "faculty") {
        for (const item of allItems) {
          const f = item.fields;
          const deptName = f.department?.sys?.id
            ? allEntries[f.department.sys.id]?.name || ""
            : "";

          const facultyData = {
            contentful_id: item.sys.id,
            name: f.name,
            slug: f.slug,
            designation: f.designation || "",
            department: deptName,
            qualifications: f.qualification || "",
            bio: extractPlainText(f.bio),
            photo_url: f.photo?.sys?.id ? allAssets[f.photo.sys.id] || "" : "",
            research_interests: f.researchInterests || [],
            publications: extractPlainText(f.publications),
            email: f.email || "",
            phone: f.phone || "",
            google_scholar_url: f.googleScholarUrl || "",
            orcid_id: f.orcidId || "",
            linkedin_url: f.linkedinUrl || "",
            display_order: f.order || 999,
            achievements: extractPlainText(f.achievements),
            area_of_expertise: f.areaOfExpertise || [],
            responsibility: extractPlainText(f.responsibility),
            research: extractPlainText(f.research),
            faculty_category: f.facultyCategory || "staff",
          };

          const { error } = await supabase
            .from("faculty_profiles")
            .upsert(facultyData, { onConflict: "contentful_id" });
          if (!error) synced++;
        }
      }

      if (contentType === "department") {
        // Just return departments for reference - no DB table needed
        const departments = allItems.map((item: any) => ({
          id: item.sys.id,
          name: item.fields.name,
          slug: item.fields.slug,
          description: item.fields.description || "",
        }));
        return new Response(JSON.stringify({ synced: departments.length, departments }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ synced, total: allItems.length }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    throw new Error(`Unknown action: ${action}`);
  } catch (error: unknown) {
    console.error("Contentful sync error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

function extractPlainText(richText: any): string {
  if (!richText) return "";
  if (typeof richText === "string") return richText;
  if (richText.nodeType === "document" && richText.content) {
    return richText.content
      .map((node: any) => extractPlainText(node))
      .filter(Boolean)
      .join("\n");
  }
  if (richText.nodeType === "paragraph" && richText.content) {
    return richText.content
      .map((node: any) => {
        if (node.nodeType === "text") return node.value;
        if (node.content) return extractPlainText(node);
        return "";
      })
      .join("");
  }
  if (richText.nodeType === "text") return richText.value || "";
  if (richText.content) {
    return richText.content
      .map((node: any) => extractPlainText(node))
      .filter(Boolean)
      .join("\n");
  }
  return "";
}
