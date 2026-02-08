import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    title: "P3&Admin Interiors",
    animation: "slideUp",
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    title: "AHSCON Day-2",
    animation: "scaleIn",
  },
  {
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    title: "AHSCON Day-1",
    animation: "fadeRotate",
  },
  {
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
    title: "Inaugural Event",
    animation: "slideUp",
  },
  {
    image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600&q=80",
    title: "Grand Unveiling: S-VYASA Deemed to be University Inauguration",
    animation: "scaleIn",
  },
  {
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80",
    title: "A Vision for the Future",
    animation: "fadeRotate",
  },
  {
    image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80",
    title: "Anti Drug Awareness",
    animation: "slideUp",
  },
  {
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80",
    title: "Vidyut Jammwal Inspires SVYASA Students",
    animation: "scaleIn",
  },
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80",
    title: "Deeksharambh",
    animation: "fadeRotate",
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    title: "Teachers Day",
    animation: "slideUp",
  },
  {
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80",
    title: "S-Vyasa Meet 2024",
    animation: "scaleIn",
  },
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    title: "Yoga Day Celebration",
    animation: "fadeRotate",
  },
];

const animationVariants = {
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeRotate: {
    hidden: { opacity: 0, rotate: -3 },
    visible: { opacity: 1, rotate: 0 },
  },
};

const PKNews = () => {
  const [selectedImage, setSelectedImage] = useState<typeof newsItems[0] | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading with wave animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">
            {"NEWS & EVENTS".split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{
                height: index % 3 === 0 ? "300px" : index % 3 === 1 ? "250px" : "280px",
              }}
              variants={animationVariants[item.animation as keyof typeof animationVariants]}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onClick={() => setSelectedImage(item)}
            >
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <h3 className="text-white font-semibold text-sm md:text-base mb-2">
                    {item.title}
                  </h3>
                  <span className="text-accent text-sm">Read more &gt;&gt;&gt;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <div className="p-6 bg-white">
                  <h3 className="font-playfair text-xl font-bold text-secondary">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PKNews;
