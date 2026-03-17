import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import chancellorPortrait from "@/assets/chancellor-dayananda.jpg";
import vcPortrait from "@/assets/vc-portrait.png";

const leaders = [
  {
    name: "Dr. H R Dayananda Swamy",
    title: "Chancellor",
    image: chancellorPortrait,
    quote:
      "As one of the Founding Members of the S-VYASA Movement, I have been dedicated to the growth and stability of this institution for over three decades. Combining deep financial acumen with a profound understanding of Yoga and institutional development, my mission is to ensure S-VYASA continues to integrate Yoga, science, and education for global well-being.",
  },
  {
    name: "Dr. Manjunath NK",
    title: "Vice Chancellor",
    image: vcPortrait,
    quote:
      "Education is the cornerstone of progress and the key to unlocking one's true potential. It transcends boundaries, empowers minds, and shapes the future. Let us embrace the journey of learning with curiosity, dedication, and a commitment to excellence, for it is through education that we illuminate the path towards a brighter tomorrow.",
  },
];

// Floating particle component
const FloatingParticle = ({ delay, size = 4 }: { delay: number; size?: number }) => (
  <motion.div
    className="absolute rounded-full bg-gold/30"
    style={{
      width: size,
      height: size,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -40, 0],
      x: [0, Math.random() * 20 - 10, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 4 + Math.random() * 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Animated ring component
const PulsingRing = ({ delay, size }: { delay: number; size: string }) => (
  <motion.div
    className={`absolute inset-0 rounded-full border-2 border-gold/40 ${size}`}
    initial={{ scale: 1, opacity: 0.6 }}
    animate={{
      scale: [1, 1.3, 1.5],
      opacity: [0.6, 0.3, 0],
    }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const LeadershipQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % leaders.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);

  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const quoteWordVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.8 + i * 0.02,
        duration: 0.4,
      },
    }),
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920')`,
          y: backgroundY,
        }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/85" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.3} size={3 + Math.random() * 4} />
        ))}
      </div>

      {/* Animated light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-gold/0 via-gold/20 to-gold/0"
          animate={{ x: [0, 100, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-gold/0 via-gold/20 to-gold/0"
          animate={{ x: [0, -80, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-8 h-8 text-gold" />
          </motion.div>
          
          <div className="flex items-center justify-center gap-6 mb-6">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold to-gold origin-right"
            />
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground overflow-hidden">
              {"Words of Wisdom".split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block"
                  style={{ marginRight: char === " " ? "0.3em" : "0" }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
            
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[2px] w-20 bg-gradient-to-l from-transparent via-gold to-gold origin-left"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-medium"
          >
            From Our Leadership
          </motion.p>
        </div>

        {/* Desktop: Two Cards Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 80, rotateY: index === 0 ? -15 : 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ 
                delay: 0.4 + index * 0.3, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: "0 30px 60px -20px rgba(212, 175, 55, 0.3)"
              }}
              className="relative bg-gradient-to-br from-card/20 via-card/10 to-transparent backdrop-blur-lg rounded-3xl p-10 border border-gold/20 group overflow-hidden"
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0", "-200% 0"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative flex flex-col items-center text-center">
                {/* Photo with animated rings */}
                <motion.div
                  className="relative mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Pulsing rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PulsingRing delay={0} size="w-48 h-48" />
                    <PulsingRing delay={0.8} size="w-48 h-48" />
                    <PulsingRing delay={1.6} size="w-48 h-48" />
                  </div>
                  
                  {/* Rotating gradient border */}
                  <motion.div
                    className="absolute -inset-2 rounded-full"
                    style={{
                      background: "conic-gradient(from 0deg, hsl(var(--gold)), hsl(var(--primary)), hsl(var(--gold)), transparent, hsl(var(--gold)))",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      delay: 0.6 + index * 0.3, 
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="relative w-44 h-44 rounded-full overflow-hidden ring-4 ring-background shadow-2xl"
                  >
                    <motion.img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: "-100%", y: "-100%" }}
                      whileHover={{ x: "100%", y: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </motion.div>

                {/* Animated Quote Mark */}
                <motion.div
                  initial={{ scale: 0, opacity: 0, rotate: -45 }}
                  animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.3, type: "spring" }}
                  className="relative mb-4"
                >
                  <Quote className="w-10 h-10 text-gold" />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Quote className="w-10 h-10 text-gold" />
                  </motion.div>
                </motion.div>

                {/* Animated Quote Text */}
                <div className="mb-6 overflow-hidden">
                  <p className="text-secondary-foreground/90 text-base leading-relaxed italic">
                    "
                    {leader.quote.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={quoteWordVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                    "
                  </p>
                </div>

                {/* Name & Title with reveal animation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.2 + index * 0.3 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -inset-4 bg-gold/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="relative font-heading text-xl font-bold text-secondary-foreground mb-2">
                    {leader.name}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "3rem" } : {}}
                      transition={{ delay: 1.4 + index * 0.3, duration: 0.6 }}
                      className="h-0.5 bg-gradient-to-r from-transparent to-gold"
                    />
                    <span className="text-gold font-medium tracking-wide">{leader.title}</span>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "3rem" } : {}}
                      transition={{ delay: 1.4 + index * 0.3, duration: 0.6 }}
                      className="h-0.5 bg-gradient-to-l from-transparent to-gold"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Enhanced Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-gradient-to-br from-card/20 via-card/10 to-transparent backdrop-blur-lg rounded-3xl p-8 border border-gold/20"
              >
                <div className="text-center">
                  {/* Photo with effects */}
                  <motion.div
                    className="relative inline-block mb-6"
                  >
                    <motion.div
                      className="absolute -inset-2 rounded-full"
                      style={{
                        background: "conic-gradient(from 0deg, hsl(var(--gold)), hsl(var(--primary)), hsl(var(--gold)))",
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-background"
                    >
                      <img
                        src={leaders[currentIndex].image}
                        alt={leaders[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Quote className="w-8 h-8 text-gold mx-auto mb-4" />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-secondary-foreground/90 text-sm leading-relaxed mb-6 italic"
                  >
                    "{leaders[currentIndex].quote}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <p className="font-heading text-lg font-bold text-secondary-foreground">
                      {leaders[currentIndex].name}
                    </p>
                    <span className="text-gold text-sm font-medium">{leaders[currentIndex].title}</span>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-gold/30 transition-colors border border-gold/30"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <div className="flex items-center gap-3">
              {leaders.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  whileHover={{ scale: 1.2 }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex 
                      ? "bg-gold w-8 shadow-lg shadow-gold/50" 
                      : "bg-secondary-foreground/30 w-2 hover:bg-secondary-foreground/50"
                  }`}
                />
              ))}
            </div>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-gold/30 transition-colors border border-gold/30"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipQuotes;
