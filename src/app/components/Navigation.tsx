import { Link } from "react-router";

export default function Navigation() {
  return (
    <header className="border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-semibold text-[#2C3E50]"
        >
          STRUCTURA
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#2C3E50]">
          <Link
            to="/"
            className="hover:text-[#1B4F72] transition-colors"
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className="hover:text-[#1B4F72] transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="/philosophy"
            className="hover:text-[#1B4F72] transition-colors"
          >
            Investment Philosophy
          </Link>
          <Link
            to="/risks"
            className="hover:text-[#1B4F72] transition-colors"
          >
            Risks & Disclosures
          </Link>
          <Link
            to="/about"
            className="hover:text-[#1B4F72] transition-colors"
          >
            About
          </Link>
          <Link
            to="/faq"
            className="hover:text-[#1B4F72] transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#1B4F72] transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}