import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { applicationSteps } from "./careersData";
import { Search, FileText, Send } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  search: <Search className="w-8 h-8" />,
  document: <FileText className="w-8 h-8" />,
  send: <Send className="w-8 h-8" />,
};

const ApplicationProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display text-navy mb-4">
            How to Apply
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-20 h-1 bg-gold mx-auto"
          />
        </motion.div>

        {/* Steps */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-0.5 bg-border">
            <motion.div
              className="h-full bg-primary origin-left"
              style={{ width: lineWidth }}
            />
          </div>

          {/* Connecting Line - Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-0.5 bg-border">
            <motion.div
              className="w-full bg-primary origin-top"
              style={{ height: lineWidth }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.5 }}
                className="flex md:flex-col items-start md:items-center text-left md:text-center"
              >
                {/* Circle with Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.2,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-primary border-4 border-cream">
                    {icons[step.icon]}
                  </div>
                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                    className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-md"
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="ml-5 md:ml-0 md:mt-6">
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
