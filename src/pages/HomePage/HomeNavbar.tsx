import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import { useAuthContext } from "../../context/AuthContext";

export default function HomeNavbar() {
  const { session } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogout() {
    await AuthService.logout();
    navigate("/");
  }

  return (

    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex space-x-2">
        <img
          src="./public/codeforge-logo.png"
          alt="CodeForge Logo"
          className="w-10 h-9 rounded-full object-cover"
        />
        <Link
          to="/"
          className="text-2xl font-bold text-red-600"
        >
          CodeForge
        </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-red-600 transition"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-gray-700 hover:text-red-600 transition"
          >
            Features
          </a>

          <a
            href="#about"
            className="text-gray-700 hover:text-red-600 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-red-600 transition"
          >
            Contact
          </a>
          <Link
            to="/courses"
            className="text-gray-700 hover:text-red-600 transition"
          >
            Courses
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {!session ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="px-5 py-2 border rounded-lg hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}