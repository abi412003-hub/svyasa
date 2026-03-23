import { useState } from "react";
import { Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { STORAGE_KEYS, getItems } from "@/lib/newsEventsStorage";
import type { NewsItem, EventItem } from "@/lib/newsEventsTypes";

function downloadJSON(data: any, filename: string) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

export default function ExportPage() {
  const [copiedNews, setCopiedNews] = useState(false);
  const [copiedEvents, setCopiedEvents] = useState(false);

  const exportNews = async () => {
    const items = await getItems<NewsItem>(STORAGE_KEYS.NEWS);
    downloadJSON(items, "svyasa-news-export.json");
    toast.success(`Exported ${items.length} news items`);
  };

  const exportEvents = async () => {
    const items = await getItems<EventItem>(STORAGE_KEYS.EVENTS);
    downloadJSON(items, "svyasa-events-export.json");
    toast.success(`Exported ${items.length} events`);
  };

  const exportAll = async () => {
    const news = await getItems<NewsItem>(STORAGE_KEYS.NEWS);
    const events = await getItems<EventItem>(STORAGE_KEYS.EVENTS);
    downloadJSON({ news, events }, "svyasa-content-export.json");
    toast.success(`Exported ${news.length} news + ${events.length} events`);
  };

  const copyToClipboard = async (key: string, type: "news" | "events") => {
    const items = await getItems<any>(key);
    await navigator.clipboard.writeText(JSON.stringify(items, null, 2));
    if (type === "news") { setCopiedNews(true); setTimeout(() => setCopiedNews(false), 2000); }
    else { setCopiedEvents(true); setTimeout(() => setCopiedEvents(false), 2000); }
    toast.success("Copied to clipboard");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#1e293b]">Export Data</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Export News</CardTitle>
            <CardDescription>Download all news articles as JSON</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button onClick={exportNews} className="bg-[#1e3a5f] hover:bg-[#2d5a8e]"><Download className="w-4 h-4 mr-1" /> Download</Button>
            <Button variant="outline" onClick={() => copyToClipboard(STORAGE_KEYS.NEWS, "news")}>
              {copiedNews ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
              {copiedNews ? "Copied!" : "Copy"}
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Export Events</CardTitle>
            <CardDescription>Download all events as JSON</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button onClick={exportEvents} className="bg-[#1e3a5f] hover:bg-[#2d5a8e]"><Download className="w-4 h-4 mr-1" /> Download</Button>
            <Button variant="outline" onClick={() => copyToClipboard(STORAGE_KEYS.EVENTS, "events")}>
              {copiedEvents ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
              {copiedEvents ? "Copied!" : "Copy"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Button onClick={exportAll} variant="outline" className="w-full sm:w-auto">
        <Download className="w-4 h-4 mr-1" /> Export All (News + Events)
      </Button>
    </div>
  );
}
