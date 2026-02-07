import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import chancellorPortrait from "@/assets/chancellor-portrait.png";
import vcPortrait from "@/assets/vc-portrait.jpg";

const leaders = [
  {
    name: "Dr. HR Dayanand Swamy",
    title: "Chancellor",
    image: chancellorPortrait,
    quote:
      "Education is not merely about acquiring knowledge, it's about nurturing the mind, body and soul. It should empower individuals to realise their fullest potential and contribute positively to society. Let us strive for an education system that fosters holistic development and instills values of compassion, wisdom and innovation.",
  },
  {
    name: "Dr. Manjunath NK",
    title: "Vice Chancellor",
    image: vcPortrait,
    quote:
      "Education is the cornerstone of progress and the key to unlocking one's true potential. It transcends boundaries, empowers minds, and shapes the future. Let us embrace the journey of learning with curiosity, dedication, and a commitment to excellence, for it is through education that we illuminate the path towards a brighter tomorrow.",
  },
];

const LeadershipQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % leaders.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-secondary/85 backdrop-blur-sm" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              className="h-px w-16 bg-gold origin-right"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground"
            >
              Words of Wisdom
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              className="h-px w-16 bg-gold origin-left"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gold uppercase tracking-widest text-sm font-medium"
          >
            From Our Leadership
          </motion.p>
        </div>

        {/* Desktop: Two Cards Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-card/10 backdrop-blur-md rounded-2xl p-8 border border-secondary-foreground/10 group"
            >
              {/* Photo */}
              <div className="flex items-start gap-6">
                <motion.div
                  className="relative shrink-0"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-gold/50 group-hover:ring-gold transition-all"
                    style={{ clipPath: "circle(50%)" }}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>

                <div className="flex-1">
                  {/* Quote Mark */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, type: "spring" }}
                  >
                    <Quote className="w-8 h-8 text-gold mb-2 animate-float" />
                  </motion.div>

                  {/* Quote Text */}
                  <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-4 italic">
                    "{leader.quote}"
                  </p>

                  {/* Name & Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2 }}
                  >
                    <p className="font-heading text-lg font-semibold text-secondary-foreground">
                      {leader.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "2rem" } : {}}
                        transition={{ delay: 1 + index * 0.2 }}
                        className="h-0.5 bg-gold"
                      />
                      <span className="text-gold text-sm">{leader.title}</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
                className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-secondary-foreground/10"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-2 ring-gold/50 mb-4"
                  >
                    <img
                      src={leaders[currentIndex].image}
                      alt={leaders[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <Quote className="w-6 h-6 text-gold mx-auto mb-3" />

                  <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-4 italic">
                    "{leaders[currentIndex].quote}"
                  </p>

                  <p className="font-heading text-lg font-semibold text-secondary-foreground">
                    {leaders[currentIndex].name}
                  </p>
                  <span className="text-gold text-sm">{leaders[currentIndex].title}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-secondary-foreground/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {leaders.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-gold w-6" : "bg-secondary-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-secondary-foreground/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipQuotes;
