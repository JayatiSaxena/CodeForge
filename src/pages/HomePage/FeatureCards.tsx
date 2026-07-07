export default function FeatureCards() {
  const features = [
    {
      icon: "📚",
      title: "Structured Learning Paths",
      description:
        "Follow a roadmap from beginner to full-stack developer with organized learning paths.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: "🎥",
      title: "Curated Video Courses",
      description:
        "Access carefully selected YouTube tutorials and playlists from trusted educators.",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: "📈",
      title: "Track Your Progress",
      description:
        "Continue where you left off and monitor your learning journey.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: "💻",
      title: "Hands-on Projects",
      description:
        "Practice every concept by building real-world applications.",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: "🔖",
      title: "Bookmark Courses",
      description:
        "Save your favorite tutorials and resources for later.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "👨‍💻",
      title: "Developer Community (future feature)",
      description:
        "Discuss concepts, ask questions, and learn together.",
      color: "from-indigo-500 to-red-500",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-widest">
            Features
          </span>

          <h2 className="text-5xl font-bold text-gray-800 mt-4">
            Master Modern Web Development
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg">
            Learn React, JavaScript, TypeScript, Node.js, Express, SQL, PostgreSQL, Git, and modern web development through curated courses, guided learning paths, and hands-on projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
            >
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-4xl shadow-lg`}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-8 text-gray-800 group-hover:text-red-600 transition">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

              <button className="mt-8 text-red-600 font-semibold hover:translate-x-2 transition duration-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">

          <div>
            <h3 className="text-5xl font-bold text-red-600">25+</h3>
            <p className="text-gray-600 mt-2">Courses</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-600">100+</h3>
            <p className="text-gray-600 mt-2">Learning Resources</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-600">12</h3>
            <p className="text-gray-600 mt-2">Learning Paths</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-red-600">100%</h3>
            <p className="text-gray-600 mt-2">Free Content</p>
          </div>

        </div>

      </div>
    </section>
  );
}