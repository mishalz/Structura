import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-semibold text-[#2C3E50] mb-4">
              STRUCTURA
            </div>
            <p className="text-sm text-[#5D6D7E] leading-relaxed">
              Professional real estate investment platform
              focused on transparency and long-term value.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#2C3E50] mb-4">
              Platform
            </h4>
            <div className="space-y-3 text-sm text-[#5D6D7E]">
              <Link
                to="/how-it-works"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                How It Works
              </Link>
              <Link
                to="/philosophy"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                Investment Philosophy
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#2C3E50] mb-4">
              Information
            </h4>
            <div className="space-y-3 text-sm text-[#5D6D7E]">
              <Link
                to="/risks"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                Risks & Disclosures
              </Link>
              <Link
                to="/faq"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                FAQ
              </Link>
              <Link
                to="/about"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#2C3E50] mb-4">
              Legal
            </h4>
            <div className="space-y-3 text-sm text-[#5D6D7E]">
              <Link
                to="/terms"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/disclaimer"
                className="block hover:text-[#1B4F72] transition-colors"
              >
                Risk Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-center text-[#5D6D7E] mb-2">
            © 2025 Structura. All rights reserved.
          </p>
          <p className="text-xs text-center text-[#5D6D7E]">
            Structura is not meant for collecting PII or
            securing sensitive data. No returns are guaranteed.
            All investments carry risk.
          </p>
        </div>
      </div>
    </footer>
  );
}