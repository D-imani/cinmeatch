"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Back button (hidden on home page) */}
        <div className="flex items-center space-x-4">
          {pathname !== "/" && (
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm transition"
            >
              ← Back
            </Link>
          )}

          <h1 className="text-xl font-bold">🎬 CinMeatch</h1>
        </div>

        {/* Nav links */}
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/favorites" className="hover:text-blue-400 transition">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
