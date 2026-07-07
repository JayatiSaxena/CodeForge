import CourseCard from "./CourseCard";
import type { Course } from "../../types/Courses";

interface FeaturedCoursesProps {
  courses: Course[];
}

export default function FeaturedCourses({
  courses,
}: FeaturedCoursesProps) {

  // If no featured courses exist, don't show this section
  if (courses.length === 0) {
    return null;
  }

  return (
    <section id="featured" className="mt-14">

      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          ⭐ Featured Courses
        </h2>

        <p className="mt-2 text-gray-600">
          Start learning with our most recommended courses.
        </p>
      </div>


      {/* Course Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>

    </section>
  );
}