import type { Category, Course } from "@/data/courses";

export type ApplyCampusSlug = "global-city-campus" | "prashanti-campus";

/** Campus route for the in-site application form. */
export const campusSlugFor = (campusType: Course["campusType"] | Category["campusType"]): ApplyCampusSlug =>
  campusType === "gcc" ? "global-city-campus" : "prashanti-campus";

/** In-site application form, preselected for this course. */
export const getApplyPath = (course: Pick<Course, "slug" | "campusType">) =>
  `/apply/${campusSlugFor(course.campusType)}?course=${encodeURIComponent(course.slug)}#apply-form`;

/** In-site application form, preselected for this programme category. */
export const getCategoryApplyPath = (category: Pick<Category, "slug" | "campusType">) =>
  `/apply/${campusSlugFor(category.campusType)}?category=${encodeURIComponent(category.slug)}#apply-form`;
