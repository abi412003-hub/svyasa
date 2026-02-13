import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flower2, Leaf, Building2, Sparkles, Award, FlaskConical, MonitorSmartphone, Globe, ChevronDown, ArrowRight, Clock, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trainingCategories, trainingCourses } from "@/data/trainingData";
import { useState } from "react";
import { toast } from "sonner";

const categoryIcons: Record<string, React.ElementType> = {
  "Flower2": Flower2,
  "Leaf": Leaf,
  "Building2": Building2,
  "Sparkles": Sparkles,
};

const TrainingHome = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Enquiry submitted! We'll get back within 24 hours.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const featuredCourses = trainingCourses.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-gold/20 rounded-full"
              style={{ width: 250 + i * 180, height: 250 + i * 180, left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white/10 text-gold text-xs px-4 py-1.5 rounded-full border border-gold/20 mb-6"
          >
            Online &nbsp;|&nbsp; Hybrid &nbsp;|&nbsp; Certificate
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-5 leading-tight max-w-4xl mx-auto"
          >
            Short-Term & Professional Training Programs by{" "}
            <span className="text-gold">S-VYASA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-[hsl(var(--cream,40,100%,97%))] text-white/70 max-w-2xl mx-auto mb-8"
          >
            Research-backed Yoga, Ayurveda & Leadership programs — delivered online through CODE
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/training/courses">
              <Button size="lg" className="bg-primary text-primary-foreground rounded-full px-8">
                View Courses
              </Button>
            </Link>
            <Link to="/training/admissions">
              <Button size="lg" variant="outline" className="border-white text-white rounded-full px-8 hover:bg-white/10">
                Enrol Now
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <ChevronDown className="w-6 h-6 text-white/30 mx-auto animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-[hsl(40,100%,97%)]">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Explore Programs</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {trainingCategories.map((cat, i) => {
              const Icon = categoryIcons[cat.icon];
              return (
                <motion.div
                  key={cat.slug}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/training/courses/${cat.slug}`}
                    className="block bg-secondary rounded-xl p-6 hover:shadow-large hover:border-primary border-2 border-transparent transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-primary" />}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-1">{cat.title}</h3>
                    <p className="text-white/50 text-sm">{cat.count}</p>
                    <ArrowRight className="w-4 h-4 text-gold mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why S-VYASA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Why Train With S-VYASA?
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Award, title: "50+ Years Legacy", desc: "Pioneering Yoga research since 1986" },
              { icon: FlaskConical, title: "Research-Based Teaching", desc: "Evidence-based curriculum developed by PhDs and MDs" },
              { icon: MonitorSmartphone, title: "CODE-Enabled Delivery", desc: "Learn online through S-VYASA University's official LMS" },
              { icon: Globe, title: "Globally Recognized", desc: "NAAC A+, UGC approved, international MoUs" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50 text-center hover:shadow-medium transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CODE Banner */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-4">
            Delivered online through <span className="text-gold font-semibold">CODE</span> — Centre for Open & Distance Education, S-VYASA University
          </p>
          <Link to="/training/delivery" className="text-gold text-sm hover:underline inline-flex items-center gap-1">
            Learn about CODE <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Featured Courses Carousel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl font-bold text-foreground text-center mb-12">
            Popular Programs
          </motion.h2>

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {featuredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="min-w-[300px] max-w-[300px] snap-start bg-card rounded-xl border border-border/50 p-5 hover:shadow-large hover:border-primary/30 transition-all flex-shrink-0"
              >
                <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {course.categoryLabel}
                </span>
                <h3 className="font-heading font-semibold text-foreground mt-3 mb-2 text-sm">{course.title}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </span>
                  <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded-full">{course.mode}</span>
                </div>
                <p className="text-muted-foreground text-xs line-clamp-2 mb-3">{course.description}</p>
                <Link to="/training/courses" className="text-primary text-xs font-medium hover:underline inline-flex items-center gap-1">
                  View Details <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional CTA */}
      <section className="py-16 bg-[hsl(40,100%,97%)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Building2 className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-foreground mb-3">Training for Government & PSUs</h2>
            <p className="text-muted-foreground mb-6">Custom programs for DOPT, ONGC, Power Grid, and more</p>
            <Link to="/training/institutions-psu">
              <Button className="bg-primary text-primary-foreground rounded-full px-8">
                Request Institutional Training
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Enquiry */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Quick Enquiry</h2>
            <p className="text-muted-foreground text-sm">We'll get back within 24 hours</p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <Input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <Input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
            <Select value={formData.course} onValueChange={(v) => setFormData({ ...formData, course: v })}>
              <SelectTrigger><SelectValue placeholder="Interested Course" /></SelectTrigger>
              <SelectContent>
                {trainingCourses.map((c) => (
                  <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Textarea placeholder="Message (optional)" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={3} />
            <Button type="submit" className="w-full bg-primary text-primary-foreground rounded-full">
              <Send className="w-4 h-4 mr-2" /> Submit Enquiry
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default TrainingHome;
