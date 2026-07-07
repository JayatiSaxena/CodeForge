type ActivityItem = {
  id: number;
  title: string;
  description: string;
  time: string;
  type: "login" | "update" | "create" | "alert";
};

export default function RecentActivity() {
  const activities: ActivityItem[] = [
    {
      id: 1,
      title: "Logged In",
      description: "You logged into your account successfully.",
      time: "Just now",
      type: "login",
    },
    {
      id: 2,
      title: "Profile Updated",
      description: "You updated your profile information.",
      time: "2 hours ago",
      type: "update",
    },
    {
      id: 3,
      title: "New Property Added",
      description: "You added 'Green Valley Heights' to listings.",
      time: "Yesterday",
      type: "create",
    },
    {
      id: 4,
      title: "System Alert",
      description: "Your password was changed successfully.",
      time: "2 days ago",
      type: "alert",
    },
  ];

  const getColor = (type: ActivityItem["type"]) => {
    switch (type) {
      case "login":
        return "bg-green-100 text-green-600";
      case "update":
        return "bg-blue-100 text-blue-600";
      case "create":
        return "bg-purple-100 text-purple-600";
      case "alert":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 border-b pb-3 last:border-none"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold ${getColor(
                item.type
              )}`}
            >
              {item.type === "login" && "🔐"}
              {item.type === "update" && "✏️"}
              {item.type === "create" && "➕"}
              {item.type === "alert" && "⚠️"}
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>

            <span className="text-xs text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}