"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon

export default function LoginPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (session) {
    return (
      <div className="flex flex-col items-center gap-4 p-6">
        <h2 className="text-xl">
          Welcome, {session.user?.name || session.user?.email}
        </h2>
        <button onClick={() => signOut()} className="btn btn-error">
          Logout
        </button>
      </div>
    );
  }

  const handleCredentialsLogin = async () => {
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/products",
    });
    setLoading(false);

    if (res?.error) {
      setError("Login failed. Please try again.");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold">Login</h2>

      {error && <p className="text-red-500">{error}</p>}

      {/* Email/Password Form */}
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleCredentialsLogin}
        className={`btn btn-primary w-full rounded-full ${
          loading ? "loading" : ""
        }`}
        disabled={loading}
      >
        Login
      </button>
    </div>
  );
}
