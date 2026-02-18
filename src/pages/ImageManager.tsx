import { useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Upload, Copy, Trash2, FolderOpen, Image, Check, X, Loader2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UploadedImage {
  name: string;
  url: string;
  path: string;
  size: number;
  created_at: string;
}

const FOLDERS = ["gallery", "campus", "news-events", "about", "heroes", "misc"];
const BUCKET = "site-images";

const getPublicUrl = (path: string) => {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data.publicUrl;
};

export default function ImageManager() {
  const [folder, setFolder] = useState("misc");
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<Record<string, "uploading" | "done" | "error">>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const loadImages = useCallback(async (folderName: string) => {
    setLoading(true);
    const { data, error } = await supabase.storage.from(BUCKET).list(folderName, {
      limit: 200,
      sortBy: { column: "created_at", order: "desc" },
    });

    if (error) {
      toast({ title: "Error loading images", description: error.message, variant: "destructive" });
      setImages([]);
    } else {
      const imgs: UploadedImage[] = (data || [])
        .filter((f) => f.name !== ".emptyFolderPlaceholder")
        .map((f) => ({
          name: f.name,
          path: `${folderName}/${f.name}`,
          url: getPublicUrl(`${folderName}/${f.name}`),
          size: f.metadata?.size ?? 0,
          created_at: f.created_at ?? "",
        }));
      setImages(imgs);
    }
    setLoading(false);
  }, [toast]);

  const handleFolderChange = (f: string) => {
    setFolder(f);
    loadImages(f);
  };

  const uploadFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;
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
      const path = `${folder}/${uniqueName}`;

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

    toast({ title: "Upload complete!", description: `${Object.values(progress).filter(v => v === "done").length} image(s) uploaded.` });
    setUploading(false);
    setUploadProgress({});
    loadImages(folder);
  }, [folder, loadImages, toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    uploadFiles(e.dataTransfer.files);
  }, [uploadFiles]);

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
    toast({ title: "URL copied!", description: "Paste it in your component as the image src." });
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

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "—";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="min-h-screen bg-background p-6">
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
          {/* Sidebar - Folders */}
          <div className="bg-card rounded-2xl border border-border p-4 space-y-2 h-fit">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
              <FolderOpen className="w-3.5 h-3.5" /> Folders
            </p>
            {FOLDERS.map((f) => (
              <button
                key={f}
                onClick={() => handleFolderChange(f)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  folder === f
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
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
                            ? "bg-red-100 text-red-700"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {status === "done" ? <Check className="w-3 h-3" /> : status === "error" ? <X className="w-3 h-3" /> : <Loader2 className="w-3 h-3 animate-spin" />}
                        {name.length > 20 ? name.slice(0, 20) + "…" : name}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-8 h-8 mx-auto text-muted-foreground" />
                  <p className="font-medium text-foreground">Drop images here or click to browse</p>
                  <p className="text-sm text-muted-foreground">
                    Uploading to <span className="text-primary font-medium">{folder}/</span> · JPG, PNG, WEBP, SVG · Max 50MB each
                  </p>
                </div>
              )}
            </div>

            {/* Image Grid */}
            <div className="bg-card rounded-2xl border border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-foreground">
                  {folder.charAt(0).toUpperCase() + folder.slice(1).replace("-", " ")}
                  <span className="ml-2 text-xs font-normal text-muted-foreground">({images.length} images)</span>
                </h2>
                {images.length === 0 && !loading && (
                  <p className="text-xs text-muted-foreground">Select a folder and upload images to see them here</p>
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
                            className="w-7 h-7 rounded-lg bg-red-500/80 hover:bg-red-600 flex items-center justify-center transition-colors"
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
              <p className="font-medium mb-1">💡 How to use uploaded images in your pages</p>
              <p className="text-muted-foreground">
                Hover over any image → click <strong>Copy URL</strong> → paste it as the <code className="bg-muted px-1 rounded text-xs">src</code> attribute in any <code className="bg-muted px-1 rounded text-xs">&lt;img&gt;</code> tag or component. The URL is permanent and publicly accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
