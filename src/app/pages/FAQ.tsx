import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is fractional real estate ownership?",
      answer: "Fractional ownership allows multiple investors to own percentage shares of a property. Instead of buying an entire property, you purchase a specific percentage (e.g., 1% or 5%) of the property's value, entitling you to proportional rental income and appreciation."
    },
    {
      question: "How much can I invest?",
      answer: "The minimum investment is typically PKR 100,000, though this may vary by property. There is no maximum investment limit, allowing you to purchase as large a stake as desired up to the available shares."
    },
    {
      question: "How do I receive rental income?",
      answer: "Rental income is distributed quarterly to all investors proportional to their ownership percentage. Distributions are net of property management fees, operating expenses, maintenance, taxes, and insurance. Payments are made via bank transfer to your registered account."
    },
    {
      question: "Can I sell my investment?",
      answer: "Yes, but real estate is an illiquid asset. After a minimum holding period (typically 2-3 years), you can exit through our buyback program at current market valuation or sell to other qualified investors on our platform. Exit availability is not guaranteed."
    },
    {
      question: "What are the fees?",
      answer: "We charge a one-time acquisition fee (typically 2-3% of investment amount) and an annual management fee (typically 1-1.5% of property value). All fees are clearly disclosed before you invest. There are no hidden charges."
    },
    {
      question: "How are properties valued?",
      answer: "All properties are valued by independent, certified appraisers before acquisition. Valuations are updated annually. We do not set property values ourselves to ensure objectivity and transparency."
    },
    {
      question: "What is an SPV?",
      answer: "A Special Purpose Vehicle (SPV) is a legal entity created to hold a single property. Each property we acquire is held in its own SPV, providing clear legal ownership and asset segregation. You own shares in the SPV, which owns the property."
    },
    {
      question: "Are returns guaranteed?",
      answer: "No. We do not guarantee any returns or capital preservation. Real estate values can decline, rental income can decrease, and you may lose some or all of your investment. All projections are based on historical data and assumptions, not promises."
    },
    {
      question: "What happens if the property needs major repairs?",
      answer: "A reserve fund is maintained for each property to cover routine maintenance and repairs. For major capital expenditures beyond reserve capacity, investors may be asked to contribute additional funds proportional to their ownership, or the SPV may arrange financing."
    },
    {
      question: "Can I visit the property I invest in?",
      answer: "Yes, investors can schedule property visits with reasonable advance notice. However, if the property is tenant-occupied, access may be limited to respect tenant privacy and lease agreements."
    },
    {
      question: "What taxes will I pay?",
      answer: "Rental income is typically subject to income tax in your jurisdiction. Capital gains upon exit may also be taxable. Tax treatment varies by individual circumstances. We strongly recommend consulting a tax advisor to understand your specific obligations."
    },
    {
      question: "How do I get started?",
      answer: "Contact us to express interest. You'll receive detailed property information, legal documents, and risk disclosures. After reviewing these materials and consulting your advisors, you can commit to an investment amount. Legal documentation is then executed and your investment is processed."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
          Find answers to common questions about Structura and fractional real estate investing
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F7F9FA] transition-colors"
              >
                <span className="font-semibold text-[#2C3E50] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1B4F72] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-[#5D6D7E] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#F7F9FA] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-[#2C3E50] mb-3">Still Have Questions?</h2>
          <p className="text-[#5D6D7E] mb-6">
            Our team is here to help you understand fractional real estate investing
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#1B4F72] text-white px-8 py-3 rounded-lg hover:bg-[#164060] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
