import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "undergraduate", label: "UNDERGRADUATE" },
  { id: "postgraduate", label: "POSTGRADUATE" },
  { id: "phd", label: "Ph.D" },
  { id: "allied", label: "ALLIED SCIENCE" },
];

const programs = {
  undergraduate: [
    { name: "Bachelor of Computer Applications (BCA)", link: "/admissions?p=BCA" },
    { name: "Bachelor of Science (B.Sc.)", link: "/admissions?p=BSC" },
    { name: "Bachelor of Technology (B.Tech.)", link: "/admissions?p=BTECH" },
    { name: "Bachelor of Commerce (B.Com)", link: "/admissions?p=BCOM" },
    { name: "Bachelor of Business Administration (BBA)", link: "/admissions?p=BBA" },
  ],
  postgraduate: [
    { name: "Master of Computer Applications (MCA)", link: "/admissions?p=MCA" },
    { name: "M.Sc. Computer Science", link: "/admissions?p=MSC" },
    { name: "Master of Business Administration (MBA)", link: "/admissions?p=MBA" },
  ],
  phd: [
    { name: "Ph.D — Computer Science", link: "/programs/phd-computer-science" },
    { name: "Ph.D — Computer Science and Engineering", link: "/programs/phd-cse" },
    { name: "Ph.D — Management and Commerce", link: "/programs/phd-management" },
    { name: "Ph.D — Applied Sciences", link: "/programs/phd-applied-sciences" },
    { name: "Ph.D — Allied Sciences", link: "/programs/phd-allied-sciences" },
  ],
  allied: [
    { name: "Bachelor of Occupational Therapy", link: "/programs/bot" },
    { name: "Ph.D — Allied Sciences", link: "/programs/phd-allied-sciences" },
    { name: "B.Sc. Clinical Psychology", link: "/programs/bsc-clinical-psychology" },
    { name: "M.Sc. Clinical Psychology", link: "/programs/msc-clinical-psychology" },
  ],
};

const GCCPrograms = () => {
  const [activeTab, setActiveTab] = useState("undergraduate");

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {"Explore Programs".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            What's Your Interest?
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>

        {/* Tab bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-white scale-105 shadow-lg"
                  : "bg-white text-secondary border-2 border-secondary/20 hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Program list */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {programs[activeTab as keyof typeof programs].map((program, index) => (
                  <motion.a
                    key={program.name}
                    href={program.link}
                    className="group flex items-center justify-between p-4 bg-white rounded-xl border border-border hover:bg-cream transition-all duration-300 hover:border-primary/30"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <span className="text-secondary font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {program.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.div
                        className="w-0 h-0.5 bg-primary group-hover:w-8 transition-all duration-300"
                      />
                      <ChevronRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* View all button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                asChild
              >
                <a href="/admissions?campus=global">
                  View All Programs
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileInView={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/images/campus/research-lab_research-lab3.jpeg"
                alt="Students collaborating"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GCCPrograms;
