import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, Star } from "lucide-react";
import { naacDocuments, calendarDocuments, IQACDocument } from "./iqacData";

interface DocumentCardProps {
  doc: IQACDocument;
  index: number;
  isInView: boolean;
}

const DocumentCard = ({ doc, index, isInView }: DocumentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className={`group relative bg-white rounded-xl p-5 shadow-md border-l-4 transition-all duration-300 hover:shadow-xl ${
        doc.isFeatured ? "border-gold" : "border-primary"
      }`}
    >
      {/* Featured shimmer */}
      {doc.isFeatured && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-gold/10 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
      )}

      {/* NAAC Badge */}
      {doc.isFeatured && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 bg-gold text-navy text-xs font-semibold rounded-full shadow-md">
          <Star className="w-3 h-3 fill-current" />
          NAAC Accredited
        </div>
      )}

      {/* Latest Badge */}
      {doc.isLatest && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
          Current
        </div>
      )}

      <div className="relative flex items-start gap-4">
        {/* PDF Icon */}
        <motion.div
          initial={{ rotateY: 0 }}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.4 }}
          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
            doc.isFeatured ? "bg-gold/10 text-gold" : "bg-primary/10 text-primary"
          }`}
        >
          <FileText className="w-6 h-6" />
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-navy leading-snug mb-3 group-hover:text-primary transition-colors">
            {doc.title}
          </h3>

          <a
            href={doc.pdfUrl}
            download
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              doc.isFeatured
                ? "text-gold bg-gold/5 hover:bg-gold hover:text-white"
                : "text-primary bg-primary/5 hover:bg-primary hover:text-white"
            }`}
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            Download PDF
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const IQACDocuments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-display text-navy mb-3">IQAC Documents & Reports</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* NAAC Accreditation & Criteria Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px flex-1 bg-border" />
            <h3 className="text-lg font-semibold text-navy flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              NAAC Accreditation & Criteria
            </h3>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {naacDocuments.map((doc, i) => (
              <DocumentCard key={doc.id} doc={doc} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Academic Calendars Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px flex-1 bg-border" />
            <h3 className="text-lg font-semibold text-navy flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Academic Calendars
            </h3>
            <div className="h-px flex-1 bg-border" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendarDocuments.map((doc, i) => (
              <DocumentCard key={doc.id} doc={doc} index={naacDocuments.length + i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IQACDocuments;
