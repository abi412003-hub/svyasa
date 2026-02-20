import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, Download, X, ExternalLink, Eye } from "lucide-react";

// Edge Function proxy — serves PDFs with proper headers, bypassing Chrome CORS blocks
const PROXY = (storagePath: string) =>
  `https://spkbypslhjqvnvnujpwd.supabase.co/functions/v1/pdf-proxy?path=${encodeURIComponent(storagePath)}`;


// Map of year+month → proxied PDF URL
const storagePdfMap: Record<string, string> = {
  // 2025
  "2025-January":   PROXY("publications/yoga-sudha/2025/yoga_sudha_jan_2025.pdf"),
  "2025-February":  PROXY("publications/yoga-sudha/2025/yoga_sudha_feb_2025.pdf"),
  "2025-March":     PROXY("publications/yoga-sudha/2025/yoga_sudha_mar_2025.pdf"),
  "2025-April":     PROXY("publications/yoga-sudha/2025/yoga_sudha_apr_2025.pdf"),
  "2025-May":       PROXY("publications/yoga-sudha/2025/yoga_sudha_may_2025.pdf"),
  "2025-June":      PROXY("publications/yoga-sudha/2025/yoga_sudha_june_2025.pdf"),
  "2025-July":      PROXY("publications/yoga-sudha/2025/yoga_sudha_july_2025.pdf"),
  "2025-August":    PROXY("publications/yoga-sudha/2025/yoga_sudha_aug_2025.pdf"),
  "2025-September": PROXY("publications/yoga-sudha/2025/yoga_sudha_sept_2025.pdf"),
  "2025-October":   PROXY("publications/yoga-sudha/2025/yoga_sudha_oct_2025.pdf"),
  "2025-November":  PROXY("publications/yoga-sudha/2025/yoga_sudha_nov_2025.pdf"),
  // 2024
  "2024-April":     PROXY("publications/yoga-sudha/2024/yoga_sudha_apr_2024.pdf"),
  "2024-May":       PROXY("publications/yoga-sudha/2024/yoga_sudha_may_2024.pdf"),
  "2024-June":      PROXY("publications/yoga-sudha/2024/yoga_sudha_june_2024.pdf"),
  "2024-July":      PROXY("publications/yoga-sudha/2024/yoga_sudha_july_2024.pdf"),
  "2024-September": PROXY("publications/yoga-sudha/2024/yoga_sudha_sept_2024.pdf"),
  "2024-October":   PROXY("publications/yoga-sudha/2024/yoga_sudha_oct_2024.pdf"),
  "2024-November":  PROXY("publications/yoga-sudha/2024/yoga_sudha_nov_2024.pdf"),
  "2024-December":  PROXY("publications/yoga-sudha/2024/yoga_sudha_dec_2024.pdf"),
};

// Archive data structure
const archiveData: Record<string, string[]> = {
  "2025": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"],
  "2024": ["April", "May", "June", "July", "September", "October", "November", "December"],
  "2022": ["January", "February", "March", "April"],
  "2021": ["January", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "2020": ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
  "2019": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "2018": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  "2017": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

const years = Object.keys(archiveData).sort((a, b) => Number(b) - Number(a));

// Color palette for magazine covers
const monthColors: Record<string, string> = {
  January: "from-blue-500 to-blue-700",
  February: "from-pink-500 to-rose-600",
  March: "from-green-500 to-emerald-600",
  April: "from-yellow-500 to-amber-600",
  May: "from-purple-500 to-violet-600",
  June: "from-cyan-500 to-teal-600",
  July: "from-orange-500 to-red-600",
  August: "from-indigo-500 to-blue-600",
  September: "from-amber-500 to-orange-600",
  October: "from-rose-500 to-pink-600",
  November: "from-teal-500 to-cyan-600",
  December: "from-violet-500 to-purple-600",
};

// PDF Preview Modal
const PdfPreviewModal = ({
  pdfUrl,
  month,
  year,
  onClose,
}: {
  pdfUrl: string;
  month: string;
  year: string;
  onClose: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal panel */}
      <motion.div
        className="relative z-10 w-full max-w-4xl h-[90vh] bg-card rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", stiffness: 280, damping: 25 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-foreground text-base leading-tight">Yoga Sudha</h3>
              <p className="text-xs text-muted-foreground">{month} {year} Edition</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Open in new tab
            </a>
            <a
              href={pdfUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>
            <button
              onClick={onClose}
              className="ml-1 w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 bg-muted/30">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
            className="w-full h-full border-0"
            title={`Yoga Sudha ${month} ${year}`}
          />
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

// Edition card component
const EditionCard = ({
  month,
  year,
  index,
  onPreview,
}: {
  month: string;
  year: string;
  index: number;
  onPreview: (url: string) => void;
}) => {
  const pdfPath = storagePdfMap[`${year}-${month}`] ?? null;
  const fallbackPath = `/img/pdf/yoga-sudha-${month.toLowerCase()}-${year}.pdf`;
  const colorClass = monthColors[month] || "from-primary to-gold";
  const hasStorage = !!pdfPath;

  const handleClick = (e: React.MouseEvent) => {
    if (hasStorage) {
      e.preventDefault();
      onPreview(pdfPath!);
    }
  };

  return (
    <motion.div
      className="group block cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={handleClick}
    >
      <div className="relative bg-card rounded-xl overflow-hidden shadow-medium transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-large">
        {/* PDF badge */}
        <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-sm">
          <FileText className="w-4 h-4 text-primary" />
        </div>

        {/* Magazine cover thumbnail */}
        <div className={`aspect-[3/4] bg-gradient-to-br ${colorClass} p-4 flex flex-col items-center justify-between transition-transform duration-300 group-hover:scale-105 relative`}>
          {/* Header */}
          <div className="text-center">
            <div className="w-10 h-10 mx-auto mb-1 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-lg">ॐ</span>
            </div>
            <h4 className="text-white text-sm font-medium">Yoga Sudha</h4>
          </div>

          {/* Month display */}
          <div className="text-center">
            <p className="text-white/90 font-heading text-xl">{month}</p>
            <p className="text-white/70 text-sm">{year}</p>
          </div>

          {/* Footer */}
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
            <span className="text-white/60 text-xl">🪷</span>
          </div>

          {/* Preview overlay on hover (only for storage PDFs) */}
          {hasStorage && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-white">
                <Eye className="w-8 h-8" />
                <span className="text-xs font-medium">Preview</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom golden border animation */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gold"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />

        {/* Month label */}
        <div className="p-3 bg-card">
          <div className="flex items-center justify-between">
            <span className="text-foreground font-medium text-xs">{month} {year}</span>
            {hasStorage ? (
              <Eye className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
            ) : (
              <a
                href={fallbackPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-3.5 h-3.5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Year section component
const YearSection = ({
  year,
  months,
  isActive,
  onPreview,
}: {
  year: string;
  months: string[];
  isActive: boolean;
  onPreview: (url: string) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      id={`year-${year}`}
      className="mb-12"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Year heading */}
      <motion.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl font-heading text-secondary">{year}</span>
        <motion.div
          className="flex-1 h-px bg-gold/30"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ originX: 0 }}
        />
        <span className="text-sm text-muted-foreground">{months.length} edition{months.length > 1 ? 's' : ''}</span>
      </motion.div>

      {/* Editions grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <AnimatePresence mode="popLayout">
          {months.map((month, index) => (
            <EditionCard
              key={`${year}-${month}`}
              month={month}
              year={year}
              index={index}
              onPreview={onPreview}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const YogaSudhaArchives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [preview, setPreview] = useState<{ url: string; month: string; year: string } | null>(null);

  const scrollToYear = (year: string) => {
    setActiveYear(year);
    const element = document.getElementById(`year-${year}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePreview = (url: string) => {
    // Derive month/year from URL for the modal header
    const parts = url.split("/").pop()?.replace(".pdf", "").split("_") ?? [];
    // e.g. yoga_sudha_jan_2025 → ["yoga","sudha","jan","2025"]
    const monthAbbr = parts[2] ?? "";
    const year = parts[3] ?? "";
    const monthMap: Record<string, string> = {
      jan: "January", feb: "February", mar: "March", apr: "April",
      may: "May", june: "June", july: "July", aug: "August",
      sept: "September", oct: "October", nov: "November", dec: "December",
    };
    setPreview({ url, month: monthMap[monthAbbr] ?? monthAbbr, year });
  };

  return (
    <section id="archives" ref={ref} className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Low opacity Om/lotus watermark */}
      <div className="absolute right-0 top-1/4 w-96 h-96 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
          {[...Array(12)].map((_, i) => (
            <ellipse key={i} cx="100" cy="50" rx="15" ry="45" transform={`rotate(${i * 30} 100 100)`} />
          ))}
          <circle cx="100" cy="100" r="20" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-heading text-4xl md:text-5xl text-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {"Yoga Sudha Archives".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          {/* Gold underline */}
          <motion.div
            className="h-1 bg-gold mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          <motion.p
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Browse decades of yogic wisdom, research insights, and university milestones.
          </motion.p>
        </div>

        {/* Year filter pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {years.map((year, index) => (
            <motion.button
              key={year}
              onClick={() => scrollToYear(year)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeYear === year
                  ? "bg-primary text-primary-foreground scale-105 shadow-md"
                  : "bg-card text-secondary border border-secondary/20 hover:bg-primary/10 hover:border-primary/30"
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {year}
            </motion.button>
          ))}
        </motion.div>

        {/* Archive sections */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-primary to-gold/30" />

          {/* Year sections */}
          <div className="lg:pl-12">
            {years.map((year) => (
              <YearSection
                key={year}
                year={year}
                months={archiveData[year]}
                isActive={activeYear === year}
                onPreview={handlePreview}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      {preview && (
        <PdfPreviewModal
          pdfUrl={preview.url}
          month={preview.month}
          year={preview.year}
          onClose={() => setPreview(null)}
        />
      )}
    </section>
  );
};

export default YogaSudhaArchives;
