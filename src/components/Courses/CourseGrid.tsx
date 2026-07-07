import CourseCard from "./CourseCard";
import type { Course } from "../../types/course";

interface CourseGridProps {
  courses: Course[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">
          No Courses Found
        </h3>

        <p className="mt-2 text-gray-500">
          Try changing your search or category.
        </p>
      </div>
    );
  }

  return (
    <section id="courses" className="mt-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          All Courses
        </h2>

        <p className="mt-2 text-gray-600">
          Explore our curated collection of free software development courses.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}