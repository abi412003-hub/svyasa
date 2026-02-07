import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <nav ref={ref} className="py-4 bg-muted/50">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0 }}
          >
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
          </motion.li>

          {items.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: (index + 1) * 0.1 }}
              className="flex items-center gap-2"
            >
              <ChevronRight size={14} className="text-muted-foreground/50" />
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
