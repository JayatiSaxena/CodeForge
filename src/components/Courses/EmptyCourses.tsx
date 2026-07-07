interface EmptyCoursesProps {
  searchTerm?: string;
  selectedCategory?: string;
}

export default function EmptyCourses({
  searchTerm,
  selectedCategory,
}: EmptyCoursesProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white py-20 text-center shadow-sm">
      {/* Illustration */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
        <span className="text-5xl">📚</span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900">
        No Courses Found
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-gray-600">
        {searchTerm
          ? `We couldn't find any courses matching "${searchTerm}".`
          : selectedCategory && selectedCategory !== "All"
          ? `There are no courses available in the "${selectedCategory}" category yet.`
          : "No courses have been added yet. Please check back later."}
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-8 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Refresh
      </button>
    </div>
  );
}