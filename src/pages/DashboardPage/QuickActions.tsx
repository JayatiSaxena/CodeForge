import { useNavigate } from "react-router-dom";

type ActionItem = {
  label: string;
  icon: string;
  path?: string;
  onClick?: () => void;
};

export default function QuickActions() {
  const navigate = useNavigate();

  const actions: ActionItem[] = [
    {
      label: "View Profile",
      icon: "👤",
      path: "/dashboard/profile",
    },
    {
      label: "Settings",
      icon: "⚙️",
      path: "/dashboard/settings",
    },
    {
      label: "Add Property",
      icon: "🏡",
      path: "/dashboard/add-property",
    },
    {
      label: "My Listings",
      icon: "📋",
      path: "/dashboard/listings",
    },
    {
      label: "Logout",
      icon: "🚪",
      onClick: () => {
        // clear auth here if needed
        localStorage.removeItem("token");
        navigate("/login");
      },
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => {
              if (action.onClick) action.onClick();
              else if (action.path) navigate(action.path);
            }}
            className="flex items-center gap-2 p-3 rounded-lg border hover:bg-gray-100 transition text-sm font-medium"
          >
            <span className="text-lg">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}