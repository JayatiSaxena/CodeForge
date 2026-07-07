import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function WelcomeCard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    }

    getUser();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Glad to see you again. Here's your account overview.
          </p>

          <div className="mt-8 space-y-2">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {user?.email || "Loading..."}
            </p>

            <p>
              <span className="font-semibold">Provider:</span>{" "}
              {user?.app_metadata?.provider || "Email"}
            </p>

            <p>
              <span className="font-semibold">Email Verified:</span>{" "}
              {user?.email_confirmed_at ? "✅ Yes" : "❌ No"}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white text-blue-600 rounded-full w-28 h-28 flex items-center justify-center text-4xl font-bold shadow-xl">
          {user?.email
            ? user.email.charAt(0).toUpperCase()
            : "U"}
        </div>
      </div>
    </div>
  );
}