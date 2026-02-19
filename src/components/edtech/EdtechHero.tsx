import { motion } from "framer-motion";

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

const EdtechHero = () => {
  return (
    <div>
      {/* ── Hero text band ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1040] via-[#0f2356] to-[#0a1628] py-20 pt-32">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-72 rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsl(var(--primary)) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-400 border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 rounded-full mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Industry Collaborations
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
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
            className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Together we empower learners for future careers — bridging academia and industry through transformative partnerships.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center justify-center gap-6 text-white/45 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />10 Active Partners
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />5000+ Learners
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />50+ Programs
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Logo showcase — MAIN highlight ── */}
      <section className="bg-muted/40 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by leading institutions worldwide
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-border/50 hover:border-primary/30 flex flex-col items-center justify-center p-6 cursor-pointer transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div className="w-full h-28 flex items-center justify-center mb-4">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors leading-snug">
                  {p.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EdtechHero;
