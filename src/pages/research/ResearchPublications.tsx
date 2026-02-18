import { motion, useInView, Variants } from "framer-motion";
import {
  ChevronDown,
  BookOpen,
  FlaskConical,
  Brain,
  Heart,
  Activity,
  Dna,
  Users,
  Wifi,
  Clock,
  Download,
  ExternalLink,
  Globe,
  TrendingUp,
} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

/* ── Variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Data ── */
const stats = [
  { value: "862+", label: "Total Publications", icon: BookOpen, color: "text-[hsl(var(--teal))]" },
  { value: "1985–2024", label: "Spanning 4 Decades", icon: Clock, color: "text-[hsl(var(--saffron))]" },
  { value: "100+", label: "Intl. Collaborations", icon: Globe, color: "text-[hsl(var(--navy))]" },
  { value: "PubMed / Scopus", label: "Indexed In", icon: TrendingUp, color: "text-[hsl(var(--teal))]" },
];

const researchAreas = [
  { icon: Activity, label: "Yoga for Diabetes (Type 2)", color: "bg-blue-50 border-blue-200 text-blue-800" },
  { icon: Heart, label: "Yoga & Cardiovascular Health", color: "bg-red-50 border-red-200 text-red-800" },
  { icon: Brain, label: "Yoga for Mental Health", color: "bg-purple-50 border-purple-200 text-purple-800" },
  { icon: FlaskConical, label: "Yoga & Cancer Therapy", color: "bg-teal-50 border-teal-200 text-teal-800" },
  { icon: Activity, label: "Neurophysiology of Yoga", color: "bg-indigo-50 border-indigo-200 text-indigo-800" },
  { icon: Dna, label: "Molecular Biology of Yoga", color: "bg-green-50 border-green-200 text-green-800" },
  { icon: Wifi, label: "Yoga for COVID-19", color: "bg-orange-50 border-orange-200 text-orange-800" },
  { icon: Brain, label: "Yoga & Cognitive Functions", color: "bg-violet-50 border-violet-200 text-violet-800" },
  { icon: Users, label: "Yoga for Healthy Aging", color: "bg-amber-50 border-amber-200 text-amber-800" },
];

const recentPublications = [
  {
    year: "2022",
    title: "DNA Damage Mitigation through Yoga in Type-2 Diabetes",
    description: "Studies demonstrating 16% reduction in DNA damage through yoga-based interventions. Mediation analysis showed oxidative DNA damage and repair together played a 97.5% mediatory role.",
  },
  {
    year: "2024",
    title: "Yoga-based Lifestyle Intervention for Healthy Ageing",
    description: "Composite biomarker studies in elderly Indian cohorts (yHAP trial) — exploring yoga's effectiveness on biological age phenotypes using ageing hallmarks.",
  },
  {
    year: "2023",
    title: "Transcranial Doppler Studies in Type 2 Diabetes Mellitus",
    description: "Cerebral blood flow analysis following yoga practices — measuring hemodynamic changes and their relationship to glycaemic control.",
  },
  {
    year: "2023",
    title: "Breathing-Focused Yoga Intervention on Respiratory Decline",
    description: "Effects of pranayama on respiratory function — 12-week yogic breathing in modulating cardiovascular risk factors in adults with metabolic syndrome.",
  },
  {
    year: "2020",
    title: "Yoga for COVID-19 Management",
    description: "Tele-yoga adjunct intervention for prevention and management of COVID-19; a non-randomized clinical trial demonstrating adjunct benefits of yoga in pandemic conditions.",
  },
  {
    year: "2023",
    title: "Composite Biomarker Age Predictors",
    description: "Effectiveness of yoga on composite biomarker age predictors (yBIOAGE) in elderly Indian cohorts — two-armed open label randomized controlled trial.",
  },
  {
    year: "2024",
    title: "Klotho Gene Associations and Cognitive Phenotypes",
    description: "Molecular links between Klotho, Kynurenic acid and cognition — exploring Klotho levels, KL-VS heterozygosity and their relationship to cognitive outcomes.",
  },
];

/* ── Page ── */
export default function ResearchPublications() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const recentRef = useRef<HTMLDivElement>(null);
  const ijoyRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  const overviewInView = useInView(overviewRef, { once: true, margin: "-60px" });
  const areasInView = useInView(areasRef, { once: true, margin: "-60px" });
  const recentInView = useInView(recentRef, { once: true, margin: "-60px" });
  const ijoyInView = useInView(ijoyRef, { once: true, margin: "-60px" });
  const downloadInView = useInView(downloadRef, { once: true, margin: "-60px" });

  return (
    <div>
      {/* ── Hero Banner ── */}
      <section
        className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[38vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 50%, hsl(180 45% 25%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/research" className="hover:text-white transition-colors">Research</Link>
          <span>/</span>
          <span className="text-white/40">Research Publications</span>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[hsl(var(--saffron-light))] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Anvesana Research
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Playfair_Display',serif] text-4xl md:text-6xl text-white font-bold mb-4"
          >
            Research Publications
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto h-[2px] w-16 bg-[hsl(var(--saffron))]"
          />
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      <div className="py-16 px-6 lg:px-10 max-w-7xl mx-auto space-y-20">

        {/* ── Section 1: Overview + Stats ── */}
        <motion.div
          ref={overviewRef}
          initial="hidden"
          animate={overviewInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Research Impact
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-6"
          >
            862+ Publications on Yoga Research
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base max-w-3xl mb-12">
            S-VYASA has been at the forefront of scientific yoga research since 1985, producing over 862
            peer-reviewed publications in national and international journals. Our research spans nearly
            four decades and covers a wide spectrum of disciplines — from molecular biology and
            neuroscience to psychology and clinical therapy — all centered on understanding and validating
            the multidimensional benefits of yoga.
          </motion.p>

          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="bg-white rounded-xl border border-border p-6 shadow-sm flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--cream))] flex items-center justify-center">
                  <s.icon className={s.color} size={20} />
                </div>
                <div>
                  <p className={`text-xl font-bold font-['DM_Mono',monospace] ${s.color} leading-tight`}>
                    {s.value}
                  </p>
                  <p className="text-[hsl(var(--muted-foreground))] text-xs mt-0.5">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 2: Research Areas ── */}
        <motion.div
          ref={areasRef}
          initial="hidden"
          animate={areasInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--teal))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Domains
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            Key Publication Areas
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map(({ icon: Icon, label, color }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border ${color} transition-transform duration-200 hover:-translate-y-1`}
              >
                <div className="w-9 h-9 rounded-lg bg-white/60 flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-semibold leading-snug">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 3: Recent Publications ── */}
        <motion.div
          ref={recentRef}
          initial="hidden"
          animate={recentInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              2020–2024
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            Recent Highlights
          </motion.h2>

          <div className="space-y-4">
            {recentPublications.map((pub) => (
              <motion.div
                key={pub.title}
                variants={fadeUp}
                className="bg-white border border-border rounded-xl p-5 flex gap-5 items-start hover:border-[hsl(var(--teal))]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="shrink-0">
                  <span className="inline-flex items-center justify-center bg-[hsl(var(--navy))] text-white text-xs font-bold font-['DM_Mono',monospace] px-3 py-1.5 rounded-lg">
                    {pub.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[hsl(var(--navy))] text-base leading-snug mb-1.5">
                    {pub.title}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                    {pub.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 4: IJOY ── */}
        <motion.div
          ref={ijoyRef}
          initial="hidden"
          animate={ijoyInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Official Journal
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            International Journal of Yoga (IJOY)
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Description */}
            <motion.div variants={fadeUp} className="lg:col-span-3 space-y-5">
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base">
                IJOY is the official peer-reviewed journal of S-VYASA, edited by{" "}
                <strong className="text-[hsl(var(--navy))]">Dr. Manjunath N K</strong> (Vice-Chancellor).
                The journal publishes original research, review articles, and clinical studies on yoga and
                related disciplines.
              </p>
              <a
                href="https://www.ijoy.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[hsl(var(--teal))] font-semibold text-sm hover:underline"
              >
                <ExternalLink size={15} />
                Visit ijoy.org.in
              </a>
            </motion.div>

            {/* Info card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <div
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: "linear-gradient(135deg, hsl(210 60% 12%), hsl(210 52% 23%))" }}
              >
                <BookOpen className="text-[hsl(var(--saffron))]" size={22} />
                <h3 className="text-white font-semibold text-sm">Journal Details</h3>
              </div>
              <div className="bg-white divide-y divide-border">
                {[
                  { label: "Impact Factor", value: "1.1" },
                  { label: "Indexed In", value: "PubMed, Scopus" },
                  { label: "Editor", value: "Dr. Manjunath N K" },
                  { label: "Published Since", value: "2008" },
                  { label: "Frequency", value: "Biannual" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-6 py-3">
                    <span className="text-xs text-[hsl(var(--muted-foreground))]">{label}</span>
                    <span className="text-xs font-semibold text-[hsl(var(--navy))]">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 5: Download ── */}
        <motion.div
          ref={downloadRef}
          initial="hidden"
          animate={downloadInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
            style={{ background: "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(180 45% 22%) 100%)" }}
          >
            <div className="px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
                  <span className="text-[hsl(var(--saffron-light))] text-xs font-semibold uppercase tracking-widest">
                    Full Database
                  </span>
                </div>
                <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-white font-bold mb-3">
                  Complete Publication Database
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                  Access the comprehensive list of all 862+ research publications on yoga from S-VYASA
                  (1985–2023).
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://svyasa.edu.in/wp-content/uploads/2024/04/LIST-OF-RESEARCH-PUBLICATIONS-ON-YOGA-2023.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[hsl(var(--saffron))] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[hsl(var(--saffron-dark))] transition-colors shadow-lg text-sm whitespace-nowrap"
                >
                  <Download size={18} />
                  Download Publication List (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
