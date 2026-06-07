import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="flex items-center justify-center gap-3 mb-6">
          <AlertTriangle className="w-12 h-12 text-[#1B4F72]" />
          <h1 className="text-5xl font-semibold text-[#2C3E50]">
            Risk Disclaimer
          </h1>
        </div>
        <p className="text-sm text-[#5D6D7E] mb-12 text-center">
          Last Updated: June 7, 2026
        </p>

        <div className="bg-[#FEF3CD] border-l-4 border-[#F59E0B] p-6 mb-12 rounded">
          <p className="text-[#92400E] leading-relaxed font-semibold">
            PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE INVESTING. BY PROCEEDING WITH AN INVESTMENT THROUGH STRUCTURA, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND ACCEPTED ALL RISKS OUTLINED HEREIN.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">No Guaranteed Returns</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Structura does not guarantee any returns on your investment, whether from rental income or property appreciation. All projections, estimates, and historical performance data are provided for informational purposes only and should not be construed as promises or guarantees of future results. Past performance does not indicate future performance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Risk of Loss</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Real estate investing involves substantial risk, including the risk of losing some or all of your invested capital. Property values can decline due to market conditions, economic downturns, changes in local demand, or property-specific issues. Rental income can decrease or cease entirely due to vacancy, tenant defaults, or economic factors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Illiquidity</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Real estate is an inherently illiquid asset class. Your investment in Structura properties is subject to minimum holding periods, and there is no guarantee that you will be able to exit your investment when desired or at your desired price. Our buyback program is subject to availability and current market valuations, and may be suspended or modified at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Not a Bank Deposit</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Your investment in Structura properties is not a bank deposit and is not insured or guaranteed by any government agency or deposit insurance scheme. You should not invest funds that you cannot afford to lose or that you may need access to in the short term.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Forward-Looking Statements</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Any forward-looking statements regarding rental yields, property appreciation, market conditions, or other future events are based on current assumptions and expectations, which may prove incorrect. Actual results may differ materially from projections due to unforeseen circumstances, market volatility, or other factors beyond our control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Independent Advice Required</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              The information provided on this platform does not constitute financial, legal, or tax advice. You should consult with qualified independent advisors before making any investment decision. Structura and its employees are not authorized to provide personalized investment advice tailored to your individual circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Suitability</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Real estate investment through Structura is suitable only for investors who can afford to bear the risk of loss and who do not require immediate liquidity. You should carefully assess your financial situation, investment objectives, risk tolerance, and time horizon before investing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">No Fiduciary Duty</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Structura acts as a platform facilitator and property manager, not as a fiduciary or investment advisor. While we strive to act in the best interests of our investors, we do not owe a fiduciary duty to individual investors and may have conflicts of interest.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Regulatory Status</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Structura's services and investment offerings may not be regulated by securities or financial services authorities. The legal and regulatory framework for fractional real estate ownership continues to evolve, and future regulatory changes could adversely impact your investment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Tax Implications</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Real estate investments have complex tax implications that vary by jurisdiction and individual circumstances. You are solely responsible for understanding and complying with all applicable tax obligations. Structura does not provide tax advice and recommends consulting a qualified tax professional.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">Platform and Technology Risks</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              While we implement security measures to protect your information, no online platform is completely secure. Unauthorized access, data breaches, system failures, or technical errors could impact your ability to access your account or affect the accuracy of information.
            </p>
          </div>

          <div className="bg-[#1B4F72] text-white rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-semibold mb-4">Acknowledgment</h2>
            <p className="leading-relaxed mb-4">
              By investing through Structura, you acknowledge and accept that:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span>•</span>
                <span>You have read and understood this Risk Disclaimer in full</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>You understand that real estate investing carries substantial risks</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>No returns are guaranteed and you may lose your entire investment</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>You have consulted with independent advisors as appropriate</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>You can afford to lose the capital you are investing</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>This is a long-term, illiquid investment</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-6 mt-8">
            <p className="text-[#5D6D7E]">
              <strong className="text-[#2C3E50]">Questions?</strong> If you have any questions about these risks or need clarification, please contact us at risk@structura.com before proceeding with any investment.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
