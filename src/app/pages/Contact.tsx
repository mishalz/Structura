import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-semibold text-[#2C3E50] mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg text-[#5D6D7E] text-center mb-16 max-w-3xl mx-auto">
          Have questions? We're here to help you understand fractional real estate investing.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-[#2C3E50] mb-6">Get in Touch</h2>
            <p className="text-[#5D6D7E] mb-8 leading-relaxed">
              Whether you're interested in learning more about our investment opportunities or have specific questions about the process, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B4F72] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-1">Email</h3>
                  <p className="text-[#5D6D7E]">info@structura.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B4F72] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-1">Phone</h3>
                  <p className="text-[#5D6D7E]">+92 (21) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1B4F72] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C3E50] mb-1">Office</h3>
                  <p className="text-[#5D6D7E]">
                    123 Business District<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F9FA] rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#2C3E50] mb-6">Request Information</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-[#2C3E50] mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72] bg-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-[#2C3E50] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72] bg-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-[#2C3E50] mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72] bg-white"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label className="block text-[#2C3E50] mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72] bg-white resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1B4F72] text-white px-6 py-3 rounded-lg hover:bg-[#164060] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 bg-[#F7F9FA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-[#2C3E50] mb-3">Office Hours</h3>
          <p className="text-[#5D6D7E]">
            Monday - Friday: 9:00 AM - 6:00 PM PKT<br />
            Saturday: 10:00 AM - 2:00 PM PKT<br />
            Sunday: Closed
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
