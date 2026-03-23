import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import { FileText, Download, Star, Award, Building2, Users, Eye, X, ExternalLink, AlertCircle } from "lucide-react";
import { disclosureCategories, MDDocument, MDCategory } from "./mandatoryDisclosureData";

const categoryIcons: Record<string, React.ElementType> = {
  certificate: Award,
  star: Star,
  building: Building2,
  people: Users,
};

function usePdfBlobUrl(pdfPath: string | null) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!pdfPath) return;

    let revokeUrl: string | null = null;
    let cancelled = false;

    setBlobUrl(null);
    setLoading(true);
    setError(false);

    fetch(pdfPath)
      .then((res) => {
        if (!res.ok) throw new Error("fetch failed");
        return res.blob();
      })
      .then((blob) => {
        if (cancelled) return;
        const nextUrl = URL.createObjectURL(blob);
        revokeUrl = nextUrl;
        setBlobUrl(nextUrl);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
      if (revokeUrl) URL.revokeObjectURL(revokeUrl);
    };
  }, [pdfPath]);

  return { blobUrl, loading, error };
}

interface PDFModalProps {
  doc: MDDocument | null;
  onClose: () => void;
}

const PDFModal = ({ doc, onClose }: PDFModalProps) => {
  const { blobUrl, loading, error } = usePdfBlobUrl(doc?.pdfPath ?? null);

  if (!doc) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b bg-gradient-to-r from-primary/5 to-transparent flex-shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Document Preview</p>
                <h3 className="font-semibold text-navy truncate">{doc.title}</h3>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0 ml-4">
              <a
                href={doc.pdfPath}
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <a
                href={doc.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-destructive/10 hover:text-destructive transition-colors"
                aria-label="Close preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative flex-1 bg-muted/50">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full"
                  />
                  <p className="text-sm text-muted-foreground">Loading document…</p>
                </div>
              </div>
            )}

            {error ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 max-w-sm">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h4 className="font-semibold text-navy mb-2">Preview unavailable</h4>
                  <p className="text-sm text-muted-foreground mb-6">
                    Your browser couldn't load this PDF inline. You can still open or download it directly.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href={doc.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in new tab
                    </a>
                    <a
                      href={doc.pdfPath}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ) : blobUrl ? (
              <iframe
                src={`${blobUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                className="w-full h-full border-0"
                title={doc.title}
              />
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

interface DocumentCardProps {
  doc: MDDocument;
  index: number;
  isInView: boolean;
  baseDelay: number;
  onPreview: (doc: MDDocument) => void;
}

const DocumentCard = ({ doc, index, isInView, baseDelay, onPreview }: DocumentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: baseDelay + index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative bg-white rounded-xl p-5 shadow-md border-l-4 transition-all duration-300 hover:shadow-xl ${
        doc.isFeatured ? "border-gold" : "border-primary"
      }`}
    >
      {doc.isFeatured && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-gold/10 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
      )}

      {doc.badge && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 bg-gold text-navy text-xs font-semibold rounded-full shadow-md">
          <Star className="w-3 h-3 fill-current" />
          {doc.badge}
        </div>
      )}

      {doc.isLatest && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
          Current
        </div>
      )}

      <div className="relative flex items-start gap-4">
        <motion.div
          initial={{ rotateY: 0 }}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.4 }}
          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
            doc.isFeatured ? "bg-gold/10 text-gold" : "bg-primary/10 text-primary"
          }`}
        >
          <FileText className="w-6 h-6" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-navy leading-snug mb-3 group-hover:text-primary transition-colors">
            {doc.title}
          </h3>

          {doc.pdfPath ? (
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => onPreview(doc)}
                className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  doc.isFeatured
                    ? "text-gold bg-gold/5 hover:bg-gold hover:text-white"
                    : "text-primary bg-primary/5 hover:bg-primary hover:text-white"
                }`}
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>

              <a
                href={doc.pdfPath}
                download
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground bg-muted cursor-not-allowed">
              <Download className="w-4 h-4" />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface CategorySectionProps {
  category: MDCategory;
  index: number;
  isInView: boolean;
  onPreview: (doc: MDDocument) => void;
}

const CategorySection = ({ category, index, isInView, onPreview }: CategorySectionProps) => {
  const Icon = categoryIcons[category.icon] || Award;
  const baseDelay = 0.3 + index * 0.2;

  return (
    <div className="mb-12 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: baseDelay }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="h-px flex-1 bg-border" />
        <h3 className="text-lg font-semibold text-navy flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: baseDelay + 0.1, type: "spring", bounce: 0.5 }}
            className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <Icon className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="w-2 h-2 bg-primary rounded-full" />
          {category.title}
        </h3>
        <div className="h-px flex-1 bg-border" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.documents.map((doc, i) => (
          <DocumentCard
            key={doc.id}
            doc={doc}
            index={i}
            isInView={isInView}
            baseDelay={baseDelay + 0.15}
            onPreview={onPreview}
          />
        ))}
      </div>
    </div>
  );
};

const MDDocuments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [previewDoc, setPreviewDoc] = useState<MDDocument | null>(null);

  const handlePreview = useCallback((doc: MDDocument) => {
    setPreviewDoc(doc);
  }, []);

  const handleClose = useCallback(() => {
    setPreviewDoc(null);
  }, []);

  return (
    <>
      <section ref={ref} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display text-navy mb-3">Disclosure Documents</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          </motion.div>

          {disclosureCategories.map((category, i) => (
            <CategorySection
              key={category.id}
              category={category}
              index={i}
              isInView={isInView}
              onPreview={handlePreview}
            />
          ))}
        </div>
      </section>

      <PDFModal doc={previewDoc} onClose={handleClose} />
    </>
  );
};

export default MDDocuments;
