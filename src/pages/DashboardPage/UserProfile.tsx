import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function UserProfile() {
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

  const avatar =
    user?.user_metadata?.avatar_url ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(
      user?.email || "User"
    )}&background=2563eb&color=fff`;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        User Profile
      </h2>

      <div className="flex flex-col items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
        />

        <h3 className="mt-4 text-xl font-semibold text-gray-800">
          {user?.user_metadata?.full_name ||
            user?.user_metadata?.name ||
            "User"}
        </h3>

        <p className="text-gray-500">
          {user?.email}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex justify-between border-b pb-3">
          <span className="font-medium text-gray-600">User ID</span>
          <span className="text-gray-800 text-sm">
            {user?.id?.slice(0, 8)}...
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="font-medium text-gray-600">Provider</span>
          <span className="capitalize text-gray-800">
            {user?.app_metadata?.provider || "Email"}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="font-medium text-gray-600">Email Verified</span>
          <span className="text-gray-800">
            {user?.email_confirmed_at ? "✅ Yes" : "❌ No"}
          </span>
        </div>

        <div className="flex justify-between border-b pb-3">
          <span className="font-medium text-gray-600">Created</span>
          <span className="text-gray-800">
            {user?.created_at
              ? new Date(user.created_at).toLocaleDateString()
              : "--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Last Sign In</span>
          <span className="text-gray-800">
            {user?.last_sign_in_at
              ? new Date(user.last_sign_in_at).toLocaleDateString()
              : "--"}
          </span>
        </div>
      </div>
    </div>
  );
}