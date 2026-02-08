import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const ComingSoon = () => {
  const location = useLocation();

  // Generate page title from pathname
  const getPageTitle = () => {
    const path = location.pathname.slice(1);
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    document.title = `${getPageTitle()} | S-VYASA University`;
  }, [location.pathname]);

  return (
    <Layout>
      <Breadcrumb items={[{ label: getPageTitle() }]} />

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <motion.div
              className="w-24 h-24 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Construction className="w-12 h-12 text-primary" />
            </motion.div>

            {/* Page title */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {getPageTitle()}
            </h1>

            {/* Coming soon message */}
            <motion.p
              className="text-xl md:text-2xl text-gold font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Coming Soon
            </motion.p>

            <motion.p
              className="text-muted-foreground max-w-xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We're working on bringing you this page. Please check back soon or
              explore other sections of our website.
            </motion.p>

            {/* S-VYASA branding */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="inline-block px-6 py-3 bg-cream rounded-2xl">
                <p className="text-sm text-muted-foreground">
                  S-VYASA Deemed-to-be University
                </p>
                <p className="text-xs text-muted-foreground/70">
                  Where Ancient Wisdom Meets Modern Science
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <a href="https://applynow.svyasa.edu.in/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground">
                  Apply Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative mandala */}
      <motion.div
        className="fixed bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="60"
              rx="20"
              ry="50"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="25" />
        </svg>
      </motion.div>
    </Layout>
  );
};

export default ComingSoon;
