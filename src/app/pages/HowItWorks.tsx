import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6 text-center">
          How It Works
        </h1>
        <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
          Understanding the Structura fractional real estate investment process
        </p>

        <div className="space-y-12">
          <div className="bg-[#F7F9FA] rounded-lg p-10">
            <div className="flex gap-6">
              <div className="text-5xl font-bold text-[#1B4F72]">01</div>
              <div>
                <h2 className="text-3xl font-semibold text-[#2C3E50] mb-4">Property Selection</h2>
                <p className="text-[#5D6D7E] mb-4 leading-relaxed">
                  Our team identifies high-quality properties with strong fundamentals in prime locations. Each property undergoes rigorous due diligence including:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-[#5D6D7E]">Independent third-party valuation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-[#5D6D7E]">Legal title verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-[#5D6D7E]">Market analysis and rental potential assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-[#5D6D7E]">Physical property inspection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-10">
            <div className="flex gap-6">
              <div className="text-5xl font-bold text-[#1B4F72]">02</div>
              <div>
                <h2 className="text-3xl font-semibold text-[#2C3E50] mb-4">Value Division & SPV Setup</h2>
                <p className="text-[#5D6D7E] leading-relaxed">
                  Once a property is acquired, it's held in a Special Purpose Vehicle (SPV), a legal entity created specifically for that property. The property's independently verified value is then divided into percentage shares, allowing investors to own a proportional stake in the SPV.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-10">
            <div className="flex gap-6">
              <div className="text-5xl font-bold text-[#1B4F72]">03</div>
              <div>
                <h2 className="text-3xl font-semibold text-[#2C3E50] mb-4">Investment & Ownership</h2>
                <p className="text-[#5D6D7E] leading-relaxed">
                  You select your desired investment amount and receive the corresponding ownership percentage in the SPV. Your investment is secured by legal documentation outlining your rights, responsibilities, and proportional ownership of the property's value and income.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-10">
            <div className="flex gap-6">
              <div className="text-5xl font-bold text-[#1B4F72]">04</div>
              <div>
                <h2 className="text-3xl font-semibold text-[#2C3E50] mb-4">Income Distribution</h2>
                <p className="text-[#5D6D7E] leading-relaxed mb-4">
                  Rental income from the property is collected by professional property managers and distributed quarterly to investors, proportional to their ownership percentage. All distributions are net of:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-[#5D6D7E]">Property management fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-[#5D6D7E]">Maintenance and operating expenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <span className="text-[#5D6D7E]">Property taxes and insurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-10">
            <div className="flex gap-6">
              <div className="text-5xl font-bold text-[#1B4F72]">05</div>
              <div>
                <h2 className="text-3xl font-semibold text-[#2C3E50] mb-4">Exit Strategy</h2>
                <p className="text-[#5D6D7E] leading-relaxed">
                  After the minimum holding period (typically 2-3 years), you have several exit options: participate in our buyback program at current market valuation, sell your stake to other qualified investors through our platform, or hold your investment for continued income and appreciation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
