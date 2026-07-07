import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default function DashboardNavbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await AuthService.logout();

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/login");
  }

  return (
    <header className="bg-white shadow-md border-b sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            D
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Welcome Back
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-lg border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Notifications */}
          <button className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
            🔔

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              J
            </div>

            <div>
              <p className="font-semibold text-gray-800">
                Welcome
              </p>

              <p className="text-sm text-gray-500">
                User
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
}