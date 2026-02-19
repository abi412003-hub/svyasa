import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { libraryStaff } from "./libraryData";
import libraryStudents2 from "@/assets/library-students-2.jpg";
import libraryDesk1 from "@/assets/library-desk-1.jpg";
import libraryDesk2 from "@/assets/library-desk-2.jpg";

const LibraryStaff = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-display text-navy mb-3">Library Staff</h2>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {libraryStaff.map((staff, i) => (
          <motion.div
            key={staff.name}
            initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.2, type: "spring", bounce: 0.3 }}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all"
          >
            {/* Photo with ring */}
            <div className="relative w-36 h-36 mx-auto mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.2 }}
                className="absolute inset-0 rounded-full border-4 border-primary/30 group-hover:border-primary transition-colors"
                style={{
                  background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--gold)), hsl(var(--primary)))",
                  padding: "4px",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                animate={isInView ? { clipPath: "circle(50% at 50% 50%)" } : {}}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                className="absolute inset-2 rounded-full overflow-hidden bg-cream"
              >
                <img
                  src={`https://images.unsplash.com/photo-${i === 0 ? "1472099645785-5658abf4ff4e" : "1494790108377-be9c29b29330"}?w=200&q=80`}
                  alt={staff.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Info */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.2 }}
              className="text-xl font-display text-navy mb-2"
            >
              {staff.name}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.2 }}
              className="text-sm text-muted-foreground mb-1"
            >
              {staff.qualifications}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.75 + i * 0.2 }}
              className="text-primary font-medium mb-4"
            >
              {staff.designation}
            </motion.p>
            <motion.a
              href={`mailto:${staff.email}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.2 }}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/email"
            >
              <Mail className="w-4 h-4" />
              <span className="group-hover/email:underline">{staff.email}</span>
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Photo Gallery Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-3 gap-3 rounded-2xl overflow-hidden"
      >
        {[libraryStudents2, libraryDesk1, libraryDesk2].map((img, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden h-48 group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={img}
              alt={`Library view ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
          </motion.div>
        ))}
      </motion.div>

      {/* Link to Prashanthi Campus Library */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="text-center pt-8"
      >
        <Link
          to="/library-prashanthi"
          className="group inline-flex items-center gap-2 text-lg font-medium text-navy hover:text-primary transition-colors"
        >
          Also visit: Prashanthi Campus Library
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};

export default LibraryStaff;
