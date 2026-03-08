import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, Building2, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Center',
    description: 'Speak directly with our investor support team.',
    details: ['966115065777', '8002449990'],
    availability: '24/7 Support',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us your inquiries and we will respond promptly.',
    details: ['InvestorCare@misa.gov.sa', 'info@misa.gov.sa'],
    availability: 'Response within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our headquarters in Riyadh and offices worldwide.',
    details: ['King Fahd Road, Riyadh', '30+ International Offices'],
    availability: 'Sun - Thu: 8AM - 4PM',
  },
];

const offices = [
  {
    region: 'Middle East & Africa',
    cities: ['Dubai, UAE', 'Cairo, Egypt', 'Istanbul, Turkey', 'Johannesburg, South Africa'],
  },
  {
    region: 'Asia Pacific',
    cities: ['Singapore', 'Beijing, China', 'Tokyo, Japan', 'Seoul, South Korea'],
  },
  {
    region: 'Europe',
    cities: ['London, UK', 'Paris, France', 'Frankfurt, Germany', 'Milan, Italy'],
  },
  {
    region: 'Americas',
    cities: ['New York, USA', 'Houston, USA', 'São Paulo, Brazil', 'Mexico City, Mexico'],
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Investment Opportunity',
  'License Application',
  'Partnership Proposal',
  'Media Inquiry',
  'Complaint',
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Contact</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Contact Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                We're here to help you with your investment journey. Reach out to us through 
                any of our channels and our team will assist you promptly.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={method.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{method.description}</p>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail) => (
                      <div key={detail} className="text-white font-medium">{detail}</div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Clock className="w-4 h-4" />
                    {method.availability}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/70 text-sm mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/70 text-sm mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">Inquiry Type</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary">
                      <option value="" className="bg-dark">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type} className="bg-dark">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/70 text-sm mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* International Offices */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">International Offices</h2>
                <div className="space-y-4">
                  {offices.map((office) => (
                    <div key={office.region} className="glass-card p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Building2 className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-white">{office.region}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {office.cities.map((city) => (
                          <span
                            key={city}
                            className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-white">MIZA Support</h3>
                  </div>
                  <p className="text-white/60 text-sm mb-4">
                    For integrated support and value-added services, contact MIZA directly.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="text-white/70">Phone: 966115065777 (ext. 4)</div>
                    <div className="text-white/70">Email: MIZA@misa.gov.sa</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Find quick answers to common questions about investing in Saudi Arabia.
              </p>
              <button className="btn-secondary">View FAQs</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
