import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseNews } from "@/hooks/useSupabaseNews";
import { NEWS_CATEGORIES, CAMPUS_OPTIONS, type NewsItem } from "@/lib/newsEventsTypes";

const PER_PAGE = 15;

export default function NewsList() {
  const { data: news, loading, refetch } = useSupabaseNews();
  const [search, setSearch] = useState("");
  const [campusFilter, setCampusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let items = [...news];
    if (search) items = items.filter((n) => n.title.toLowerCase().includes(search.toLowerCase()));
    if (campusFilter !== "All") items = items.filter((n) => n.campus === campusFilter);
    if (categoryFilter !== "All") items = items.filter((n) => n.category === categoryFilter);
    if (statusFilter !== "All") items = items.filter((n) => (statusFilter === "Published" ? n.isPublished : !n.isPublished));
    return items.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  }, [news, search, campusFilter, categoryFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const togglePublish = useCallback(async (item: NewsItem) => {
    const { error } = await supabaseExternal
      .from("svyasa_news")
      .update({ is_published: !item.isPublished })
      .eq("id", Number(item.id));
    if (error) { toast.error(error.message); return; }
    toast.success("Status updated");
    refetch();
  }, [refetch]);

  const deleteItem = useCallback(async (id: string) => {
    const { error } = await supabaseExternal
      .from("svyasa_news")
      .delete()
      .eq("id", Number(id));
    if (error) { toast.error(error.message); return; }
    toast.success("News article deleted");
    refetch();
  }, [refetch]);

  const fmtDate = (d: string) => {
    try { return new Date(d).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }); }
    catch { return d; }
  };

  if (loading) return <div className="space-y-4">{[1,2,3].map(i => <Skeleton key={i} className="h-14" />)}</div>;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-[#1e293b]">News Articles</h1>
        <Button asChild className="bg-[#1e3a5f] hover:bg-[#2d5a8e]"><Link to="/news-admin/news/new"><Plus className="w-4 h-4 mr-1" /> Add News</Link></Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Input placeholder="Search by title..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
        <Select value={campusFilter} onValueChange={(v) => { setCampusFilter(v); setPage(1); }}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Campuses</SelectItem>
            {CAMPUS_OPTIONS.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={categoryFilter} onValueChange={(v) => { setCategoryFilter(v); setPage(1); }}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            {NEWS_CATEGORIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(1); }}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Status</SelectItem>
            <SelectItem value="Published">Published</SelectItem>
            <SelectItem value="Draft">Draft</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 space-y-3">
          <Newspaper className="w-12 h-12 mx-auto text-[#64748b]/40" />
          <p className="text-[#64748b]">No news articles yet</p>
          <Button asChild variant="outline"><Link to="/news-admin/news/new">Add your first article</Link></Button>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12"></TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Campus</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-24">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paged.map((n) => (
                  <TableRow key={n.id}>
                    <TableCell>
                      {n.thumbnailUrl ? (
                        <img src={n.thumbnailUrl} alt="" className="w-10 h-10 rounded object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center"><Newspaper className="w-4 h-4 text-slate-400" /></div>
                      )}
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      <Tooltip>
                        <TooltipTrigger asChild><span className="truncate block font-medium">{n.title}</span></TooltipTrigger>
                        <TooltipContent>{n.title}</TooltipContent>
                      </Tooltip>
                    </TableCell>
                    <TableCell className="text-[#64748b] whitespace-nowrap">{fmtDate(n.date)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={n.campus === "GCC" ? "bg-blue-100 text-blue-800" : n.campus === "Prashanti" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"}>{n.campus}</Badge>
                    </TableCell>
                    <TableCell><Badge variant="secondary" className="bg-slate-100 text-slate-700">{n.category}</Badge></TableCell>
                    <TableCell><Switch checked={n.isPublished} onCheckedChange={() => togglePublish(n)} /></TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button asChild variant="ghost" size="icon"><Link to={`/news-admin/news/${n.id}/edit`}><Pencil className="w-4 h-4" /></Link></Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild><Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700"><Trash2 className="w-4 h-4" /></Button></AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete "{n.title}"?</AlertDialogTitle>
                              <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => deleteItem(n.id)} className="bg-red-600 hover:bg-red-700">Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#64748b]">{filtered.length} item{filtered.length !== 1 ? "s" : ""}</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous</Button>
              <span className="text-sm text-[#64748b]">Page {page} of {totalPages}</span>
              <Button variant="outline" size="sm" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>Next</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
