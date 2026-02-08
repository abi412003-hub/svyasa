import { motion } from "framer-motion";
import { FolderSearch } from "lucide-react";

const OthersTab = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl p-12 text-center shadow-md"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 mx-auto mb-6 text-muted-foreground/30"
      >
        <FolderSearch className="w-full h-full" />
      </motion.div>
      
      <h3 className="text-xl font-semibold text-navy mb-3">
        No Additional Documents
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto">
        No additional documents at this time. Check back soon for updates!
      </p>
    </motion.div>
  );
};

export default OthersTab;
