import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpen,
  FileText,
  FlaskConical,
  Globe2,
  HeartPulse,
  Landmark,
  Microscope,
  RefreshCw,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import ResearchSubNav from "@/components/research/ResearchSubNav";
import LifeCTA from "@/components/life/LifeCTA";
import heroBg from "@/assets/research-hero.jpeg";
import homeostasisImg from "@/assets/research-homeostasis.jpeg";
import nagendraImg from "@/assets/society/dr-hr-nagendra.jpg";
import nagarathnaImg from "@/assets/society/dr-nagarathna.jpg";

/* International partners */
import shanghaiLogo from "@/assets/partners/intl/shanghai.png";
import takshaLogo from "@/assets/partners/intl/taksha.jpg";
import yunnanLogo from "@/assets/partners/intl/yunnan.jpg";
import gyeongsangnamLogo from "@/assets/partners/intl/gyeongsangnam.jpg";
import healthRicercaLogo from "@/assets/partners/intl/health-ricerca.jpg";
import harbinLogo from "@/assets/partners/intl/harbin.png";
import texasMdLogo from "@/assets/partners/intl/texas-md.png";
import sarvaLogo from "@/assets/partners/intl/sarva.jpg";
import toyoLogo from "@/assets/partners/intl/toyo.png";
import southernCrossLogo from "@/assets/partners/intl/southern-cross.png";
import siliconAndhraLogo from "@/assets/partners/intl/silicon-andhra.png";
import vietnamYogaLogo from "@/assets/partners/intl/vietnam-yoga.jpg";
import collegeAyurvedaLogo from "@/assets/partners/intl/college-ayurveda.jpg";
import choonhaeLogo from "@/assets/partners/intl/choonhae.jpg";
import allHereSaLogo from "@/assets/partners/intl/all-here-sa.jpg";
import navBharatLogo from "@/assets/partners/intl/nav-bharat.png";
/* National partners */
import ayushLogo from "@/assets/partners/ayush.jpg";
import iiscLogo from "@/assets/partners/iisc.jpg";
import niasLogo from "@/assets/partners/nias.png";
import aiimsDelhiLogo from "@/assets/partners/aiims-delhi.png";
import nimhansLogo from "@/assets/partners/nimhans.jpg";
import narayanaHealthLogo from "@/assets/partners/narayana-health.png";
import aiimsBhopalLogo from "@/assets/partners/aiims-bhopal.png";
import sduaherLogo from "@/assets/partners/sduaher.jpg";
import symbiosisLogo from "@/assets/partners/symbiosis.png";
import dayanandaLogo from "@/assets/partners/dayananda-sagar.jpg";
import pesLogo from "@/assets/partners/pes.png";
import ramaiahLogo from "@/assets/partners/ramaiah.png";
import maherLogo from "@/assets/partners/maher.png";
import fatherMullerLogo from "@/assets/partners/father-muller.png";
import bnmLogo from "@/assets/partners/bnm.jpg";
import cdsimerLogo from "@/assets/partners/cdsimer.png";
import narayanaNethralayaLogo from "@/assets/partners/narayana-nethralaya.png";

/* Content adapted from svyasa.edu.in/research.php (Anvesana – Centre for Advanced Research in Integrative Medicine) */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const researchAreas = [
  { icon: Activity, title: "Physiological effects of yoga practices" },
  { icon: HeartPulse, title: "Therapeutic applications of yoga" },
  { icon: RefreshCw, title: "Yoga for rehabilitation" },
  { icon: Target, title: "Yoga for perception and performance" },
  { icon: Sparkles, title: "Higher states of consciousness" },
];

const archives = [
  { title: "Arogyadhama Circular", href: "https://www.svyasa.edu.in/img/pdf/research/Arogyadhama-Circular.pdf" },
  { title: "Patent", href: "https://www.svyasa.edu.in/img/pdf/research/Patent.pdf" },
  { title: "Seed Money Details", href: "https://www.svyasa.edu.in/img/pdf/research/Seed-Money-Details.pdf" },
];

const internationalPartners = [
  { name: "Shanghai University of Sport, China", logo: shanghaiLogo },
  { name: "Taksha University, Virginia, USA", logo: takshaLogo },
  { name: "Yunnan Minzu University, China", logo: yunnanLogo },
  { name: "Gyeongsangnam, Miryang, Korea", logo: gyeongsangnamLogo },
  { name: "Health Ricerca E Sviluppo S.r.L, Bologna, Italy", logo: healthRicercaLogo },
  { name: "Harbin University of Commerce, China", logo: harbinLogo },
  { name: "The University of Texas MD Anderson Cancer Center, USA", logo: texasMdLogo },
  { name: "Sarva Yoga International, Italy", logo: sarvaLogo },
  { name: "Toyo University, Japan", logo: toyoLogo },
  { name: "Southern Cross University, Australia", logo: southernCrossLogo },
  { name: "University of Silicon Andhra, California, USA", logo: siliconAndhraLogo },
  { name: "Vietnam Yoga Academy, Hanoi, Vietnam", logo: vietnamYogaLogo },
  { name: "College of Ayurveda & Yoga Therapy, Milton Keynes, UK", logo: collegeAyurvedaLogo },
  { name: "Choonhae College of Health Sciences, Republic of Korea", logo: choonhaeLogo },
  { name: "ALL HERE SA, Switzerland", logo: allHereSaLogo },
  { name: "Nav Bharat International, Bahrain", logo: navBharatLogo },
];

const nationalPartners = [
  { name: "Department of AYUSH, Government of Karnataka", logo: ayushLogo },
  { name: "Indian Institute of Science, Bengaluru", logo: iiscLogo },
  { name: "National Institute of Advanced Studies", logo: niasLogo },
  { name: "AIIMS, New Delhi", logo: aiimsDelhiLogo },
  { name: "NIMHANS, Bengaluru", logo: nimhansLogo },
  { name: "Narayana Hrudayalaya, Bengaluru", logo: narayanaHealthLogo },
  { name: "AIIMS, Bhopal", logo: aiimsBhopalLogo },
  { name: "Sri Devaraj Urs Academy of Higher Education & Research", logo: sduaherLogo },
  { name: "Symbiosis International University", logo: symbiosisLogo },
  { name: "Dayananda Sagar University", logo: dayanandaLogo },
  { name: "PES University, Bengaluru", logo: pesLogo },
  { name: "Ramaiah Institute of Technology, Bengaluru", logo: ramaiahLogo },
  { name: "Meenakshi Academy of Higher Education and Research", logo: maherLogo },
  { name: "Father Muller Research Centre, Mangaluru", logo: fatherMullerLogo },
  { name: "BNM Institute of Technology, Bengaluru", logo: bnmLogo },
  { name: "Dr. Chandramma Dayananda Sagar Institute of Medical Education and Research", logo: cdsimerLogo },
  { name: "Narayana Nethralaya Foundation", logo: narayanaNethralayaLogo },
];

const exploreLinks = [
  { icon: Microscope, title: "Research Facility", text: "Explore the Anvesana laboratories", to: "/research/facility" },
  { icon: Users, title: "Research Faculty", text: "Meet the scientists behind the work", to: "/research/faculty" },
  { icon: BookOpen, title: "Publications", text: "1,500+ peer-reviewed research papers", to: "/research/publications" },
  { icon: HeartPulse, title: "Adopt a Project", text: "Support yoga research that matters", to: "/research/adopt-project" },
];

const SectionHeading = ({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) => (
  <motion.div variants={fadeUp} className="mb-8">
    <div className="flex items-center gap-3 mb-2">
      <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
      <span
        className={`text-xs font-semibold uppercase tracking-widest ${light ? "text-[hsl(var(--gold-light))]" : "text-[hsl(var(--teal))]"}`}
      >
        {eyebrow}
      </span>
    </div>
    <h2
      className={`font-heading text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-[hsl(var(--navy))]"}`}
    >
      {title}
    </h2>
  </motion.div>
);

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
};

const CARIM = () => {
  const [tab, setTab] = useState<"international" | "national">("international");
  const partners = tab === "international" ? internationalPartners : nationalPartners;

  return (
    <Layout>
      <ResearchSubNav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(var(--navy))]">
        <img src={heroBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, hsl(210 60% 12% / 0.94) 0%, hsl(210 52% 23% / 0.82) 55%, hsl(180 45% 25% / 0.6) 100%)",
          }}
        />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <nav className="flex items-center gap-2 text-white/60 text-xs mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/research" className="hover:text-white transition-colors">
              Research
            </Link>
            <span>/</span>
            <span className="text-white/40">CARIM</span>
          </nav>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[hsl(var(--saffron-light))] text-sm font-semibold uppercase tracking-[0.25em] mb-3"
          >
            Anvesana Research Laboratories
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold text-white"
          >
            CARIM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-xl md:text-3xl text-white/90 mt-3 max-w-3xl"
          >
            Centre for Advanced Research in Integrative Medicine
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {[
              { icon: Landmark, label: "Over three decades of research" },
              { icon: BookOpen, label: "1,500+ publications" },
              { icon: Globe2, label: `${internationalPartners.length + nationalPartners.length} collaborating institutions` },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 text-sm text-white"
              >
                <Icon className="w-4 h-4 text-[hsl(var(--gold))]" /> {label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Nexus of Knowledge & Innovation */}
      <section className="py-16 md:py-24 bg-[hsl(var(--cream))]">
        <Reveal className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading eyebrow="About CARIM" title="The Nexus of Knowledge & Innovation" />
            <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              Anvesana, S-VYASA's research facility, was founded more than three decades ago with one aim: to revive
              the lost heritage and traditions of yoga by studying them through evidence-based research within a
              modern scientific framework.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
              Its founders, yoga-therapy pioneers Dr. H. R. Nagendra and Dr. R. Nagarathna, built a body of research
              that establishes yoga as an evidence-based practice for treating human ailments and promoting health.
              One of the centre's earliest studies evaluated the benefits of yoga for asthma.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              Today the centre studies the biology of yoga, from its physical effects to its subtler dimensions,
              using advanced technology. Its move to a new facility with state-of-the-art laboratories marks a major
              milestone and gives young and experienced researchers across many domains room to grow.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/research/facility"
                className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--navy))] px-6 py-3 text-sm font-semibold text-white hover:bg-[hsl(var(--teal))] transition-colors"
              >
                View Research Facilities <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/L37B1fqvPXY"
              title="Anvesana – Centre for Advanced Research in Integrative Medicine"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </motion.div>
        </Reveal>
      </section>

      {/* Founders */}
      <section className="py-14 bg-white">
        <Reveal className="container mx-auto px-4">
          <SectionHeading eyebrow="Founders" title="Pioneers of Evidence-Based Yoga" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {[
              { name: "Dr. H. R. Nagendra", img: nagendraImg },
              { name: "Dr. R. Nagarathna", img: nagarathnaImg },
            ].map((f) => (
              <motion.div
                key={f.name}
                variants={fadeUp}
                className="flex items-center gap-5 rounded-2xl border border-border bg-[hsl(var(--cream))] p-5"
              >
                <img src={f.img} alt={f.name} className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow" />
                <div>
                  <p className="font-heading text-xl font-bold text-[hsl(var(--navy))]">{f.name}</p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">Founder, Anvesana Research</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Homeostasis & beyond */}
      <section className="py-16 md:py-24 bg-[hsl(var(--navy))] relative overflow-hidden">
        <Reveal className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={homeostasisImg} alt="Researchers at the Anvesana laboratory" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <SectionHeading eyebrow="Homeostasis & Beyond" title="Cellular Insights into Yoga" light />
            <motion.p variants={fadeUp} className="text-white/75 leading-relaxed mb-6">
              The laboratory examines how the body responds to yoga, and the intricate coordination that keeps it in
              balance, the dynamics behind homeostasis and holistic well-being. The work is a stepping stone into a new
              dimension of yoga research.
            </motion.p>
            <motion.ul variants={stagger} className="grid sm:grid-cols-2 gap-3">
              {[
                "A cohesive, interdisciplinary research team",
                "Continuous support from the university",
                "Alumni who helped shape the lab",
                "A new home with state-of-the-art labs",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-2 rounded-xl bg-white/5 border border-white/10 p-3 text-sm text-white/85"
                >
                  <FlaskConical className="w-4 h-4 text-[hsl(var(--gold))] mt-0.5 shrink-0" /> {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>
      </section>

      {/* Areas of research */}
      <section className="py-16 md:py-24 bg-[hsl(var(--cream))]">
        <Reveal className="container mx-auto px-4">
          <SectionHeading eyebrow="Research Interest" title="Areas of Research" />
          <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed max-w-3xl mb-10">
            Research at S-VYASA examines the effects of yoga on physical, mental and emotional health, from stress
            reduction and mental well-being to the management of chronic disease, with a focus on yoga's role in both
            preventive and curative care.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {researchAreas.map(({ icon: Icon, title }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="relative rounded-2xl bg-white border border-border p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <span className="absolute top-4 right-5 font-heading text-3xl font-bold text-[hsl(var(--saffron))]/15">
                  0{i + 1}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--teal))]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[hsl(var(--teal))]" />
                </div>
                <p className="font-semibold text-[hsl(var(--navy))] leading-snug">{title}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Archives */}
      <section className="py-14 bg-white">
        <Reveal className="container mx-auto px-4">
          <SectionHeading eyebrow="Documents" title="Research Archives" />
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
            {archives.map((doc) => (
              <motion.a
                key={doc.title}
                variants={fadeUp}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border p-5 hover:border-[hsl(var(--saffron))] hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--saffron))]/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[hsl(var(--saffron))]" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--navy))]">{doc.title}</p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--saffron))]">
                    Open PDF ↗
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Collaborations */}
      <section className="py-16 md:py-24 bg-[hsl(var(--cream))]">
        <Reveal className="container mx-auto px-4">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <SectionHeading eyebrow="Partnerships" title="Research Collaborations" />
            <motion.div variants={fadeUp} className="inline-flex rounded-full bg-white border border-border p-1 mb-8" role="tablist">
              {(["international", "national"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={`no-scale px-5 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${
                    tab === t ? "bg-[hsl(var(--navy))] text-white" : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--navy))]"
                  }`}
                >
                  {t} ({t === "international" ? internationalPartners.length : nationalPartners.length})
                </button>
              ))}
            </motion.div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col items-center text-center gap-3 rounded-2xl bg-white border border-border p-4 hover:shadow-md transition-shadow"
                >
                  <div className="h-16 w-full flex items-center justify-center">
                    <img src={p.logo} alt={p.name} loading="lazy" className="max-h-16 max-w-[80%] object-contain" />
                  </div>
                  <p className="text-xs font-medium text-[hsl(var(--navy))] leading-snug">{p.name}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </section>

      {/* Explore more */}
      <section className="py-14 bg-white">
        <Reveal className="container mx-auto px-4">
          <SectionHeading eyebrow="Explore" title="More from Anvesana Research" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {exploreLinks.map(({ icon: Icon, title, text, to }) => (
              <motion.div key={title} variants={fadeUp}>
                <Link
                  to={to}
                  className="group block h-full rounded-2xl border border-border p-6 hover:border-[hsl(var(--teal))] hover:shadow-lg transition-all"
                >
                  <Icon className="w-7 h-7 text-[hsl(var(--teal))] mb-4" />
                  <p className="font-heading text-lg font-bold text-[hsl(var(--navy))] group-hover:text-[hsl(var(--teal))]">
                    {title}
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--saffron))]">
                    Visit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      <LifeCTA />
    </Layout>
  );
};

export default CARIM;
