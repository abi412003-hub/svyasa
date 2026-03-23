import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Newspaper, Calendar, CheckCircle, FileEdit, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useSupabaseNews } from "@/hooks/useSupabaseNews";
import { useSupabaseEvents } from "@/hooks/useSupabaseEvents";
import type { NewsItem, EventItem } from "@/lib/newsEventsTypes";

export default function Dashboard() {
  const { data: news, loading: nl } = useSupabaseNews();
  const { data: events, loading: el } = useSupabaseEvents();
  const loading = nl || el;

  const stats = useMemo(() => {
    const published = [...news, ...events].filter((i) => i.isPublished).length;
    const drafts = news.length + events.length - published;
    return { news: news.length, events: events.length, published, drafts };
  }, [news, events]);

  const recentItems = useMemo(() => {
    const all = [
      ...news.map((n) => ({ ...n, _type: "News" as const })),
      ...events.map((e) => ({ ...e, _type: "Event" as const })),
    ];
    return all.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 10);
  }, [news, events]);

  const statCards = [
    { label: "Total News", value: stats.news, icon: Newspaper, color: "text-blue-600 bg-blue-50" },
    { label: "Total Events", value: stats.events, icon: Calendar, color: "text-green-600 bg-green-50" },
    { label: "Published", value: stats.published, icon: CheckCircle, color: "text-emerald-600 bg-emerald-50" },
    { label: "Drafts", value: stats.drafts, icon: FileEdit, color: "text-amber-600 bg-amber-50" },
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => <Skeleton key={i} className="h-28 rounded-xl" />)}
        </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#1e293b]">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((s) => (
          <Card key={s.label} className="shadow-sm">
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`p-3 rounded-lg ${s.color}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-[#64748b]">{s.label}</p>
                <p className="text-2xl font-bold text-[#1e293b]">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button asChild className="h-16 text-base bg-[#1e3a5f] hover:bg-[#2d5a8e]">
          <Link to="/news-admin/news/new"><Plus className="w-5 h-5 mr-2" /> Add News Article</Link>
        </Button>
        <Button asChild className="h-16 text-base bg-[#1e3a5f] hover:bg-[#2d5a8e]">
          <Link to="/news-admin/events/new"><Plus className="w-5 h-5 mr-2" /> Add Event</Link>
        </Button>
      </div>

      {/* Recent Activity */}
      <Card className="shadow-sm">
        <CardHeader><CardTitle className="text-lg">Recent Activity</CardTitle></CardHeader>
        <CardContent>
          {recentItems.length === 0 ? (
            <p className="text-center text-[#64748b] py-8">No items yet. Start by adding news or events.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Campus</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentItems.map((item) => (
                  <TableRow key={item._type + item.id}>
                    <TableCell>
                      <Badge variant="secondary" className={item._type === "News" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
                        {item._type}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">{item.title}</TableCell>
                    <TableCell className="text-[#64748b]">{new Date(item.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={item.campus === "GCC" ? "border-blue-300 text-blue-700" : item.campus === "Prashanti" ? "border-green-300 text-green-700" : "border-purple-300 text-purple-700"}>
                        {item.campus}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${item.isPublished ? "bg-green-500" : "bg-gray-400"}`} />
                        <span className="text-sm">{item.isPublished ? "Published" : "Draft"}</span>
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
