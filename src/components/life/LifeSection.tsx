import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface LifeSectionData {
  id: string;
  title: string;
  paragraphs: string[];
  images: string[];
  links?: { label: string; href: string }[];
  iconPath: string;
  bgColor: "white" | "cream";
}

interface LifeSectionProps {
  data: LifeSectionData;
  index: number;
  imagePosition: "left" | "right";
}

const LifeSection = ({ data, index, imagePosition }: LifeSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageScales, setImageScales] = useState([1, 1]);

  // Continuous image zoom effect
  useEffect(() => {
    const interval = setInterval(() => {
      setImageScales((prev) => [
        prev[0] >= 1.05 ? 1 : prev[0] + 0.0005,
        prev[1] >= 1.05 ? 1 : prev[1] + 0.0005,
      ]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const textContent = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "right" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="space-y-6"
    >
      {/* Decorative Icon */}
      <motion.div
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        className="w-12 h-12 text-primary"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <motion.path
            d={data.iconPath}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </svg>
      </motion.div>

      {/* Title */}
      <div>
        <h2 className="text-3xl md:text-4xl font-display text-navy mb-2">
          {data.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-20 h-1 bg-gold"
        />
      </div>

      {/* Paragraphs */}
      {data.paragraphs.map((para, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          className="text-muted-foreground leading-relaxed"
        >
          {para}
        </motion.p>
      ))}

      {/* Links */}
      {data.links && data.links.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-2">
          {data.links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring", bounce: 0.4 }}
            >
              <Link
                to={link.href}
                className="inline-flex items-center gap-2 text-primary font-medium group hover:text-primary/80 transition-colors"
              >
                {link.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "right" ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
    >
      {/* Stacked Images */}
      <div className="relative h-[400px] md:h-[500px]">
        {data.images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={`absolute overflow-hidden rounded-xl shadow-lg group cursor-pointer ${
              i === 0
                ? "top-0 left-0 w-[85%] h-[60%] z-10"
                : "bottom-0 right-0 w-[75%] h-[55%] z-20"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `url('${img}')`,
                transform: `scale(${imageScales[i]})`,
              }}
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      className={`py-20 ${data.bgColor === "cream" ? "bg-cream" : "bg-white"}`}
    >
      {/* Section Divider */}
      {index > 0 && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-primary mx-auto mb-16"
        />
      )}

      <div className="container mx-auto px-4">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            imagePosition === "left" ? "lg:grid-flow-dense" : ""
          }`}
        >
          {imagePosition === "left" ? (
            <>
              <div className="lg:col-start-1">{imageContent}</div>
              <div className="lg:col-start-2">{textContent}</div>
            </>
          ) : (
            <>
              <div>{textContent}</div>
              <div>{imageContent}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LifeSection;
