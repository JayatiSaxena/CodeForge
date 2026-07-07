import { useState } from "react";
import AuthService from "../services/auth.service";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register() {
    const { error } = await AuthService.register({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Check your email to verify your account.");
  }

  return (
    <div className="max-w-[1536px] mx-auto px-20 py-20 flex items-center justify-center bg-gray-100 ">
    <div className="bg-gray-100 bg-white rounded-xl shadow-lg border-2 px-10 py-6 rounded-sm">
    <div className="space-y-6">
      <h2 className="text-4xl text-center ">Register</h2>

      <div>
        <input  className="bg-gray-100 border w-96 px-4 py-2 rounded-sm hover:bg-gray-200 cursor-text"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      </div>

    <div>
      <input  className="bg-gray-100 border w-96 px-4 py-2 rounded-sm hover:bg-gray-200 cursor-text"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
    </div>

      <div className="flex items-center justify-center ">
      <button  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
      onClick={register}>Register</button>
      </div>
    </div>
    </div>
    </div>
  );
}