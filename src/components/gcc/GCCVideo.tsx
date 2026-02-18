import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const accreditations = [
  { name: "NAAC A+", image: "/images/campus/p3-admin-exteriors_131.jpg" },
  { name: "UGC", image: "/images/campus/p3-admin-exteriors_131.jpg" },
  { name: "KSURF 4-Star", image: "/images/campus/p3-admin-exteriors_131.jpg" },
];

const GCCVideo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, rotateY: 5, x: -30 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
              <img
                src="/images/campus/p3-admin-exteriors_128.jpg"
                alt="S-VYASA University"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Pulse rings */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full bg-primary/30"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  {/* Button */}
                  <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
          </motion.div>

          {/* Text section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              S-VYASA
            </motion.span>

            <p className="text-sm uppercase tracking-[3px] text-muted-foreground mb-2">
              About Us
            </p>

            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-secondary mb-6">
              S-VYASA Global City Campus
            </h2>

            <motion.p
              className="text-muted-foreground leading-relaxed mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Discover the transformative power of education. Explore diverse programs, from undergraduate to Ph.D, that blend tradition with modern advancements at S-VYASA (Deemed To Be University). We prepare you to launch your career by providing a supportive, creative and professional environment from which to learn practical skills, build a network of industry contacts and gain real-world experience.
            </motion.p>

            {/* Accreditation badges */}
            <div className="flex flex-wrap gap-4">
              {accreditations.map((badge, index) => (
                <motion.div
                  key={badge.name}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/5 rounded-lg border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">✓</span>
                  </div>
                  <span className="font-medium text-secondary text-sm">{badge.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl mx-4 aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
                onClick={() => setIsVideoOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
              <div className="w-full h-full bg-secondary rounded-lg flex items-center justify-center">
                <p className="text-white/70">Video player placeholder</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GCCVideo;
