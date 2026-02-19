import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const partners = [
  { name: "Newton School", abbr: "NS", color: "#FF6B35" },
  { name: "Intellipaat", abbr: "IP", color: "#2563EB" },
  { name: "Futurense", abbr: "FS", color: "#7C3AED" },
  { name: "HCL Tech", abbr: "HCL", color: "#E31837" },
  { name: "University of Cambridge", abbr: "CAM", color: "#003366" },
  { name: "Proximal Learning", abbr: "PL", color: "#059669" },
  { name: "Intel", abbr: "INT", color: "#0071C5" },
  { name: "IBM", abbr: "IBM", color: "#1F70C1" },
  { name: "Larsen & Toubro", abbr: "L&T", color: "#D4A017" },
];

const PartnerLogo = ({ partner, index }: { partner: typeof partners[0]; index: number }) => (
  <motion.div
    className="flex-shrink-0 mx-6 flex flex-col items-center justify-center group cursor-pointer"
    whileHover={{ scale: 1.1, y: -4 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
      style={{ background: `${partner.color}15`, border: `2px solid ${partner.color}30` }}
    >
      <span
        className="text-xs font-black tracking-tight text-center leading-tight"
        style={{ color: partner.color, fontSize: partner.abbr.length > 3 ? "9px" : "11px" }}
      >
        {partner.abbr}
      </span>
    </div>
    <p className="mt-2 text-xs text-white/70 text-center font-medium w-20 leading-tight group-hover:text-white transition-colors">
      {partner.name}
    </p>
  </motion.div>
);

const InfiniteCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const doubled = [...partners, ...partners, ...partners];

  useAnimationFrame((_, delta) => {
    xRef.current -= delta * 0.03;
    const itemWidth = 128; // 80px logo + 48px mx
    const resetAt = -(partners.length * itemWidth);
    if (xRef.current <= resetAt) xRef.current += resetAt * -1;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  return (
    <div className="overflow-hidden w-full mt-16 py-4">
      <div ref={trackRef} className="flex items-start will-change-transform">
        {doubled.map((p, i) => (
          <PartnerLogo key={i} partner={p} index={i} />
        ))}
      </div>
    </div>
  );
};

const EdtechHero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1040] via-[#0f2356] to-[#0a1628]">
      {/* Decorative radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, hsl(var(--primary)) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #f59e0b 0%, transparent 70%)" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 rounded-full mb-6">
            Industry Collaborations
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Our EdTech &amp;{" "}
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}>
            Industry Partners
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Together we empower learners for future careers — bridging academia and industry through transformative partnerships.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-8 text-white/50 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            9 Active Partners
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            5000+ Learners
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            50+ Programs
          </span>
        </motion.div>
      </div>

      <InfiniteCarousel />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} />
    </section>
  );
};

export default EdtechHero;
