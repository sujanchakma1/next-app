"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile drawer */}
      <div className={` h-full min-h-screen w-64 bg-base-300 p-4 shadow-md transform ${drawerOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:translate-x-0 md:static md:block`}>
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="hover:text-primary">Overview</Link>
          </li>
          <li>
            <Link href="/dashboard/addProduct" className="hover:text-primary">Add Products</Link>
          </li>
        </ul>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="btn btn-error rounded-full w-full mt-4"
        >
          Logout
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-base-100">
        {/* Mobile menu button */}
        <div className="md:hidden mb-4">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {children}
      </div>

      {/* Overlay for mobile drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </div>
  );
}
