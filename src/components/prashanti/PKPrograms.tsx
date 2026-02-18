import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

// SVG Lotus icon with line-draw animation
const LotusIcon = () => (
  <motion.svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-primary"
  >
    <motion.path
      d="M12 21c-4-3-7-6-7-10 0-3 2-5 4-6 1-.5 2-.5 3 0 1 .5 2 .5 3 0 2 1 4 3 4 6 0 4-3 7-7 10z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    <motion.path
      d="M12 21c-2-2-3-4-3-7 0-2 1.5-4 3-4s3 2 3 4c0 3-1 5-3 7z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
    />
    <motion.path
      d="M12 3v4"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
    />
  </motion.svg>
);

const PKPrograms = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const imageX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  const headingWords = "Shape your future with the discipline and serenity of yoga.".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Faint mandala watermark */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23E8751A' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='30' fill='none' stroke='%23E8751A' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='%23E8751A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image with parallax */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl"
            style={{ x: imageX }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
              alt="Yoga at Prashanti Campus"
              className="w-full h-[400px] md:h-[500px] object-cover"
              style={{ scale: imageScale }}
            />
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon badge with label */}
            <div className="flex items-center gap-3 mb-6">
              <LotusIcon />
              <motion.span
                className="text-sm font-semibold tracking-[3px] text-primary uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Programs
              </motion.span>
            </div>

            {/* Heading with word-by-word animation */}
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              {headingWords.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Body text with line-by-line stagger */}
            <div className="space-y-4 text-muted-foreground text-lg mb-8">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                Enhance your well-being and inner peace through the discipline of yoga.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Explore specialized yoga programs at S-VYASA University designed to cultivate a healthier mind, body, and spirit for a balanced life.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: "spring", bounce: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full shadow-lg relative overflow-hidden group pulse-glow"
              >
                <a href="https://applynow.svyasa.edu.in/" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Apply now</span>
                  <motion.span
                    className="absolute inset-0 bg-white/20 rounded-full"
                    animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PKPrograms;
