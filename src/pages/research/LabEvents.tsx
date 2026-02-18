import { motion, useInView, Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import {
  ChevronDown,
  FlaskConical,
  BookOpen,
  Globe,
  Users,
  Star,
  Calendar,
  Download,
  Microscope,
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
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Data ── */
const eventCategories = [
  {
    icon: Microscope,
    title: "Workshops & Training",
    description:
      "Hands-on training sessions on research methodologies, lab equipment, and yoga-based intervention protocols.",
    accent: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    icon: BookOpen,
    title: "Seminars & Guest Lectures",
    description:
      "Talks by national and international experts on yoga research, integrative medicine, and allied sciences.",
    accent: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600",
    iconBg: "bg-teal-100",
  },
  {
    icon: FlaskConical,
    title: "Research Symposiums",
    description:
      "Annual research presentations showcasing ongoing and completed projects from Anvesana labs.",
    accent: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
  {
    icon: Globe,
    title: "International Collaborations",
    description:
      "Events with partner institutions from 17+ countries fostering cross-border research initiatives.",
    accent: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100",
  },
  {
    icon: Users,
    title: "Student Research Meets",
    description:
      "Platforms for PhD and postgraduate students to present their research findings and receive peer feedback.",
    accent: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    icon: Star,
    title: "World Yoga Day & Special Events",
    description:
      "Celebrations and special programs organized on occasions like International Day of Yoga and university milestones.",
    accent: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
  },
];

/* ── Page ── */
export default function LabEvents() {
  const introRef = useRef<HTMLDivElement>(null);
  const archiveRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: "-60px" });
  const archiveInView = useInView(archiveRef, { once: true, margin: "-60px" });
  const categoriesInView = useInView(categoriesRef, { once: true, margin: "-60px" });

  return (
    <Layout>
      <ResearchSubNav />
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
          <span className="text-white/40">Lab Events</span>
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
            Lab Events
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

        {/* ── Section 1: Introduction ── */}
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Knowledge Exchange
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            Events at Anvesana Research Labs
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div variants={fadeUp}>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base">
                Anvesana Research Labs regularly organizes and hosts scientific events, workshops,
                seminars, and collaborative sessions that bring together researchers, students, and
                experts from around the world. These events foster knowledge exchange, promote
                interdisciplinary collaboration, and advance the scientific understanding of yoga and its
                applications.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Calendar, label: "Annual Events", value: "20+" },
                  { icon: Globe, label: "Countries", value: "17+" },
                  { icon: Users, label: "Participants", value: "500+" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-[hsl(var(--cream))] rounded-xl border border-border p-4 text-center"
                  >
                    <Icon className="text-[hsl(var(--teal))] mx-auto mb-2" size={20} />
                    <p className="text-[hsl(var(--navy))] font-bold font-['DM_Mono',monospace] text-lg">{value}</p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Visual placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden border border-border shadow-lg aspect-[4/3] flex items-center justify-center"
              style={{ background: "linear-gradient(160deg, hsl(210 60% 12%), hsl(180 45% 22%))" }}
            >
              <div className="text-center px-8">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5 border border-white/20">
                  <Calendar className="text-[hsl(var(--saffron))]" size={36} />
                </div>
                <p className="text-white font-['Playfair_Display',serif] text-xl font-bold mb-2">
                  Research Events Gallery
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Workshops · Seminars · Symposiums · Collaborations
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 2: Archive Download ── */}
        <motion.div
          ref={archiveRef}
          initial="hidden"
          animate={archiveInView ? "visible" : "hidden"}
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
                    Documentation
                  </span>
                </div>
                <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-white font-bold mb-3">
                  Lab Events Archive
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                  Browse through our collection of lab events including workshops, seminars, guest
                  lectures, international collaborations, and research symposiums conducted at Anvesana
                  Research Labs.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="/img/research/Lab-Events-new.zip"
                  download
                  className="inline-flex items-center gap-2.5 bg-[hsl(var(--saffron))] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[hsl(var(--saffron-dark))] transition-colors shadow-lg text-sm whitespace-nowrap"
                >
                  <Download size={18} />
                  Download Lab Events Documentation
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 3: Event Categories ── */}
        <motion.div
          ref={categoriesRef}
          initial="hidden"
          animate={categoriesInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--teal))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Event Types
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            What We Host
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eventCategories.map(({ icon: Icon, title, description, accent, iconColor, iconBg }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 12px 30px -8px rgba(0,0,0,0.1)" }}
                className={`rounded-xl border p-6 transition-all duration-200 ${accent}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconBg}`}>
                  <Icon className={iconColor} size={22} />
                </div>
                <h3 className="font-semibold text-[hsl(var(--navy))] text-base mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── CTA Footer Band ── */}
      <section
        className="py-16 text-center mt-8"
        style={{
          background:
            "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 60%, hsl(180 45% 25%) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-white font-bold mb-4"
          >
            Stay Connected with Research Events
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg mb-8">
            Follow our upcoming seminars, workshops, and international collaborations at Anvesana Research Labs.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/research/ongoing-projects"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors"
            >
              View Research Projects →
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
