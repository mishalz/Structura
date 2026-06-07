import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AlertTriangle } from 'lucide-react';

export default function Risks() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <AlertTriangle className="w-12 h-12 text-[#1B4F72]" />
          <h1 className="text-5xl font-semibold text-[#2C3E50] text-center">
            Risks & Disclosures
          </h1>
        </div>
        <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
          All investments carry risk. Please read these disclosures carefully before investing.
        </p>

        <div className="bg-[#FEF3CD] border-l-4 border-[#F59E0B] p-6 mb-12 rounded">
          <p className="text-[#92400E] leading-relaxed">
            <strong>Important:</strong> Structura does not guarantee returns or capital preservation. Real estate investments involve significant risks, and you may lose some or all of your invested capital. This page provides an overview of key risks, but does not constitute comprehensive disclosure. Consult with financial and legal advisors before investing.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Market Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Property values can decline due to economic conditions, changes in local markets, oversupply, or shifts in demand. A downturn in the real estate market may result in capital losses when you exit your investment. Historical performance is not indicative of future results.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Liquidity Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Real estate is inherently illiquid. You may not be able to sell your ownership stake when desired, and there is no guarantee that our buyback program will be available or that you will find a willing buyer at your desired price. Minimum holding periods apply, and early exit may not be possible.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Income Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Rental income is not guaranteed. Properties may experience vacancy periods, tenant defaults, or reduced rental rates. Operating expenses, maintenance costs, and property taxes can increase, reducing net income available for distribution to investors.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Property-Specific Risks</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Individual properties may face unforeseen issues such as structural defects, environmental contamination, title disputes, natural disasters, or changes in local regulations. Insurance may not cover all potential losses, and major repairs can significantly impact returns.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Management Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Your investment depends on the competence and integrity of our management team and third-party property managers. Poor management decisions, fraud, or negligence could negatively impact your investment. You have limited control over property operations and management decisions.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Legal and Regulatory Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Changes in laws, regulations, or tax treatment could adversely affect your investment. Zoning changes, rent control measures, or new compliance requirements may reduce property value or income. Legal disputes with tenants, contractors, or other parties could result in significant costs.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Currency and Inflation Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              While real estate can provide some inflation hedge, high inflation or currency devaluation may erode the real value of your returns. Operating costs and property taxes tend to increase with inflation, potentially compressing net income.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Concentration Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Each SPV holds a single property. If you invest heavily in one or a few properties, your portfolio lacks diversification, and adverse events affecting those specific properties will have an outsized impact on your overall returns.
            </p>
          </div>

          <div className="bg-[#1B4F72] text-white rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-semibold mb-4">Key Disclaimers</h2>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span>•</span>
                <span>Past performance does not guarantee future results</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>No returns are guaranteed or promised</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>You may lose some or all of your invested capital</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>This is a long-term, illiquid investment</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Real estate markets can be volatile and unpredictable</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Independent financial and legal advice is strongly recommended</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
