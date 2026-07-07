import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-red-600 via-red-500 to-red-200 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
           Forge Your Future in 
            <span className="block text-yellow-300">
            Software Development
            </span>
          </h1>

          <p className="mt-6 text-lg text-red-100 leading-8">
            CodeForge is a modern full-stack e-learning platform where aspiring developers can learn web development through structured learning paths, curated video resources, coding roadmaps, and personalized dashboards.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/Courses"
              className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Start Learning
            </Link>

            <a
              href="#features"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-700 transition"
            >
              Browse Courses
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 shadow-2xl w-[340px] h-[340px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">🚀</div>

              <h2 className="text-2xl font-bold">
                Learn Modern Web Development
              </h2>

              <p className="mt-3 text-red-100">
                Master HTML, CSS, JavaScript, React, TypeScript, Node.js, Express, SQL, PostgreSQL, and more through structured learning paths.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}