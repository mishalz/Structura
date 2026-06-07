import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6">
          Terms & Conditions
        </h1>
        <p className="text-sm text-[#5D6D7E] mb-12">
          Last Updated: June 7, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              By accessing or using the Structura platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you may not access or use our services. These terms constitute a legally binding agreement between you and Structura.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">2. Eligibility</h2>
            <p className="text-[#5D6D7E] leading-relaxed mb-3">
              To invest through Structura, you must:
            </p>
            <ul className="list-disc list-inside text-[#5D6D7E] space-y-2 ml-4">
              <li>Be at least 18 years of age</li>
              <li>Have the legal capacity to enter into binding contracts</li>
              <li>Provide accurate and complete information during registration</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">3. Investment Risk</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              All investments carry risk, including the risk of losing some or all of your invested capital. Real estate values can decline, rental income can decrease, and liquidity is limited. We do not guarantee returns or capital preservation. You should carefully read all risk disclosures and consult with financial and legal advisors before investing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">4. Investment Process</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Investment opportunities are offered on a first-come, first-served basis subject to availability. We reserve the right to accept or reject any investment application at our sole discretion. All investments are subject to minimum holding periods as specified in the property-specific documentation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">5. Fees and Expenses</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Investors are subject to fees as disclosed in the property-specific offering documents, including but not limited to acquisition fees, annual management fees, and property operating expenses. All fees are deducted before distribution of rental income to investors.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">6. Intellectual Property</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              All content, trademarks, and intellectual property on the Structura platform are owned by Structura or its licensors. You may not copy, reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">7. Limitation of Liability</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              To the fullest extent permitted by law, Structura shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our services or your investments. Our total liability shall not exceed the amount of fees you have paid to Structura.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">8. Modification of Terms</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">9. Governing Law</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Karachi, Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">10. Contact Information</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at legal@structura.com.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
