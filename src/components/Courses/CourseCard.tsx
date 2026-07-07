import { Link } from "react-router-dom";

import type { Course } from "../../types/Courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <img
        src={course.image_url}
        alt={course.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          {course.category}
        </span>

        <h3 className="text-xl font-bold mt-4 text-gray-900">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {course.description}
        </p>

        <div className="mt-4 space-y-1 text-sm text-gray-500">
          <p>
            <strong>Instructor:</strong> {course.instructor}
          </p>

          <p>
            <strong>Duration:</strong> {course.duration}
          </p>

          {course.rating && (
            <p>
              <strong>Rating:</strong> ⭐ {course.rating}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-blue-600">
            ₹{course.price}
          </span>

          <Link
            to={`/courses/${course.id}`}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}