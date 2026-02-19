import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

import newtonLogo from "@/assets/partner-newton.jpg";
import intellipaatLogo from "@/assets/partner-intellipaat.jpg";
import futurenseLogo from "@/assets/partner-futurense.jpg";
import hclLogo from "@/assets/partner-hcl.jpg";
import cambridgeLogo from "@/assets/partner-cambridge.jpg";
import proximalLogo from "@/assets/partner-proximal.jpg";
import intelLogo from "@/assets/partner-intel.jpg";
import ibmLogo from "@/assets/partner-ibm.jpg";
import ltLogo from "@/assets/partner-lt.jpg";
import niatLogo from "@/assets/partner-niat.jpg";

const partners = [
  { name: "Newton School of Technology", logo: newtonLogo },
  { name: "Intellipaat", logo: intellipaatLogo },
  { name: "Futurense", logo: futurenseLogo },
  { name: "HCL Tech & Pearson", logo: hclLogo },
  { name: "University of Cambridge", logo: cambridgeLogo },
  { name: "Proxima Learning", logo: proximalLogo },
  { name: "Intel", logo: intelLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "Larsen & Toubro", logo: ltLogo },
  { name: "Nxtwave (NIAT)", logo: niatLogo },
];

const PartnerCard = ({ partner }: { partner: typeof partners[0] }) => (
  <motion.div
    className="flex-shrink-0 mx-4 flex flex-col items-center justify-center group cursor-pointer"
    whileHover={{ scale: 1.08, y: -6 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="w-36 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-3">
      <img
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="w-full h-full object-contain"
      />
    </div>
    <p className="mt-3 text-xs text-white/60 text-center font-medium w-36 leading-tight group-hover:text-white/90 transition-colors">
      {partner.name}
    </p>
  </motion.div>
);

const InfiniteCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const doubled = [...partners, ...partners, ...partners];

  useAnimationFrame((_, delta) => {
    xRef.current -= delta * 0.04;
    const itemWidth = 176; // 144px card + 32px mx
    const resetAt = -(partners.length * itemWidth);
    if (xRef.current <= resetAt) xRef.current += Math.abs(resetAt);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  return (
    <div className="overflow-hidden w-full mt-14 py-6">
      <div ref={trackRef} className="flex items-start will-change-transform">
        {doubled.map((p, i) => (
          <PartnerCard key={i} partner={p} />
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
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, hsl(var(--primary)) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(ellipse, #f59e0b 0%, transparent 70%)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-4">
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
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(135deg, #f59e0b, #fbbf24)" }}
          >
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
          className="mt-4 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            10 Active Partners
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
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />
    </section>
  );
};

export default EdtechHero;
