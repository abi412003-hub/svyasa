import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BookOpen, Bookmark, Users, Armchair, Clock } from "lucide-react";
import libraryImg1 from "@/assets/library-students-3.jpg";
import libraryImg2 from "@/assets/library-overview.jpg";
import libraryImg3 from "@/assets/library-students-1.jpg";
import { libraryStats, libraryTimings } from "./libraryData";

const iconMap: Record<string, React.ElementType> = {
  book: BookOpen,
  bookmark: Bookmark,
  users: Users,
  armchair: Armchair,
};

const AnimatedCounter = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const LibraryOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const currentDay = new Date().getDay();
  const isWeekday = currentDay >= 1 && currentDay <= 5;
  const isSaturday = currentDay === 6;

  const welcomeParagraphs = [
    "At present the library has a collection of over 2,846 Volumes with 641 Titles. It has magazines and daily newspapers. It caters to the needs of more than 500+ undergraduate, postgraduate staff and students. The library is fully automated; it has one spacious reading hall and can accommodate 150 users at any time. The library is growing continuously on an everyday basis.",
    "It plays a proactive role in enabling access to information resources of all kind and providing innovative, responsive and effective services to meet the changing needs of the students, faculty and researchers in their intellectual pursuits. It is a centralized and automated library predominantly related to Engineering, Technology & allied subjects. The major objective of our library is to provide 'Right Information to the Right Reader at the Right Time.'",
    "The library operations are managed by the latest version of Koha (Integrated Library Management System Software). The library is upgraded with barcode Technology. The library is well equipped with all the modern facilities — books, magazines, etc. Online Public Access Catalogue is accessible all over the campus. The library follows the 23rd Edition of Dewey Decimal Scheme of Classification, MARC-21 format for bibliographic data. Books are arranged on the shelves in numerical order from 000-999.",
  ];

  return (
    <div ref={ref} className="space-y-12">
      {/* Welcome Block */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-3xl md:text-4xl font-display text-navy"
            >
              {"Welcome to S-VYASA University Library".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg italic text-gold font-medium"
            >
              A Gateway to Knowledge Resources
            </motion.p>
            
            {/* Book Icon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="py-4"
            >
              <svg className="w-16 h-16 text-primary" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.path
                  d="M8 12 L8 52 L32 44 L56 52 L56 12 L32 20 L8 12"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.path
                  d="M32 20 L32 44"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                />
              </svg>
            </motion.div>
          </div>

          {welcomeParagraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + i * 0.15 }}
              className="text-muted-foreground leading-relaxed"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Library Images */}
        <div className="space-y-4">
          {[1, 2, 3].map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.2 }}
              className="relative overflow-hidden rounded-xl group"
            >
              <motion.img
                src={n === 1 ? libraryImg1 : n === 2 ? libraryImg2 : libraryImg3}
                alt={`Library ${n}`}
                className="w-full h-40 object-cover transition-transform duration-[10000ms]"
                whileHover={{ scale: 1.08 }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-cream rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {libraryStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md"
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  className="w-12 h-12 mx-auto mb-3 text-primary"
                >
                  <Icon className="w-full h-full" strokeWidth={1.5} />
                </motion.div>
                <div className="text-3xl font-bold text-navy mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Library Timings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.4 }}
        className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-primary"
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Clock className="w-6 h-6 text-primary" />
            </motion.div>
            <h3 className="text-xl font-display text-navy">Library Timings</h3>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-navy text-white">
              <tr>
                <th className="px-6 py-3 text-left font-medium">Days</th>
                <th className="px-6 py-3 text-left font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {libraryTimings.map((row, i) => {
                const isActive =
                  (row.days === "Monday to Saturday" && (isWeekday || isSaturday)) ||
                  (row.days === "During Exam" && false);

                return (
                  <motion.tr
                    key={row.days}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.5 + i * 0.08 }}
                    className={`border-b border-border ${
                      isActive ? "bg-primary/5 ring-1 ring-primary/20" : i % 2 === 0 ? "bg-white" : "bg-cream/50"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-navy">{row.days}</td>
                    <td className="px-6 py-4">
                      {row.isHoliday ? (
                        <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                          Holiday
                        </span>
                      ) : (
                        <span className="text-muted-foreground">{row.time}</span>
                      )}
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default LibraryOverview;
