import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Users, BookOpen, DollarSign, ShieldCheck, ChevronDown, ArrowUp, Info, Building2, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── DATA ───────────────────────────────────────────────────────────────────

const leadershipPhotos: Record<string, string> = {
  "Dr. H. R. Nagendra": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  "Dr. N. K. Manjunath": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  "Prof. M. K. Shridhar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  "Dr. H. R. Dayananda": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  "Dr. Natesh Babu": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  "Dr. Ramesh": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  "Prof. Narayan Behra": "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&h=400&fit=crop",
  "Prof. Jayaraman": "https://images.unsplash.com/photo-1548449112-96a38a643324?w=400&h=400&fit=crop",
  "Dr. Muralidhar Kanchi": "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=400&h=400&fit=crop",
};

const featuredLeaders = [
  {
    name: "Dr. H. R. Nagendra",
    designation: "Chancellor",
    bio: "Leading S-VYASA's mission of integrating ancient yogic wisdom with modern science. Padma Shri awardee and ex-NASA scientist who transformed yoga into a globally recognized science.",
    photo: leadershipPhotos["Dr. H. R. Nagendra"],
  },
  {
    name: "Dr. N. K. Manjunath",
    designation: "Vice Chancellor",
    bio: "Has delivered lectures on evidence-based Yoga therapy at prestigious institutions worldwide including Harvard Medical School, Monash University, and the Royal College of Medicine.",
    photo: leadershipPhotos["Dr. N. K. Manjunath"],
  },
];

const gridLeaders = [
  { name: "Prof. M. K. Shridhar", designation: "Pro-Vice Chancellor", photo: leadershipPhotos["Prof. M. K. Shridhar"] },
  { name: "Dr. H. R. Dayananda", designation: "Chief Finance Officer", photo: leadershipPhotos["Dr. H. R. Dayananda"] },
  { name: "Dr. Natesh Babu", designation: "CODE Director", photo: leadershipPhotos["Dr. Natesh Babu"] },
  { name: "Dr. Ramesh", designation: "Dean of Academics", photo: leadershipPhotos["Dr. Ramesh"] },
  { name: "Prof. Narayan Behra", designation: "Dean of Physical Sciences", photo: leadershipPhotos["Prof. Narayan Behra"] },
  { name: "Prof. Jayaraman", designation: "Dean of Yoga & Spirituality", photo: leadershipPhotos["Prof. Jayaraman"] },
  { name: "Dr. Muralidhar Kanchi", designation: "Director, Yoga & Humanities", photo: leadershipPhotos["Dr. Muralidhar Kanchi"] },
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

// Consistent photo index per name
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

interface CouncilMember {
  name: string;
  designation: string;
  role: CouncilRole;
}

const councils: { id: string; label: string; icon: React.ReactNode; description: string; members: CouncilMember[] }[] = [
  {
    id: "ec",
    label: "Executive Council",
    icon: <Users className="w-4 h-4" />,
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
    id: "ac",
    label: "Academic Council",
    icon: <BookOpen className="w-4 h-4" />,
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
    id: "fc",
    label: "Finance Committee",
    icon: <DollarSign className="w-4 h-4" />,
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
    id: "iqac",
    label: "IQAC",
    icon: <ShieldCheck className="w-4 h-4" />,
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
    color: "from-orange-500 to-amber-500",
    border: "border-orange-400",
    schools: ["School of Yogic Sciences", "VMAC-VTR: Vedic Technology Research"],
    tags: ["BSc YT", "MSc YT", "PhD"],
  },
  {
    name: "Division of Yoga & Life Sciences",
    color: "from-teal-500 to-cyan-500",
    border: "border-teal-400",
    schools: ["TSYNM: School of Yoga & Naturopathic Medicine", "VASHI: Vasishta School of Health Integration", "CARIM: Center for Advanced Research"],
    tags: ["BNYS", "MD", "BSc YT", "MSc YT", "PhD"],
  },
  {
    name: "Division of Yoga & Management Studies",
    color: "from-violet-500 to-purple-600",
    border: "border-violet-400",
    schools: ["VYASA Business School"],
    tags: ["MBA", "PhD"],
  },
  {
    name: "Division of Yoga & Physical Sciences",
    color: "from-blue-500 to-indigo-600",
    border: "border-blue-400",
    schools: ["Centre for Energy Research"],
    tags: ["PhD"],
  },
  {
    name: "Division of Yoga & Humanities",
    color: "from-rose-500 to-pink-500",
    border: "border-rose-400",
    schools: ["Psychology & Humanities", "School of Performing Arts"],
    tags: ["PhD", "YIC"],
  },
];

const stats = [
  { value: 9, suffix: "+", label: "Leadership Team" },
  { value: 4, suffix: "", label: "Governing Bodies" },
  { value: 5, suffix: "", label: "Academic Divisions" },
  { value: 45, suffix: "+", label: "Council Members" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

// Mandala SVG
const MandalaSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor">
    {[...Array(8)].map((_, i) => (
      <ellipse key={i} cx="100" cy="40" rx="12" ry="30" transform={`rotate(${i * 45} 100 100)`} strokeWidth="0.5" />
    ))}
    {[40, 55, 70, 85].map((r) => (
      <circle key={r} cx="100" cy="100" r={r} strokeWidth="0.5" />
    ))}
    {[...Array(12)].map((_, i) => (
      <line key={i} x1="100" y1="15" x2="100" y2="185" strokeWidth="0.3" transform={`rotate(${i * 30} 100 100)`} />
    ))}
  </svg>
);

// Section heading reused from management style
const SectionHeading = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="text-center mb-16 relative">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-3"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.6 }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
      <motion.div
        className="relative inline-block"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        <span className="text-base md:text-lg text-muted-foreground tracking-wider uppercase">{subtitle}</span>
        <motion.div
          className="absolute -bottom-2 left-1/2 h-0.5 bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0, x: "-50%" }}
          animate={isInView ? { width: "100%", x: "-50%" } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

// ─── HERO ────────────────────────────────────────────────────────────────────
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative h-[80vh] min-h-[560px] overflow-hidden flex items-center justify-center">
      {/* Parallax BG */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/80" />
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />
      </motion.div>

      {/* Rotating mandala */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="w-[600px] h-[600px] text-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <MandalaSVG />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/80 text-sm mb-6"
        >
          <Building2 className="w-4 h-4" />
          <span className="uppercase tracking-widest text-xs">S-VYASA University</span>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          Administration
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Governance, Leadership & Organizational Structure
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-1 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── LEADERSHIP ──────────────────────────────────────────────────────────────
const FeaturedLeaderCard = ({ leader, index }: { leader: typeof featuredLeaders[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative"
    >
      <motion.div
        className="relative bg-card rounded-2xl overflow-hidden shadow-medium border border-border h-full"
        whileHover={{ y: -6, boxShadow: "0 30px 60px -15px hsla(25, 84%, 50%, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />

        <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
          {/* Photo */}
          <div className="relative flex-shrink-0">
            <div className="w-44 h-44 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
              <motion.img
                src={leader.photo}
                alt={leader.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow-saffron">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">{leader.designation}</p>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{leader.name}</h3>
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <p className="text-muted-foreground leading-relaxed text-sm">{leader.bio}</p>
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group"
    >
      <motion.div
        className="relative bg-card rounded-2xl overflow-hidden shadow-soft border border-border h-full"
        whileHover={{ y: -4, boxShadow: "0 20px 40px -10px hsla(25, 84%, 50%, 0.2)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
        <div className="p-5">
          <div className="relative mb-4">
            <div className="w-full h-52 rounded-xl overflow-hidden border border-border">
              <motion.img
                src={leader.photo}
                alt={leader.name}
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          </div>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">{leader.designation}</p>
          <h3 className="font-heading text-lg font-bold text-foreground">{leader.name}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

const LeadershipSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="University Leadership" subtitle="Visionary Minds at the Helm" />

      {/* Featured Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-5xl mx-auto">
        {featuredLeaders.map((l, i) => (
          <FeaturedLeaderCard key={l.name} leader={l} index={i} />
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {gridLeaders.map((l, i) => (
          <GridLeaderCard key={l.name} leader={l} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ─── STATS BAR ────────────────────────────────────────────────────────────────
const StatCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [ref, visible] = useScrollReveal(0.3);
  const count = useCountUp(value, 1500, visible);
  return (
    <div ref={ref} className="text-center text-white">
      <div className="font-heading text-5xl md:text-6xl font-bold mb-1">
        {count}{suffix}
      </div>
      <div className="text-white/70 text-sm uppercase tracking-widest">{label}</div>
    </div>
  );
};

const StatsBar = () => (
  <section className="py-16 bg-gradient-to-r from-secondary via-secondary/95 to-primary/80 relative overflow-hidden">
    <motion.div
      className="absolute inset-0 opacity-5"
      animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      style={{
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

// ─── ORGANOGRAM ──────────────────────────────────────────────────────────────
interface OrgNode {
  label: string;
  level: "top" | "mid" | "low";
  children?: OrgNode[];
}

const orgData: OrgNode = {
  label: "Executive Council (EC)",
  level: "top",
  children: [
    {
      label: "Chancellor",
      level: "top",
      children: [
        { label: "Academic Council", level: "mid" },
        { label: "Finance Committee", level: "mid" },
        { label: "IQAC", level: "mid" },
      ],
    },
    {
      label: "Vice Chancellor",
      level: "top",
      children: [
        {
          label: "Pro-Vice Chancellor",
          level: "mid",
          children: [
            {
              label: "Registrar",
              level: "mid",
              children: [
                { label: "Deans", level: "low" },
                { label: "Deputy Registrar", level: "low" },
                { label: "Administrative Officer", level: "low" },
                { label: "Liaison Officer", level: "low" },
              ],
            },
            { label: "Controller of Examinations", level: "mid" },
          ],
        },
        { label: "Chief Finance Officer", level: "mid" },
      ],
    },
  ],
};

const OrgNodeCard = ({ node, depth = 0 }: { node: OrgNode; depth?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  const bgClass = node.level === "top"
    ? "bg-primary text-white border-primary"
    : node.level === "mid"
    ? "bg-primary/10 text-foreground border-primary/40"
    : "bg-card text-foreground border-l-4 border-l-primary/50 border-border";

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: depth * 0.1 }}
        className={`relative rounded-xl px-4 py-3 text-center shadow-soft border text-sm font-semibold min-w-[160px] max-w-[200px] cursor-default select-none ${bgClass}`}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 25px -5px hsla(25, 84%, 50%, 0.4)",
        }}
      >
        {node.label}
      </motion.div>

      {node.children && node.children.length > 0 && (
        <div className="flex flex-col items-center mt-1">
          {/* Vertical connector */}
          <motion.div
            className="w-px bg-primary/30"
            initial={{ height: 0 }}
            animate={isInView ? { height: 24 } : {}}
            transition={{ duration: 0.4, delay: depth * 0.1 + 0.2 }}
          />
          {/* Horizontal connector if multiple children */}
          {node.children.length > 1 && (
            <div className="relative flex items-start gap-4 md:gap-6">
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-primary/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: depth * 0.1 + 0.3 }}
              />
              {node.children.map((child, i) => (
                <div key={i} className="flex flex-col items-center pt-0">
                  <motion.div
                    className="w-px bg-primary/30 mb-1"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: 16 } : {}}
                    transition={{ duration: 0.3, delay: depth * 0.1 + 0.4 + i * 0.05 }}
                  />
                  <OrgNodeCard node={child} depth={depth + 1} />
                </div>
              ))}
            </div>
          )}
          {node.children.length === 1 && (
            <OrgNodeCard node={node.children[0]} depth={depth + 1} />
          )}
        </div>
      )}
    </div>
  );
};

const OrganogramSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="University Organogram" subtitle="Organizational Hierarchy" />
        <motion.div
          ref={ref}
          className="overflow-x-auto pb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="min-w-[700px] flex justify-center">
            <OrgNodeCard node={orgData} depth={0} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── COUNCILS & COMMITTEES ───────────────────────────────────────────────────
const roleBadge = (role: CouncilRole) => {
  if (role === "Chairperson") return <Badge className="bg-primary text-white text-[10px] px-2 py-0.5">Chairperson</Badge>;
  if (role === "Member Secretary") return <Badge variant="outline" className="border-primary text-primary text-[10px] px-2 py-0.5">Member Secretary</Badge>;
  if (role === "Coordinator") return <Badge variant="outline" className="border-accent text-accent-foreground text-[10px] px-2 py-0.5">Coordinator</Badge>;
  return <Badge variant="secondary" className="text-[10px] px-2 py-0.5">Member</Badge>;
};

const MemberCard = ({ member, index }: { member: CouncilMember; index: number }) => {
  const photo = personPhotoMap[member.name] ?? malePhotos[index % malePhotos.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-border group-hover:border-primary/40 transition-colors duration-300">
        <img src={photo} alt={member.name} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-foreground truncate">{member.name}</p>
        <p className="text-xs text-muted-foreground truncate">{member.designation}</p>
      </div>
      <div className="flex-shrink-0">{roleBadge(member.role)}</div>
    </motion.div>
  );
};

const CouncilsSection = () => {
  const [activeTab, setActiveTab] = useState("ec");

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Councils & Committees" subtitle="Governance Bodies" />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <div className="overflow-x-auto pb-2 mb-8">
            <TabsList className="inline-flex h-auto p-1.5 bg-muted rounded-2xl gap-1 min-w-max">
              {councils.map((c) => (
                <TabsTrigger
                  key={c.id}
                  value={c.id}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
                >
                  {c.icon}
                  <span className="hidden sm:inline">{c.label}</span>
                  <span className="sm:hidden">{c.label.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {councils.map((c) => (
            <TabsContent key={c.id} value={c.id} className="mt-0">
              <AnimatePresence mode="wait">
                {activeTab === c.id && (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-5 mb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {c.members.map((m, i) => (
                        <MemberCard key={m.name + i} member={m} index={i} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

// ─── DIVISIONS ───────────────────────────────────────────────────────────────
const DivisionCard = ({ div, index }: { div: typeof divisions[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border h-full"
        whileHover={{ y: -4, boxShadow: "0 20px 40px -10px hsla(25, 84%, 50%, 0.15)" }}
        transition={{ duration: 0.3 }}
      >
        <div className={`h-1.5 bg-gradient-to-r ${div.color}`} />
        <div className="p-6">
          <h3 className="font-heading text-base font-bold text-foreground mb-4 leading-tight">{div.name}</h3>
          <ul className="space-y-2 mb-4">
            {div.schools.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {div.tags.map((t) => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DivisionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading title="Academic Divisions" subtitle="Schools, Centers & Institutes" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-6">
          {divisions.map((d, i) => (
            <DivisionCard key={d.name} div={d} index={i} />
          ))}
        </div>
        {/* SCODE Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-semibold text-foreground text-sm">SCODE — School of Open & Distance Education</span>
              <p className="text-muted-foreground text-xs mt-0.5">Caters to all Divisions · Enabling flexible learning pathways across all academic programs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── BACK TO TOP ─────────────────────────────────────────────────────────────
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
          className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-large flex items-center justify-center hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.1 }}
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
    <BackToTop />
  </Layout>
);

export default Administration;
