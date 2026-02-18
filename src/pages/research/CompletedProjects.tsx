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
    title: "Yoga-DP, Yoga programme for type-2 diabetes prevention (YOGA-DP) among high-risk people in India: intervention development and feasibility study",
    pi: "Dr. Manjunath N K, Director - Anveshana, S-VYASA Yoga University",
    agency: "DFID/MRC/NIHR/Wellcome Trust Joint Global Health Trials",
    duration: "2019–2020, 1 Year",
    amount: "₹21,64,000",
  },
  {
    sno: 2,
    title: "Exploring the yoga benefits of cognitive improvement and metabolic mediator of neuro-endocrine biomarkers in patients with type 2 diabetes",
    pi: "Dr. Deepeshwar Singh, Asst. Professor, S-VYASA Yoga University",
    agency: "Ministry of AYUSH, New Delhi",
    duration: "2018–2021, 3 Years",
    amount: "₹64,00,000",
  },
  {
    sno: 3,
    title: "A Comparison of high-frequency yoga breathing (HFYB) with breath awareness (BAW) and aerobic exercise assessing gamma oscillation, BDNF levels, and cognitive task performance",
    pi: "Dr. Deepeshwar Singh, Asst. Professor, S-VYASA Yoga University",
    agency: "DST-SATYAM",
    duration: "2018–2020, 3 Years",
    amount: "₹47,65,580",
  },
  {
    sno: 4,
    title: "Tele-yoga as an adjunct intervention for prevention and management of COVID-19; a non-randomized clinical trial",
    pi: "Dr. Nagarathna R, Advisor, S-VYASA Yoga University",
    agency: "Ministry of AYUSH, New Delhi",
    duration: "2020, 6 Months",
    amount: "₹9,88,600",
  },
  {
    sno: 5,
    title: "Efficacy of Yoga-based Lifestyle Intervention on Acute-phase Insulin Release (AIR) in Pre-diabetes",
    pi: "Dr. Ramesh M N, Professor, S-VYASA Yoga University",
    agency: "Ministry of AYUSH, New Delhi",
    duration: "2016–2019, 3 Years",
    amount: "₹29,59,824",
  },
  {
    sno: 6,
    title: "Cerebral auto regulation and sympathetic nervous system activity (SNS) while performing cognitive tasks during yoga practices which have different effects on SNS",
    pi: "Dr. Deepeshwar Singh, Asst. Professor, S-VYASA Yoga University",
    agency: "SERB, Dept. of Science & Technology, Govt. of India",
    duration: "2015–2018, 3 Years",
    amount: "₹33,76,290",
  },
  {
    sno: 7,
    title: "Effect of Yoga practices on DNA damage in a healthy and clinical population",
    pi: "Dr. Ramesh M N, Professor, S-VYASA Yoga University",
    agency: "University Grants Commission (UGC)",
    duration: "2016–2018, 2 Years",
    amount: "₹27,00,000",
  },
  {
    sno: 8,
    title: "Effect Of Yoga In Gene Expression And Telomere Biology In Extreme Climatic Conditions",
    pi: "Dr. Manjunath N K, Professor and Dr. Ramesh M N, Professor, S-VYASA Yoga University",
    agency: "DIPAS–DRDO, New Delhi",
    duration: "2015–2017, 2 Years",
    amount: "₹9,70,000",
  },
  {
    sno: 9,
    title: "Effect of Fresh Coconut in A Balanced Diet — A Randomized Comparative Study",
    pi: "Dr. Manjunath N K, Professor, S-VYASA Yoga University",
    agency: "Coconut Development Board, Ministry of Agriculture, Govt. of India",
    duration: "2015–2016, 1 Year",
    amount: "₹14,97,000",
  },
  {
    sno: 10,
    title: "Brain Hemodynamics, Cognition and Subtle Energy Levels in Teenagers: Investigation of Potential Acute Effects of Mobile Phone Induced EMF and the Protective Value of Yoga Intervention",
    pi: "Dr. Hemant Bhargav, Asst. Professor, S-VYASA Yoga University",
    agency: "Department of Science and Technology, Govt. of India",
    duration: "2014–2016, 2 Years",
    amount: "₹26,84,884",
  },
  {
    sno: 11,
    title: "Anger Assessment and Yogic management of Anger in High School Children; A Randomised Control Study",
    pi: "Dr. H R Nagendra, Chancellor, S-VYASA Yoga University",
    agency: "Sri Venkateswara Vedic University, Tirupathi",
    duration: "2015–2016, 1 Year",
    amount: "₹9,76,350",
  },
  {
    sno: 12,
    title: "Mapping Neurophysiological, Neurochemical and Cerebral blood flow changes in attentional processes related to Yoga",
    pi: "Dr. Shirley Telles, Professor, S-VYASA Yoga University",
    agency: "Department of Science and Technology (DST), Govt. of India, New Delhi",
    duration: "2010–2013, 3 Years",
    amount: "₹81,56,400",
  },
  {
    sno: 13,
    title: "Research Developmental Grant",
    pi: "Dr. H R Nagendra, Chancellor, S-VYASA Yoga University",
    agency: "Dept. of AYUSH, Govt. of Karnataka",
    duration: "2013–2015, 2 Years",
    amount: "₹5,00,00,000",
  },
  {
    sno: 14,
    title: "Development and Validation of Defense Implicit Association Test and Guna Implicit Association Test",
    pi: "Dr. H R Nagendra, Chancellor, S-VYASA Yoga University",
    agency: "Defense Research and Development Organization (DRDO), Govt. of India, New Delhi",
    duration: "2011–2013, 3 Years",
    amount: "₹16,98,000",
  },
];

const industryProjects = [
  {
    sno: 1,
    title: "Acute effect of Heartfulness meditation transmission on neural pattern of the brain: A 128 channel EEG Pilot study",
    pi: "Dr. Deepeshwar Singh, Asst. Professor, S-VYASA Yoga University",
    agency: "Shri Ram Chandra Mission, Bengaluru",
    duration: "2020–2022, 1 Year",
    amount: "₹3,21,000",
  },
  {
    sno: 2,
    title: "A Randomized control trial for the mechanism of action of yoga and Ayurveda with yoga for Type-2 diabetes mellitus",
    pi: "Dr. Nagarathna R, Advisor, S-VYASA Yoga University",
    agency: "Jivanthi welfare and charitable trust",
    duration: "2017–2021, 4 Years",
    amount: "₹3,30,00,000",
  },
  {
    sno: 3,
    title: "Does the institution program improve sensory perception (Audio, visual or somatosensory functions) with open eyes and closed eyes in normal healthy children?",
    pi: "Dr. Deepeshwar Singh, Asst. Professor, S-VYASA Yoga University",
    agency: "Art of Living (AOL), Bengaluru, India",
    duration: "2018–2021, 3 Years",
    amount: "₹2,89,000",
  },
  {
    sno: 4,
    title: "Effect of yoga on ambulatory glucose profile in type 2 diabetes mellitus",
    pi: "Dr. Ramesh M N, Professor, S-VYASA Yoga University",
    agency: "TVS Motor Pvt Ltd.",
    duration: "2016–2018, 2 Years",
    amount: "₹5,00,000",
  },
  {
    sno: 5,
    title: "Effect of yoga practices on Gene expression in diabetic population – A controlled study",
    pi: "Dr. Nagarathna, Advisor, S-VYASA Yoga University",
    agency: "Blue Star India Pvt Ltd.",
    duration: "2016–2017, 1 Year",
    amount: "₹10,00,000",
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
              <td className="py-4 px-4 text-[hsl(var(--muted-foreground))] leading-snug align-top">
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
    { icon: FlaskConical, label: "Government / Intl. Projects", value: "14", color: "text-[hsl(var(--teal))]" },
    { icon: Building2, label: "Industry Projects", value: "5", color: "text-[hsl(var(--saffron))]" },
    { icon: IndianRupee, label: "Total Grants", value: "~₹13.96 Cr", color: "text-[hsl(var(--navy))]" },
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
export default function CompletedProjects() {
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
          <span className="text-white/40">Completed Projects</span>
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
            Completed Projects
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

        {/* Section 1: Government / International Funded */}
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
                  National / International Agencies
                </span>
              </div>
              <h2 className="font-['Playfair_Display',serif] text-2xl md:text-3xl text-[hsl(var(--navy))] font-bold leading-snug">
                Research Projects Completed and Grants Received
                <span className="block text-lg md:text-xl font-normal text-[hsl(var(--muted-foreground))] mt-1">
                  Funded by National / International Agencies
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
                Completed Industry Funded Projects
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
