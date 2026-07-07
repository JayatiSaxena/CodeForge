import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function UpdatePassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpdatePassword() {
    if (!password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await AuthService.updatePassword(password);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password updated successfully!");
    navigate("/");
  }

  return (
    <div className="max-w-[1536px] mx-auto px-20 py-20 flex items-center justify-center">
      <div className="bg-gradient-to-br from-red-100 to-red-400 border-2 px-10 py-6 rounded-sm w-[450px]">
        <h2 className="text-3xl text-center mb-6">
          Update Password
        </h2>

        <div className="space-y-4">
          <input
            className="border w-full px-4 py-2 rounded-sm"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            className="border w-full px-4 py-2 rounded-sm"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            className="w-full border-2 rounded-md px-6 py-2 font-semibold hover:bg-red-400 cursor-pointer"
            onClick={handleUpdatePassword}
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </div>
    </div>
  );
}