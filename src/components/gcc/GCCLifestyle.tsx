import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GCCLifestyle = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-primary text-sm font-semibold uppercase tracking-[3px] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              LIFE @S-VYASA
            </motion.span>

            <motion.h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {"Inspiring Minds, Shaping Futures, and Building Leaders.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We empower individuals with knowledge and skills, shaping future leaders through education, innovation, and personal growth to create a lasting impact.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", bounce: 0.4 }}
            >
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                asChild
              >
                <a href="/campus-life">
                  Campus Life
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image mosaic */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/campus/prashanti-campus_campus1.jpg"
                    alt="Campus life"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Decorative gold frame */}
                <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-accent/30 rounded-2xl -z-10" />
              </motion.div>

              <motion.div
                className="relative group mt-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/campus/research-lab_research-lab3.jpeg"
                    alt="Students collaborating"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* University link */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-medium"
          >
            SVYASA University
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GCCLifestyle;
