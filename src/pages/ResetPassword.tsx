import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetPassword() {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    const { error } = await AuthService.resetPassword(email);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Password reset email sent! Please check your inbox.");
    navigate("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">
          Reset Password
        </h1>

        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleResetPassword}
          disabled={loading}
          className="w-full rounded bg-red-500 p-2 text-white hover:bg-red-700 disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </div>
    </div>
  );
}