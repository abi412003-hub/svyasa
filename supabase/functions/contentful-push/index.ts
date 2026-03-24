import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const CMA_BASE = "https://api.contentful.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) throw new Error("Unauthorized");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

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

    const CMA_TOKEN = Deno.env.get("CONTENTFUL_MANAGEMENT_TOKEN");
    if (!CMA_TOKEN) throw new Error("CONTENTFUL_MANAGEMENT_TOKEN not configured");

    const SPACE_ID = Deno.env.get("CONTENTFUL_SPACE_ID");
    if (!SPACE_ID) throw new Error("CONTENTFUL_SPACE_ID not configured");

    const ENV_ID = "master";
    const cmaHeaders = {
      Authorization: `Bearer ${CMA_TOKEN}`,
      "Content-Type": "application/vnd.contentful.management.v1+json",
    };

    const body = await req.json();
    const { contentType, action } = body;

    // Department mapping for courses
    const deptMap: Record<string, string> = {
      yoga: "dept-yoga",
      "yoga-programmes": "dept-yoga",
      tech: "dept-lifesciences",
      business: "dept-humanities",
      health: "dept-naturopathy",
      science: "dept-lifesciences",
      humanities: "dept-humanities",
    };

    // Helper to create/update entry
    async function upsertEntry(entryId: string, ctId: string, fields: Record<string, any>) {
      const checkRes = await fetch(
        `${CMA_BASE}/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${entryId}`,
        { headers: { Authorization: `Bearer ${CMA_TOKEN}` } }
      );

      if (checkRes.ok) {
        const existing = await checkRes.json();
        const version = existing.sys.version;
        const updateRes = await fetch(
          `${CMA_BASE}/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${entryId}`,
          {
            method: "PUT",
            headers: { ...cmaHeaders, "X-Contentful-Version": String(version) },
            body: JSON.stringify({ fields }),
          }
        );
        if (!updateRes.ok) {
          const err = await updateRes.text();
          console.error(`Update failed for ${entryId}: ${err}`);
          return { action: "update_failed", id: entryId, error: err };
        }
        const updated = await updateRes.json();
        await fetch(
          `${CMA_BASE}/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${entryId}/published`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${CMA_TOKEN}`,
              "X-Contentful-Version": String(updated.sys.version),
            },
          }
        );
        return { action: "updated", id: entryId };
      } else {
        const createRes = await fetch(
          `${CMA_BASE}/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${entryId}`,
          {
            method: "PUT",
            headers: { ...cmaHeaders, "X-Contentful-Content-Type": ctId },
            body: JSON.stringify({ fields }),
          }
        );
        if (!createRes.ok) {
          const err = await createRes.text();
          console.error(`Create failed for ${entryId}: ${err}`);
          return { action: "create_failed", id: entryId, error: err };
        }
        const created = await createRes.json();
        await fetch(
          `${CMA_BASE}/spaces/${SPACE_ID}/environments/${ENV_ID}/entries/${entryId}/published`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${CMA_TOKEN}`,
              "X-Contentful-Version": String(created.sys.version),
            },
          }
        );
        return { action: "created", id: entryId };
      }
    }

    // Helper to build rich text from plain text
    function makeRichText(text: string) {
      if (!text) return {
        "en-US": { nodeType: "document", data: {}, content: [{ nodeType: "paragraph", data: {}, content: [{ nodeType: "text", value: "", marks: [], data: {} }] }] }
      };
      return {
        "en-US": {
          nodeType: "document",
          data: {},
          content: text.split("\n").filter(Boolean).map((para: string) => ({
            nodeType: "paragraph",
            data: {},
            content: [{ nodeType: "text", value: para, marks: [], data: {} }],
          })),
        },
      };
    }

    const results: any[] = [];

    // ── Single faculty push (from admin editor) ──
    if (action === "push-faculty") {
      const fac = body.faculty;
      if (!fac || !fac.name || !fac.slug) throw new Error("Faculty data with name and slug required");

      const entryId = `faculty-${fac.slug.substring(0, 56).replace(/[^a-zA-Z0-9-_]/g, "-")}`;

      const fields: Record<string, any> = {
        name: { "en-US": fac.name },
        slug: { "en-US": fac.slug },
        designation: { "en-US": fac.designation || "" },
        qualification: { "en-US": fac.qualifications || "" },
        bio: makeRichText(fac.bio || ""),
        researchInterests: { "en-US": fac.research_interests || [] },
        areaOfExpertise: { "en-US": fac.area_of_expertise || [] },
        facultyCategory: { "en-US": fac.faculty_category || "Faculty and Staff" },
        order: { "en-US": fac.display_order || 999 },
        email: { "en-US": fac.email || "" },
        phone: { "en-US": fac.phone || "" },
        googleScholarUrl: { "en-US": fac.google_scholar_url || "" },
        orcidId: { "en-US": fac.orcid_id || "" },
        linkedinUrl: { "en-US": fac.linkedin_url || "" },
      };

      // Rich text fields
      if (fac.achievements) fields.achievements = makeRichText(fac.achievements);
      if (fac.publications) fields.publications = makeRichText(fac.publications);
      if (fac.research) fields.research = makeRichText(fac.research);
      if (fac.responsibility) fields.responsibility = makeRichText(fac.responsibility);

      const result = await upsertEntry(entryId, "faculty", fields);

      // After pushing to Contentful, sync back to Supabase
      if (result.action === "created" || result.action === "updated") {
        const syncPayload = {
          contentful_id: entryId,
          name: fac.name,
          slug: fac.slug,
          designation: fac.designation || "",
          department: fac.department || "",
          qualifications: fac.qualifications || "",
          bio: fac.bio || "",
          photo_url: fac.photo_url || "",
          email: fac.email || "",
          phone: fac.phone || "",
          google_scholar_url: fac.google_scholar_url || "",
          orcid_id: fac.orcid_id || "",
          linkedin_url: fac.linkedin_url || "",
          achievements: fac.achievements || "",
          publications: fac.publications || "",
          research: fac.research || "",
          responsibility: fac.responsibility || "",
          research_interests: fac.research_interests || [],
          area_of_expertise: fac.area_of_expertise || [],
          display_order: fac.display_order || 999,
          is_published: fac.is_published !== false,
          faculty_category: fac.faculty_category || "Faculty and Staff",
        };

        // Upsert to Supabase using contentful_id as the conflict key
        const { error: dbError } = await supabase
          .from("faculty_profiles")
          .upsert(syncPayload, { onConflict: "contentful_id" });

        if (dbError) {
          console.error("DB sync error:", dbError);
          return new Response(
            JSON.stringify({ ...result, db_sync: "failed", db_error: dbError.message }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }

      return new Response(JSON.stringify(result), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ── Bulk courses push ──
    if (contentType === "courses") {
      const { data: courses, error } = await supabase.from("courses").select("*");
      if (error) throw error;

      for (const course of courses || []) {
        const deptId = deptMap[course.domain_theme] || deptMap[course.category] || "dept-yoga";

        const overviewText = Array.isArray(course.overview)
          ? course.overview.map((o: any) => typeof o === "string" ? o : o.body || o.heading || "").join("\n\n")
          : "";

        const eligText = course.eligibility
          ? typeof course.eligibility === "object"
            ? (course.eligibility as any).primary || ""
            : String(course.eligibility)
          : "";

        const feeText = course.fee
          ? typeof course.fee === "object"
            ? ((course.fee as any).yearlyFees || []).map((f: any) => `${f.year}: ${f.amount}`).join(", ")
            : String(course.fee)
          : "";

        const fields: Record<string, any> = {
          title: { "en-US": course.title },
          slug: { "en-US": course.slug },
          programLevel: { "en-US": course.degree || "" },
          department: {
            "en-US": {
              sys: { type: "Link", linkType: "Entry", id: deptId },
            },
          },
          description: {
            "en-US": {
              nodeType: "document",
              data: {},
              content: [
                ...(overviewText
                  ? overviewText.split("\n\n").map((para: string) => ({
                      nodeType: "paragraph",
                      data: {},
                      content: [{ nodeType: "text", value: para, marks: [], data: {} }],
                    }))
                  : [
                      {
                        nodeType: "paragraph",
                        data: {},
                        content: [
                          { nodeType: "text", value: course.hook_line || course.title, marks: [], data: {} },
                        ],
                      },
                    ]),
              ],
            },
          },
          duration: { "en-US": course.duration || "" },
          mode: { "en-US": course.campus_type === "gcc" ? "On-campus (Global City Campus)" : "On-campus (Prashanti Kutiram)" },
          eligibility: { "en-US": eligText },
          fee: { "en-US": feeText },
          admissionOpen: { "en-US": course.is_published !== false },
          applicationUrl: { "en-US": course.apply_link || "" },
          order: { "en-US": 0 },
        };

        const entryId = `course-${course.slug.substring(0, 60).replace(/[^a-zA-Z0-9-_]/g, "-")}`;
        const result = await upsertEntry(entryId, "course", fields);
        results.push(result);
        await new Promise((r) => setTimeout(r, 200));
      }
    }

    // ── Bulk faculty push ──
    if (contentType === "faculty" && !action) {
      const { data: dbFaculty } = await supabase.from("faculty_profiles").select("*");

      if (dbFaculty?.length) {
        for (const fac of dbFaculty) {
          const fields: Record<string, any> = {
            name: { "en-US": fac.name },
            slug: { "en-US": fac.slug || fac.id },
            designation: { "en-US": fac.designation || "" },
            qualification: { "en-US": fac.qualifications || "" },
            bio: makeRichText(fac.bio || ""),
            researchInterests: { "en-US": fac.research_interests || [] },
            areaOfExpertise: { "en-US": fac.area_of_expertise || [] },
            facultyCategory: { "en-US": fac.faculty_category || "staff" },
            order: { "en-US": fac.display_order || 999 },
            email: { "en-US": fac.email || "" },
            phone: { "en-US": fac.phone || "" },
            googleScholarUrl: { "en-US": fac.google_scholar_url || "" },
            orcidId: { "en-US": fac.orcid_id || "" },
            linkedinUrl: { "en-US": fac.linkedin_url || "" },
          };

          if (fac.achievements) fields.achievements = makeRichText(fac.achievements);
          if (fac.publications) fields.publications = makeRichText(fac.publications);
          if (fac.research) fields.research = makeRichText(fac.research);
          if (fac.responsibility) fields.responsibility = makeRichText(fac.responsibility);

          const entryId = `faculty-${(fac.slug || fac.id).substring(0, 56).replace(/[^a-zA-Z0-9-_]/g, "-")}`;
          const result = await upsertEntry(entryId, "faculty", fields);
          results.push(result);
          await new Promise((r) => setTimeout(r, 200));
        }
      }
    }

    const created = results.filter((r) => r.action === "created").length;
    const updated = results.filter((r) => r.action === "updated").length;
    const failed = results.filter((r) => r.action?.includes("failed")).length;

    return new Response(
      JSON.stringify({ created, updated, failed, total: results.length, details: results }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Push to Contentful error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
