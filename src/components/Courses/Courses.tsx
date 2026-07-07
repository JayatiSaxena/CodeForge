import CoursesHero from "./CoursesHero";
import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import FeaturedCourses from "./FeaturedCourses";
import CourseGrid from "./CourseGrid";
import LearningCTA from "./LearningCTA";

export default function Courses() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CoursesHero />

      <section className="max-w-7xl mx-auto px-6 py-10">
        <SearchBar />

        <div className="mt-8">
          <CategoryTabs />
        </div>

        <div className="mt-10">
          <FeaturedCourses />
        </div>

        <div className="mt-12">
          <CourseGrid />
        </div>
      </section>

      <LearningCTA />
    </main>
  );
}