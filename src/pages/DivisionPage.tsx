import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, GraduationCap, Sparkles, ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { getDivisionBySlug } from "@/data/divisionsData";
import { useEffect } from "react";

const DivisionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const division = getDivisionBySlug(slug || "");

  useEffect(() => {
    if (!division) navigate("/not-found", { replace: true });
  }, [division, navigate]);

  if (!division) return null;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
  };

  return (
    <Layout>
      {/* Hero */}
      <section className={`relative py-24 md:py-32 bg-gradient-to-br ${division.color} overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <Link
            to="/organogram"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Organogram
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-white/60 text-sm uppercase tracking-widest font-medium mb-3">Academic Division</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              {division.icon} {division.name}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl italic">{division.tagline}</p>
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
            {division.description}
          </motion.p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" /> Division Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {division.highlights.map((h, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
              >
                <span className="text-primary mt-0.5 shrink-0">✦</span>
                <p className="text-foreground/80 text-sm leading-relaxed">{h}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-10 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" /> Schools & Centres
          </h2>
          <div className="space-y-6">
            {division.schools.map((school, i) => (
              <motion.div
                key={school.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${division.color}`} />
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{school.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{school.description}</p>
                    </div>
                    <Link
                      to={`/divisions/${slug}/schools/${school.slug}`}
                      className="shrink-0 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      View School <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Programs */}
                  <div className="mt-2">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5" /> Programs Offered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {school.programs.map((p) => (
                        <span
                          key={p}
                          className="px-3 py-1 bg-muted text-foreground/70 text-xs rounded-full border border-border"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 bg-gradient-to-r ${division.color}`}>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Join {division.shortName}?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Explore programs, meet our faculty, and begin your journey toward a purposeful career.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admissions"
                className="px-6 py-3 bg-white text-foreground font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/contact-us"
                className="px-6 py-3 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DivisionPage;
