import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default function Sidebar() {
  const navigate = useNavigate();

  async function handleLogout() {
    const { error } = await AuthService.logout();

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/login");
  }

  const menuItems = [
    {
      icon: "🏠",
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: "👤",
      title: "Profile",
      path: "/profile",
    },
    {
      icon: "📊",
      title: "Analytics",
      path: "/analytics",
    },
    {
      icon: "🔔",
      title: "Notifications",
      path: "/notifications",
    },
    {
      icon: "⚙️",
      title: "Settings",
      path: "/settings",
    },
    {
      icon: "❓",
      title: "Help",
      path: "/help",
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-white border-r shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600">
          Dashboard
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage your account
        </p>
      </div>

      <nav className="px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.path}
                className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <span className="text-xl">{item.icon}</span>

                <span className="font-medium">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 mt-10">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
        >
          🚪 Logout
        </button>
      </div>
    </aside>
  );
}