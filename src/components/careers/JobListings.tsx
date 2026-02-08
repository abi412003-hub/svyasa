import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, Download, Briefcase, Clock, Mail, Star, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import {
  JobListing,
  CampusInfo,
  prashantiCampusInfo,
  globalCityCampusInfo,
  prashantiJobs,
  globalCityJobs,
  categoryLabels,
} from "./careersData";

type CampusTab = "prashanti" | "globalcity";

const JobListings = () => {
  const [activeTab, setActiveTab] = useState<CampusTab>("prashanti");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentCampus = activeTab === "prashanti" ? prashantiCampusInfo : globalCityCampusInfo;
  const currentJobs = activeTab === "prashanti" ? prashantiJobs : globalCityJobs;

  return (
    <section ref={ref} className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {(["prashanti", "globalcity"] as CampusTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 md:px-8 py-3 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeCareersTab"
                    className="absolute inset-0 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {tab === "prashanti" ? "Prashanti Campus" : "Global City Campus"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Left Side - Campus Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Campus Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <motion.div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `url('${currentCampus.image}')` }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
              </div>

              {/* Campus Info */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-display text-navy mb-4">
                  {currentCampus.heading}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  At S-VYASA, we believe every career path is a transformative journey that ignites personal growth, fuels innovation, and inspires service to society. A value-based foundation sets the tone for individuals to cultivate a spirit of service and strive for personal excellence.
                </p>

                {/* Download PDF Button */}
                <a
                  href={currentCampus.pdfUrl}
                  download
                  className="group inline-flex items-center gap-2 px-5 py-3 border-2 border-primary text-primary rounded-full font-medium
                           hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FileText className="w-4 h-4 group-hover:animate-bounce" />
                  {currentCampus.pdfLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Side - Job Listings */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Section Header */}
              <div className="flex items-center gap-3 border-l-4 border-primary pl-4">
                <Briefcase className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-navy">Current Openings</h3>
              </div>

              {/* Job Cards */}
              {currentJobs.length > 0 ? (
                <div className="space-y-4">
                  {currentJobs.map((job, index) => (
                    <JobCard key={job.id} job={job} index={index} />
                  ))}

                  {currentJobs.length < 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-center py-6"
                    >
                      <motion.p
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-muted-foreground"
                      >
                        More positions opening soon. Follow us for updates!
                      </motion.p>
                    </motion.div>
                  )}
                </div>
              ) : (
                <EmptyState campus={activeTab} />
              )}

              {/* Speculative Application */}
              <div className="bg-white rounded-xl p-5 shadow-sm border border-border">
                <h4 className="font-medium text-navy mb-2">Don't see the right fit?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <a
                  href={`mailto:info@svyasa.edu.in?subject=Career Inquiry - ${
                    activeTab === "prashanti" ? "Prashanti" : "Global City"
                  } Campus`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  Send Speculative Application →
                </a>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const JobCard = ({ job, index }: { job: JobListing; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
    >
      <Link
        to={`/${job.url}`}
        className={`group block bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 
                   border-l-0 hover:border-l-4 border-primary hover:-translate-y-1 ${
                     job.featured ? "ring-2 ring-gold/30" : ""
                   }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {job.featured && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gold/20 text-gold text-xs font-medium rounded-full">
                  <Star className="w-3 h-3" />
                  Featured
                </span>
              )}
              <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {categoryLabels[job.category]}
              </span>
            </div>
            <h4 className="text-lg font-semibold text-navy group-hover:text-primary transition-colors">
              {job.title}
              {job.positions && (
                <span className="text-muted-foreground font-normal text-sm ml-2">
                  ({job.positions.toString().padStart(2, "0")} position{job.positions > 1 ? "s" : ""})
                </span>
              )}
            </h4>
            {job.department && (
              <p className="text-sm text-muted-foreground mt-1">{job.department}</p>
            )}
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </motion.div>
  );
};

const EmptyState = ({ campus }: { campus: CampusTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl p-10 text-center shadow-sm"
    >
      <div className="w-20 h-20 mx-auto mb-4 text-muted-foreground/30">
        <Clock className="w-full h-full" />
      </div>
      <h4 className="text-lg font-semibold text-navy mb-2">No Current Openings</h4>
      <p className="text-muted-foreground mb-6">
        We're not hiring for {campus === "prashanti" ? "Prashanti" : "Global City"} Campus right now,
        but exciting opportunities are always around the corner!
      </p>
      <a
        href={`mailto:info@svyasa.edu.in?subject=Career Inquiry - ${
          campus === "prashanti" ? "Prashanti" : "Global City"
        } Campus`}
        className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-full font-medium
                   hover:bg-primary/90 transition-all duration-300"
      >
        <Mail className="w-4 h-4" />
        Send Your Resume
      </a>
    </motion.div>
  );
};

export default JobListings;
