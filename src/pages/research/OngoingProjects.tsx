import { motion, useInView, Variants } from "framer-motion";
import { ChevronDown, FlaskConical, Building2, IndianRupee } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

/* ── Variants ── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Data ── */
const govProjects = [
  {
    sno: 1,
    title: "Influence of Yog-Based Life Intervention on Emerging Risk Markers of Dyslipidemia And Cardiovascular Health",
    pi: "Dr Manjunath N K, Pro-Vice-Chancellor & Director of Research, S-VYASA Yoga University, Bangalore",
    agency: "Mr. Ashook Shoota (SKAN Research Trust)",
    duration: "2023–2027, 5 Years",
    amount: "₹4,73,26,058",
  },
  {
    sno: 2,
    title: "Role of Yoga Based Lifestyle Intervention in Enabling Sustained Remission of Type 2 Diabetes – A Prospective Open-Labeled, Clinical Trial",
    pi: "Dr Manjunath N K, Pro-Vice-Chancellor & Director of Research, S-VYASA Yoga University, Bangalore",
    agency: "Mr. Ashook Shoota (SKAN Research Trust)",
    duration: "2023–2027, 5 Years",
    amount: "₹5,56,05,000",
  },
  {
    sno: 3,
    title: "Effectiveness of yoga on composite biomarker age predictors in an elderly Indian cohort — a two armed open label randomized controlled trial",
    pi: "Dr. Vijaya Majumdar, Associate Professor, S-VYASA Yoga University",
    agency: "DST-SATYAM",
    duration: "2022–2025, 3 Years",
    amount: "₹65,00,000",
  },
  {
    sno: 4,
    title: "Comparative effect of virtual-yoga and face-to-face yoga for individuals with common mental health disorders in the community",
    pi: "Collaborative: Dr. Aarti Jagannathan (NIMHANS, Bangalore) & Dr. Judu Ilavarasu (SVYASA, Bangalore)",
    agency: "DST-SATYAM",
    duration: "2022–2025, 3 Years",
    amount: "₹37,90,864",
  },
  {
    sno: 5,
    title: "Investigating EEG and fNIRS signatures for different types of meditation – An artificial-intelligence-based approach for evaluation and validation",
    pi: "Collaborative: Dr. Bikshes Singh (NIT, Raipur) & Dr. Deepeshwar Singh (S-VYASA)",
    agency: "DST-SATYAM",
    duration: "2022–2025, 3 Years",
    amount: "₹32,40,288",
  },
  {
    sno: 6,
    title: "Mapping Psychoacoustical neurophysiological and cognitive benefits of Yoga and Meditation: A Cross-Sectional study across age",
    pi: "Collaborative: Dr. Prashant Prabhu (AIISH, Mysore) & Dr. Deepeshwar Singh (S-VYASA, Bangalore)",
    agency: "DST/SATYAM",
    duration: "2022–2025, 3 Years",
    amount: "₹17,85,300",
  },
  {
    sno: 7,
    title: "Changes in Heart rate variability in Women With Breast Cancer Undergoing Radiotherapy along with Yoga or stretch exercise as an adjuvant therapy",
    pi: "Dr Manjunath N K, Director-Anvesana, S-VYASA Yoga University, Bangalore",
    agency: "The University of Texas M. D. Anderson Cancer Center",
    duration: "2020–2023, 3 Years",
    amount: "₹4,54,000",
  },
  {
    sno: 8,
    title: "The intervention of YOGA in school curriculum to enhance the physical and mental performance of students: A biomedical approach",
    pi: "Dr. Nalini Jammulamadaka",
    agency: "Women Scientist Scheme-B (WOS-B)",
    duration: "2020–2022, 3 Years",
    amount: "₹35,51,200",
  },
  {
    sno: 9,
    title: "Exploring the molecular links between Klotho and Kynurenic acid, the two important molecules in cognition",
    pi: "Dr. Vijaya Majumdar, Associate Professor, S-VYASA Yoga University",
    agency: "DST-CSRI",
    duration: "2020–2023, 3 Years",
    amount: "₹42,04,400",
  },
  {
    sno: 10,
    title: "Molecular perspective on the effect of Yoga on Chronic Kidney Disease and Health Related Quality of Life outcomes – A Randomized Control Trial",
    pi: "Dr. Ramesh M.N, Professor, S-VYASA Yoga University",
    agency: "DST-SATYAM",
    duration: "2019–2022, 2 Years",
    amount: "₹27,72,600",
  },
  {
    sno: 11,
    title: "Integrated Sickle Cell Anemia Research Program I-SCARP",
    pi: "Dr. Ramesh M.N, Professor, S-VYASA Yoga University",
    agency: "Ministry of Tribal Affairs",
    duration: "2019–2020, 1 Year",
    amount: "₹33,00,000",
  },
  {
    sno: 12,
    title: "NAD SIRT1 AXIS: A key regulator for DNA repair and metabolic regulation following yoga",
    pi: "Dr. Ramesh M.N, Professor, S-VYASA Yoga University",
    agency: "DST-SATYAM",
    duration: "2018–2020, 2 Years",
    amount: "₹29,00,000",
  },
  {
    sno: 13,
    title: "Mechanism of action of D5 Choornam on Insulin Regulation",
    pi: "Dr. Ramesh M N, Professor, S-VYASA Yoga University",
    agency: "Central Council for Research in Siddha",
    duration: "2018–2020, 3 Years",
    amount: "₹98,55,000",
  },
];

const industryProjects = [
  {
    sno: 1,
    title: "Effect of Yoga on alleviating Alzheimer's and diabetes induced cognitive decline",
    pi: "Dr. Ramesh M N, Professor, S-VYASA Yoga University",
    agency: "Mr. Rajesh Handa",
    duration: "2021–2022, 3 Years",
    amount: "₹2,00,000",
  },
];

/* ── Table Component ── */
interface Project {
  sno: number;
  title: string;
  pi: string;
  agency: string;
  duration: string;
  amount: string;
}

function ProjectTable({ projects, accent }: { projects: Project[]; accent: "teal" | "saffron" }) {
  const accentClass =
    accent === "teal"
      ? "bg-[hsl(var(--teal))] text-white"
      : "bg-[hsl(var(--saffron))] text-white";

  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full text-sm min-w-[900px]">
        <thead>
          <tr className={accentClass}>
            <th className="py-4 px-4 text-left font-semibold w-12 shrink-0">S.No</th>
            <th className="py-4 px-4 text-left font-semibold">Title of the Project</th>
            <th className="py-4 px-4 text-left font-semibold">Principal Investigator</th>
            <th className="py-4 px-4 text-left font-semibold">Funding Agency</th>
            <th className="py-4 px-4 text-left font-semibold whitespace-nowrap">Duration</th>
            <th className="py-4 px-4 text-right font-semibold whitespace-nowrap">Amount</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p, i) => (
            <tr
              key={p.sno}
              className={`border-t border-border transition-colors duration-150 hover:bg-[hsl(var(--cream))] ${
                i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"
              }`}
            >
              <td className="py-4 px-4 font-bold text-[hsl(var(--navy))] align-top">{p.sno}</td>
              <td className="py-4 px-4 text-[hsl(var(--navy))] font-medium leading-snug align-top max-w-xs">
                {p.title}
              </td>
              <td className="py-4 px-4 text-[hsl(var(--muted-foreground))] leading-snug align-top">
                {p.pi}
              </td>
              <td className="py-4 px-4 text-[hsl(var(--muted-foreground))] leading-snug align-top whitespace-nowrap">
                {p.agency}
              </td>
              <td className="py-4 px-4 text-[hsl(var(--muted-foreground))] align-top whitespace-nowrap">
                {p.duration}
              </td>
              <td className="py-4 px-4 text-right font-semibold text-[hsl(var(--navy))] align-top whitespace-nowrap">
                {p.amount}/-
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Summary Stats Bar ── */
function SummaryBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const stats = [
    { icon: FlaskConical, label: "Government Projects", value: "13", color: "text-[hsl(var(--teal))]" },
    { icon: Building2, label: "Industry Projects", value: "1", color: "text-[hsl(var(--saffron))]" },
    { icon: IndianRupee, label: "Total Funding", value: "~₹10.87 Cr", color: "text-[hsl(var(--navy))]" },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
    >
      {stats.map((s) => (
        <motion.div
          key={s.label}
          variants={fadeUp}
          className="bg-white rounded-xl border border-border p-6 flex items-center gap-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-full bg-[hsl(var(--cream))] flex items-center justify-center shrink-0">
            <s.icon className={s.color} size={22} />
          </div>
          <div>
            <p className={`text-2xl font-bold font-['DM_Mono',monospace] ${s.color}`}>{s.value}</p>
            <p className="text-[hsl(var(--muted-foreground))] text-sm">{s.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ── Page ── */
export default function OngoingProjects() {
  const govRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLDivElement>(null);
  const govInView = useInView(govRef, { once: true, margin: "-60px" });
  const indInView = useInView(indRef, { once: true, margin: "-60px" });

  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative flex flex-col items-center justify-center h-[45vh] sm:h-[38vh] overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 50%, hsl(180 45% 25%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6 md:left-8 flex items-center gap-2 text-white/60 text-xs z-10">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/research" className="hover:text-white transition-colors">Research</Link>
          <span>/</span>
          <span className="text-white/40">Ongoing Projects</span>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[hsl(var(--saffron-light))] text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Anvesana Research
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-['Playfair_Display',serif] text-4xl md:text-6xl text-white font-bold mb-4"
          >
            Current Initiatives
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

      {/* Content */}
      <div className="py-16 px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Summary stats */}
        <SummaryBar />

        {/* Section 1: Government Funded */}
        <motion.div
          ref={govRef}
          initial="hidden"
          animate={govInView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--teal))]/10 flex items-center justify-center shrink-0 mt-1">
              <FlaskConical className="text-[hsl(var(--teal))]" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-[3px] w-8 bg-[hsl(var(--teal))]" />
                <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
                  Government Funded
                </span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold leading-snug">
                Research Projects Ongoing and Grants Received
                <span className="block text-lg md:text-xl font-normal text-[hsl(var(--muted-foreground))] mt-1">
                  Government Funded Projects
                </span>
              </h2>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ProjectTable projects={govProjects} accent="teal" />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border mb-16" />

        {/* Section 2: Industry Funded */}
        <motion.div
          ref={indRef}
          initial="hidden"
          animate={indInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--saffron))]/10 flex items-center justify-center shrink-0 mt-1">
              <Building2 className="text-[hsl(var(--saffron))]" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
                <span className="text-[hsl(var(--saffron))] text-xs font-semibold uppercase tracking-widest">
                  Industry Funded
                </span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold">
                Ongoing Industry Funded Projects
              </h2>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ProjectTable projects={industryProjects} accent="saffron" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
