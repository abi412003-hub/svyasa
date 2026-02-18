import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const YogaWellnessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const paragraphs = [
    "S-VYASA University is committed to promoting Yoga and Wellness as a core part of academic and campus life. By blending ancient yogic traditions with modern scientific research, the university provides a structured approach to holistic health. Students are encouraged to embrace yoga not just as a practice but as a way of life, fostering physical, mental, and spiritual well-being.",
    "The university offers various yoga programs, including the Yoga Instructor Course, BSc and MSc in Yoga Therapy, and Doctor of Medicine in Yoga. These programs emphasize both traditional and therapeutic aspects of yoga, equipping students with in-depth knowledge and practical skills. Additionally, S-VYASA is a leader in yoga research, conducting studies on the effects of yoga on health and well-being, contributing to global wellness advancements.",
    "Beyond academics, the peaceful and natural environment of S-VYASA creates the perfect setting for self-discovery and personal growth. Daily yoga sessions, meditation, and mindfulness practices help students maintain a balanced and stress-free lifestyle, shaping them into individuals who excel both academically and personally.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] py-24 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/campus/prashanti-campus_campus1.jpg')`,
          y: bgY,
        }}
      />
      <div className="absolute inset-0 bg-navy/70" />

      {/* Floating Prana Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/60"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 20}%`,
            }}
            animate={{
              y: [-50, -300],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:col-span-2"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/campus/prashanti-campus_campus1.jpg')`,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Center Content - Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
              {/* Lotus SVG behind heading */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 text-gold"
              >
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 C30 30, 10 50, 50 90 C90 50, 70 30, 50 10 Z" opacity="0.5" />
                  <path d="M50 20 C35 35, 20 50, 50 80 C80 50, 65 35, 50 20 Z" opacity="0.7" />
                  <path d="M50 30 C40 40, 30 50, 50 70 C70 50, 60 40, 50 30 Z" />
                </svg>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display text-white text-center mb-8 relative z-10 text-shadow-lg"
              >
                Yoga & Wellness
              </motion.h2>

              {/* Paragraphs */}
              <div className="space-y-6 relative z-10">
                {paragraphs.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                    className="text-white/90 leading-relaxed text-center md:text-lg"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="hidden lg:block lg:col-span-2"
          >
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/campus/prashanti-campus_campus1.jpg')`,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YogaWellnessSection;
