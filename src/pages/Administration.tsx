import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Users, BookOpen, DollarSign, ShieldCheck, ChevronDown, ArrowUp, Info, Building2, GraduationCap, Quote, Star, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const featuredLeaders = [
  {
    name: "Dr. H. R. Nagendra",
    designation: "Chancellor",
    bio: "Padma Shri awardee and ex-NASA scientist who left a stellar career in the West to dedicate his life to Yoga research and education — leading S-VYASA's mission of integrating ancient yogic wisdom with modern science.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=600&fit=crop",
    quote: "Yoga is the science of the future.",
  },
  {
    name: "Dr. N. K. Manjunath",
    designation: "Vice Chancellor",
    bio: "Has delivered lectures on evidence-based Yoga therapy at Harvard Medical School, Monash University, Royal College of Medicine, and Shanghai University of Sports. Editor, International Journal of Yoga.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop",
    quote: "Bridging tradition with evidence-based science.",
  },
];

const gridLeaders = [
  { name: "Prof. M. K. Shridhar", designation: "Pro-Vice Chancellor", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Dr. H. R. Dayananda", designation: "Chief Finance Officer", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
  { name: "Dr. Natesh Babu", designation: "CODE Director", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
  { name: "Dr. Ramesh", designation: "Dean of Academics", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
  { name: "Prof. Narayan Behra", designation: "Dean of Physical Sciences", photo: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&h=400&fit=crop" },
  { name: "Prof. Jayaraman", designation: "Dean of Yoga & Spirituality", photo: "https://images.unsplash.com/photo-1548449112-96a38a643324?w=400&h=400&fit=crop" },
  { name: "Dr. Muralidhar Kanchi", designation: "Director, Yoga & Humanities", photo: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=400&h=400&fit=crop" },
];

const malePhotos = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1548449112-96a38a643324?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=200&h=200&fit=crop",
];
const femalePhotos = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop",
];

const personPhotoMap: Record<string, string> = {
  "Dr. H. R. Nagendra": malePhotos[0],
  "Dr. N. K. Manjunath": malePhotos[1],
  "Prof. M. K. Shridhar": malePhotos[2],
  "Dr. H. R. Dayananda": malePhotos[3],
  "Dr. Ramesh": malePhotos[4],
  "Shri. Rajendra Kumar": malePhotos[5],
  "Dr. Ananya Sharma": femalePhotos[0],
  "Prof. Suresh Rao": malePhotos[6],
  "Dr. Kavitha Murthy": femalePhotos[1],
  "Shri. Venkatesh Iyer": malePhotos[7],
  "Dr. Priya Nair": femalePhotos[2],
  "Shri. Arun Hegde": malePhotos[8],
  "Prof. Narayan Behra": malePhotos[0],
  "Prof. Jayaraman": malePhotos[1],
  "Dr. Muralidhar Kanchi": malePhotos[2],
  "Dr. Natesh Babu": malePhotos[3],
  "Dr. Srinivas Rao": malePhotos[5],
  "Dr. Lakshmi Devi": femalePhotos[3],
  "Dr. Raghav Menon": malePhotos[6],
  "Dr. Pooja Bhat": femalePhotos[4],
  "Prof. Arvind Kulkarni": malePhotos[7],
  "Dr. Meera Subramanian": femalePhotos[0],
  "Dr. Sanjay Patil": malePhotos[8],
  "CA Mohan Rao": malePhotos[4],
  "Shri. Deepak Shetty": malePhotos[5],
  "Shri. Sunil Sharma": malePhotos[6],
  "Shri. Prasad Hegde": malePhotos[7],
  "Ms. Anjali Desai": femalePhotos[2],
};

type CouncilRole = "Chairperson" | "Member Secretary" | "Coordinator" | "Member";
interface CouncilMember { name: string; designation: string; role: CouncilRole; }

const councils: { id: string; label: string; icon: React.ReactNode; description: string; members: CouncilMember[] }[] = [
  {
    id: "ec", label: "Executive Council", icon: <Users className="w-4 h-4" />,
    description: "The principal governing body of the university responsible for overall administration and policy.",
    members: [
      { name: "Dr. H. R. Nagendra", designation: "Chancellor", role: "Chairperson" },
      { name: "Dr. N. K. Manjunath", designation: "Vice Chancellor", role: "Member Secretary" },
      { name: "Prof. M. K. Shridhar", designation: "Pro-Vice Chancellor", role: "Member" },
      { name: "Dr. H. R. Dayananda", designation: "Chief Finance Officer", role: "Member" },
      { name: "Dr. Ramesh", designation: "Dean of Academics", role: "Member" },
      { name: "Shri. Rajendra Kumar", designation: "UGC Nominee", role: "Member" },
      { name: "Dr. Ananya Sharma", designation: "Government Nominee (MHRD)", role: "Member" },
      { name: "Prof. Suresh Rao", designation: "External Expert – Yoga Sciences", role: "Member" },
      { name: "Dr. Kavitha Murthy", designation: "External Expert – Education Policy", role: "Member" },
      { name: "Shri. Venkatesh Iyer", designation: "Industry Representative", role: "Member" },
      { name: "Dr. Priya Nair", designation: "Faculty Representative", role: "Member" },
      { name: "Shri. Arun Hegde", designation: "Community Representative", role: "Member" },
    ],
  },
  {
    id: "ac", label: "Academic Council", icon: <BookOpen className="w-4 h-4" />,
    description: "Oversees academic programs, curriculum design, research standards, and scholarly excellence.",
    members: [
      { name: "Dr. N. K. Manjunath", designation: "Vice Chancellor", role: "Chairperson" },
      { name: "Dr. Ramesh", designation: "Dean of Academics", role: "Member Secretary" },
      { name: "Prof. Narayan Behra", designation: "Dean of Physical Sciences", role: "Member" },
      { name: "Prof. Jayaraman", designation: "Dean of Yoga and Spirituality", role: "Member" },
      { name: "Dr. Muralidhar Kanchi", designation: "Director of Yoga and Humanities", role: "Member" },
      { name: "Dr. Natesh Babu", designation: "CODE Director", role: "Member" },
      { name: "Dr. Srinivas Rao", designation: "Professor, School of Yogic Sciences", role: "Member" },
      { name: "Dr. Lakshmi Devi", designation: "Professor, TSYNM", role: "Member" },
      { name: "Dr. Raghav Menon", designation: "Professor, VYASA Business School", role: "Member" },
      { name: "Dr. Pooja Bhat", designation: "Associate Professor, VASHI", role: "Member" },
      { name: "Prof. Arvind Kulkarni", designation: "External Expert – Curriculum Design", role: "Member" },
      { name: "Dr. Meera Subramanian", designation: "External Expert – Yoga Research", role: "Member" },
      { name: "Dr. Sanjay Patil", designation: "Research Scholar Representative", role: "Member" },
    ],
  },
  {
    id: "fc", label: "Finance Committee", icon: <DollarSign className="w-4 h-4" />,
    description: "Advises on financial planning, budget allocation, and fiscal governance of the university.",
    members: [
      { name: "Dr. H. R. Nagendra", designation: "Chancellor", role: "Chairperson" },
      { name: "Dr. N. K. Manjunath", designation: "Vice Chancellor", role: "Member" },
      { name: "Dr. H. R. Dayananda", designation: "Chief Finance Officer", role: "Member Secretary" },
      { name: "Prof. M. K. Shridhar", designation: "Pro-Vice Chancellor", role: "Member" },
      { name: "Shri. Rajendra Kumar", designation: "UGC Nominee", role: "Member" },
      { name: "CA Mohan Rao", designation: "Chartered Accountant (External)", role: "Member" },
      { name: "Shri. Deepak Shetty", designation: "Finance Expert – Industry", role: "Member" },
      { name: "Dr. Ramesh", designation: "Dean of Academics", role: "Member" },
    ],
  },
  {
    id: "iqac", label: "IQAC", icon: <ShieldCheck className="w-4 h-4" />,
    description: "Internal Quality Assurance Cell — ensures continuous improvement in academic and administrative quality.",
    members: [
      { name: "Dr. N. K. Manjunath", designation: "Vice Chancellor", role: "Chairperson" },
      { name: "Dr. Ramesh", designation: "Dean of Academics", role: "Coordinator" },
      { name: "Prof. M. K. Shridhar", designation: "Pro-Vice Chancellor", role: "Member" },
      { name: "Dr. Natesh Babu", designation: "CODE Director", role: "Member" },
      { name: "Prof. Narayan Behra", designation: "Dean of Physical Sciences", role: "Member" },
      { name: "Dr. Srinivas Rao", designation: "Professor, School of Yogic Sciences", role: "Member" },
      { name: "Dr. Lakshmi Devi", designation: "Professor, TSYNM", role: "Member" },
      { name: "Shri. Sunil Sharma", designation: "Administrative Officer", role: "Member" },
      { name: "Dr. Kavitha Murthy", designation: "External Expert – Quality Assurance", role: "Member" },
      { name: "Shri. Prasad Hegde", designation: "Alumni Representative", role: "Member" },
      { name: "Ms. Anjali Desai", designation: "Student Representative", role: "Member" },
      { name: "Shri. Venkatesh Iyer", designation: "Industry Representative", role: "Member" },
    ],
  },
];

const divisions = [
  {
    name: "Division of Yoga & Spirituality",
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    bg: "from-orange-50 to-amber-50",
    iconColor: "text-orange-500",
    schools: ["School of Yogic Sciences", "VMAC-VTR: Vedic Technology Research"],
    tags: ["BSc YT", "MSc YT", "PhD"],
    icon: "🕉",
  },
  {
    name: "Division of Yoga & Life Sciences",
    gradient: "from-teal-500 via-cyan-500 to-emerald-400",
    bg: "from-teal-50 to-cyan-50",
    iconColor: "text-teal-600",
    schools: ["TSYNM: School of Yoga & Naturopathic Medicine", "VASHI: Vasishta School of Health Integration", "CARIM: Center for Advanced Research"],
    tags: ["BNYS", "MD", "BSc YT", "MSc YT", "PhD"],
    icon: "🌿",
  },
  {
    name: "Division of Yoga & Management Studies",
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    bg: "from-violet-50 to-purple-50",
    iconColor: "text-violet-600",
    schools: ["VYASA Business School"],
    tags: ["MBA", "PhD"],
    icon: "📊",
  },
  {
    name: "Division of Yoga & Physical Sciences",
    gradient: "from-blue-500 via-indigo-500 to-sky-500",
    bg: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    schools: ["Centre for Energy Research"],
    tags: ["PhD"],
    icon: "⚡",
  },
  {
    name: "Division of Yoga & Humanities",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    bg: "from-rose-50 to-pink-50",
    iconColor: "text-rose-500",
    schools: ["Psychology & Humanities", "School of Performing Arts"],
    tags: ["PhD", "YIC"],
    icon: "🎭",
  },
];

const stats = [
  { value: 9, suffix: "+", label: "Leadership Team", icon: "👥" },
  { value: 4, suffix: "", label: "Governing Bodies", icon: "🏛" },
  { value: 5, suffix: "", label: "Academic Divisions", icon: "📚" },
  { value: 45, suffix: "+", label: "Council Members", icon: "🌟" },
];

// ─── SHARED ───────────────────────────────────────────────────────────────────

const MandalaSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor">
    {[...Array(12)].map((_, i) => (
      <ellipse key={i} cx="100" cy="35" rx="10" ry="28" transform={`rotate(${i * 30} 100 100)`} strokeWidth="0.4" />
    ))}
    {[25, 40, 55, 70, 85, 95].map((r) => (
      <circle key={r} cx="100" cy="100" r={r} strokeWidth="0.4" />
    ))}
    {[...Array(16)].map((_, i) => (
      <line key={i} x1="100" y1="5" x2="100" y2="195" strokeWidth="0.25" transform={`rotate(${i * 22.5} 100 100)`} />
    ))}
  </svg>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="text-center mb-16 relative">
      <motion.p
        className={`text-xs uppercase tracking-[0.3em] font-semibold mb-3 ${light ? "text-white/60" : "text-primary"}`}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.p>
      <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 ${light ? "text-white" : "text-foreground"}`}>
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            {i === 0 ? <span className={light ? "text-white" : "text-foreground"}>{word}</span> : word}
          </motion.span>
        ))}
      </h2>
      <motion.div
        className={`mx-auto h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent ${light ? "via-white/50" : "via-primary"}`}
        initial={{ width: 0 }}
        animate={isInView ? { width: "120px" } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
      />
    </div>
  );
};

// ─── HERO ──────────────────────────────────────────────────────────────────────
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[88vh] min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Multi-layer background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,52%,15%)] via-[hsl(210,52%,20%)] to-[hsl(25,60%,30%)]" />
        {/* Mesh gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsla(25,84%,50%,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsla(42,65%,55%,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,hsla(210,52%,30%,0.4),transparent_60%)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
      </motion.div>

      {/* Large rotating mandala left */}
      <motion.div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] text-white/10 pointer-events-none"
        animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }}>
        <MandalaSVG />
      </motion.div>

      {/* Large rotating mandala right */}
      <motion.div className="absolute -right-20 -top-20 w-[400px] h-[400px] text-white/8 pointer-events-none"
        animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}>
        <MandalaSVG />
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{ width: 4 + (i % 4) * 3, height: 4 + (i % 4) * 3, left: `${10 + i * 7}%`, top: `${20 + (i * 13) % 60}%` }}
          animate={{ y: [-12, 12, -12], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      {/* Center content */}
      <motion.div className="relative z-10 text-center px-4 max-w-5xl mx-auto" style={{ y: textY, opacity }}>
        {/* Pill label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40" />
          <span className="text-white/60 uppercase tracking-[0.4em] text-xs font-medium">S-VYASA University</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40" />
        </motion.div>

        {/* Main title with gradient text */}
        <motion.h1
          className="font-heading font-bold leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block text-6xl md:text-8xl lg:text-9xl text-white">Admin</span>
          <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
            istration
          </span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          className="mx-auto h-px w-0 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-6"
          animate={{ width: "200px" }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        <motion.p
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Governance · Leadership · Organizational Structure
        </motion.p>

        {/* Quick stats strip */}
        <motion.div
          className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-8 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          {[["9+", "Leaders"], ["4", "Bodies"], ["5", "Divisions"]].map(([num, lbl]) => (
            <div key={lbl} className="text-center">
              <div className="font-heading text-2xl font-bold text-white">{num}</div>
              <div className="text-white/50 text-xs uppercase tracking-wider">{lbl}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1.5 bg-white/60 rounded-full"
            animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── LEADERSHIP ───────────────────────────────────────────────────────────────
const FeaturedLeaderCard = ({ leader, index }: { leader: typeof featuredLeaders[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full"
    >
      <motion.div
        className="relative bg-card rounded-3xl overflow-hidden shadow-large border border-border h-full"
        whileHover={{ y: -8, boxShadow: "0 40px 80px -20px hsla(25, 84%, 50%, 0.35)" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Top gradient strip */}
        <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

        {/* Background shimmer on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/3 group-hover:to-accent/3 transition-all duration-500 pointer-events-none" />

        <div className="p-8 flex flex-col sm:flex-row gap-7 items-start">
          {/* Photo column */}
          <div className="relative flex-shrink-0 mx-auto sm:mx-0">
            <div className="relative w-48 h-52 sm:w-44 sm:h-48 rounded-2xl overflow-hidden shadow-xl">
              <motion.img
                src={leader.photo}
                alt={leader.name}
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
              />
              {/* Gradient overlay on photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            {/* Glowing border ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
            {/* Designation badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              {leader.designation}
            </div>
          </div>

          {/* Info column */}
          <div className="flex-1 pt-2">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 mt-4 sm:mt-0">{leader.name}</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mb-4" />
            <p className="text-muted-foreground leading-relaxed text-sm mb-5">{leader.bio}</p>
            {/* Quote */}
            <div className="flex items-start gap-3 bg-muted/60 rounded-xl p-4 border border-border/60">
              <Quote className="w-5 h-5 text-primary/50 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground italic">{leader.quote}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const GridLeaderCard = ({ leader, index }: { leader: typeof gridLeaders[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
      className="group"
    >
      <motion.div
        className="relative bg-card rounded-2xl overflow-hidden shadow-medium border border-border h-full"
        whileHover={{ y: -6, boxShadow: "0 25px 50px -10px hsla(25, 84%, 50%, 0.25)" }}
        transition={{ duration: 0.35 }}
      >
        {/* Photo area */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={leader.photo}
            alt={leader.name}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          {/* Name over photo on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-8 h-0.5 bg-accent mb-2" />
            </div>
          </div>
          {/* Top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/70 to-accent/70" />
        </div>

        {/* Info area */}
        <div className="p-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">{leader.designation}</p>
          <h3 className="font-heading text-lg font-bold text-foreground">{leader.name}</h3>
          <motion.div
            className="h-0.5 bg-gradient-to-r from-primary to-transparent mt-2"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const LeadershipSection = () => (
  <section className="py-28 bg-background relative overflow-hidden">
    {/* Subtle bg decoration */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <SectionHeading title="University Leadership" subtitle="Visionary Minds at the Helm" />

      {/* Featured 2-col */}
      <div className="grid md:grid-cols-2 gap-7 mb-12 max-w-5xl mx-auto">
        {featuredLeaders.map((l, i) => <FeaturedLeaderCard key={l.name} leader={l} index={i} />)}
      </div>

      {/* Section divider */}
      <div className="flex items-center gap-4 max-w-6xl mx-auto mb-10">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium px-4">Academic Leadership</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {gridLeaders.map((l, i) => <GridLeaderCard key={l.name} leader={l} index={i} />)}
      </div>
    </div>
  </section>
);

// ─── STATS BAR ────────────────────────────────────────────────────────────────
const StatCounter = ({ value, suffix, label, icon, index }: { value: number; suffix: string; label: string; icon: string; index: number }) => {
  const [ref, visible] = useScrollReveal(0.2);
  const count = useCountUp(value, 1800, visible);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative text-center group"
    >
      {/* Vertical divider except last */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10 hidden md:block last:hidden" />
      <div className="text-3xl mb-3">{icon}</div>
      <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-1 tabular-nums">
        {count}<span className="text-amber-300">{suffix}</span>
      </div>
      <div className="text-white/55 text-xs uppercase tracking-[0.25em]">{label}</div>
    </motion.div>
  );
};

const StatsBar = () => (
  <section className="relative py-20 overflow-hidden">
    {/* Rich gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-[hsl(20,50%,25%)] to-primary" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(42,65%,55%,0.15),transparent_70%)]" />
    {/* Animated dots */}
    <div className="absolute inset-0 opacity-10"
      style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "35px 35px" }} />
    {/* Diagonal stripe overlay */}
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: "repeating-linear-gradient(-45deg, white, white 1px, transparent 1px, transparent 20px)" }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
        {stats.map((s, i) => <StatCounter key={s.label} {...s} index={i} />)}
      </div>
    </div>
  </section>
);

// ─── ORGANOGRAM ───────────────────────────────────────────────────────────────
interface OrgNode { label: string; level: "top" | "mid" | "low"; children?: OrgNode[]; }

const orgData: OrgNode = {
  label: "Executive Council (EC)", level: "top",
  children: [
    {
      label: "Chancellor", level: "top",
      children: [
        { label: "Academic Council", level: "mid" },
        { label: "Finance Committee", level: "mid" },
        { label: "IQAC", level: "mid" },
      ],
    },
    {
      label: "Vice Chancellor", level: "top",
      children: [
        {
          label: "Pro-Vice Chancellor", level: "mid",
          children: [
            {
              label: "Registrar", level: "mid",
              children: [
                { label: "Deans", level: "low" },
                { label: "Deputy Registrar", level: "low" },
                { label: "Admin Officer", level: "low" },
                { label: "Liaison Officer", level: "low" },
              ],
            },
            { label: "Controller of Exams", level: "mid" },
          ],
        },
        { label: "Chief Finance Officer", level: "mid" },
      ],
    },
  ],
};

const OrgNodeCard = ({ node, depth = 0 }: { node: OrgNode; depth?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const styles = {
    top: "bg-gradient-to-br from-primary to-primary/80 text-white border-primary/30 shadow-lg shadow-primary/20",
    mid: "bg-gradient-to-br from-primary/15 to-accent/10 text-foreground border-primary/30",
    low: "bg-card/80 backdrop-blur-sm text-foreground border-border border-l-2 border-l-primary/50",
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: depth * 0.08, ease: "backOut" }}
        className={`rounded-xl px-4 py-3 text-center border text-xs font-semibold min-w-[140px] max-w-[180px] cursor-default select-none transition-all duration-300 ${styles[node.level]}`}
        whileHover={{ scale: 1.07, boxShadow: "0 10px 30px -5px hsla(25, 84%, 50%, 0.4)" }}
      >
        {node.label}
      </motion.div>

      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center">
          <motion.div
            className="w-px bg-gradient-to-b from-primary/40 to-primary/20"
            initial={{ height: 0 }}
            animate={isInView ? { height: 20 } : {}}
            transition={{ duration: 0.4, delay: depth * 0.08 + 0.2 }}
          />
          {node.children.length > 1 ? (
            <div className="relative flex gap-3 md:gap-5">
              <motion.div
                className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: depth * 0.08 + 0.3 }}
              />
              {node.children.map((child, i) => (
                <div key={i} className="flex flex-col items-center">
                  <motion.div
                    className="w-px bg-gradient-to-b from-primary/30 to-primary/10"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 16 } : {}}
                    transition={{ duration: 0.3, delay: depth * 0.08 + 0.4 + i * 0.05 }}
                  />
                  <OrgNodeCard node={child} depth={depth + 1} />
                </div>
              ))}
            </div>
          ) : (
            <OrgNodeCard node={node.children[0]} depth={depth + 1} />
          )}
        </div>
      )}
    </div>
  );
};

const OrganogramSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/60 via-background to-muted/30" />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="University Organogram" subtitle="Organizational Hierarchy" />

        {/* Legend */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
        >
          {[
            { color: "bg-primary", label: "Executive Level" },
            { color: "bg-primary/15 border border-primary/30", label: "Administrative Level" },
            { color: "bg-card border border-border border-l-2 border-l-primary/50", label: "Operational Level" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className={`w-3 h-3 rounded ${l.color}`} />
              {l.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          className="overflow-x-auto pb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="min-w-[720px] flex justify-center py-4">
            <OrgNodeCard node={orgData} depth={0} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── COUNCILS ─────────────────────────────────────────────────────────────────
const roleBadge = (role: CouncilRole) => {
  if (role === "Chairperson") return (
    <span className="inline-flex items-center gap-1 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
      <Star className="w-2.5 h-2.5" /> Chairperson
    </span>
  );
  if (role === "Member Secretary") return (
    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-primary text-primary">
      Sec.
    </span>
  );
  if (role === "Coordinator") return (
    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full border border-accent text-foreground bg-accent/10">
      Coord.
    </span>
  );
  return (
    <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
      Member
    </span>
  );
};

const MemberCard = ({ member, index }: { member: CouncilMember; index: number }) => {
  const photo = personPhotoMap[member.name] ?? malePhotos[index % malePhotos.length];
  const isSpecial = member.role === "Chairperson" || member.role === "Member Secretary";
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group cursor-default
        ${isSpecial
          ? "bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40 hover:shadow-md"
          : "bg-card border-border hover:border-primary/20 hover:shadow-soft"}`}
    >
      <div className={`relative flex-shrink-0 ${isSpecial ? "ring-2 ring-primary/30 ring-offset-2" : ""} rounded-full`}>
        <img
          src={photo} alt={member.name}
          className="w-12 h-12 rounded-full object-cover"
          loading="lazy"
        />
        {isSpecial && (
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
            <Star className="w-2 h-2 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-semibold text-sm truncate ${isSpecial ? "text-foreground" : "text-foreground/90"}`}>{member.name}</p>
        <p className="text-xs text-muted-foreground truncate mt-0.5">{member.designation}</p>
      </div>
      <div className="flex-shrink-0">{roleBadge(member.role)}</div>
    </motion.div>
  );
};

const CouncilsSection = () => {
  const [activeTab, setActiveTab] = useState("ec");
  const activeCouncil = councils.find(c => c.id === activeTab)!;

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Councils & Committees" subtitle="Governance Bodies" />

        <div className="max-w-5xl mx-auto">
          {/* Custom tab bar */}
          <div className="overflow-x-auto pb-2 mb-8">
            <div className="inline-flex gap-2 p-2 bg-muted/80 backdrop-blur-sm rounded-2xl border border-border min-w-max">
              {councils.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeTab === c.id
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/80"
                  }`}
                >
                  {c.icon}
                  <span className="hidden sm:inline">{c.label}</span>
                  <span className="sm:hidden">{c.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Description card */}
              <div className="relative bg-gradient-to-br from-primary/8 via-background to-accent/5 border border-primary/15 rounded-2xl p-6 mb-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-2xl" />
                <div className="flex items-start gap-3 pl-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                    {activeCouncil.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1">{activeCouncil.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{activeCouncil.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {activeCouncil.members.map((m, i) => (
                  <MemberCard key={m.name + i} member={m} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ─── DIVISIONS ────────────────────────────────────────────────────────────────
const DivisionCard = ({ div, index }: { div: typeof divisions[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <motion.div
        className="relative bg-card rounded-3xl overflow-hidden shadow-medium border border-border h-full"
        whileHover={{ y: -6, boxShadow: "0 30px 60px -15px hsla(25, 84%, 50%, 0.2)" }}
        transition={{ duration: 0.35 }}
      >
        {/* Gradient top band */}
        <div className={`h-2 bg-gradient-to-r ${div.gradient}`} />

        {/* Icon area */}
        <div className="px-6 pt-6 pb-2">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${div.gradient} text-3xl shadow-lg mb-4`}>
            {div.icon}
          </div>
          <h3 className="font-heading text-base font-bold text-foreground leading-snug mb-4">{div.name}</h3>

          {/* Schools */}
          <ul className="space-y-2.5 mb-5">
            {div.schools.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-br ${div.gradient}`} />
                <span className="leading-tight">{s}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pb-6">
            {div.tags.map((t) => (
              <span key={t} className={`text-[10px] px-2.5 py-1 rounded-full font-bold bg-gradient-to-r ${div.gradient} text-white shadow-sm`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hover shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

const DivisionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/20" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Academic Divisions" subtitle="Schools, Centers & Institutes" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {divisions.map((d, i) => <DivisionCard key={d.name} div={d} index={i} />)}
        </div>

        {/* SCODE banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-secondary/90 via-secondary to-primary/70 rounded-3xl p-6 md:p-8 overflow-hidden text-white">
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center text-2xl shadow-lg">
                🎓
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-white/60 mb-1">Spanning All Divisions</p>
                <h4 className="font-heading text-xl font-bold text-white mb-1">SCODE — School of Open & Distance Education</h4>
                <p className="text-white/60 text-sm">Enables flexible learning pathways across all academic programs and divisions of the university</p>
              </div>
              <div className="flex-shrink-0 ml-auto hidden md:flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-4 py-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span className="text-white/80 text-sm font-medium">All Divisions</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────────────────────────────
const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(42,65%,55%,0.2),transparent_65%)]" />
      <motion.div
        className="absolute inset-0 opacity-8"
        animate={{ rotate: [0, 360] }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full text-white/5">
          <MandalaSVG />
        </div>
      </motion.div>

      <div ref={ref} className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/50 uppercase tracking-widest text-xs mb-4">Join Our Community</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Be Part of Our Story</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10 text-base">
            Shape your future with S-VYASA's unique blend of yogic wisdom and modern education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              <GraduationCap className="w-5 h-5" /> Explore Admissions
            </a>
            <a href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── BACK TO TOP ──────────────────────────────────────────────────────────────
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-large flex items-center justify-center hover:shadow-xl hover:shadow-primary/30 transition-shadow"
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
const Administration = () => (
  <Layout>
    <Breadcrumb items={[{ label: "About Us", href: "/about" }, { label: "Administration" }]} />
    <Hero />
    <LeadershipSection />
    <StatsBar />
    <OrganogramSection />
    <CouncilsSection />
    <DivisionsSection />
    <CTASection />
    <BackToTop />
  </Layout>
);

export default Administration;
