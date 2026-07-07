import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Statistics() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    fetchUser();
  }, []);

  const stats = [
    {
      title: "Email Verified",
      value: user?.email_confirmed_at ? "Yes" : "No",
      icon: "✅",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Provider",
      value: user?.app_metadata?.provider ?? "Email",
      icon: "🔑",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Account Created",
      value: user?.created_at
        ? new Date(user.created_at).toLocaleDateString()
        : "--",
      icon: "📅",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Last Sign In",
      value: user?.last_sign_in_at
        ? new Date(user.last_sign_in_at).toLocaleDateString()
        : "--",
      icon: "🕒",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Account Statistics
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div
              className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${stat.color}`}
            >
              {stat.icon}
            </div>

            <h3 className="mt-5 text-gray-500 text-sm">
              {stat.title}
            </h3>

            <p className="mt-2 text-xl font-bold text-gray-800 break-words">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}