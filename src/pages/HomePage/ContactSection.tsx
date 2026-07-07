export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-red-600 to-red-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center text-white mb-14">
          <span className="uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl font-bold mt-3">
            We'd Love to Hear From You
          </h2>

          <p className="mt-4 text-red-100 max-w-2xl mx-auto">
            Have questions, suggestions, or feedback? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">📍</div>

              <h3 className="text-xl font-semibold text-gray-800">
                Address
              </h3>

              <p className="mt-2 text-gray-600">
                123 Innovation Street
                <br />
                New Delhi, India
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">📧</div>

              <h3 className="text-xl font-semibold text-gray-800">
                Email
              </h3>

              <p className="mt-2 text-gray-600">
                support@myapp.com
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">📞</div>

              <h3 className="text-xl font-semibold text-gray-800">
                Phone
              </h3>

              <p className="mt-2 text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-4xl mb-4">⏰</div>

              <h3 className="text-xl font-semibold text-gray-800">
                Working Hours
              </h3>

              <p className="mt-2 text-gray-600">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}