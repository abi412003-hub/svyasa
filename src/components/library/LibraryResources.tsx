import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { ugResources, pgResources, openAccessResources, eNewspapers, usefulLinks } from "./libraryData";

const LibraryResources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLanguage, setActiveLanguage] = useState("English");

  const languages = Object.keys(eNewspapers);

  return (
    <div ref={ref} className="space-y-16">
      {/* Resource Collection */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-display text-navy mb-3">Type of Resource Collections</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
          <p className="text-sm text-muted-foreground mt-3">As of 28-02-2025</p>
        </motion.div>

        {/* UG Programme Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
        >
          <div className="bg-navy text-white px-6 py-4">
            <h3 className="font-semibold">UG Programme</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-cream">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">Sl. No</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">Department</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">No of Titles</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">No of Volumes</th>
                </tr>
              </thead>
              <tbody>
                {ugResources.map((row, i) => (
                  <motion.tr
                    key={row.slNo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-cream/30"} hover:bg-cream/50 transition-colors`}
                  >
                    <td className="px-4 py-3 text-muted-foreground">{row.slNo.toString().padStart(2, "0")}</td>
                    <td className="px-4 py-3 font-medium text-navy">{row.department}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.titles}</td>
                    <td className="px-4 py-3 text-primary font-medium">{row.volumes}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* PG Programme Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
        >
          <div className="bg-navy text-white px-6 py-4">
            <h3 className="font-semibold">PG Programme</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-cream">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">Sl. No</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">Department</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">No of Titles</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-navy">No of Volumes</th>
                </tr>
              </thead>
              <tbody>
                {pgResources.map((row, i) => (
                  <motion.tr
                    key={row.slNo}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-cream/30"} hover:bg-cream/50 transition-colors`}
                  >
                    <td className="px-4 py-3 text-muted-foreground">{row.slNo.toString().padStart(2, "0")}</td>
                    <td className="px-4 py-3 font-medium text-navy">{row.department}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.titles}</td>
                    <td className="px-4 py-3 text-primary font-medium">{row.volumes}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* General & Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <p className="text-muted-foreground">
            <span className="font-semibold text-navy">General & Reference:</span> Novels — 67 Titles, 68 Volumes
          </p>
        </motion.div>

        {/* Grand Total */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="bg-primary rounded-xl p-6 text-center text-white"
        >
          <p className="text-xl font-semibold">
            Total Titles: <span className="text-2xl">641</span> | Total Volumes: <span className="text-2xl">2,846</span>
          </p>
        </motion.div>
      </div>

      {/* Open Access Resources */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl font-display text-navy mb-6"
        >
          Open Access Resources
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {openAccessResources.map((resource, i) => (
            <motion.a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.03 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl p-4 shadow-md flex items-center justify-between hover:shadow-lg transition-all"
            >
              <span className="font-medium text-navy group-hover:text-primary transition-colors">
                {resource.name}
              </span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* E-Newspapers & Magazines */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl font-display text-navy mb-6"
        >
          E-Newspapers & Magazines
        </motion.h3>

        {/* Language Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLanguage(lang)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeLanguage === lang
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Publications */}
        <motion.div
          key={activeLanguage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {eNewspapers[activeLanguage].map((pub, i) => (
            <motion.span
              key={pub}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.02 }}
              className="group inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md hover:bg-primary hover:text-white transition-all cursor-pointer"
            >
              {pub}
              <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Useful Links */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl font-display text-navy mb-6"
        >
          Useful Links
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {usefulLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-lg p-3 shadow-sm flex items-center justify-between hover:shadow-md transition-all"
            >
              <span className="text-sm font-medium text-navy group-hover:text-primary transition-colors truncate">
                {link.name}
              </span>
              <ExternalLink className="w-3 h-3 flex-shrink-0 ml-2 text-muted-foreground group-hover:text-primary" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryResources;
