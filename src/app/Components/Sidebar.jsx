import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  return (
    <div className="menu p-4 w-80 bg-base-200 text-base-content h-full">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard">Overview</Link>
        </li>
        <li>
          <button
            onClick={() => signOut()}
            className="btn btn-error w-full mt-4"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
