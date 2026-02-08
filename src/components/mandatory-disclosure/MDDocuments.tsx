import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, Star, Award, Building2, Users } from "lucide-react";
import { disclosureCategories, MDDocument, MDCategory } from "./mandatoryDisclosureData";

const categoryIcons: Record<string, React.ElementType> = {
  certificate: Award,
  star: Star,
  building: Building2,
  people: Users,
};

interface DocumentCardProps {
  doc: MDDocument;
  index: number;
  isInView: boolean;
  baseDelay: number;
}

const DocumentCard = ({ doc, index, isInView, baseDelay }: DocumentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: baseDelay + index * 0.08 }}
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

      {/* Featured Badge */}
      {doc.badge && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 bg-gold text-navy text-xs font-semibold rounded-full shadow-md">
          <Star className="w-3 h-3 fill-current" />
          {doc.badge}
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

interface CategorySectionProps {
  category: MDCategory;
  index: number;
  isInView: boolean;
}

const CategorySection = ({ category, index, isInView }: CategorySectionProps) => {
  const Icon = categoryIcons[category.icon] || Award;
  const baseDelay = 0.3 + index * 0.2;

  return (
    <div className="mb-12 last:mb-0">
      {/* Category Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: baseDelay }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="h-px flex-1 bg-border" />
        <h3 className="text-lg font-semibold text-navy flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: baseDelay + 0.1, type: "spring", bounce: 0.5 }}
            className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <Icon className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="w-2 h-2 bg-primary rounded-full" />
          {category.title}
        </h3>
        <div className="h-px flex-1 bg-border" />
      </motion.div>

      {/* Documents Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.documents.map((doc, i) => (
          <DocumentCard
            key={doc.id}
            doc={doc}
            index={i}
            isInView={isInView}
            baseDelay={baseDelay + 0.15}
          />
        ))}
      </div>
    </div>
  );
};

const MDDocuments = () => {
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
          <h2 className="text-3xl font-display text-navy mb-3">Disclosure Documents</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Category Sections */}
        {disclosureCategories.map((category, i) => (
          <CategorySection
            key={category.id}
            category={category}
            index={i}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
};

export default MDDocuments;
