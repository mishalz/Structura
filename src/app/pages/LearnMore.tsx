import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router';

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6 text-center">
          Learn More About Structura
        </h1>
        <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
          Everything you need to know about fractional real estate investing
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-4">What is Fractional Real Estate Investing?</h2>
            <p className="text-[#5D6D7E] leading-relaxed mb-4">
              Fractional real estate investing allows multiple investors to collectively own a property by purchasing percentage shares. Unlike traditional real estate investment trusts (REITs) or tokenized platforms, Structura offers direct ownership in specific properties through legally structured Special Purpose Vehicles (SPVs).
            </p>
            <p className="text-[#5D6D7E] leading-relaxed">
              This approach combines the benefits of real estate ownership—rental income and potential appreciation—with lower capital requirements and professional management.
            </p>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-10">
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Lower Entry Barrier</h3>
                <p className="text-[#5D6D7E]">
                  Start investing with as little as PKR 100,000 instead of millions required for direct property purchase.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Diversification</h3>
                <p className="text-[#5D6D7E]">
                  Spread your capital across multiple properties in different locations to reduce risk.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Passive Income</h3>
                <p className="text-[#5D6D7E]">
                  Receive quarterly rental income distributions without the hassles of property management.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">Professional Management</h3>
                <p className="text-[#5D6D7E]">
                  Experienced property managers handle tenant relations, maintenance, and operations.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-4">Who is This For?</h2>
            <p className="text-[#5D6D7E] leading-relaxed mb-4">
              Structura is designed for investors who:
            </p>
            <ul className="space-y-3 text-[#5D6D7E]">
              <li className="flex gap-3">
                <span className="text-[#1B4F72]">•</span>
                <span>Want exposure to real estate without purchasing entire properties</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1B4F72]">•</span>
                <span>Seek passive income from rental properties</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1B4F72]">•</span>
                <span>Prefer professionally managed investments over DIY landlording</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1B4F72]">•</span>
                <span>Value transparency and clear risk disclosures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#1B4F72]">•</span>
                <span>Have a long-term investment horizon (2+ years)</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1B4F72] rounded-lg p-10 text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-white/90 mb-6 leading-relaxed">
              Explore our detailed guides and resources to understand the investment process, legal structure, and risk factors.
            </p>
            <div className="flex gap-4">
              <Link
                to="/how-it-works"
                className="bg-white text-[#1B4F72] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
              >
                How It Works
              </Link>
              <Link
                to="/faq"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1B4F72] transition-colors inline-block"
              >
                Read FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
