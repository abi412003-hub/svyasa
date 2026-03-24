import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import CourseHero from "@/components/course/CourseHero";
import OverviewSection from "@/components/course/OverviewSection";
import HighlightsCarousel from "@/components/course/HighlightsCarousel";
import CourseStructureSection from "@/components/course/CourseStructureSection";
import EligibilitySection from "@/components/course/EligibilitySection";
import CareersSection from "@/components/course/CareersSection";
import TestimonialsSection from "@/components/course/TestimonialsSection";
import FeeSection from "@/components/course/FeeSection";
import CourseCTA from "@/components/course/CourseCTA";
import RelatedPrograms from "@/components/course/RelatedPrograms";
import ScrollSpySidebar from "@/components/course/ScrollSpySidebar";
import CompareWidget from "@/components/course/CompareWidget";
import CourseSkeleton from "@/components/course/CourseSkeleton";
import { Button } from "@/components/ui/button";
import { useCourseBySlug, useCategoryForCourse, useCoursesByCategory, useRelatedCourses } from "@/hooks/useSupabaseCourses";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const shouldReduceMotion = useReducedMotion();
  
  const { course, isLoading: courseLoading } = useCourseBySlug(slug);
  const { category, isLoading: categoryLoading } = useCategoryForCourse(slug, course?.category);
  const { courses: categoryCourses } = useCoursesByCategory(course?.category);
  const relatedCourses = useRelatedCourses(slug, course?.category, course?.relatedPrograms || []);

  const isLoading = courseLoading || (course && categoryLoading);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Update page title
  useEffect(() => {
    if (course) {
      document.title = `${course.title} | S-VYASA University`;
    } else if (!isLoading) {
      document.title = "Program Not Found | S-VYASA University";
    }
  }, [course, isLoading]);

  if (isLoading) {
    return (
      <Layout>
        <CourseSkeleton />
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md"
          >
            <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">404</h1>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-secondary mb-4">
              Program Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The program you're looking for doesn't exist or may have been moved.
            </p>
            <div className="mb-8 opacity-30">
              <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto">
                <path d="M50 20 Q65 40 50 60 Q35 40 50 20" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
                <path d="M50 20 Q75 55 50 60 Q25 55 50 20" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
                <path d="M35 50 Q50 55 65 50" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent" />
              </svg>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-xl px-6">
                <Link to="/admissions">Browse Programs</Link>
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
      <CourseHero course={course} category={category} />
      <OverviewSection course={course} />
      <HighlightsCarousel course={course} />
      <EligibilitySection course={course} />
      {course.learningJourney && course.learningJourney.length > 0 && (
        <CourseStructureSection learningJourney={course.learningJourney} />
      )}
      <CareersSection course={course} />
      <TestimonialsSection />
      <FeeSection course={course} />
      <CourseCTA course={course} />
      <RelatedPrograms relatedCourses={relatedCourses} />
      <ScrollSpySidebar applyLink={course.applyLink} shortTitle={course.shortTitle} />
      <CompareWidget currentCourse={course} categoryCourses={categoryCourses} />
      <div className="h-16 lg:hidden" />
    </Layout>
  );
};

export default CourseDetail;
