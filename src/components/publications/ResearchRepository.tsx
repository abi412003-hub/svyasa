import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const divisions = [
  { name: "Division of Yoga and Life Sciences", papers: 469, link: "/research/division-yoga-life-sciences" },
  { name: "Division of Yoga and Physical Sciences", papers: 105, link: "/research/division-yoga-physical-sciences" },
  { name: "Division of Yoga and Management", papers: 72, link: "/research/division-yoga-management" },
  { name: "Division of Yoga and Humanities", papers: 107, link: "" },
  { name: "Division of Yoga and Spirituality", papers: 42, link: "" },
];

const totalPapers = divisions.reduce((sum, d) => sum + d.papers, 0);

export default function ResearchRepository() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
        <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
        <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
          By Division
        </span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
      >
        Research Repository
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
        {divisions.map((div) => (
          <motion.div
            key={div.name}
            variants={fadeUp}
            className="group relative rounded-2xl border-2 border-[hsl(var(--saffron))]/30 bg-[hsl(var(--cream))] p-6 flex flex-col justify-between hover:border-[hsl(var(--saffron))] hover:shadow-lg transition-all duration-300"
          >
            <div>
              <h3 className="font-bold text-[hsl(var(--navy))] text-sm uppercase leading-snug mb-3">
                {div.name}
              </h3>
              <div className="h-[2px] w-10 bg-[hsl(var(--navy))]/20 mb-4" />
              <p className="text-[hsl(var(--muted-foreground))] text-sm">
                Number of Papers{" "}
                <span className="font-bold text-[hsl(var(--navy))] font-['DM_Mono',monospace]">
                  {String(div.papers).padStart(3, "0")}
                </span>
              </p>
            </div>
            {div.link ? (
              <Link to={div.link} className="mt-5 inline-flex items-center gap-2 bg-[hsl(var(--saffron))] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[hsl(var(--saffron-dark))] transition-colors w-fit">
                <BookOpen size={14} />
                Read More
              </Link>
            ) : (
              <button className="mt-5 inline-flex items-center gap-2 bg-[hsl(var(--saffron))] text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[hsl(var(--saffron-dark))] transition-colors w-fit">
                <BookOpen size={14} />
                Read More
              </button>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        className="rounded-xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(210 60% 12%), hsl(230 45% 25%))" }}
      >
        <p className="text-center text-white font-semibold py-4 text-sm md:text-base tracking-wide">
          Total Number of Papers:{" "}
          <span className="font-['DM_Mono',monospace] text-[hsl(var(--saffron-light))]">
            {totalPapers}
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
