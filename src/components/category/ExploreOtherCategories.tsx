import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/courses";
import { useAllCategories } from "@/hooks/useSupabaseCourses";

interface ExploreOtherCategoriesProps {
  currentCategorySlug: string;
}

const ExploreOtherCategories = ({ currentCategorySlug }: ExploreOtherCategoriesProps) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { categories } = useAllCategories();

  const otherCategories = categories.filter(cat => cat.slug !== currentCategorySlug);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-8"
        >
          Explore Other Programs
        </motion.h2>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {otherCategories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={shouldReduceMotion ? {} : { opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/programs/${category.slug}`}
                  className="block w-[280px] bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/10 transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-white text-lg leading-snug">
                      {category.shortTitle}
                    </h3>
                    <span className="shrink-0 bg-primary/80 text-white text-xs px-2 py-1 rounded-full">
                      {category.programSlugs.length} Programs
                    </span>
                  </div>
                  <p className="text-cream/80 text-sm mb-4 line-clamp-2">
                    {category.subtitle}
                  </p>
                  <div className="flex items-center text-primary group-hover:text-primary-light transition-colors">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOtherCategories;
