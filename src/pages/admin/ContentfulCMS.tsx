import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  RefreshCw,
  Download,
  BookOpen,
  Users,
  Building2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  Globe,
} from "lucide-react";

interface ContentfulItem {
  sys: { id: string; createdAt: string; updatedAt: string };
  fields: Record<string, any>;
  _resolved?: { assets: Record<string, string>; entries: Record<string, any> };
}

const extractPlainText = (richText: any): string => {
  if (!richText) return "";
  if (typeof richText === "string") return richText;
  if (richText.content) {
    return richText.content
      .map((node: any) => {
        if (node.nodeType === "text") return node.value;
        if (node.content) return extractPlainText(node);
        return "";
      })
      .join(" ")
      .trim();
  }
  return "";
};

const contentTypes = [
  { id: "course", label: "Courses", icon: BookOpen, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { id: "faculty", label: "Faculty", icon: Users, color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { id: "department", label: "Departments", icon: Building2, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
];

const fetchContentful = async (contentType: string): Promise<{ items: ContentfulItem[]; total: number }> => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error("Not authenticated");

  const { data, error } = await supabase.functions.invoke("contentful-sync", {
    body: { action: "list", contentType },
  });

  if (error) throw new Error(error.message);
  return data;
};

const syncContentful = async (contentType: string) => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error("Not authenticated");

  const { data, error } = await supabase.functions.invoke("contentful-sync", {
    body: { action: "sync", contentType },
  });

  if (error) throw new Error(error.message);
  return data;
};

const ContentfulCMS = () => {
  const [activeType, setActiveType] = useState("course");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["contentful", activeType],
    queryFn: () => fetchContentful(activeType),
  });

  const syncMutation = useMutation({
    mutationFn: syncContentful,
    onSuccess: (result) => {
      toast({
        title: "Sync Complete",
        description: `Synced ${result.synced} of ${result.total} ${activeType} entries to database.`,
      });
      queryClient.invalidateQueries({ queryKey: ["contentful", activeType] });
    },
    onError: (err: Error) => {
      toast({ title: "Sync Failed", description: err.message, variant: "destructive" });
    },
  });

  const activeConfig = contentTypes.find((ct) => ct.id === activeType)!;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <Globe className="text-amber-400" size={24} />
            Contentful CMS
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Browse content from Contentful and sync to database
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => queryClient.invalidateQueries({ queryKey: ["contentful", activeType] })}
            className="border-white/10 text-slate-300 hover:text-white hover:bg-white/5"
          >
            <RefreshCw size={14} className="mr-2" />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={() => syncMutation.mutate(activeType)}
            disabled={syncMutation.isPending}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold"
          >
            {syncMutation.isPending ? (
              <Loader2 size={14} className="mr-2 animate-spin" />
            ) : (
              <Download size={14} className="mr-2" />
            )}
            Sync {activeConfig.label} to DB
          </Button>
        </div>
      </div>

      {/* Content Type Tabs */}
      <div className="flex gap-2 mb-6">
        {contentTypes.map((ct) => {
          const Icon = ct.icon;
          const isActive = ct.id === activeType;
          return (
            <button
              key={ct.id}
              onClick={() => setActiveType(ct.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                  : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon size={16} />
              {ct.label}
              {data && isActive && (
                <Badge variant="secondary" className="ml-1 bg-white/10 text-white/70 text-xs">
                  {data.total}
                </Badge>
              )}
            </button>
          );
        })}
      </div>

      {/* Sync Status */}
      {syncMutation.isSuccess && (
        <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2 text-emerald-400 text-sm">
          <CheckCircle2 size={16} />
          Last sync successful — {(syncMutation.data as any)?.synced} entries synced
        </div>
      )}

      {/* Content */}
      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="animate-spin text-amber-400" size={32} />
        </div>
      ) : error ? (
        <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
          <AlertCircle className="mx-auto text-red-400 mb-2" size={24} />
          <p className="text-red-400 text-sm">{(error as Error).message}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {activeType === "course" && <CourseList items={data?.items || []} />}
          {activeType === "faculty" && <FacultyList items={data?.items || []} />}
          {activeType === "department" && <DepartmentList items={data?.items || []} />}
        </div>
      )}
    </div>
  );
};

const CourseList = ({ items }: { items: ContentfulItem[] }) => (
  <div className="grid gap-3">
    {items.map((item) => {
      const f = item.fields;
      const imageUrl = f.image?.sys?.id ? item._resolved?.assets[f.image.sys.id] : null;
      return (
        <div
          key={item.sys.id}
          className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
        >
          <div className="flex gap-4">
            {imageUrl && (
              <img src={imageUrl} alt={f.title} className="w-20 h-14 rounded-lg object-cover flex-shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-white font-semibold text-sm">{f.title}</h3>
                  <p className="text-slate-400 text-xs mt-0.5">/{f.slug}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">
                    {f.programLevel || "—"}
                  </Badge>
                  {f.admissionOpen && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
                      Admission Open
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-slate-500 text-xs mt-2 line-clamp-2">
                {extractPlainText(f.description)}
              </p>
              <div className="flex gap-4 mt-2 text-xs text-slate-500">
                {f.duration && <span>⏱ {f.duration}</span>}
                {f.mode && <span>📍 {f.mode}</span>}
                {f.fee && <span>💰 {f.fee}</span>}
              </div>
            </div>
          </div>
        </div>
      );
    })}
    {items.length === 0 && (
      <p className="text-slate-500 text-center py-10">No courses found in Contentful</p>
    )}
  </div>
);

const FacultyList = ({ items }: { items: ContentfulItem[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {items.map((item) => {
      const f = item.fields;
      const photoUrl = f.photo?.sys?.id ? item._resolved?.assets[f.photo.sys.id] : null;
      const deptName = f.department?.sys?.id
        ? item._resolved?.entries[f.department.sys.id]?.name
        : null;
      return (
        <div
          key={item.sys.id}
          className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
        >
          <div className="flex items-start gap-3">
            {photoUrl ? (
              <img src={photoUrl} alt={f.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0" />
            ) : (
              <div className="w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-sm flex-shrink-0">
                {f.name?.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="text-white font-semibold text-sm truncate">{f.name}</h3>
              <p className="text-amber-400/70 text-xs">{f.designation}</p>
              {deptName && <p className="text-slate-500 text-xs">{deptName}</p>}
              <p className="text-slate-500 text-xs mt-0.5">{f.qualification}</p>
            </div>
          </div>
          {f.researchInterests?.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {f.researchInterests.slice(0, 3).map((tag: string, i: number) => (
                <span key={i} className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex gap-2 mt-3">
            {f.email && (
              <a href={`mailto:${f.email}`} className="text-xs text-slate-400 hover:text-amber-400 transition-colors">
                ✉ Email
              </a>
            )}
            {f.googleScholarUrl && (
              <a href={f.googleScholarUrl} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1">
                <ExternalLink size={10} /> Scholar
              </a>
            )}
          </div>
        </div>
      );
    })}
    {items.length === 0 && (
      <p className="text-slate-500 text-center py-10 col-span-full">No faculty found in Contentful</p>
    )}
  </div>
);

const DepartmentList = ({ items }: { items: ContentfulItem[] }) => (
  <div className="grid sm:grid-cols-2 gap-3">
    {items.map((item) => {
      const f = item.fields;
      return (
        <div
          key={item.sys.id}
          className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
        >
          <div className="flex items-center gap-3">
            <Building2 size={20} className="text-purple-400 flex-shrink-0" />
            <div>
              <h3 className="text-white font-semibold text-sm">{f.name}</h3>
              <p className="text-slate-400 text-xs">/{f.slug}</p>
            </div>
          </div>
          {f.description && (
            <p className="text-slate-500 text-xs mt-3 line-clamp-2">{f.description}</p>
          )}
        </div>
      );
    })}
    {items.length === 0 && (
      <p className="text-slate-500 text-center py-10 col-span-full">No departments found in Contentful</p>
    )}
  </div>
);

export default ContentfulCMS;
