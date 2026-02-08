import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// SVG Lotus that draws itself
const AnimatedLotus = () => (
  <motion.svg
    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-[300px] opacity-10"
    viewBox="0 0 200 100"
    fill="none"
    stroke="hsl(25 84% 50%)"
    strokeWidth="0.5"
  >
    {/* Petals */}
    {[-60, -30, 0, 30, 60].map((angle, i) => (
      <motion.path
        key={angle}
        d={`M100,80 Q${100 + angle * 0.8},40 ${100 + angle},20 Q${100 + angle * 1.2},40 100,80`}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut" }}
      />
    ))}
  </motion.svg>
);

const PKLife = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftImageX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const rightImageX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-background overflow-hidden"
    >
      {/* Animated lotus background */}
      <AnimatedLotus />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            LIFE{" "}
            <motion.span
              className="text-primary inline-block"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              @
            </motion.span>
            S-VYASA
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Inspiring minds, shaping futures, and building leaders.
          </motion.p>

          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We empower individuals with knowledge and skills, shaping future leaders through education, innovation, and personal growth to create a lasting impact.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
          >
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-5 rounded-full"
            >
              <a href="/life-at-svyasa">
                Campus life
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Two large images side by side */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl group"
            style={{ x: leftImageX }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
              alt="Yoga practice at campus"
              className="w-full h-[350px] object-cover"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 12, ease: "easeOut" }}
            />
            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-500 flex items-end">
              <motion.div
                className="p-6 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: -5,
                }}
              >
                <span className="text-white font-semibold text-lg">Morning Yoga Sessions</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-xl group"
            style={{ x: rightImageX }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&q=80"
              alt="Campus meditation"
              className="w-full h-[350px] object-cover"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 12, ease: "easeOut" }}
            />
            {/* Hover overlay with label */}
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-all duration-500 flex items-end">
              <motion.div
                className="p-6 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ 
                  rotateY: -5,
                  rotateX: -5,
                }}
              >
                <span className="text-white font-semibold text-lg">Serene Campus Life</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PKLife;
