export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "https://i.pravatar.cc/150?img=32",
      review:
       "CodeForge made learning React so much easier. The structured learning paths and curated resources helped me stay focused without wasting time searching for tutorials.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Aspiring Frontend Developer",
      image: "https://i.pravatar.cc/150?img=15",
      review:
        "I loved how everything was organized in one place. From JavaScript fundamentals to full-stack projects, the platform made learning enjoyable and easy to follow.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Self-Taught Full-Stack Learner",
      image: "https://i.pravatar.cc/150?img=47",
      review:
        "The project-based approach helped me build confidence while creating real applications. I now have several portfolio projects thanks to CodeForge.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            What Our Learners Say
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
           Thousands of aspiring developers trust CodeForge to guide their learning journey. 
           Here's what some of our learners have to say about their experience.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              {/* Rating */}
              <div className="text-yellow-400 text-xl mb-4">
                {"★".repeat(user.rating)}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7 italic">
                "{user.review}"
              </p>

              {/* User */}
              <div className="flex items-center mt-8">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">
                    {user.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {user.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}