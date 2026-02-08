import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AIUAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headingWords = "About the Championship".split(" ");

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Yoga pose silhouette background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.svg
          viewBox="0 0 400 400"
          className="w-[500px] h-[500px] opacity-[0.03]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : {}}
        >
          <motion.path
            d="M200 50 C220 80 250 100 260 140 C270 180 260 220 240 260 C220 300 200 340 200 380 M200 50 C180 80 150 100 140 140 C130 180 140 220 160 260 C180 300 200 340 200 380 M200 140 C160 140 120 160 100 180 M200 140 C240 140 280 160 300 180 M200 180 L200 280 M180 280 C180 320 200 350 200 350 M220 280 C220 320 200 350 200 350"
            fill="none"
            stroke="hsl(var(--navy))"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 3, delay: 0.5 }}
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-8">
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            The All India Inter-University Yogasana Championships (Women) 2026 brings together 
            the nation's top university athletes for a 5-day celebration of yogic strength, 
            precision, balance, and competitive excellence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            This championship is part of the <span className="font-semibold text-navy">AIU Annual Sports Calendar 2025–26</span>, 
            representing the highest standard of inter-university sports in India.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AIUAbout;
