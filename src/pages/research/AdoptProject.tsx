import { motion, useInView, Variants } from "framer-motion";
import {
  ChevronDown,
  CheckCircle2,
  FileText,
  Mail,
  Heart,
  FlaskConical,
  Users,
  Zap,
  Globe,
} from "lucide-react";
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
const donorBenefits = [
  { icon: FileText, text: "Tax exemption under 80(G) or 35(i)(ii)" },
  { icon: Users, text: "Complementary yoga sessions and workshops for your employees" },
  { icon: Globe, text: "Acknowledgement in research publications" },
  { icon: FlaskConical, text: "Opportunity to be a part of world-class research" },
  { icon: Heart, text: "Self-satisfaction of being a part of the health revolution" },
];

const researcherBenefits = [
  { icon: Zap, text: "Avoid longer waiting periods in research funding agencies" },
  { icon: CheckCircle2, text: "Can work on the 'quality' of their research projects" },
  { icon: Heart, text: "Self-sustainability" },
  { icon: Globe, text: "Establish public-private partnership to catalyse a large-scale health revolution" },
];

const researchAreas = [
  "Diabetes", "Cancer", "Stress", "Depression",
  "Geriatric (Old Age) Problems", "Night Shift Workers", "Yajna & Homa Science", "Spirituality",
];

/* ── Page ── */
export default function AdoptProject() {
  const introRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const introInView = useInView(introRef, { once: true, margin: "-60px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-60px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-60px" });

  return (
    <div>
      {/* ── Hero Banner ── */}
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
          <span className="text-white/40">Adopt a Research Project</span>
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
            Adopt a Research Project
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

      {/* ── Content ── */}
      <div className="py-16 px-6 lg:px-10 max-w-7xl mx-auto space-y-20">

        {/* ── Section 1: Introduction ── */}
        <motion.div
          ref={introRef}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Patron Program
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            Be a Patron of Research
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <motion.div variants={stagger} className="space-y-5">
              <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base">
                <strong className="text-[hsl(var(--navy))]">'Adopt a Research Project'</strong> is a
                program which gives opportunity to individuals from all walks of life to contribute and be
                a part of our emerging research projects. Individuals or companies can choose research
                projects of their interest, fund and adopt a research project of their own or make a
                smaller contribution towards the research project.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base">
                Various interesting research projects are available to choose from across various fields
                like Diabetes, Cancer, Stress, Depression, Geriatric (old age) problems, Night shift
                workers and also unique projects trying to understand the science behind spirituality and
                traditional practices of our country like yajna, homa, etc.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[hsl(var(--muted-foreground))] leading-relaxed text-base">
                So, be a proud partner of this noble initiative and in our effort to unearth the true
                potential of yoga &amp; in constructing a healthy future for the generations to follow.
              </motion.p>

              {/* Research Area Tags */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
                {researchAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 bg-[hsl(var(--cream))] text-[hsl(var(--navy))] text-xs font-medium px-3 py-1.5 rounded-full border border-border"
                  >
                    <FlaskConical size={11} className="text-[hsl(var(--teal))]" />
                    {area}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp} className="pt-4">
                <a
                  href="/documents/ARP-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors shadow-sm"
                >
                  <FileText size={18} />
                  View Details / Download Brochure
                </a>
              </motion.div>
            </motion.div>

            {/* Illustration card */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-2xl overflow-hidden border border-border shadow-lg aspect-[4/3] bg-[hsl(var(--cream))] flex items-center justify-center"
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(180 45% 22%) 100%)",
                }}
              />
              <div className="relative z-10 text-center px-8">
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5 border border-white/20">
                  <FlaskConical className="text-[hsl(var(--saffron))]" size={38} />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Join hands with S-VYASA's Anvesana Research Labs to fund cutting-edge yoga &amp; health research
                </p>
                <div className="mt-5 flex flex-wrap gap-2 justify-center">
                  {["Impactful", "Tax-Exempt", "Recognition"].map((tag) => (
                    <span key={tag} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 2: Benefits ── */}
        <motion.div
          ref={benefitsRef}
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--teal))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Why Partner With Us
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            Benefits at a Glance
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Donor Benefits */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              <div
                className="px-7 py-5 flex items-center gap-3"
                style={{ background: "linear-gradient(135deg, hsl(180 45% 22%), hsl(180 45% 28%))" }}
              >
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <Heart className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-['Playfair_Display',serif] text-xl font-bold">Donor Benefits</h3>
                  <p className="text-white/60 text-xs">For individuals &amp; companies</p>
                </div>
              </div>
              <ul className="px-7 py-6 space-y-4">
                {donorBenefits.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[hsl(var(--teal))]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={13} className="text-[hsl(var(--teal))]" />
                    </div>
                    <span className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Researcher Benefits */}
            <motion.div
              variants={fadeUp}
              className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              <div
                className="px-7 py-5 flex items-center gap-3"
                style={{ background: "linear-gradient(135deg, hsl(35 85% 45%), hsl(35 85% 52%))" }}
              >
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
                  <FlaskConical className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-['Playfair_Display',serif] text-xl font-bold">Researcher Benefits</h3>
                  <p className="text-white/60 text-xs">For scientists &amp; scholars</p>
                </div>
              </div>
              <ul className="px-7 py-6 space-y-4">
                {researcherBenefits.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[hsl(var(--saffron))]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={13} className="text-[hsl(var(--saffron))]" />
                    </div>
                    <span className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-dashed border-border" />

        {/* ── Section 3: Contact / Get Involved ── */}
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <div className="h-[3px] w-8 bg-[hsl(var(--saffron))]" />
            <span className="text-[hsl(var(--teal))] text-xs font-semibold uppercase tracking-widest">
              Connect With Us
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[hsl(var(--navy))] font-bold mb-10"
          >
            Get in Touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info card */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 rounded-2xl overflow-hidden border border-border shadow-sm"
            >
              <div
                className="px-7 py-8 h-full flex flex-col justify-between"
                style={{
                  background:
                    "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 60%, hsl(180 45% 25%) 100%)",
                }}
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 border border-white/20">
                    <Mail className="text-[hsl(var(--saffron))]" size={22} />
                  </div>
                  <h3 className="font-['Playfair_Display',serif] text-xl text-white font-bold mb-3">
                    Interested in Adopting a Project?
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Reach out to us to learn more about available projects and how you can contribute to
                    advancing yoga and integrative health research.
                  </p>
                  <a
                    href="mailto:research@svyasa.edu.in"
                    className="inline-flex items-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors text-sm"
                  >
                    <Mail size={16} />
                    research@svyasa.edu.in
                  </a>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/50 text-xs">
                    Anvesana Research Labs · S-VYASA Yoga University · Prashanti Kutiram, Bengaluru
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Inquiry form */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 bg-white rounded-2xl border border-border shadow-sm p-8"
            >
              <h3 className="font-semibold text-[hsl(var(--navy))] text-lg mb-6">Send an Inquiry</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  window.location.href = `mailto:research@svyasa.edu.in?subject=Adopt a Research Project Inquiry&body=Name: ${data.get("name")}%0AEmail: ${data.get("email")}%0APhone: ${data.get("phone")}%0A%0AMessage:%0A${data.get("message")}`;
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[hsl(var(--navy))] mb-1.5 uppercase tracking-wide">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Your full name"
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm text-[hsl(var(--navy))] placeholder:text-[hsl(var(--muted-foreground))]/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/30 focus:border-[hsl(var(--teal))] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[hsl(var(--navy))] mb-1.5 uppercase tracking-wide">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border border-border rounded-lg px-4 py-3 text-sm text-[hsl(var(--navy))] placeholder:text-[hsl(var(--muted-foreground))]/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/30 focus:border-[hsl(var(--teal))] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[hsl(var(--navy))] mb-1.5 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-[hsl(var(--navy))] placeholder:text-[hsl(var(--muted-foreground))]/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/30 focus:border-[hsl(var(--teal))] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[hsl(var(--navy))] mb-1.5 uppercase tracking-wide">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your interest in adopting a research project, preferred research area, or any questions you have..."
                    className="w-full border border-border rounded-lg px-4 py-3 text-sm text-[hsl(var(--navy))] placeholder:text-[hsl(var(--muted-foreground))]/60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--teal))]/30 focus:border-[hsl(var(--teal))] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--navy))] text-white font-semibold py-3.5 rounded-lg hover:bg-[hsl(var(--teal))] transition-colors text-sm tracking-wide"
                >
                  Send Inquiry →
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── CTA Footer Band ── */}
      <section
        className="py-16 text-center mt-8"
        style={{
          background:
            "linear-gradient(160deg, hsl(210 60% 12%) 0%, hsl(210 52% 23%) 60%, hsl(180 45% 25%) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="max-w-2xl mx-auto px-6"
        >
          <motion.h2
            variants={fadeUp}
            className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-white font-bold mb-4"
          >
            Partner in a Health Revolution
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/75 text-lg mb-8">
            Help us unlock the true potential of yoga for global health and well-being.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/research/ongoing-projects"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors"
            >
              View Ongoing Projects →
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
