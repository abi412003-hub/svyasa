import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video-new.mp4";

const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-gold/60 rounded-full"
    initial={{ 
      x: Math.random() * 100 + "%", 
      y: "110%",
      opacity: 0 
    }}
    animate={{
      y: "-10%",
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 8 + Math.random() * 4,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      left: `${Math.random() * 100}%`,
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-3 mb-6"
            >
              <span className="px-4 py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-sm font-medium rounded-full border border-gold/30">
                NAAC 'A' Grade
              </span>
              <span className="px-4 py-1.5 bg-gold/20 backdrop-blur-sm text-gold-light text-sm font-medium rounded-full border border-gold/30">
                UGC Recognized
              </span>
            </motion.div>

            {/* Title - initial */}
            <motion.h1
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 24, duration: 1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-shadow-lg leading-tight absolute"
            >
              Where Ancient Wisdom Meets Modern Science
            </motion.h1>

            {/* Title - after 24s */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 24, duration: 1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-shadow-lg leading-tight"
            >
              Education Meets Industry
            </motion.h1>

            {/* Subtitle - initial */}
            <motion.p
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 24, duration: 1 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-shadow absolute"
            >
              India's Premier Yoga University since 2002
            </motion.p>

            {/* Subtitle - after 24s */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 24, duration: 1 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-shadow"
            >
              A University Inside a Tech Park
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-saffron hover:scale-105 transition-all duration-300 text-lg px-8"
              >
                Explore Programs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground transition-all duration-300 text-lg px-8"
              >
                Virtual Tour
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-primary-foreground/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
