import { FaBookOpen } from "react-icons/fa";

export default function CoursesHero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-12">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-100 px-4 py-2">
          <FaBookOpen size={18} className="text-red-600" />
          <span className="text-sm font-medium text-red-600">
            CodeForge Learning
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Learn Software Development
          <br />
          <span className="text-red-600">
            Through Curated YouTube Courses
          </span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
          Discover carefully selected YouTube playlists covering modern
          technologies like React, JavaScript, TypeScript, Node.js,
          Express.js, MongoDB, Git, Docker, and much more.
          Everything is organized in one place to help you learn
          efficiently and completely free.
        </p>

      </div>
    </section>
  );
}