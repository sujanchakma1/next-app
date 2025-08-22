"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js 13+ useRouter

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Redirect logic
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/products"); // login successful → products page
    }
  }, [status]);

  const handleCredentialsLogin = async () => {
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // redirect manually with router
    });
    setLoading(false);

    if (res?.error) {
      setError("Login failed. Please try again.");
    }
  };

  if (status === "loading") {
    return <p className="text-center mt-10">Checking session...</p>;
  }

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
