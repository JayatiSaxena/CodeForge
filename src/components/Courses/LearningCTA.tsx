export default function LearningCTA() {
  return (
    <section className="mt-20 px-6 pb-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-12 text-center shadow-lg md:px-16">

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to Start Your Development Journey?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-red-50 md:text-lg">
          Explore curated software development courses and learn
          modern technologies from the best YouTube resources,
          completely free.
        </p>

        <a
          href="#courses"
          className="mt-8 inline-flex items-center rounded-xl bg-white px-7 py-3 font-semibold text-red-600 transition hover:bg-red-50"
        >
          Explore Courses
        </a>

      </div>
    </section>
  );
}