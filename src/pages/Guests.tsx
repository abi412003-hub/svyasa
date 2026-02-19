import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Layout from "@/components/layout/Layout";

import imgPadmaShri from "@/assets/guests/guest-padma-shri.jpg";
import imgGlobalPeace from "@/assets/guests/guest-global-peace.jpg";
import imgIncofyra from "@/assets/guests/guest-incofyra.jpg";
import imgYeddyurappa from "@/assets/guests/guest-yeddyurappa.jpg";
import imgHarshVardhan from "@/assets/guests/guest-harsh-vardhan.jpg";
import imgMohanBhagwat from "@/assets/guests/guest-mohan-bhagwat.jpg";
import imgDidiJanki from "@/assets/guests/guest-didi-janki.jpg";
import imgSadhguru from "@/assets/guests/guest-sadhguru.jpg";

interface GuestEntry {
  id: string;
  year: string;
  caption: string;
  image: string;
  span?: "wide" | "tall" | "normal";
}

const guests: GuestEntry[] = [
  {
    id: "g1",
    year: "2016",
    caption: "Padma Shri awarded to Dr. H R Nagendra, Head of the Institution",
    image: imgPadmaShri,
    span: "wide",
  },
  {
    id: "g2",
    year: "2016",
    caption: "Sadguru Jaggi Vasudev during 21st INCOFYRA",
    image: imgSadhguru,
    span: "tall",
  },
  {
    id: "g3",
    year: "2014",
    caption: "Felicitation to Sarsanghchalak of RSS, Shri Mohanji Bhagwat",
    image: imgMohanBhagwat,
    span: "normal",
  },
  {
    id: "g4",
    year: "2016",
    caption: "Didi Janki, Spiritual Head of Brahma Kumaris",
    image: imgDidiJanki,
    span: "normal",
  },
  {
    id: "g5",
    year: "2016",
    caption: "Inaugural Ceremony of 21st INCOFYRA in Prashanti",
    image: imgIncofyra,
    span: "wide",
  },
  {
    id: "g6",
    year: "2015",
    caption: "Global Peace Award to Dr. H R Nagendra by World Peace Council",
    image: imgGlobalPeace,
    span: "normal",
  },
  {
    id: "g7",
    year: "2007",
    caption: "Inauguration of Tyaga Men's Hostel by Shri B S Yeddyurappa ji",
    image: imgYeddyurappa,
    span: "normal",
  },
  {
    id: "g8",
    year: "2014",
    caption: "Inauguration of Anvesana by Dr. Harsh Vardhan ji, Union Minister",
    image: imgHarshVardhan,
    span: "wide",
  },
];

// ─── Parallax Hero ────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      style={{ background: "hsl(var(--primary)/0.05)" }}
    >
      {/* Ambient floating circles */}
      {[
        { size: 700, top: "-25%", left: "-15%", delay: 0, dur: 12 },
        { size: 450, bottom: "-10%", right: "-8%", delay: 3, dur: 10 },
        { size: 280, top: "35%", left: "55%", delay: 6, dur: 14 },
      ].map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: o.size,
            height: o.size,
            top: (o as any).top,
            bottom: (o as any).bottom,
            left: (o as any).left,
            right: (o as any).right,
            background: "radial-gradient(circle, hsl(var(--primary)/0.14) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.12, 1], x: [0, 18, 0], y: [0, -14, 0] }}
          transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Sweeping horizontal lines */}
      {[15, 35, 55, 72, 88].map((top, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-full pointer-events-none"
          style={{ top: `${top}%`, background: `linear-gradient(90deg, transparent, hsl(var(--primary)/${0.06 + i * 0.01}), transparent)` }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 18 + i * 4, repeat: Infinity, ease: "linear", delay: i * 2.5 }}
        />
      ))}

      {/* Hero text */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.4 }}
          className="uppercase text-xs font-semibold tracking-[0.3em] mb-6"
          style={{ color: "hsl(var(--primary))" }}
        >
          Distinguished Visitors
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-bold leading-none tracking-tight text-foreground"
        >
          Our
          <br />
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="italic"
            style={{ color: "hsl(var(--primary))" }}
          >
            Guests
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-muted-foreground text-lg mt-6 max-w-md mx-auto leading-relaxed"
        >
          Luminaries, leaders, and visionaries who have graced S-VYASA with their presence.
        </motion.p>

        {/* Scroll pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14 flex flex-col items-center"
        >
          <motion.div
            animate={{ scaleY: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 origin-top"
            style={{ background: "linear-gradient(to bottom, hsl(var(--primary)), transparent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── Individual photo card ─────────────────────────────────────────────────────
const GuestCard = ({ guest, index }: { guest: GuestEntry; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const entrances = [
    { x: -80, y: 0 },
    { x: 0, y: 80 },
    { x: 80, y: 0 },
    { x: -60, y: 60 },
    { x: 60, y: 60 },
    { x: 0, y: -60 },
    { x: -80, y: 30 },
    { x: 80, y: 30 },
  ];
  const entrance = entrances[index % entrances.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: entrance.x, y: entrance.y, scale: 0.88 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.85, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer
        ${guest.span === "wide" ? "col-span-2" : ""}
        ${guest.span === "tall" ? "row-span-2" : ""}
      `}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        className="w-full h-full"
      >
        {/* Image with zoom-on-hover */}
        <div className={`relative overflow-hidden ${guest.span === "tall" ? "aspect-[3/5]" : guest.span === "wide" ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <motion.img
            src={guest.image}
            alt={guest.caption}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Dark gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5"
            whileHover={{ opacity: 1.15 }}
            transition={{ duration: 0.4 }}
          />

          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.09) 50%, transparent 60%)" }}
            initial={{ x: "-100%" }}
            whileHover={{ x: "160%" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          />

          {/* Year badge — top-left */}
          <motion.div
            className="absolute top-4 left-4 z-20"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: (index % 4) * 0.1 + 0.4, type: "spring" }}
          >
            <span
              className="text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{ background: "hsl(var(--primary)/0.85)", color: "white" }}
            >
              {guest.year}
            </span>
          </motion.div>

          {/* Caption bottom overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
            <motion.p
              className="text-white font-semibold text-sm md:text-base leading-snug drop-shadow-lg"
              initial={{ y: 12, opacity: 0.7 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35 }}
            >
              {guest.caption}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function Guests() {
  return (
    <Layout>
      <Hero />

      {/* Masonry-style photo grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <p
              className="uppercase text-xs font-semibold tracking-[0.25em] mb-3"
              style={{ color: "hsl(var(--primary))" }}
            >
              Moments in History
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Captured in Time
            </h2>
          </motion.div>

          {/* Responsive masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">
            {guests.map((guest, i) => (
              <GuestCard key={guest.id} guest={guest} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 border-t"
        style={{ background: "hsl(var(--primary)/0.04)", borderColor: "hsl(var(--primary)/0.1)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-4"
              style={{ color: "hsl(var(--primary))" }}
            >
              Open Invitation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Invite a Distinguished Guest
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              S-VYASA welcomes scholars, leaders, and dignitaries for lectures, collaborations, and campus visits.
            </p>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-white shadow-xl transition-shadow"
              style={{ background: "hsl(var(--primary))" }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
