import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import {
  FileText,
  Shield,
  TrendingUp,
  CheckCircle2,
  Building2,
  Users,
  Check,
  X,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-5xl mx-auto space-y-24 px-6 py-20">
        {/* SECTION 1: What Investors Actually Own */}
        <section className="space-y-8">
          <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6 text-center">
            How It Works{" "}
          </h1>

          <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
            What Investors Actually Own
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-[#1B4F72] mb-4">
              Financial Units, Not Physical Property
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                When you invest through Structura, you purchase financial units
                that represent a percentage ownership of the property's value.
                You do not own a physical piece of the property itself.
              </p>
              <p>
                This structure provides several advantages: simplified legal
                ownership, no physical maintenance responsibilities, and the
                ability to own fractional interests in multiple properties.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="h-10 w-10 rounded-full bg-[#D1EAEF] flex items-center justify-center mb-6">
                <FileText className="text-[#1B4F72]" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
                Legal Structure
              </h3>
              <p className="text-gray-600 text-sm">
                Properties are held in Special Purpose Vehicles (SPVs). Your
                units represent shares in these legal entities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="h-10 w-10 rounded-full bg-[#D1EAEF] flex items-center justify-center mb-6">
                <Shield className="text-[#1B4F72]" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
                Investor Rights
              </h3>
              <p className="text-gray-600 text-sm">
                Unit holders have proportional rights to rental income and
                capital appreciation, without direct property management duties.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: How Rental Income is Generated & Distributed */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937]">
            How Rental Income is Generated & Distributed
          </h2>

          <div className="space-y-4">
            {[
              {
                num: "1",
                title: "Property is Rented",
                desc: "Structura manages the property and secures qualified tenants. Rental agreements are established following market standards.",
              },
              {
                num: "2",
                title: "Rent is Collected",
                desc: "Monthly rental payments are collected from tenants. Structura handles all tenant communication and payment processing.",
              },
              {
                num: "3",
                title: "Expenses are Deducted",
                desc: "Property maintenance, management fees, and operational costs are deducted from rental income.",
              },
              {
                num: "4",
                title: "Income is Distributed",
                desc: "Net rental income is distributed to unit holders proportional to their ownership percentage.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start gap-6"
              >
                <span className="text-4xl font-light text-[#1B4F72] mt-1">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: How Capital Appreciation Works */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937]">
            How Capital Appreciation Works
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex items-start gap-4">
            <TrendingUp
              className="text-[#1B4F72] mt-1 flex-shrink-0"
              size={24}
            />
            <div>
              <h3 className="text-xl font-semibold text-[#1B4F72] mb-4">
                Property Value Growth
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Real estate values typically appreciate over time due to
                  market dynamics, location improvements, and inflation. When a
                  property's value increases, the value of your units increases
                  proportionally.
                </p>
                <p>
                  For example, if you own 2% of a property valued at PKR
                  10,000,000 and it appreciates to PKR 12,000,000, your share
                  value increases from PKR 200,000 to PKR 240,000.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                Periodic Valuations
              </h3>
              <p className="text-gray-600 text-sm">
                Properties are revalued periodically by independent valuers to
                reflect current market conditions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-[#1F2937] mb-2">
                Long-Term Perspective
              </h3>
              <p className="text-gray-600 text-sm">
                Real estate appreciation is a long-term phenomenon. Short-term
                fluctuations are normal and expected.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: How Exits Work */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937]">
            How Exits Work
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-[#1B4F72] mb-4">
              Market-Based Exit Mechanism
            </h3>
            <p className="text-gray-600 mb-6">
              Investors can list their units for sale on the Structura platform.
              Other investors may purchase these units subject to availability
              and market demand.
            </p>

            <div className="bg-[#FFFBEB] border border-[#FCD34D] rounded-lg p-5">
              <p className="text-[#92400E] text-sm">
                <strong>Important:</strong> There is no guaranteed liquidity.
                Exit depends on finding a willing buyer. This is a long-term
                investment, not a trading instrument.
              </p>
            </div>
          </div>

          <div className="space-y-6 pl-2">
            {[
              {
                title: "Open Sale Platform",
                desc: "List your units at your desired price. Buyers can browse and make offers.",
              },
              {
                title: "No Guaranteed Timeframe",
                desc: "Sales may take time depending on market conditions and pricing.",
              },
              {
                title: "Transaction Facilitation",
                desc: "Structura facilitates the transfer of ownership once buyer and seller agree on terms.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-[#F1F5F9] rounded-full p-1 mt-1">
                  <CheckCircle2 className="text-[#1B4F72]" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F2937] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: What Structura Manages vs. What Investors Do Not Manage */}
        <section className="space-y-12 pb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1F2937]">
            What Structura Manages vs. What Investors Do Not Manage
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Left Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="text-[#1B4F72]" size={24} />
                <h3 className="text-xl font-semibold text-[#1B4F72]">
                  Structura Manages
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Property selection and due diligence",
                  "Legal structure and documentation",
                  "Tenant screening and leasing",
                  "Rent collection and payment processing",
                  "Property maintenance and repairs",
                  "Compliance and regulatory matters",
                  "Financial reporting to investors",
                  "Exit transaction facilitation",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <Check
                      className="text-[#1B4F72] flex-shrink-0 mt-0.5"
                      size={16}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-[#1B4F72]" size={24} />
                <h3 className="text-xl font-semibold text-[#1B4F72]">
                  Investors Do Not Manage
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "No tenant communication required",
                  "No maintenance responsibilities",
                  "No property visits needed",
                  "No legal paperwork beyond initial investment",
                  "No direct involvement in operations",
                  "No time commitment for management",
                  "No physical property ownership burden",
                  "No individual decision-making on property matters",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 text-sm"
                  >
                    <X
                      className="text-gray-400 flex-shrink-0 mt-0.5"
                      size={16}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
