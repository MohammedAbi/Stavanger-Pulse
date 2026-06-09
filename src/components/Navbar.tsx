import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClass = (path: string) =>
    `px-2 lg:px-3 py-1.5 lg:py-2 rounded-md text-sm font-medium whitespace-nowrap transition ${
      location.pathname === path
        ? "bg-slate-700 text-white"
        : "text-slate-300 hover:text-white hover:bg-slate-800"
    }`;

  const mobileLinkClass = (path: string) =>
    `px-4 py-3 rounded-lg text-base font-medium transition block w-full ${
      location.pathname === path
        ? "bg-slate-700 text-white"
        : "text-slate-300 hover:text-white hover:bg-slate-800"
    }`;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/population", label: "Population" },
    { path: "/parking", label: "Parking" },
    { path: "/tide", label: "Tide" },
    { path: "/firstnames", label: "Names" },
    { path: "/solvberget", label: "Culture" },
    { path: "/folkeregister", label: "Registry" },
    { path: "/sculptures", label: "Sculptures" },
  ];

  return (
    <nav className="bg-slate-950/90 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand */}
          <Link
            to="/"
            className="font-bold text-white text-sm sm:text-base lg:text-lg tracking-tight flex items-center gap-1.5 sm:gap-2 shrink-0"
          >
            <span className="hidden sm:inline whitespace-nowrap">
              Stavanger
            </span>
            <span className="hidden md:inline whitespace-nowrap">Pulse</span>
            <span className="sm:hidden whitespace-nowrap">Stavanger</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                className={linkClass(link.path)}
                to={link.path}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition shrink-0 ml-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 space-y-1 border-t border-slate-800 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                className={mobileLinkClass(link.path)}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
