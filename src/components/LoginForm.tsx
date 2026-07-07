import { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await AuthService.login({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/");
  }
  async function loginWithGoogle() {
  const { error } = await AuthService.signInWithGoogle();

  if (error) {
    alert(error.message);
  }
}

  return (
    <div className="max-w-[1536px] mx-auto px-20 py-20 flex items-center justify-center bg-gray-100 ">
      <div className="bg-gray-100 bg-white rounded-xl shadow-lg border-2 px-10 py-6 rounded-sm">
        <div className="space-y-6">
          <h2 className="text-4xl text-center">Login</h2>

          <div>
            <input
              className="bg-gray-100 border w-96 px-4 py-2 rounded-sm hover:bg-gray-200 cursor-text"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              className="bg-gray-100 border w-96 px-4 py-2 rounded-sm hover:bg-gray-200 cursor-text"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/reset-password"
              className="text-sm text-blue-700 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center">
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
              onClick={login}
            >
              Login
            </button>
          </div>
          <button
             onClick={loginWithGoogle}
             className="border rounded-md px-6 py-2 w-full hover:bg-gray-100"
            >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}