import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              MyApp
            </h2>

            <p className="mt-4 leading-7">
              A modern authentication platform built with React,
              TypeScript, Tailwind CSS, and Supabase.
            </p>

            <div className="flex gap-4 mt-6 text-2xl">
              <a href="#" className="hover:text-white transition">
                🌐
              </a>

              <a href="#" className="hover:text-white transition">
                🐦
              </a>

              <a href="#" className="hover:text-white transition">
                💼
              </a>

              <a href="#" className="hover:text-white transition">
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-red-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-red-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-red-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-red-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Authentication */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Authentication
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/login"
                  className="hover:text-red-400 transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="hover:text-red-400 transition"
                >
                  Register
                </Link>
              </li>

              <li>
                <Link
                  to="/reset-password"
                  className="hover:text-red-400 transition"
                >
                  Forgot Password
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">
              <p>📍 New Delhi, India</p>

              <p>📧 support@myapp.com</p>

              <p>📞 +91 98765 43210</p>

              <p>🕒 Mon - Fri : 9 AM - 6 PM</p>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm">
            © {new Date().getFullYear()} MyApp. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-red-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-red-400 transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-red-400 transition">
              Cookies
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}