import { motion, useInView, Variants } from "framer-motion";
import lab1Img from "@/assets/labs/lab-1-molecular.jpg";
import lab2Img from "@/assets/labs/lab-2-psychophysiology.jpg";
import lab3Img from "@/assets/labs/lab-3-cognitive.png";
import lab4Img from "@/assets/labs/lab-4-psychology.jpg";
import lab5Img from "@/assets/labs/lab-5-bio.jpg";
import { ChevronDown, FlaskConical, Brain, Activity, BookOpen, Zap, CheckCircle2, Cpu } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";

/* ── Variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const slideRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ── Types ── */
interface FacultyMember {
  name: string;
  designation: string;
  photo: string;
}

interface LabData {
  id: number;
  icon: React.ElementType;
  name: string;
  shortName: string;
  description: string;
  objectives: string[];
  equipment: string[];
  faculty: FacultyMember[];
  accentColor: string;
  bgColor: string;
}

/* ── Lab Data ── */
const labs: LabData[] = [
  {
    id: 1,
    icon: FlaskConical,
    name: "Molecular Bioscience Laboratory",
    shortName: "Lab 01",
    description:
      "The Molecular Bioscience laboratory is dedicated for understanding the important biological processes at the molecular level – with the goal of using this knowledge to tackle major problems in human health and disease. The Molecular Biosciences laboratory is an exclusive facility which focuses on the molecular basis of the effect of yogic practices. The techniques that are pioneered in our laboratory include DNA sequencing, microarrays, flow cytometry, fluorescent microscopy, high performance liquid chromatography, chemiluminescence, and 2D electrophoresis to name a few. The Molecular Bioscience group is working to understand the influence of yoga at the biochemical, genomic and proteomic levels in states of health and various diseases especially non-communicable diseases (NCDs). This work is likely to lead to a better understanding of the yoga practices which we hope to involve in the regulation of genes and interactions of proteins inside the cell.",
    objectives: [
      "To understand molecular dynamics of non-communicable diseases",
      "To understand the molecular mechanisms underlying stress",
      "Alleviation of complications of NCD's through yoga practices",
    ],
    equipment: [
      "Next Generation Sequencing – Ion Torrent PGM",
      "Flow Cytometer – BD FACS Verse",
      "RT-PCR – Applied Biosystem 7500",
      "Microarray – Agilent Technologies",
      "Plate Reader – Perkin Elmer",
      "HPLC – for Protein Purification & Extraction",
      "Fluorescent Microscope – EVOS FL",
    ],
    faculty: [
      { name: "Dr. Ramesh M N", designation: "Director, Anvesana Research Labs, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/10/88.jpg" },
      { name: "Dr. Vijaya Majumdar", designation: "Associate Professor, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/90.jpg" },
      { name: "Dr. Mithila M V", designation: "Associate Professor, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/84.jpg" },
      { name: "Dr. Rajesh Nair", designation: "Assistant Professor, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/87.jpg" },
      { name: "Dr. Deepshikha S", designation: "Assistant Professor, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/81.jpg" },
      { name: "Dr. Pradeep S R", designation: "Research Associate, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/12/85.jpg" },
      { name: "Dr. Shilpa M", designation: "Senior Research Fellow, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/12/89.jpg" },
      { name: "Ms Anbarasi P", designation: "Senior Research Fellow, BTech, MSc", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/12/94.jpg" },
      { name: "Ms. Riya Dutta", designation: "Junior Research Fellow, MSc", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/12/96.jpg" },
      { name: "Mr Prosenjeet C", designation: "Junior Research Fellow, MSc", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/12/93.jpg" },
    ],
    accentColor: "hsl(var(--teal))",
    bgColor: "bg-white",
  },
  {
    id: 2,
    icon: Activity,
    name: "Psychophysiology Laboratory",
    shortName: "Lab 02",
    description:
      "This laboratory leads in the forefront of autonomic and metabolic functions testing. To name a few key contributions, an overall parasympathetic predominance and a considerable reduction in metabolic rate & oxygen consumption in yoga practitioners were demonstrated from this lab. Also, the capability of the autonomic nervous system to respond to stressful stimuli without getting stressed following yoga practices reported from this laboratory has gained great attention. Over recent years, it has significantly advanced the understanding of autonomic modulations resulting from yoga practices. The laboratory assesses the functions of the autonomic nervous system across different mental states, meditation, and breathing practices. The psychophysiology laboratory includes (i) Autonomic function testing lab (ii) Exercise physiology lab and (iii) Sleep lab.",
    objectives: [
      "To understand the regulatory effect of yoga practices on autonomic nervous system in normal and various pathologies",
      "To understand the metabolic changes during yoga practices",
      "To understand the sleep architecture and sleep quality",
    ],
    equipment: [
      "16 Channel Polygraph with telemetry facility",
      "Metabolic and Pulmonary functions testing system",
      "Continuous Non-Invasive Blood Pressure (NIBP), Finometer MIDI",
      "4 Channel portable Polygraph",
      "55 channel polysomnography system – Philips Respironics Alice 5",
    ],
    faculty: [
      { name: "Dr. K.S. Dhamodhini", designation: "Assistant Professor, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/92.jpg" },
    ],
    accentColor: "hsl(var(--saffron))",
    bgColor: "bg-[#F7F5F0]",
  },
  {
    id: 3,
    icon: Brain,
    name: "Cognitive Neuroscience Laboratory",
    shortName: "Lab 03",
    description:
      "The cognitive neuroscience laboratory through its multidisciplinary approach studies the neural underpinnings of human behavior, primarily using 128 channel dense EEG, and Evoked Potentials, functional Near Infrared Spectroscopy (fNIRS). The cognitive neuroscience research group targets to ascertain the role of yoga as a mind-body intervention in regulating the neural processes influencing cognition pertaining to various mental states. Recent studies from this group with f-MRI & dense array EEG has identified increased activity of cortical areas associated with working memory, and attention following cyclic meditation. Our dedicated team is at the forefront of investigating the transformative effects of yoga on the brain.",
    objectives: [
      "Understanding the basic neural processes that underlie complex higher order cognitive operations.",
      "Understanding the functional and neural mechanisms of cognitive processes related to yoga practices.",
      "Understand event related potentials [ERPs] while performing attention tasks related to yoga practices.",
    ],
    equipment: [
      "128 Channel Electro Encephalogram (EEG)",
      "64 Channel Functional Near Infrared Spectroscopy (fNIRS)",
      "Functional Transcranial Doppler Sonography (TCD)",
      "16 Channel Evoked Potential system",
    ],
    faculty: [
      { name: "Dr. Krishna D", designation: "Assistant Professor, PhD", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/82.jpg" },
    ],
    accentColor: "hsl(var(--navy))",
    bgColor: "bg-white",
  },
  {
    id: 4,
    icon: BookOpen,
    name: "Psychology Laboratory",
    shortName: "Lab 04",
    description:
      "Psychology lab attempts at standardizing tools and designing theoretical frameworks from traditional knowledge, to address the specific needs of yoga research. The laboratory hosts a spectrum of facilities to assess cognition, physical abilities, professional skills using computerized tests. The laboratory has shown evidences to bring out the efficacy of yoga in performance, and cognitive abilities, following traditional Indian systems of education. Recently implicit tools were used to study inherent attitudes and preferences in yoga population. The laboratory is working further to develop specific tools for assessment for yoga research integrating the western methodologies and the concepts of Indian psychology.",
    objectives: [
      "Understanding and development of human psychological strengths",
      "Developing & standardizing the psychological measurement for AYUSH systems of medicine",
      "To measure mental processes from simple motor performance to complex problem-solving skill",
      "To understand cause and management of psychological disorder from the perspective of traditional knowledge",
    ],
    equipment: [
      "INQUISIT Software – platform for designing and administering psychological tests and experiments",
      "Instruments to assess Motor Function, Perception, Executive Function",
      "Attention, Intelligence, Memory & Creativity tools",
      "Personality Assessment instruments",
    ],
    faculty: [
      { name: "Mr. Murugesh K", designation: "Clinical Psychologist, MSc", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/97.jpg" },
    ],
    accentColor: "hsl(var(--teal))",
    bgColor: "bg-[#F7F5F0]",
  },
  {
    id: 5,
    icon: Zap,
    name: "Bio-Energy Laboratory",
    shortName: "Lab 05",
    description:
      "The Bio-Energy laboratory explores subtle energy aspects of biological and inanimate systems. The facilities of the lab include Electrophotonic Imaging a Kirlian principle based system for subtle energy measurements; Acugrapha electrodermal assessment based on Chinese traditional medicine system; Nadi Tarangini – an indigenous pulse based diagnostic system for assessment of tridosha (vata, pitta, kapha) based on Ayurveda principle; and Random Event Generator to study the influence of human mind on the hypothetical consciousness field. Recognizing the need for standardization of subtle energy measuring instruments, initial work involved experiments to validate these instruments. Future directions include developing ability to assess a person's state of health using non-invasive subtle energy tools, complementing modern methods of diagnosis, resulting in early detection of disease.",
    objectives: [
      "To track scientifically the subtle human energy field",
      "To establish scientific evidences for scriptural concepts like Aadhi and Vyadhi",
      "To cater to the clinical need of patients with various ailments, especially earlier diagnosis of disease before its physical manifestation.",
    ],
    equipment: [
      "Gas Discharge Visualization (GDV)",
      "Bio-well",
      "Acugraph",
      "Random Event Generator",
    ],
    faculty: [
      { name: "Mr. Satya Prakash Sharma", designation: "Statistician, MSc", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/98.jpg" },
      { name: "Ms. Kavya Urs", designation: "Research Assistant, MSc", photo: "https://www.svyasa.edu.in/admin/photo/1/faculty/11/95.jpg" },
    ],
    accentColor: "hsl(var(--saffron))",
    bgColor: "bg-white",
  },
];

/* ── Faculty Card ── */
function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <Link to="/research/faculty" className="flex flex-col items-center text-center group w-40 md:w-48 shrink-0">
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-border group-hover:border-[hsl(var(--saffron))] transition-colors duration-200 shadow-md mb-3">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a3d6b&color=fff&size=160`;
          }}
        />
      </div>
      <p className="text-[hsl(var(--navy))] font-semibold text-sm leading-tight mb-1">{member.name}</p>
      <p className="text-[hsl(var(--muted-foreground))] text-xs leading-tight">{member.designation}</p>
    </Link>
  );
}

/* ── Lab Section ── */
function LabSection({ lab, index }: { lab: LabData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <section className={`py-16 md:py-20 ${lab.bgColor}`}>
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Lab header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
        >
          <motion.div
            variants={fadeUp}
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: lab.accentColor }}
          >
            <lab.icon className="text-white" size={22} />
          </motion.div>
          <div>
            <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: lab.accentColor }}>
              {lab.shortName}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold">
              {lab.name}
            </motion.h2>
          </div>
        </motion.div>

        {/* Description + placeholder image */}
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 mb-12`}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={isEven ? slideLeft : slideRight}
            className="flex-[3]"
          >
            <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed">
              {lab.description}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={isEven ? slideRight : slideLeft}
            className="flex-[2]"
          >
            <div
              className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, hsl(210 52% 23% / 0.08), hsl(180 45% 35% / 0.12))` }}
            >
              <div className="text-center p-8">
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: lab.accentColor }}
                >
                  <lab.icon className="text-white" size={28} />
                </div>
                <p className="text-[hsl(var(--muted-foreground))] text-sm font-medium">{lab.name}</p>
                <p className="text-[hsl(var(--muted-foreground))] text-xs mt-1 opacity-60">Photo coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Objectives + Equipment side by side */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Objectives */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="shrink-0" size={18} style={{ color: lab.accentColor }} />
              <h3 className="font-semibold text-[hsl(var(--navy))] text-[15px]">Objectives</h3>
            </div>
            <ul className="space-y-3">
              {lab.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: lab.accentColor }} />
                  {obj}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Equipment */}
          <motion.div variants={fadeUp} className="bg-white rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="shrink-0" size={18} style={{ color: lab.accentColor }} />
              <h3 className="font-semibold text-[hsl(var(--navy))] text-[15px]">Research Equipment</h3>
            </div>
            <ul className="space-y-3">
              {lab.equipment.map((eq, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: lab.accentColor }} />
                  {eq}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Faculty */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-6 rounded" style={{ background: lab.accentColor }} />
            <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: lab.accentColor }}>
              Lab Faculty
            </h3>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
            {lab.faculty.map((member) => (
              <FacultyCard key={member.name} member={member} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      {index < labs.length - 1 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16">
          <div className="border-t border-dashed border-border" />
        </div>
      )}
    </section>
  );
}

/* ── Page ── */
export default function ResearchFacility() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true, margin: "-80px" });

  return (
    <Layout>
      <ResearchSubNav />
      {/* Hero Banner */}
      <section
        className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[38vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(180 45% 18%) 50%, hsl(210 52% 23%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/research" className="hover:text-white transition-colors">Research</Link>
          <span>/</span>
          <span className="text-white/40">Research Facility</span>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[hsl(var(--saffron-light))] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Anvesana Research Labs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Playfair_Display',serif] text-4xl md:text-6xl text-white font-bold mb-4"
          >
            Research Facility
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto h-[2px] w-16 bg-[hsl(var(--saffron))]"
          />
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* ── 5-Lab quick nav pills ── */}
      <div className="bg-white border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {labs.map((lab) => (
              <a
                key={lab.id}
                href={`#lab-${lab.id}`}
                className="flex items-center gap-2 shrink-0 px-4 py-2 rounded-full border border-border text-sm text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--teal))] hover:text-[hsl(var(--teal))] transition-colors"
              >
                <lab.icon size={14} />
                {lab.shortName}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-[#F7F5F0]">
        <div ref={introRef} className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            variants={stagger}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            <motion.div variants={slideLeft} className="flex-[3]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
                <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
                  Advanced Laboratories
                </span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-6 leading-snug">
                World-Class Research Facilities at Anvesana
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed">
                Research at Anvesana research laboratories is organized across five major disciplines, each with its strength, specialties and goals. Though there are several areas under investigation at each facility, the common theme is the emphasis on understanding the complex interplay between the physical, mental, social and spiritual planes of being. All the research disciplines also undertake fundamental studies providing opportunities for medical applications and standardization of tools. Anvesana Research Labs hosts advanced instrumentation, enabling the researcher to undertake deeper and detailed research in understanding multidimensional beneficial aspects of yoga practices.
              </p>
            </motion.div>

            {/* 5 Lab Summary Cards */}
            <motion.div variants={slideRight} className="flex-[2] grid grid-cols-1 gap-3 w-full">
              {labs.map((lab) => (
                <a
                  key={lab.id}
                  href={`#lab-${lab.id}`}
                  className="flex items-center gap-3 bg-white rounded-xl border border-border p-4 hover:shadow-md hover:border-[hsl(var(--teal))] transition-all duration-200 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: lab.accentColor }}
                  >
                    <lab.icon className="text-white" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[hsl(var(--navy))] font-semibold text-sm truncate">{lab.name}</p>
                    <p className="text-[hsl(var(--muted-foreground))] text-xs">{lab.faculty.length} Faculty Member{lab.faculty.length > 1 ? "s" : ""}</p>
                  </div>
                  <span className="text-[hsl(var(--teal))] text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Lab Sections */}
      {labs.map((lab, i) => (
        <div key={lab.id} id={`lab-${lab.id}`}>
          <LabSection lab={lab} index={i} />
        </div>
      ))}

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{
          background: "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 60%, hsl(180 45% 25%) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl mx-auto px-6"
        >
          <motion.h2 variants={fadeUp} className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-white font-bold mb-4">
            Interested in Collaborating?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg mb-8">
            Explore research opportunities with our world-class faculty and state-of-the-art labs.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/research/faculty"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors"
            >
              Meet Our Faculty →
            </Link>
            <Link
              to="/research/adopt-project"
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Adopt a Research Project →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
