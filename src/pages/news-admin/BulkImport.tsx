import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { STORAGE_KEYS, getItems, setItems } from "@/lib/newsEventsStorage";
import { generateSlug, type NewsItem, type EventItem } from "@/lib/newsEventsTypes";

const SAMPLE_NEWS = JSON.stringify([
  {
    title: "Republic Day",
    date: "2026-01-26",
    campus: "Both",
    category: "Celebration",
    body: "",
    thumbnailUrl: "https://www.svyasa.edu.in/admin/photo/1/news/43/315.jpg",
    galleryUrls: [],
    isFeatured: true,
    isPublished: true,
  },
], null, 2);

const SAMPLE_EVENTS = JSON.stringify([
  {
    title: "International Yoga Day",
    date: "2026-06-21",
    endDate: "2026-06-21",
    campus: "Both",
    category: "Yoga",
    body: "",
    thumbnailUrl: "",
    galleryUrls: [],
    isPublished: true,
  },
], null, 2);

function ImportTab({ type }: { type: "news" | "events" }) {
  const [json, setJson] = useState("");
  const [preview, setPreview] = useState<any[] | null>(null);
  const [error, setError] = useState("");

  const handlePreview = () => {
    try {
      const parsed = JSON.parse(json);
      if (!Array.isArray(parsed)) throw new Error("Must be an array");
      setPreview(parsed);
      setError("");
    } catch (e: any) {
      setError(e.message);
      setPreview(null);
    }
  };

  const handleImport = async () => {
    if (!preview) return;
    try {
      const key = type === "news" ? STORAGE_KEYS.NEWS : STORAGE_KEYS.EVENTS;
      const existing = await getItems<any>(key);
      const existingTitles = new Set(existing.map((i: any) => i.title.toLowerCase()));
      const now = new Date().toISOString();
      let imported = 0;

      const newItems = preview
        .filter((item) => !existingTitles.has(item.title?.toLowerCase()))
        .map((item) => {
          imported++;
          const id = `${type === "news" ? "news" : "event"}-${Date.now()}-${imported}`;
          return {
            id,
            title: item.title || "Untitled",
            slug: generateSlug(item.title || "untitled"),
            body: item.body || "",
            date: item.date || now.slice(0, 10),
            ...(type === "events" ? { endDate: item.endDate || "" } : {}),
            campus: item.campus || "Both",
            category: item.category || "Other",
            thumbnailUrl: item.thumbnailUrl || "",
            galleryUrls: item.galleryUrls || [],
            ...(type === "news" ? { isFeatured: item.isFeatured || false } : {}),
            isPublished: item.isPublished !== false,
            createdAt: now,
            updatedAt: now,
          };
        });

      await setItems(key, [...existing, ...newItems]);
      toast.success(`Imported ${newItems.length} ${type} items (${preview.length - newItems.length} duplicates skipped)`);
      setJson("");
      setPreview(null);
    } catch (e: any) {
      toast.error(e.message || "Import failed");
    }
  };

  return (
    <div className="space-y-4">
      <Textarea
        rows={12}
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder={`Paste JSON array of ${type} items...`}
        className="font-mono text-sm"
      />
      <p className="text-xs text-[#64748b]">
        Expected format: Array of objects with fields: title, date (YYYY-MM-DD), campus, category, body, thumbnailUrl, galleryUrls[]{type === "news" ? ", isFeatured" : ", endDate"}, isPublished
      </p>
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-2">
        <Button onClick={handlePreview} variant="outline" disabled={!json.trim()}>Preview</Button>
        <Button onClick={handleImport} disabled={!preview} className="bg-[#1e3a5f] hover:bg-[#2d5a8e]">Import All</Button>
        <Button variant="ghost" onClick={() => { setJson(""); setPreview(null); setError(""); }}>Clear</Button>
      </div>

      <Collapsible>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="text-[#64748b]">
            See example <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <pre className="bg-slate-50 rounded p-3 text-xs font-mono overflow-x-auto max-h-48">
            {type === "news" ? SAMPLE_NEWS : SAMPLE_EVENTS}
          </pre>
        </CollapsibleContent>
      </Collapsible>

      {preview && (
        <Card>
          <CardHeader><CardTitle className="text-sm">Preview ({preview.length} items)</CardTitle></CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Campus</TableHead>
                    <TableHead>Category</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {preview.slice(0, 20).map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell><Badge variant="secondary">{item.campus}</Badge></TableCell>
                      <TableCell><Badge variant="secondary" className="bg-slate-100 text-slate-700">{item.category}</Badge></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {preview.length > 20 && <p className="text-sm text-[#64748b] mt-2">...and {preview.length - 20} more</p>}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default function BulkImport() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[#1e293b]">Bulk Import</h1>
      <p className="text-[#64748b]">Paste JSON data from the old website content dump to import news and events in bulk.</p>

      <Tabs defaultValue="news">
        <TabsList>
          <TabsTrigger value="news">Import News</TabsTrigger>
          <TabsTrigger value="events">Import Events</TabsTrigger>
        </TabsList>
        <TabsContent value="news"><ImportTab type="news" /></TabsContent>
        <TabsContent value="events"><ImportTab type="events" /></TabsContent>
      </Tabs>
    </div>
  );
}
