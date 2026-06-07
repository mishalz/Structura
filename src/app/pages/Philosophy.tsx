import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Target, Shield, TrendingUp, Users } from 'lucide-react';

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6 text-center">
          Investment Philosophy
        </h1>
        <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
          Our core principles guide every investment decision we make
        </p>

        <div className="space-y-12">
          <div className="bg-[#F7F9FA] rounded-lg p-10">
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">Our Mission</h2>
            <p className="text-[#5D6D7E] leading-relaxed text-lg">
              To democratize access to high-quality real estate investments through transparent, professionally managed fractional ownership opportunities that prioritize long-term value creation and investor protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <div className="w-14 h-14 rounded-full bg-[#1B4F72] flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Quality Over Quantity</h3>
              <p className="text-[#5D6D7E] leading-relaxed">
                We carefully select properties with strong fundamentals in prime locations rather than pursuing rapid portfolio expansion. Each property undergoes rigorous due diligence and must meet our strict investment criteria.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <div className="w-14 h-14 rounded-full bg-[#1B4F72] flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Transparency First</h3>
              <p className="text-[#5D6D7E] leading-relaxed">
                We believe investors deserve complete transparency. Every property is independently valued, all fees are clearly disclosed, and we provide regular reporting on property performance and market conditions.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <div className="w-14 h-14 rounded-full bg-[#1B4F72] flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Long-Term Focus</h3>
              <p className="text-[#5D6D7E] leading-relaxed">
                Real estate is a long-term asset class. We optimize for sustainable value creation over years, not speculative short-term gains. Our minimum holding periods reflect this commitment to patient capital.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <div className="w-14 h-14 rounded-full bg-[#1B4F72] flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Aligned Interests</h3>
              <p className="text-[#5D6D7E] leading-relaxed">
                Our team invests alongside our clients in every property. When investors succeed, we succeed. This alignment ensures our interests are always in harmony with yours.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">Investment Criteria</h2>
            <div className="bg-[#F7F9FA] rounded-lg p-8">
              <p className="text-[#5D6D7E] mb-6 leading-relaxed">
                We evaluate potential properties against strict criteria to ensure quality and alignment with our investment philosophy:
              </p>
              <ul className="space-y-3 text-[#5D6D7E]">
                <li className="flex gap-3">
                  <span className="text-[#1B4F72] font-semibold">•</span>
                  <span><strong className="text-[#2C3E50]">Location:</strong> Prime areas with strong economic fundamentals and rental demand</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B4F72] font-semibold">•</span>
                  <span><strong className="text-[#2C3E50]">Asset Quality:</strong> Well-maintained properties with minimal deferred maintenance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B4F72] font-semibold">•</span>
                  <span><strong className="text-[#2C3E50]">Rental Yield:</strong> Target minimum net rental yields of 6-8% annually</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B4F72] font-semibold">•</span>
                  <span><strong className="text-[#2C3E50]">Appreciation Potential:</strong> Areas with positive demographic and economic trends</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1B4F72] font-semibold">•</span>
                  <span><strong className="text-[#2C3E50]">Legal Clarity:</strong> Clear title, no encumbrances, proper documentation</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">What We Don't Do</h2>
            <div className="bg-[#1B4F72] text-white rounded-lg p-8">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span>✗</span>
                  <span>Promise guaranteed returns or unrealistic projections</span>
                </li>
                <li className="flex gap-3">
                  <span>✗</span>
                  <span>Invest in speculative development projects</span>
                </li>
                <li className="flex gap-3">
                  <span>✗</span>
                  <span>Use excessive leverage or complex financial structures</span>
                </li>
                <li className="flex gap-3">
                  <span>✗</span>
                  <span>Hide fees or conflicts of interest</span>
                </li>
                <li className="flex gap-3">
                  <span>✗</span>
                  <span>Pursue growth at the expense of quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
