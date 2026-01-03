import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-parchment pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display text-navy mb-4">
            Begin Your Journey
          </h1>
          <p className="text-navy/70 text-lg max-w-2xl mx-auto font-lora">
            Share your vision with us, and let our experts craft an unforgettable luxury experience tailored exclusively for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-10 shadow-xl mb-8">
              <h2 className="text-2xl font-display text-navy mb-6">
                Luxury Inquiry Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-navy/70 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-navy/20 focus:outline-none focus:border-gold transition-colors bg-parchment"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy/70 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-navy/20 focus:outline-none focus:border-gold transition-colors bg-parchment"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy/70 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy/20 focus:outline-none focus:border-gold transition-colors bg-parchment"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy/70 mb-2">
                    Preferred Destination
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy/20 focus:outline-none focus:border-gold transition-colors bg-parchment"
                  >
                    <option value="">Select a destination</option>
                    <option value="paris">Paris, France</option>
                    <option value="santorini">Santorini, Greece</option>
                    <option value="dubai">Dubai, UAE</option>
                    <option value="maldives">Maldives</option>
                    <option value="kyoto">Kyoto, Japan</option>
                    <option value="switzerland">Zermatt, Switzerland</option>
                    <option value="custom">Custom Destination</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy/70 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy/20 focus:outline-none focus:border-gold transition-colors bg-parchment"
                  >
                    <option value="">Select budget range</option>
                    <option value="10-25k">$10,000 - $25,000</option>
                    <option value="25-50k">$25,000 - $50,000</option>
                    <option value="50-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy/70 mb-2">
                    Tell Us About Your Vision *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-navy/20 focus:outline-none focus:border-gold transition-colors bg-parchment resize-none"
                    placeholder="Describe your ideal luxury travel experience..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] hover:scale-105"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/923274321214"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-green-600 text-white py-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:scale-105"
              >
                <MessageCircle size={20} />
                <span className="font-medium">WhatsApp</span>
              </a>
              <a
                href="https://www.linkedin.com/in/velvet-horizon-237a8a3a2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 bg-blue-700 text-white py-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(29,78,216,0.5)] hover:scale-105"
              >
                <Linkedin size={20} />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <div className="bg-navy text-parchment p-10 shadow-xl mb-8 h-full">
              <h2 className="text-2xl font-display text-gold mb-8">
                Connect With Us
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-parchment/70">inquiries@velvethorizon.com</p>
                    <p className="text-parchment/70">concierge@velvethorizon.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-parchment/70">+1 (555) 123-4567</p>
                    <p className="text-sm text-parchment/60 mt-1">
                      Available 24/7 for VIP clients
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-medium mb-1">Headquarters</h3>
                    <p className="text-parchment/70">
                      UET Lahore
                      <br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-8 mt-8">
                  <h3 className="font-medium mb-4 text-gold">Office Hours</h3>
                  <div className="space-y-2 text-sm text-parchment/70">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-parchment/60 mt-4">
                    * Emergency concierge services available 24/7 for active travelers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
