import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { facultyData } from "@/data/trainingData";

const FacultyCard = ({ person, delay }: { person: { name: string; designation: string; brief: string; tags: string[] }; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-card rounded-xl border border-border/50 p-5 hover:shadow-medium transition-shadow"
  >
    <div className="w-14 h-14 rounded-full bg-secondary text-white flex items-center justify-center text-lg font-bold mb-3">
      {person.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
    </div>
    <h3 className="font-heading font-semibold text-foreground">{person.name}</h3>
    <p className="text-gold text-xs font-medium mb-2">{person.designation}</p>
    <p className="text-muted-foreground text-xs mb-3">{person.brief}</p>
    <div className="flex flex-wrap gap-1">
      {person.tags.map((tag) => (
        <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">{tag}</span>
      ))}
    </div>
  </motion.div>
);

const sections = [
  { title: "Core Faculty", subtitle: "Faculty from S-VYASA University", data: facultyData.core },
  { title: "Visiting Experts", subtitle: "Domain experts from partner institutions", data: facultyData.visiting },
  { title: "Industry & PSU Trainers", subtitle: "Specializing in government and corporate wellness", data: facultyData.industry },
];

const TrainingFaculty = () => (
  <>
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/50 text-xs mb-3">
          <Link to="/training" className="hover:text-gold transition-colors">Home</Link> &gt; Faculty
        </p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-white font-bold">
          Our Faculty & Resource Persons
        </motion.h1>
      </div>
    </section>

    {sections.map((section) => (
      <section key={section.title} className="py-14 bg-background even:bg-[hsl(40,100%,97%)]">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-1">{section.title}</h2>
          <p className="text-muted-foreground text-sm mb-8">{section.subtitle}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {section.data.map((person, i) => (
              <FacultyCard key={person.name} person={person} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
    ))}
  </>
);

export default TrainingFaculty;
