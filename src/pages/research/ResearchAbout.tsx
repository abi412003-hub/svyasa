import { motion, useInView, Variants, AnimatePresence } from "framer-motion";
import { ChevronDown, Activity, Heart, RefreshCw, Eye, Sparkles, FileText, Globe, Download, X, ExternalLink, AlertCircle } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";

/* ──────────────────────────────────────────────────────────
   Shared animation variants
────────────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeUpDelayed = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

const slideLeft = (delay: number): Variants => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ──────────────────────────────────────────────────────────
   SECTION 1: Hero
────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-[70vh] sm:h-[50vh] overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 50%, hsl(180 45% 25%) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      {/* Breadcrumb */}
      <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link to="/research" className="hover:text-white transition-colors">Research</Link>
        <span>/</span>
        <span className="text-white/40">About Research</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-['Playfair_Display',serif] text-5xl md:text-7xl text-white font-bold mb-4"
        >
          Anvesana
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[hsl(var(--saffron-light))] text-lg md:text-xl font-['Source_Sans_3',sans-serif] mb-6"
        >
          Centre for Advanced Research in Integrative Medicine
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto h-[2px] w-20 bg-[hsl(var(--saffron))]"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 2: Introduction
────────────────────────────────────────────────────────── */
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = [
    "Anvesana Research Facility was founded over three decades ago with a vision to revive the lost heritage and traditions of yoga through evidence-based research within a modern scientific framework. Its founders, Dr. H R Nagendra & Dr. R Nagaratna, esteemed experts in the field of yoga therapy, have made significant contributions to health promotion and the effective treatment of various pathologies through their extensive research.",
    "One of our earliest research endeavours focused on the scientific evaluation of yoga's benefits for asthma, a study that brought yoga into the limelight for its therapeutic potential. The laboratory remains dedicated to understanding the biology of yoga at multiple levels—ranging from its physical effects to more subtle dimensions of existence—utilizing the most advanced technology available.",
    "As a team, we are committed not only to studying the body's response to yoga but also to exploring the intricate dynamics that ensure homeostasis, contributing to an individual's holistic well-being. The ambitious goals of our research groups, supported by the university, have fostered a collaborative and cohesive environment, enabling extensive interdisciplinary studies.",
    "Our transition to this new facility, equipped with state-of-the-art laboratories, marks a major milestone in advancing yoga research. Anvesana Research Labs provides an unparalleled environment for both young and experienced researchers across diverse domains.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="flex-[3]">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                <div className="h-[3px] w-10 bg-[hsl(var(--saffron))]" />
                <span className="text-[hsl(var(--teal))] text-sm font-semibold uppercase tracking-widest">
                  About Anvesana
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="font-['Playfair_Display',serif] text-4xl text-[hsl(var(--navy))] font-bold mb-8 leading-snug"
              >
                The Nexus of Knowledge &amp; Innovation
              </motion.h2>

              <div className="space-y-5 text-[hsl(var(--muted-foreground))] text-[16px] leading-relaxed">
                {paragraphs.map((p, i) => (
                  <motion.p key={i} variants={fadeUpDelayed(i * 0.15)}>
                    {p}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Video */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideRight}
            className="flex-[2] w-full"
          >
            <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_-15px_hsla(210_52%_23%/0.2)] aspect-video">
              <iframe
                src="https://www.youtube.com/embed/L37B1fqvPXY"
                title="Anvesana Research"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-5 text-center">
              <Link
                to="/research/facility"
                className="inline-flex items-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors text-sm"
              >
                View Research Facilities →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 3: Homeostasis
────────────────────────────────────────────────────────── */
function HomeostasisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-[#F7F5F0] relative overflow-hidden">
      {/* DNA watermark */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] text-[hsl(var(--teal))] pointer-events-none"
        viewBox="0 0 400 600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M200 0 Q260 75 200 150 Q140 225 200 300 Q260 375 200 450 Q140 525 200 600" />
        <path d="M200 0 Q140 75 200 150 Q260 225 200 300 Q140 375 200 450 Q260 525 200 600" />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={i} x1="160" y1={75 * i + 37} x2="240" y2={75 * i + 37} />
        ))}
      </svg>

      <div className="relative max-w-3xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-sm font-semibold uppercase tracking-widest">
              Our Research Philosophy
            </span>
            <div className="h-[2px] w-8 bg-[hsl(var(--saffron))]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-4xl text-[hsl(var(--navy))] font-bold mb-2"
          >
            Homeostasis &amp; Beyond
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[hsl(var(--teal))] text-lg mb-8 font-medium">
            Cellular Insights into Yoga
          </motion.p>

          <motion.div variants={staggerContainer} className="space-y-5 text-[hsl(var(--muted-foreground))] text-[16px] leading-relaxed text-left">
            <motion.p variants={fadeUp}>
              We at our lab as a team seek not just to study the response of the body to Yoga, but
              to understand the complex dynamics that are existing in coordination ensuring
              homeostasis of the human to his completeness.
            </motion.p>
            <motion.p variants={fadeUp}>
              The ambitious goals of the entire team, with a stable support from the University has
              generated a cohesive environment amongst the research groups paving way for extensive
              interdisciplinary studies. The development of the laboratory to this state in part is
              also contributed by the alumni. Our move into this brand new facility with state of
              the art laboratories marks a stepping stone for our entry into a new dimension of Yoga
              research.
            </motion.p>
            <motion.p variants={fadeUp}>
              Anvesana provides an unparalleled environment for young and established researchers
              from various domains. We along with your support are inspired to contribute to yoga
              and making it as a socially relevant science.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 4: Stats Counter
────────────────────────────────────────────────────────── */
interface StatCardProps {
  target: number;
  suffix: string;
  label: string;
  delay: number;
  started: boolean;
}

function StatCard({ target, suffix, label, delay, started }: StatCardProps) {
  const count = useCountUp(target, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center px-4 md:px-8 py-6"
    >
      <div className="font-['DM_Mono',monospace] text-5xl md:text-6xl font-bold text-[hsl(var(--saffron))] mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/75 text-[15px] font-['Source_Sans_3',sans-serif]">{label}</div>
    </motion.div>
  );
}

function StatsSection() {
  const [ref, visible] = useScrollReveal(0.3);

  const stats = [
    { target: 862, suffix: "+", label: "Research Publications" },
    { target: 30, suffix: "+", label: "Years of Research" },
    { target: 5, suffix: "", label: "Advanced Laboratories" },
    { target: 34, suffix: "+", label: "Global Collaborations" },
  ];

  return (
    <section
      className="py-16"
      style={{ background: "hsl(var(--navy))" }}
    >
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.2} started={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 5: Research Areas
────────────────────────────────────────────────────────── */
const researchAreas = [
  {
    icon: Activity,
    title: "Physiological Effects of Yoga Practices",
    desc: "Understanding how yoga modulates autonomic, metabolic, and cardiovascular systems at the physiological level.",
  },
  {
    icon: Heart,
    title: "Therapeutic Applications of Yoga",
    desc: "Evidence-based yoga interventions for diabetes, cancer, cardiovascular disease, and other chronic conditions.",
  },
  {
    icon: RefreshCw,
    title: "Yoga for Rehabilitation",
    desc: "Restoring function and quality of life through targeted yoga-based rehabilitation programs.",
  },
  {
    icon: Eye,
    title: "Yoga for Perception & Performance",
    desc: "Enhancing cognitive abilities, attention, memory, and overall mental performance through yoga.",
  },
  {
    icon: Sparkles,
    title: "Higher States of Consciousness",
    desc: "Exploring meditation, subtle energy, and advanced states of awareness through scientific investigation.",
  },
];

function ResearchAreasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} className="text-[hsl(var(--teal))] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Focus
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-['Playfair_Display',serif] text-4xl text-[hsl(var(--navy))] font-bold mb-3">
            Research Areas
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] text-lg">
            Exploring Yoga's Impact Across Five Dimensions
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              variants={fadeUpDelayed(i * 0.1)}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -10px hsla(210, 52%, 23%, 0.15)" }}
              className="group bg-white border border-border rounded-xl p-7 cursor-pointer transition-all duration-300 hover:border-[hsl(var(--saffron))]"
            >
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--teal))] flex items-center justify-center mb-5">
                <area.icon className="text-white" size={22} />
              </div>
              <h3 className="text-[hsl(var(--navy))] font-bold text-[17px] mb-3 leading-snug">
                {area.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{area.desc}</p>
              <div className="mt-5 h-[3px] w-0 group-hover:w-full bg-[hsl(var(--saffron))] transition-all duration-300 rounded" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   PDF Preview Hook & Modal
────────────────────────────────────────────────────────── */
interface ResearchDoc {
  title: string;
  pdfPath: string;
}

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
      .then((res) => { if (!res.ok) throw new Error("fetch failed"); return res.blob(); })
      .then((blob) => { if (!cancelled) { const u = URL.createObjectURL(blob); revokeUrl = u; setBlobUrl(u); } })
      .catch(() => { if (!cancelled) setError(true); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; if (revokeUrl) URL.revokeObjectURL(revokeUrl); };
  }, [pdfPath]);

  return { blobUrl, loading, error };
}

function ResearchPDFModal({ doc, onClose }: { doc: ResearchDoc | null; onClose: () => void }) {
  const { blobUrl, loading, error } = usePdfBlobUrl(doc?.pdfPath ?? null);
  if (!doc) return null;

  return (
    <AnimatePresence>
      <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div key="modal" initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-[hsl(var(--teal))]/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-[hsl(var(--teal))]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Document Preview</p>
              <h3 className="font-semibold text-[hsl(var(--navy))] truncate">{doc.title}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
            <a href={doc.pdfPath} download className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[hsl(var(--teal))] text-white hover:opacity-90 transition-colors">
              <Download className="w-4 h-4" /><span className="hidden sm:inline">Download</span>
            </a>
            <a href={doc.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-muted text-foreground hover:bg-muted/80 transition-colors" title="Open in new tab">
              <ExternalLink className="w-4 h-4" />
            </a>
            <button onClick={onClose} className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-destructive/10 hover:text-destructive transition-colors" aria-label="Close preview">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="relative flex-1 bg-muted/50">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-10 h-10 border-4 border-[hsl(var(--teal))]/20 border-t-[hsl(var(--teal))] rounded-full" />
                <p className="text-sm text-muted-foreground">Loading document…</p>
              </div>
            </div>
          )}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8 max-w-sm">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4"><AlertCircle className="w-8 h-8 text-destructive" /></div>
                <h4 className="font-semibold text-[hsl(var(--navy))] mb-2">Preview unavailable</h4>
                <p className="text-sm text-muted-foreground mb-6">Your browser couldn't load this PDF inline.</p>
                <div className="flex gap-3 justify-center">
                  <a href={doc.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[hsl(var(--teal))] text-white hover:opacity-90"><ExternalLink className="w-4 h-4" />Open in new tab</a>
                  <a href={doc.pdfPath} download className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[hsl(var(--teal))] text-[hsl(var(--teal))]"><Download className="w-4 h-4" />Download</a>
                </div>
              </div>
            </div>
          ) : blobUrl ? (
            <object data={`${blobUrl}#toolbar=1&navpanes=1&scrollbar=1`} type="application/pdf" className="w-full h-full border-0" title={doc.title}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 max-w-sm">
                  <h4 className="font-semibold text-[hsl(var(--navy))] mb-2">PDF preview not supported</h4>
                  <div className="flex gap-3 justify-center">
                    <a href={doc.pdfPath} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[hsl(var(--teal))] text-white"><ExternalLink className="w-4 h-4" />Open in new tab</a>
                    <a href={doc.pdfPath} download className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-[hsl(var(--teal))] text-[hsl(var(--teal))]"><Download className="w-4 h-4" />Download</a>
                  </div>
                </div>
              </div>
            </object>
          ) : null}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 6: Archives / Resources
────────────────────────────────────────────────────────── */
const BASE_RESEARCH = "/documents/research";

const documents: ResearchDoc[] = [
  { title: "Arogyadhama Circular", pdfPath: `${BASE_RESEARCH}/Arogyadhama-Circular.pdf` },
  { title: "Patent", pdfPath: `${BASE_RESEARCH}/Patent.pdf` },
  { title: "Functional MOUs", pdfPath: "" },
  { title: "IPR Policy", pdfPath: "" },
  { title: "Seed Money Details", pdfPath: `${BASE_RESEARCH}/Seed-Money-Details.pdf` },
  { title: "Collaborative Activities", pdfPath: "" },
  { title: "List of Training and Capacity Building Programmes", pdfPath: "" },
];

function ArchivesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [previewDoc, setPreviewDoc] = useState<ResearchDoc | null>(null);

  const handlePreview = useCallback((doc: ResearchDoc) => setPreviewDoc(doc), []);
  const handleClose = useCallback(() => setPreviewDoc(null), []);

  return (
    <>
      <section className="py-20 bg-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <p className="text-[hsl(var(--teal))] text-sm font-semibold uppercase tracking-widest mb-3">
                Downloads
              </p>
              <h2 className="font-['Playfair_Display',serif] text-4xl text-[hsl(var(--navy))] font-bold">
                Research Archives &amp; Resources
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <motion.div
                  key={doc.title}
                  variants={slideLeft(i * 0.08)}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 bg-white border border-border rounded-lg p-5 transition-all duration-200 hover:border-l-4 hover:border-l-[hsl(var(--teal))] hover:shadow-md"
                >
                  <FileText className="text-[hsl(var(--teal))] shrink-0" size={22} />
                  <span className="flex-1 text-[hsl(var(--navy))] font-semibold text-[15px]">{doc.title}</span>
                  {doc.pdfPath ? (
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handlePreview(doc)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg text-[hsl(var(--teal))] bg-[hsl(var(--teal))]/5 hover:bg-[hsl(var(--teal))] hover:text-white transition-all duration-200"
                      >
                        <Eye size={15} />
                        Preview
                      </button>
                      <a
                        href={doc.pdfPath}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:border-[hsl(var(--teal))] hover:text-[hsl(var(--teal))] transition-all duration-200"
                      >
                        <Download size={15} />
                      </a>
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-lg">Coming Soon</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <ResearchPDFModal doc={previewDoc} onClose={handleClose} />
    </>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 7: International Collaborations (Marquee)
────────────────────────────────────────────────────────── */
const internationalPartners = [
  "Shanghai University",
  "Taksha University",
  "Yunnan University",
  "Gyeongsangnam-Miryang University",
  "Health Ricerca E Sviluppo Bologna",
  "Harbin University",
  "Texas MD Anderson Cancer Center",
  "Sarva Yoga",
  "TOYO University",
  "Southern Cross University",
  "IYSF",
  "Silicon Andhra University",
  "Vietnam Yoga",
  "College of Ayurveda Yoga Therapy",
  "Choonhae University",
  "ALL HERE SA - Switzerland",
  "Nav Bharat International Bahrain",
];

function MarqueeTrack({ partners, reverse = false }: { partners: string[]; reverse?: boolean }) {
  const animClass = reverse
    ? "animate-[marquee-reverse_30s_linear_infinite]"
    : "animate-[marquee_25s_linear_infinite]";

  return (
    <div className="overflow-hidden py-2 group">
      <div className={`flex gap-4 w-max ${animClass} group-hover:[animation-play-state:paused]`}>
        {[...partners, ...partners].map((p, i) => (
          <div
            key={`${p}-${i}`}
            className="flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 text-[hsl(var(--navy))] text-sm font-medium whitespace-nowrap hover:border-[hsl(var(--teal))] transition-colors"
          >
            <Globe size={13} className="text-[hsl(var(--teal))]" />
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}

function InternationalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mid = Math.ceil(internationalPartners.length / 2);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-[hsl(var(--teal))] text-sm font-semibold uppercase tracking-widest mb-3">
            Worldwide Network
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-['Playfair_Display',serif] text-4xl text-[hsl(var(--navy))] font-bold mb-2">
            Global Research Network
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] text-lg">
            International Collaborations
          </motion.p>
        </motion.div>
      </div>

      <MarqueeTrack partners={internationalPartners.slice(0, mid)} />
      <MarqueeTrack partners={internationalPartners.slice(mid)} reverse />
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 8: National Collaborations
────────────────────────────────────────────────────────── */
const nationalPartners = [
  { name: "Department of AYUSH, GOK", location: "Karnataka" },
  { name: "Indian Institute of Science (IISc)", location: "Bangalore" },
  { name: "National Institute of Advanced Studies (NIAS)", location: "Bangalore" },
  { name: "AIIMS", location: "New Delhi" },
  { name: "NIMHANS", location: "Bangalore" },
  { name: "Narayana Hrudayalaya", location: "Bangalore" },
  { name: "AIIMS", location: "Bhopal" },
  { name: "Sri Devaraj Urs Academy (SDUAHER)", location: "Kolar" },
  { name: "Symbiosis International University", location: "Pune" },
  { name: "Dayananda Sagar University", location: "Bangalore" },
  { name: "PES University", location: "Bangalore" },
  { name: "Ramaiah Institute of Technology", location: "Bangalore" },
  { name: "MAHER", location: "Chennai" },
  { name: "Father Muller Research Center", location: "Bangalore" },
  { name: "BNM Institute of Technology", location: "Bangalore" },
  { name: "CDSIMER", location: "Hubli" },
  { name: "Narayana Nethralaya Foundation", location: "Bangalore" },
];

function NationalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-[hsl(var(--teal))] text-sm font-semibold uppercase tracking-widest mb-3">
              India Network
            </p>
            <h2 className="font-['Playfair_Display',serif] text-4xl text-[hsl(var(--navy))] font-bold">
              National Research Partners
            </h2>
          </motion.div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {nationalPartners.map((p, i) => (
              <motion.div
                key={`${p.name}-${i}`}
                variants={fadeUpDelayed(i * 0.06)}
                whileHover={{ y: -4 }}
                className="bg-white border border-border rounded-lg p-5 cursor-default transition-all duration-200 hover:border-l-4 hover:border-l-[hsl(var(--teal))] hover:shadow-md"
              >
                <p className="text-[hsl(var(--navy))] font-bold text-sm leading-snug mb-1">{p.name}</p>
                <p className="text-[hsl(var(--muted-foreground))] text-xs">{p.location}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   SECTION 9: CTA
────────────────────────────────────────────────────────── */
function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-24 text-center"
      style={{
        background:
          "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 60%, hsl(180 45% 25%) 100%)",
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-3xl mx-auto px-6"
      >
        <motion.h2
          variants={fadeUp}
          className="font-['Playfair_Display',serif] text-4xl md:text-5xl text-white font-bold mb-5"
        >
          Join Our Research Mission
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-white/75 text-lg mb-10 font-['Source_Sans_3',sans-serif]"
        >
          Be a part of pioneering yoga research that's transforming healthcare worldwide.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/research/facility"
            className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors"
          >
            Explore Research Facilities →
          </Link>
          <Link
            to="/research/adopt-project"
            className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            Adopt a Research Project →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   PAGE EXPORT
────────────────────────────────────────────────────────── */
export default function ResearchAbout() {
  return (
    <Layout>
      <ResearchSubNav />
      <HeroSection />
      <IntroSection />
      <HomeostasisSection />
      <StatsSection />
      <ResearchAreasSection />
      <ArchivesSection />
      <InternationalSection />
      <NationalSection />
      <CTASection />
    </Layout>
  );
}
