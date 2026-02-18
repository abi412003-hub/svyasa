import { useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Upload, Copy, Trash2, FolderOpen, Folder, Image, Check, X,
  Loader2, ExternalLink, AlertTriangle, ChevronRight, ChevronDown,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadedImage {
  name: string;
  url: string;
  path: string;
  size: number;
  created_at: string;
}

interface FolderEntry {
  label: string;
  slug: string;
}

interface FolderGroup {
  label: string;
  prefix: string;
  subfolders: FolderEntry[];
}

// Full folder hierarchy
const FOLDER_GROUPS: FolderGroup[] = [
  {
    label: "City Campus",
    prefix: "city-campus",
    subfolders: [
      { label: "Allied Lab", slug: "allied-lab" },
      { label: "Campus", slug: "campus" },
      { label: "Classrooms", slug: "classrooms" },
      { label: "Codeverse", slug: "codeverse" },
      { label: "Computer Lab", slug: "computer-lab" },
      { label: "Deeksharambh 2025", slug: "deeksharambh-2025" },
      { label: "Ganesh Chaturthi", slug: "ganesh-chaturthi" },
      { label: "IBM Hackathon", slug: "ibm-hackathon" },
      { label: "Independence Day", slug: "independence-day" },
      { label: "Kannada Rajyotsava", slug: "kannada-rajyotsava" },
      { label: "Library", slug: "library" },
      { label: "Lung Cancer Day", slug: "lung-cancer-day" },
      { label: "Onam", slug: "onam" },
      { label: "Seminar Hall", slug: "seminar-hall" },
      { label: "World Occupational Therapy Day", slug: "world-occupational-therapy-day" },
      { label: "World Physiotherapy Day", slug: "world-physiotherapy-day" },
    ],
  },
  {
    label: "Events",
    prefix: "events",
    subfolders: [
      { label: "11th International Day of Yoga", slug: "11th-international-day-of-yoga" },
      { label: "21 Day Yoga Day Celebrations", slug: "21-day-yoga-day-celebrations" },
      { label: "AIIU", slug: "aiiu" },
      { label: "An Introduction to Research-Based Careers", slug: "an-introduction-to-research-based-careers" },
      { label: "Awareness of Blood Donation", slug: "awareness-of-blood-donation" },
      { label: "Double Burden of Over and Under Nutrition", slug: "double-burden-of-over-and-under-nutrition" },
      { label: "Green March Follow the Path to a Better Earth", slug: "green-march-follow-the-path-to-a-better-earth" },
      { label: "International Conference on Rethinking Business and Innovation", slug: "international-conference-on-rethinking-business-and-innovation" },
      { label: "Kalavilasa", slug: "kalavilasa" },
      { label: "Kannada Rajyotsava", slug: "kannada-rajyotsava" },
      { label: "Krida Vilasa", slug: "krida-vilasa" },
      { label: "Monthly Report January 2025", slug: "monthly-report-january-2025" },
      { label: "Monthly Report February 2025", slug: "monthly-report-february-2025" },
      { label: "Monthly Report March 2025", slug: "monthly-report-march-2025" },
      { label: "Monthly Report April 2025", slug: "monthly-report-april-2025" },
      { label: "Monthly Report May 2025", slug: "monthly-report-may-2025" },
      { label: "Participation in Astra 2.0", slug: "participation-in-astra-2-0" },
      { label: "Republic Day Prashanthi", slug: "republic-day-prashanthi" },
      { label: "World Down Syndrome Day Seminar", slug: "world-down-syndrome-day-seminar" },
      { label: "World Environment Day Competitions 2025", slug: "world-environment-day-competitions-2025" },
    ],
  },
  {
    label: "Mandatory Disclosure",
    prefix: "mandatory-disclosure",
    subfolders: [],
  },
  {
    label: "News",
    prefix: "news",
    subfolders: [
      { label: "Academic Calendar AY 2025-26", slug: "academic-calendar-ay-2025-26" },
      { label: "AHSCON Day 1", slug: "ahscon-day-1" },
      { label: "AHSCON Day 2", slug: "ahscon-day-2" },
      { label: "Anti Drug", slug: "anti-drug" },
      { label: "Deeksharambh", slug: "deeksharambh" },
      { label: "Digital Marketing Day 1", slug: "digital-marketing-day-1" },
      { label: "Digital Marketing Day 2", slug: "digital-marketing-day-2" },
      { label: "Essay and Story Writing Competition", slug: "essay-and-story-writing-competition" },
      { label: "Hackathon 2025", slug: "hackathon-2025" },
      { label: "Inaugural Event", slug: "inaugural-event" },
      { label: "Inauguration of Computer Society of India", slug: "inauguration-of-computer-society-of-india" },
      { label: "Karnataka Rajyotsava", slug: "karnataka-rajyotsava" },
      { label: "MBA Session", slug: "mba-session" },
      { label: "Old Photos Received", slug: "old-photos-received" },
      { label: "P3 and Admin Exteriors", slug: "p3-and-admin-exteriors" },
      { label: "P3 and Admin Interiors", slug: "p3-and-admin-interiors" },
      { label: "PhD Inauguration", slug: "phd-inauguration" },
      { label: "Republic Day Prashanthi", slug: "republic-day-prashanthi" },
      { label: "S-Vyasa Meet 2024", slug: "s-vyasa-meet-2024" },
      { label: "S-VYASA Prashanti Campus Presents Krida Vilasa", slug: "s-vyasa-prashanti-campus-presents-krida-vilasa" },
      { label: "Science Fair", slug: "science-fair" },
      { label: "SFA Championship", slug: "sfa-championship" },
      { label: "Sheraton Press Meet", slug: "sheraton-press-meet" },
      { label: "Sports Facilities", slug: "sports-facilities" },
      { label: "Students", slug: "students" },
      { label: "Teachers Day", slug: "teachers-day" },
      { label: "The Road Ahead 2.0 Book Release", slug: "the-road-ahead-2-0-book-release" },
      { label: "UG and PG", slug: "ug-and-pg" },
      { label: "Unlocking Innovation", slug: "unlocking-innovation" },
    ],
  },
  {
    label: "Prashanti",
    prefix: "prashanti",
    subfolders: [
      { label: "Annapurna Kitchen Inside", slug: "annapurna-kitchen-inside" },
      { label: "Cultural", slug: "cultural" },
      { label: "Electro Lab", slug: "electro-lab" },
      { label: "Exercise Lab", slug: "exercise-lab" },
      { label: "Prashanti Campus", slug: "prashanti-campus" },
      { label: "Research Lab", slug: "research-lab" },
      { label: "Sports", slug: "sports" },
    ],
  },
];

const BUCKET = "site-images";

const getPublicUrl = (path: string) => {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
};

export default function ImageManager() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, "uploading" | "done" | "error">>({});
  const [deletingAll, setDeletingAll] = useState(false);
  const [confirmDeleteAll, setConfirmDeleteAll] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const toggleGroup = (prefix: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      next.has(prefix) ? next.delete(prefix) : next.add(prefix);
      return next;
    });
  };

  const loadImages = useCallback(async (folderPath: string) => {
    setLoading(true);
    setImages([]);
    const { data, error } = await supabase.storage.from(BUCKET).list(folderPath, {
      limit: 200,
      sortBy: { column: "created_at", order: "desc" },
    });

    if (error) {
      toast({ title: "Error loading images", description: error.message, variant: "destructive" });
    } else {
      const imgs: UploadedImage[] = (data || [])
        .filter((f) => f.name && f.name !== ".emptyFolderPlaceholder")
        .map((f) => ({
          name: f.name,
          path: `${folderPath}/${f.name}`,
          url: getPublicUrl(`${folderPath}/${f.name}`),
          size: f.metadata?.size ?? 0,
          created_at: f.created_at ?? "",
        }));
      setImages(imgs);
    }
    setLoading(false);
  }, [toast]);

  const selectFolder = (path: string, label: string) => {
    setSelectedPath(path);
    setSelectedLabel(label);
    setConfirmDeleteAll(false);
    loadImages(path);
  };

  const uploadFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0 || !selectedPath) return;
    setUploading(true);
    const progress: Record<string, "uploading" | "done" | "error"> = {};

    for (const file of Array.from(files)) {
      if (!file.type.startsWith("image/")) {
        toast({ title: `Skipped ${file.name}`, description: "Only image files are supported.", variant: "destructive" });
        continue;
      }
      progress[file.name] = "uploading";
      setUploadProgress({ ...progress });

      const ext = file.name.split(".").pop();
      const uniqueName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const path = `${selectedPath}/${uniqueName}`;

      const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      });

      progress[file.name] = error ? "error" : "done";
      setUploadProgress({ ...progress });

      if (error) {
        toast({ title: `Failed: ${file.name}`, description: error.message, variant: "destructive" });
      }
    }

    toast({ title: "Upload complete!", description: `${Object.values(progress).filter((v) => v === "done").length} image(s) uploaded.` });
    setUploading(false);
    setUploadProgress({});
    loadImages(selectedPath);
  }, [selectedPath, loadImages, toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    uploadFiles(e.dataTransfer.files);
  }, [uploadFiles]);

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
    toast({ title: "URL copied!" });
  };

  const deleteImage = async (img: UploadedImage) => {
    const { error } = await supabase.storage.from(BUCKET).remove([img.path]);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      setImages((prev) => prev.filter((i) => i.path !== img.path));
      toast({ title: "Deleted", description: img.name });
    }
  };

  const deleteAllImages = async () => {
    if (images.length === 0) return;
    setDeletingAll(true);
    setConfirmDeleteAll(false);
    const paths = images.map((img) => img.path);
    const { error } = await supabase.storage.from(BUCKET).remove(paths);
    if (error) {
      toast({ title: "Delete all failed", description: error.message, variant: "destructive" });
    } else {
      setImages([]);
      toast({ title: "All images deleted", description: `${paths.length} image(s) removed.` });
    }
    setDeletingAll(false);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "—";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen bg-background p-4 lg:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Image className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Image Manager</h1>
            <p className="text-sm text-muted-foreground">Upload & manage site images stored in Cloud</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="bg-card rounded-2xl border border-border p-3 space-y-1 h-fit max-h-[80vh] overflow-y-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-2 flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5" /> Folders
            </p>
            {FOLDER_GROUPS.map((group) => {
              const isExpanded = expandedGroups.has(group.prefix);
              const isTopLevel = group.subfolders.length === 0;
              const isSelected = selectedPath === group.prefix;

              return (
                <div key={group.prefix}>
                  {/* Group header */}
                  <button
                    onClick={() => {
                      if (isTopLevel) {
                        selectFolder(group.prefix, group.label);
                      } else {
                        toggleGroup(group.prefix);
                      }
                    }}
                    className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {!isTopLevel && (
                      isExpanded
                        ? <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
                        : <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                    )}
                    <Folder className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{group.label}</span>
                  </button>

                  {/* Subfolders */}
                  {!isTopLevel && isExpanded && (
                    <div className="ml-4 mt-0.5 space-y-0.5 border-l border-border pl-2">
                      {group.subfolders.map((sub) => {
                        const fullPath = `${group.prefix}/${sub.slug}`;
                        const isSubSelected = selectedPath === fullPath;
                        return (
                          <button
                            key={sub.slug}
                            onClick={() => selectFolder(fullPath, `${group.label} › ${sub.label}`)}
                            className={`w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium transition-colors truncate ${
                              isSubSelected
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                            title={sub.label}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {!selectedPath ? (
              <div className="bg-card rounded-2xl border border-border p-16 text-center text-muted-foreground">
                <FolderOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="font-medium">Select a folder from the sidebar to get started</p>
                <p className="text-sm mt-1">Expand a category and click a subfolder to upload or view images</p>
              </div>
            ) : (
              <>
                {/* Upload Zone */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                    dragOver
                      ? "border-primary bg-primary/5 scale-[1.01]"
                      : "border-border hover:border-primary/50 hover:bg-muted/30"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => uploadFiles(e.target.files)}
                  />
                  {uploading ? (
                    <div className="space-y-3">
                      <Loader2 className="w-8 h-8 mx-auto text-primary animate-spin" />
                      <p className="text-sm font-medium text-foreground">Uploading…</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {Object.entries(uploadProgress).map(([name, status]) => (
                          <span
                            key={name}
                            className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                              status === "done"
                                ? "bg-green-100 text-green-700"
                                : status === "error"
                                ? "bg-destructive/10 text-destructive"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {status === "done" ? <Check className="w-3 h-3" /> : status === "error" ? <X className="w-3 h-3" /> : <Loader2 className="w-3 h-3 animate-spin" />}
                            {name.length > 24 ? name.slice(0, 24) + "…" : name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                      <p className="font-medium text-foreground">Drop images here or click to browse</p>
                      <p className="text-sm text-muted-foreground">
                        Uploading to <span className="text-primary font-medium">{selectedPath}/</span> · JPG, PNG, WEBP, SVG · Max 50MB each
                      </p>
                    </div>
                  )}
                </div>

                {/* Image Grid */}
                <div className="bg-card rounded-2xl border border-border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="font-semibold text-foreground text-sm">{selectedLabel}</h2>
                      <p className="text-xs text-muted-foreground">{images.length} image{images.length !== 1 ? "s" : ""}</p>
                    </div>
                    {images.length > 0 && !loading && (
                      confirmDeleteAll ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-destructive font-medium flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" /> Delete all {images.length} images?
                          </span>
                          <button
                            onClick={deleteAllImages}
                            disabled={deletingAll}
                            className="px-3 py-1 text-xs bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                          >
                            {deletingAll ? <Loader2 className="w-3 h-3 animate-spin" /> : "Yes, delete all"}
                          </button>
                          <button
                            onClick={() => setConfirmDeleteAll(false)}
                            className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-lg hover:bg-muted/70 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmDeleteAll(true)}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-destructive border border-destructive/30 rounded-lg hover:bg-destructive/10 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Delete All
                        </button>
                      )
                    )}
                  </div>

                  {loading ? (
                    <div className="flex items-center justify-center py-16">
                      <Loader2 className="w-6 h-6 text-primary animate-spin" />
                    </div>
                  ) : images.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                      <Image className="w-10 h-10 mx-auto mb-2 opacity-30" />
                      <p className="text-sm">No images in this folder yet</p>
                      <p className="text-xs mt-1">Drop images above to upload</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {images.map((img) => (
                        <div key={img.path} className="group relative bg-muted rounded-xl overflow-hidden aspect-square">
                          <img
                            src={img.url}
                            alt={img.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                            <div className="flex justify-end gap-1">
                              <a
                                href={img.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                                title="Open in new tab"
                              >
                                <ExternalLink className="w-3.5 h-3.5 text-white" />
                              </a>
                              <button
                                onClick={() => deleteImage(img)}
                                className="w-7 h-7 rounded-lg bg-destructive/80 hover:bg-destructive flex items-center justify-center transition-colors"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5 text-white" />
                              </button>
                            </div>
                            <button
                              onClick={() => copyUrl(img.url)}
                              className="w-full py-1.5 rounded-lg bg-white/20 hover:bg-white/40 text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                            >
                              {copiedUrl === img.url ? (
                                <><Check className="w-3 h-3" /> Copied!</>
                              ) : (
                                <><Copy className="w-3 h-3" /> Copy URL</>
                              )}
                            </button>
                          </div>
                          {/* Size badge */}
                          <div className="absolute top-1.5 left-1.5 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-md">
                            {formatSize(img.size)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Usage tip */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm text-foreground">
                  <p className="font-medium mb-1">💡 How to use uploaded images</p>
                  <p className="text-muted-foreground">
                    Hover over any image → click <strong>Copy URL</strong> → paste it as the <code className="bg-muted px-1 rounded text-xs">src</code> in any component. URLs are permanent and publicly accessible.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
