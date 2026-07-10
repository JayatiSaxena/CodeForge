import { useMemo, useState } from "react";

import CoursesHero from "./CoursesHero";
import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import FeaturedCourses from "./FeaturedCourses";
import CourseGrid from "./CourseGrid";
import LearningCTA from "./LearningCTA";
import LoadingSkeleton from "./LoadingSkeleton";

import useCourses from "../../services/useCourses";

export default function Courses() {
  const { courses, loading, error } = useCourses();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(courses.map((course) => course.category))];
  }, [courses]);

  // Filter courses by search + category
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.instructor ?? "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [courses, searchTerm, selectedCategory]);

  // Featured courses
  const featuredCourses = useMemo(() => {
    return filteredCourses.filter((course) => course.featured);
  }, [filteredCourses]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">
            Failed to load courses
          </h2>

          <p className="mt-2 text-gray-600">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <CoursesHero />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <div className="mt-8">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="mt-12">
          <FeaturedCourses courses={featuredCourses} />
        </div>

        <div className="mt-12">
          <CourseGrid courses={filteredCourses} />
        </div>
      </section>

      <LearningCTA />
    </main>
  );
}