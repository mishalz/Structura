import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6 text-center">
          About Structura
        </h1>
        <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
          Bringing transparency and accessibility to real estate investing
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">Our Story</h2>
            <div className="bg-[#F7F9FA] rounded-lg p-10">
              <p className="text-[#5D6D7E] leading-relaxed mb-4">
                Structura was founded with a simple belief: quality real estate investment opportunities should be accessible to more people, not just those with millions to deploy.
              </p>
              <p className="text-[#5D6D7E] leading-relaxed mb-4">
                We saw a market dominated by either inaccessible direct property purchases requiring substantial capital, or opaque investment vehicles that obscured what investors actually owned. Neither option served the needs of informed investors seeking transparency, reasonable entry points, and professional management.
              </p>
              <p className="text-[#5D6D7E] leading-relaxed">
                Our platform bridges this gap through fractional ownership in carefully selected properties, each held in its own Special Purpose Vehicle and managed by experienced professionals. We prioritize clarity over complexity, quality over quantity, and long-term value creation over short-term speculation.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Integrity</h3>
                <p className="text-[#5D6D7E]">
                  We operate with complete transparency, disclose all risks and fees, and never promise guaranteed returns.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Alignment</h3>
                <p className="text-[#5D6D7E]">
                  Our team invests alongside our clients. When you succeed, we succeed. Your interests are our interests.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1B4F72] flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Excellence</h3>
                <p className="text-[#5D6D7E]">
                  We maintain rigorous standards for property selection, valuation, and management to deliver quality investments.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">Our Team</h2>
            <div className="bg-[#F7F9FA] rounded-lg p-10">
              <p className="text-[#5D6D7E] leading-relaxed mb-4">
                Structura is led by a team of real estate professionals, financial analysts, and legal experts with decades of combined experience in property investment, asset management, and financial services.
              </p>
              <p className="text-[#5D6D7E] leading-relaxed">
                Our advisory board includes independent real estate appraisers, legal counsel, and industry veterans who ensure we maintain the highest standards of diligence, governance, and investor protection.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">How We're Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Percentage-Based Ownership</h3>
                <p className="text-[#5D6D7E]">
                  You own a specific percentage of a property's value, not arbitrary tokens or shares in a pooled fund. Your stake is clear and direct.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Independent Valuations</h3>
                <p className="text-[#5D6D7E]">
                  All properties are valued by certified third-party appraisers before acquisition and annually thereafter. We don't set our own valuations.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">Property-Specific SPVs</h3>
                <p className="text-[#5D6D7E]">
                  Each property is held in its own legal entity, providing clear asset segregation and legal ownership structure.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-3">No False Promises</h3>
                <p className="text-[#5D6D7E]">
                  We never guarantee returns or make unrealistic projections. We clearly disclose all risks and the illiquid nature of real estate.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#1B4F72] text-white rounded-lg p-10 text-center">
            <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
            <p className="text-white/90 mb-6 leading-relaxed max-w-2xl mx-auto">
              Whether you're a first-time real estate investor or looking to diversify an existing portfolio, we invite you to explore how Structura can help you access quality property investments with transparency and professional management.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-[#1B4F72] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
