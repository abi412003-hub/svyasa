import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CategoryHero from "@/components/category/CategoryHero";
import ProgramGrid from "@/components/category/ProgramGrid";
import WhyStudySection from "@/components/category/WhyStudySection";
import CompareTable from "@/components/category/CompareTable";
import ExploreOtherCategories from "@/components/category/ExploreOtherCategories";
import CategoryCTA from "@/components/category/CategoryCTA";
import CategorySkeleton from "@/components/category/CategorySkeleton";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, getCoursesByCategory, Category, Course } from "@/data/courses";

const CategoryLanding = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  const shouldReduceMotion = useReducedMotion();
  
  const [category, setCategory] = useState<Category | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    // Simulate brief loading for skeleton effect
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      if (categorySlug) {
        const foundCategory = getCategoryBySlug(categorySlug);
        const foundCourses = getCoursesByCategory(categorySlug);
        setCategory(foundCategory || null);
        setCourses(foundCourses);
      }
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [categorySlug]);

  // Update page title
  useEffect(() => {
    if (category) {
      document.title = `${category.title} | Programs | S-VYASA University`;
    } else if (!isLoading) {
      document.title = "Category Not Found | S-VYASA University";
    }
  }, [category, isLoading]);

  const handleExploreClick = () => {
    const gridSection = document.getElementById("program-grid");
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <Layout>
        <CategorySkeleton />
      </Layout>
    );
  }

  // 404 state
  if (!category) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            {/* 404 Text */}
            <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
            
            {/* Heading */}
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary mb-4">
              Category Not Found
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground mb-8">
              The program category you're looking for doesn't exist or may have been moved.
            </p>

            {/* Decorative Lotus */}
            <div className="mb-8 opacity-30">
              <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto">
                <path d="M50 20 Q65 40 50 60 Q35 40 50 20" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
                <path d="M50 20 Q75 55 50 60 Q25 55 50 20" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
                <path d="M35 50 Q50 55 65 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
              </svg>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-primary text-white hover:bg-primary-dark rounded-xl px-6">
                <Link to="/admissions">Browse All Programs</Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-xl px-6">
                <Link to="/">Go Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <CategoryHero 
        category={category} 
        programCount={courses.length}
        onExploreClick={handleExploreClick}
      />

      {/* Program Explorer Grid */}
      <ProgramGrid courses={courses} category={category} />

      {/* Why Study Section */}
      <WhyStudySection category={category} />

      {/* Compare Table */}
      {courses.length > 1 && (
        <CompareTable courses={courses} />
      )}

      {/* Explore Other Categories */}
      <ExploreOtherCategories currentCategorySlug={category.slug} />

      {/* Final CTA */}
      <CategoryCTA category={category} />
    </Layout>
  );
};

export default CategoryLanding;
