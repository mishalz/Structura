import { Link } from 'react-router';
import { Building2, DollarSign, Shield, TrendingUp, CheckCircle, Users, FileText, Scale, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold text-[#2C3E50] leading-tight">
              Invest in Real Estate Through Percentage Ownership
            </h1>
            <p className="text-lg text-[#5D6D7E] leading-relaxed">
              Structura enables fractional real estate investing, allowing you to own a percentage of high-value properties with transparent pricing, professional management, and no guaranteed returns.
            </p>
            <div className="flex gap-4">
              <Link
                to="/how-it-works"
                className="bg-[#1B4F72] text-white px-8 py-3 rounded-lg hover:bg-[#164060] transition-colors inline-block"
              >
                How It Works
              </Link>
              <Link
                to="/learn-more"
                className="border-2 border-[#1B4F72] text-[#1B4F72] px-8 py-3 rounded-lg hover:bg-[#F7F9FA] transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1556886283-a3944a060a52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Modern city building with scaffolding"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Problem & Solution */}
      <section className="bg-[#F7F9FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#2C3E50] mb-4">
              The Challenge of Real Estate Investing
            </h2>
            <p className="text-lg text-[#5D6D7E] max-w-2xl mx-auto">
              Traditional real estate requires substantial capital, limiting access for most investors who want to diversify their portfolios with tangible assets.
            </p>
          </div>

          <div className="text-center mb-12 mt-20">
            <h2 className="text-4xl font-semibold text-[#2C3E50] mb-2">
              The Structura Solution
            </h2>
            <p className="text-lg text-[#5D6D7E]">
              Democratizing real estate investment through fractional ownership
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Value-Based Shares</h3>
              <p className="text-[#5D6D7E]">
                Own a specific percentage of a property's value, not arbitrary tokens or shares.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Low Entry Point</h3>
              <p className="text-[#5D6D7E]">
                Start investing with as little as PKR 100,000 instead of millions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Professional Management</h3>
              <p className="text-[#5D6D7E]">
                Properties are managed by experienced professionals, not crowdsourced decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Income & Appreciation</h3>
              <p className="text-[#5D6D7E]">
                Benefit from both rental income and potential property value appreciation over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How it Works & Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#2C3E50]">
              How It Works: A Simple Example
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-12 mb-20 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6">Property Details</h3>
                <div className="space-y-4 text-[#5D6D7E]">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span>Property Value:</span>
                    <span className="font-semibold text-[#2C3E50]">PKR 10,000,000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span>Investment Amount:</span>
                    <span className="font-semibold text-[#2C3E50]">PKR 100,000</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span>Your Ownership:</span>
                    <span className="font-semibold text-[#2C3E50]">1%</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span>Expected Annual Rent:</span>
                    <span className="font-semibold text-[#2C3E50]">PKR 800,000</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-6">Your Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <p className="text-[#5D6D7E]">
                      Receive 1% of net rental income (PKR 8,000 annually)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <p className="text-[#5D6D7E]">
                      Own 1% of the property's value and appreciation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <p className="text-[#5D6D7E]">
                      Professional property management included
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#1B4F72] flex-shrink-0 mt-1" />
                    <p className="text-[#5D6D7E]">
                      Exit strategy available after minimum holding period
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#2C3E50]">Four Simple Steps</h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-8">
              <div className="text-7xl font-bold text-[#E8ECEF] min-w-[100px]">01</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Property Selection</h3>
                <p className="text-[#5D6D7E] leading-relaxed">
                  We identify and acquire high-quality properties with strong fundamentals in prime locations, conducting thorough due diligence and independent valuations.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-7xl font-bold text-[#E8ECEF] min-w-[100px]">02</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Value Division</h3>
                <p className="text-[#5D6D7E] leading-relaxed">
                  The property's independently verified value is divided into percentage shares, each representing a proportional ownership stake in the real asset.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-7xl font-bold text-[#E8ECEF] min-w-[100px]">03</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Investment & Income</h3>
                <p className="text-[#5D6D7E] leading-relaxed">
                  You invest your desired amount and receive the corresponding ownership percentage. Rental income is distributed quarterly, proportional to your stake.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-7xl font-bold text-[#E8ECEF] min-w-[100px]">04</div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Exit Opportunity</h3>
                <p className="text-[#5D6D7E] leading-relaxed">
                  After the minimum holding period, you can exit through our buyback program or sell to other qualified investors at prevailing market valuations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Choose & Trust */}
      <section className="bg-[#F7F9FA] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#2C3E50]">Why Choose Structura</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Asset-Backed</h3>
              <p className="text-[#5D6D7E]">
                Every investment is backed by real property assets, not speculative instruments or unverified tokens.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Transparent</h3>
              <p className="text-[#5D6D7E]">
                Clear documentation, independent valuations, and regular reporting ensure you always know where your money is invested.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Long-Term Focus</h3>
              <p className="text-[#5D6D7E]">
                We prioritize sustainable, long-term value creation over short-term speculation and quick returns.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#2C3E50] mb-2">Trust & Transparency</h2>
            <p className="text-lg text-[#5D6D7E]">Our commitment to investor protection and clear communication</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#1B4F72]" />
                <h3 className="text-xl font-semibold text-[#2C3E50]">Independent Valuations</h3>
              </div>
              <p className="text-[#5D6D7E]">
                All properties are valued by independent, certified appraisers before acquisition and annually thereafter.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#1B4F72]" />
                <h3 className="text-xl font-semibold text-[#2C3E50]">Legal Structure (SPVs)</h3>
              </div>
              <p className="text-[#5D6D7E]">
                Each property is held in a Special Purpose Vehicle, providing clear legal ownership and asset segregation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#1B4F72]" />
                <h3 className="text-xl font-semibold text-[#2C3E50]">Clear Risk Disclosures</h3>
              </div>
              <p className="text-[#5D6D7E]">
                We clearly communicate all investment risks including market volatility, liquidity constraints, and property-specific factors.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#1B4F72]" />
                <h3 className="text-xl font-semibold text-[#2C3E50]">No Guaranteed Returns</h3>
              </div>
              <p className="text-[#5D6D7E]">
                We do not promise guaranteed returns. All projections are based on historical data and market analysis, not guarantees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="bg-[#1B4F72] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-white mb-4">Ready to Learn More?</h2>
          <p className="text-xl text-white/90 mb-8">
            Explore how Structura can help you invest in real estate with confidence
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/how-it-works"
              className="bg-[#1B4F72] border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1B4F72] transition-colors inline-block"
            >
              How It Works →
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#1B4F72] transition-colors inline-block"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
