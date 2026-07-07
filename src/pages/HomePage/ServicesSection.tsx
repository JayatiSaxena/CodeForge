export default function ServicesSection() {
  const services = [
    {
      title: "Programming Courses",
      icon: "📚",
      description:
        "Learn React, JavaScript, TypeScript, Node.js, SQL, and more through curated learning materials.",
    },
    {
      title: "Learning Roadmaps",
      icon: "🗺️",
      description:
        "Follow structured learning paths from beginner to advanced full-stack development.",
    },
    {
      title: "Project-Based Learning",
      icon: "💻",
      description:
        "Build practical projects that strengthen your portfolio and real-world development skills.",
    },
    {
      title: "Interview Preparation",
      icon: "🎯",
      description:
        "Prepare for technical interviews with coding resources, important concepts, and practice questions.",
    },
    {
      title: "Developer Resources",
      icon: "📖",
      description:
        "Access official documentation, cheat sheets, GitHub repositories, and recommended articles.",
    },
    {
      title: "High PerformancCommunity Support (Future)",
      icon: "🌐",
      description:
        "Connect with fellow learners, discuss topics, and share your projects with the community.",
    },
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Everything You Need to Build Your Developer Career
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Whether you're taking your first steps into programming or advancing your full-stack development skills, CodeForge provides 
            structured learning experiences designed to help you succeed. Explore curated courses, hands-on projects, personalized 
            learning paths, and interview preparation resources—all in one place.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-3xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-6 text-red-500 font-semibold hover:text-red-700 transition">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}