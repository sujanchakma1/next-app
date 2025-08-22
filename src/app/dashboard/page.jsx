"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import Loading from "../loading";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  // যদি user লগইন না করে থাকে তাহলে redirect
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(undefined, { callbackUrl: "/login" }); // এখানে লগইন পেজের url দিন
    }
  }, [status]);

  // লোডিং spinner দেখানো
  if (status === "loading") {
    return <Loading />;
  }

  // এখানে আরেকবার extra safety check
  if (!session) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {session.user?.name || session.user?.email}</p>
    </div>
  );
}
