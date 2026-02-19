import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Layout from "@/components/layout/Layout";

interface Guest {
  id: string;
  name: string;
  title: string;
  organization: string;
  photo?: string;
}

const guestsData: Guest[] = [
  { id: "g1", name: "Dr. Hasmukh Adhia", title: "Former Finance Secretary, Government of India", organization: "Government of India" },
  { id: "g2", name: "Prof. T. G. Sitharam", title: "Chairman, AICTE", organization: "All India Council for Technical Education" },
  { id: "g3", name: "Dr. Marty Seligman", title: "Father of Positive Psychology", organization: "University of Pennsylvania, USA" },
  { id: "g4", name: "H.E. Archbishop of Canterbury", title: "Archbishop", organization: "Church of England, UK" },
  { id: "g5", name: "Dr. Tedros Adhanom Ghebreyesus", title: "Director-General", organization: "World Health Organization (WHO)" },
  { id: "g6", name: "Shri. Dharmendra Pradhan", title: "Union Minister of Education", organization: "Ministry of Education, India" },
  { id: "g7", name: "Prof. Antonio Damasio", title: "Neuroscientist & Author", organization: "University of Southern California, USA" },
  { id: "g8", name: "Dr. Dean Ornish", title: "Founder & President", organization: "Preventive Medicine Research Institute" },
  { id: "g9", name: "H.E. Ambassador of Japan", title: "Ambassador to India", organization: "Embassy of Japan" },
  { id: "g10", name: "Shri. B. S. Yediyurappa", title: "Former Chief Minister of Karnataka", organization: "Government of Karnataka" },
  { id: "g11", name: "Prof. Loren Cordain", title: "Founder of Paleo Diet Movement", organization: "Colorado State University, USA" },
  { id: "g12", name: "Dr. Sanjeev Balyan", title: "Union Minister of State", organization: "Ministry of Fisheries, Animal Husbandry & Dairying" },
];

// Floating ambient orbs for hero
const AmbientOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[
      { w: 600, h: 600, top: "-20%", left: "-10%", delay: 0 },
      { w: 400, h: 400, top: "40%", right: "-5%", delay: 2 },
      { w: 300, h: 300, bottom: "10%", left: "30%", delay: 4 },
    ].map((orb, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: orb.w,
          height: orb.h,
          top: orb.top,
          left: (orb as any).left,
          right: (orb as any).right,
          bottom: (orb as any).bottom,
          background: "radial-gradient(circle, hsl(var(--primary)/0.18) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8 + i * 2, delay: orb.delay, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

// Individual guest card with scroll-triggered entrance
const GuestCard = ({ guest, index }: { guest: Guest; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Alternating entrance directions
  const isEven = index % 2 === 0;
  const col = index % 3;
  const xStart = col === 0 ? -60 : col === 2 ? 60 : 0;
  const yStart = col === 1 ? 60 : 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xStart, y: yStart, scale: 0.92 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
      >
        {/* Photo area */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[hsl(var(--primary)/0.15)] to-[hsl(var(--primary)/0.05)]">
          {guest.photo ? (
            <motion.img
              src={guest.photo}
              alt={guest.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          ) : (
            // Elegant placeholder when no photo
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              {/* Animated mandala background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center opacity-10"
              >
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 fill-[hsl(var(--primary))]">
                  {[...Array(8)].map((_, i) => (
                    <ellipse key={i} cx="100" cy="60" rx="15" ry="45" transform={`rotate(${i * 45} 100 100)`} />
                  ))}
                  <circle cx="100" cy="100" r="18" />
                </svg>
              </motion.div>
              {/* Initial letter */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: (index % 3) * 0.12 + 0.3, type: "spring" }}
                className="relative z-10 w-24 h-24 rounded-full bg-[hsl(var(--primary)/0.12)] border-2 border-[hsl(var(--primary)/0.3)] flex items-center justify-center"
              >
                <span className="text-4xl font-bold text-[hsl(var(--primary))]">
                  {guest.name.charAt(0)}
                </span>
              </motion.div>
            </div>
          )}

          {/* Gradient overlay — always present, intensifies on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.3 }}
          />

          {/* Text overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <motion.div
              initial={{ y: 8, opacity: 0.8 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white font-bold text-base leading-tight mb-1 drop-shadow-md">
                {guest.name}
              </p>
              <p className="text-white/75 text-xs leading-snug line-clamp-2">
                {guest.title}
              </p>
            </motion.div>

            {/* Organization — slides up on hover */}
            <motion.p
              className="text-[hsl(var(--primary))] text-[11px] font-semibold mt-2 leading-tight"
              initial={{ opacity: 0, y: 6 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              {guest.organization}
            </motion.p>
          </div>

          {/* Shimmer on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full"
            whileHover={{ translateX: "200%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Parallax hero section
const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[hsl(var(--primary)/0.06)]">
      <AmbientOrbs />

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{ top: `${20 + i * 15}%`, background: `linear-gradient(90deg, transparent, hsl(var(--primary)/${0.04 + i * 0.01}), transparent)` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 15 + i * 3, repeat: Infinity, ease: "linear", delay: i * 2 }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.25em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[hsl(var(--primary))] uppercase text-xs font-semibold tracking-[0.25em] mb-6"
        >
          Distinguished Visitors
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-none tracking-tight"
        >
          Our
          <br />
          <span className="text-[hsl(var(--primary))] italic">Guests</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed"
        >
          Luminaries from across the world who have graced S-VYASA with their presence and wisdom.
        </motion.p>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[hsl(var(--primary))] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default function Guests() {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: gridRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // Split into rows of 3 for stagger effect
  const rows: Guest[][] = [];
  for (let i = 0; i < guestsData.length; i += 3) {
    rows.push(guestsData.slice(i, i + 3));
  }

  return (
    <Layout>
      <HeroSection />

      {/* Guest Gallery */}
      <section ref={gridRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {guestsData.map((guest, i) => (
              <GuestCard key={guest.id} guest={guest} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Invite CTA */}
      <section className="py-20 bg-[hsl(var(--primary)/0.04)] border-t border-[hsl(var(--primary)/0.1)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[hsl(var(--primary))] uppercase tracking-widest text-xs font-semibold mb-4">Open Invitation</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Invite a Distinguished Guest</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              S-VYASA welcomes scholars, leaders, and dignitaries for lectures, collaborations, and campus visits.
            </p>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-[hsl(var(--primary)/0.4)] hover:shadow-xl transition-shadow"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
