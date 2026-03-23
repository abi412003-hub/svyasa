import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowUp, ArrowDown, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { STORAGE_KEYS, getItems, setItems } from "@/lib/newsEventsStorage";
import { EVENT_CATEGORIES, CAMPUS_OPTIONS, generateSlug, type EventItem } from "@/lib/newsEventsTypes";

export default function EventForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [date, setDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [campus, setCampus] = useState<"GCC" | "Prashanti" | "Both">("Both");
  const [category, setCategory] = useState("Other");
  const [body, setBody] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [galleryUrls, setGalleryUrls] = useState<string[]>([]);
  const [isPublished, setIsPublished] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    (async () => {
      const items = await getItems<EventItem>(STORAGE_KEYS.EVENTS);
      const item = items.find((e) => e.id === id);
      if (!item) { toast.error("Item not found"); navigate("/news-admin/events"); return; }
      setTitle(item.title); setSlug(item.slug); setDate(item.date); setEndDate(item.endDate || "");
      setCampus(item.campus); setCategory(item.category); setBody(item.body);
      setThumbnailUrl(item.thumbnailUrl); setGalleryUrls(item.galleryUrls);
      setIsPublished(item.isPublished);
    })();
  }, [id, isEdit, navigate]);

  const handleSave = async (publish: boolean) => {
    if (!title.trim()) { toast.error("Title is required"); return; }
    if (!date) { toast.error("Date is required"); return; }
    setLoading(true);
    try {
      const finalSlug = slug || generateSlug(title);
      const now = new Date().toISOString();
      const item: EventItem = {
        id: isEdit ? id! : "event-" + Date.now(),
        title: title.trim(), slug: finalSlug, date, endDate, campus, category, body,
        thumbnailUrl, galleryUrls: galleryUrls.filter(Boolean),
        isPublished: publish,
        createdAt: isEdit ? "" : now, updatedAt: now,
      };
      const items = await getItems<EventItem>(STORAGE_KEYS.EVENTS);
      if (isEdit) {
        const existing = items.find((e) => e.id === id);
        item.createdAt = existing?.createdAt || now;
        const updated = items.map((e) => (e.id === id ? item : e));
        await setItems(STORAGE_KEYS.EVENTS, updated);
      } else {
        await setItems(STORAGE_KEYS.EVENTS, [...items, item]);
      }
      toast.success(isEdit ? "Event updated" : "Event created");
      navigate("/news-admin/events");
    } catch (e: any) { toast.error(e.message || "Save failed"); }
    finally { setLoading(false); }
  };

  const moveGallery = (idx: number, dir: -1 | 1) => {
    const arr = [...galleryUrls];
    const target = idx + dir;
    if (target < 0 || target >= arr.length) return;
    [arr[idx], arr[target]] = [arr[target], arr[idx]];
    setGalleryUrls(arr);
  };

  const fmtPreviewDate = (d: string) => {
    try { return new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }); }
    catch { return ""; }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-[#1e293b]">{isEdit ? "Edit Event" : "Add Event"}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 space-y-4">
          <div className="space-y-2">
            <Label>Title *</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} onBlur={() => !slug && setSlug(generateSlug(title))} placeholder="Enter event title" />
          </div>
          <div className="space-y-2">
            <Label>Slug</Label>
            <Input value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="auto-generated-from-title" />
            <p className="text-xs text-[#64748b]">URL-friendly identifier</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label>Date *</Label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Campus</Label>
              <Select value={campus} onValueChange={(v: any) => setCampus(v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{CAMPUS_OPTIONS.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{EVENT_CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Body</Label>
            <Textarea rows={6} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write the event description..." />
          </div>
          <div className="space-y-2">
            <Label>Thumbnail URL</Label>
            <Input type="url" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} placeholder="https://... paste image URL" />
            {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" className="h-12 object-cover rounded" onError={(e) => (e.currentTarget.style.display = "none")} />}
          </div>

          <div className="space-y-2">
            <Label>Gallery Image URLs</Label>
            {galleryUrls.map((url, i) => (
              <div key={i} className="flex gap-2 items-center">
                <Input value={url} onChange={(e) => { const arr = [...galleryUrls]; arr[i] = e.target.value; setGalleryUrls(arr); }} placeholder="https://..." className="flex-1" />
                {url && <img src={url} alt="" className="h-8 w-8 object-cover rounded" onError={(e) => (e.currentTarget.style.display = "none")} />}
                <Button variant="ghost" size="icon" onClick={() => moveGallery(i, -1)} disabled={i === 0}><ArrowUp className="w-3 h-3" /></Button>
                <Button variant="ghost" size="icon" onClick={() => moveGallery(i, 1)} disabled={i === galleryUrls.length - 1}><ArrowDown className="w-3 h-3" /></Button>
                <Button variant="ghost" size="icon" onClick={() => setGalleryUrls(galleryUrls.filter((_, j) => j !== i))}><X className="w-3 h-3" /></Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => setGalleryUrls([...galleryUrls, ""])}><Plus className="w-3 h-3 mr-1" /> Add Image URL</Button>
          </div>

          <Separator />
          <div className="flex items-center gap-2"><Switch checked={isPublished} onCheckedChange={setIsPublished} /><Label>Publish immediately</Label></div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2">
          <Card className="shadow-sm sticky top-6">
            <CardHeader><CardTitle className="text-sm text-[#64748b]">Live Preview</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {thumbnailUrl ? (
                <img src={thumbnailUrl} alt="" className="w-full h-40 object-cover rounded-lg" onError={(e) => (e.currentTarget.style.display = "none")} />
              ) : (
                <div className="w-full h-40 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">No image</div>
              )}
              <h3 className="font-bold text-lg text-[#1e293b] line-clamp-2">{title || "Untitled"}</h3>
              <p className="text-sm text-[#64748b]">{date ? fmtPreviewDate(date) : "No date"}{endDate ? ` — ${fmtPreviewDate(endDate)}` : ""}</p>
              <div className="flex gap-2">
                <Badge variant="secondary" className={campus === "GCC" ? "bg-blue-100 text-blue-800" : campus === "Prashanti" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"}>{campus}</Badge>
                <Badge variant="secondary" className="bg-slate-100 text-slate-700">{category}</Badge>
              </div>
              {body && <p className="text-sm text-[#64748b] line-clamp-2">{body}</p>}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="sticky bottom-0 bg-[#f8fafc] border-t py-3 flex gap-3 justify-end">
        <Button variant="ghost" onClick={() => navigate("/news-admin/events")} disabled={loading}>Cancel</Button>
        <Button variant="outline" onClick={() => handleSave(false)} disabled={loading}>Save as Draft</Button>
        <Button onClick={() => handleSave(true)} disabled={loading} className="bg-[#1e3a5f] hover:bg-[#2d5a8e]">Publish</Button>
      </div>
    </div>
  );
}
