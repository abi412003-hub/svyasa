import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Sparkles, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getSchoolBySlug } from "@/data/divisionsData";
import SchoolFacultySection from "@/components/SchoolFacultySection";
import { useEffect } from "react";

const SchoolPage = () => {
  const { divisionSlug, schoolSlug } = useParams<{ divisionSlug: string; schoolSlug: string }>();
  const navigate = useNavigate();
  const result = getSchoolBySlug(divisionSlug || "", schoolSlug || "");

  useEffect(() => {
    if (!result) navigate("/not-found", { replace: true });
  }, [result, navigate]);

  if (!result) return null;

  const { division, school } = result;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
  };

  return (
    <Layout>
      {/* Hero */}
      <section className={`relative py-24 md:py-28 bg-gradient-to-br ${division.color} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,white,transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col gap-3 mb-6">
            <Link
              to="/organogram"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Organogram
            </Link>
            <Link
              to={`/divisions/${divisionSlug}`}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {division.name}
            </Link>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-white/60 text-sm uppercase tracking-widest font-medium mb-3">
              {division.shortName} · School
            </p>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {school.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-foreground/80 text-lg leading-relaxed"
          >
            {school.description}
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" /> Programs Offered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {school.programs.map((program, i) => (
              <motion.div
                key={program}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
              >
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${division.color} shrink-0`} />
                <span className="text-foreground font-medium text-sm">{program}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" /> School Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {school.highlights.map((h, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 bg-muted/50 rounded-xl p-4 border border-border"
              >
                <Star className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/80 text-sm leading-relaxed">{h}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      {school.faculty && school.faculty.length > 0 && (
        <SchoolFacultySection faculty={school.faculty} divisionColor={division.color} />
      )}

      {/* CTA */}
      <section className={`py-16 bg-gradient-to-r ${division.color}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Interested in {school.name}?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Connect with our admissions team to learn more about our programs, eligibility, and campus life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="px-6 py-3 bg-white text-foreground font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to={`/divisions/${divisionSlug}`}
                className="px-6 py-3 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Full Division
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SchoolPage;
