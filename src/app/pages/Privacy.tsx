import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#5D6D7E] mb-12">
          Last Updated: June 7, 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">1. Information We Collect</h2>
            <p className="text-[#5D6D7E] leading-relaxed mb-3">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-[#5D6D7E] space-y-2 ml-4">
              <li>Personal identification information (name, email address, phone number, address)</li>
              <li>Financial information (bank account details for distributions, investment amounts)</li>
              <li>Government-issued identification for verification purposes</li>
              <li>Communication preferences and correspondence with us</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">2. How We Use Your Information</h2>
            <p className="text-[#5D6D7E] leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-[#5D6D7E] space-y-2 ml-4">
              <li>Process your investment transactions and distribute rental income</li>
              <li>Verify your identity and comply with legal and regulatory requirements</li>
              <li>Communicate with you about your investments and account</li>
              <li>Provide customer support and respond to your inquiries</li>
              <li>Send you important notices and updates about our services</li>
              <li>Improve our platform and services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-[#5D6D7E] leading-relaxed mb-3">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-[#5D6D7E] space-y-2 ml-4">
              <li>Service providers who assist in operating our platform and processing transactions</li>
              <li>Legal and regulatory authorities when required by law</li>
              <li>Professional advisors (lawyers, accountants, auditors) bound by confidentiality obligations</li>
              <li>Third parties with your explicit consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">4. Data Security</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">5. Data Retention</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Investment-related records are retained for at least 7 years after account closure as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">6. Your Rights</h2>
            <p className="text-[#5D6D7E] leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-[#5D6D7E] space-y-2 ml-4">
              <li>Access and review the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your information, subject to legal retention requirements</li>
              <li>Opt out of marketing communications</li>
              <li>Lodge a complaint with relevant data protection authorities</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our platform, analyze usage patterns, and improve our services. You can control cookie preferences through your browser settings, though disabling cookies may limit some functionality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">8. Third-Party Links</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">9. Changes to This Policy</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-4">10. Contact Us</h2>
            <p className="text-[#5D6D7E] leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at privacy@structura.com.
            </p>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-6 mt-8">
            <p className="text-[#5D6D7E] text-sm">
              <strong className="text-[#2C3E50]">Important Note:</strong> Structura is not designed for collecting Personally Identifiable Information (PII) or securing sensitive data beyond what is necessary for investment processing. We recommend not sharing unnecessary personal information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
