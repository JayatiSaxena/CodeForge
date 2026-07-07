export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div>
            <span className="text-red-600 font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-4xl font-bold text-gray-800 mt-4">
              Learn Web Development Through Structured Learning
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              CodeForge is a modern learning platform designed to help aspiring developers master 
              web development from the ground up. Explore carefully organized learning paths covering 
              HTML, CSS, JavaScript, React, TypeScript, Node.js, Express, SQL, PostgreSQL, Git, and more.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Instead of searching across dozens of websites, CodeForge brings together 
              high-quality resources, practical projects, and structured roadmaps in one place.
            </p>

            <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-red-500 to-red-200 rounded-3xl shadow-xl p-10 w-full max-w-md text-white">
              <h3 className="text-3xl font-bold mb-6">
                Why Learn with CodeForge?
              </h3>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <span>Structured Learning Paths</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <span>Curated Video Courses</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <span>Hands-on Coding Projects</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <span>Track Your Learning Progress</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <span>Beginner to Full-Stack Roadmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✔️</span>
                  <span>Completely Free Learning Resources</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}