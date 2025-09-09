import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo/Brand */}
        <Link to="/home" className="text-xl font-bold text-emerald-700">
          calendar.iM
        </Link>
        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link to="/home" className="hover:text-emerald-700 font-medium">Home</Link>
          <Link to="/about" className="hover:text-emerald-700 font-medium">About</Link>
          <Link to="/howitworks" className="hover:text-emerald-700 font-medium">How It Works</Link>
          <Link to="/pricing" className="hover:text-emerald-700 font-medium">Pricing</Link>
          <Link to="/contact" className="hover:text-emerald-700 font-medium">Contact</Link>
        </div>
        {/* Example: Show logout button on /profile */}
        {location.pathname === "/profile" && (
          <button
            className="rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition"
            onClick={() => {/* handle logout logic here */}}
          >
            Log out
          </button>
        )}
      </nav>
    </header>
  );
}