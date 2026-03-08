// Footer component
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const footerLinks = {
  'WHY SAUDI': [
    { label: 'Why Invest in Saudi Arabia', href: '/why-saudi/why-invest' },
    { label: 'Quality of Life', href: '/why-saudi/quality-of-life' },
    { label: 'National Strategy', href: '/why-saudi/national-strategy' },
    { label: 'About MISA', href: '/why-saudi/about-misa' },
  ],
  'SECTOR & OPPORTUNITIES': [
    { label: 'Key Sectors', href: '/sectors/key-sectors' },
    { label: 'Regions', href: '/sectors/regions' },
    { label: 'Real Estate', href: '/sectors/real-estate' },
    { label: 'Giga Projects', href: '/sectors/giga-projects' },
    { label: 'Incentives', href: '/sectors/incentives' },
  ],
  'SETUP & SCALE': [
    { label: 'Investor Services', href: '/setup/investor-services' },
    { label: 'E-Services', href: '/setup/e-services' },
  ],
  'PROGRAMS & INCENTIVES': [
    { label: 'RHQ', href: '/programs/rhq' },
    { label: 'Startup Saudi', href: '/programs/startup-saudi' },
    { label: 'GSCRI', href: '/programs/gscri' },
    { label: 'Shareek', href: '/programs/shareek' },
    { label: 'Catalyze Saudi', href: '/programs/catalyze-saudi' },
  ],
  'KNOWLEDGE': [
    { label: 'Reports and Insights', href: '/knowledge/reports' },
    { label: 'Events Calendar', href: '/knowledge/events' },
    { label: 'Laws & Regulation', href: '/knowledge/laws' },
    { label: 'The Dashboards Pages', href: '/knowledge/dashboards' },
  ],
  'VALUE ADDED SERVICES': [
    { label: 'Business Visa for Investors', href: '#' },
    { label: 'Strategic Investors Program', href: '#' },
    { label: 'MIZA', href: '#' },
    { label: 'Matchmaking', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[#F5F7F7] text-dark-light">
      {/* CTA Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-dark-light" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Invest in Saudi Arabia?
              </h2>
              <p className="text-white/70 mb-8">
                Curious about how investors succeed in Saudi Arabia? Access one of the
                world's most ambitious investment platforms. Invest in Saudi Arabia to
                unlock full market opportunity, sovereign backing, and long-term growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-transparent text-white font-medium rounded-lg border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2">
                  Download Investor Guide
                </button>
                <Link
                  to="/setup/investor-services"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
                >
                  Start Your Investment Registration
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* MISA Call Center */}
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark-light">MISA Call Center</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                MISA Call Center serves as a trusted point of contact, providing a
                dedicated support and clear guidance to meet your business needs
                throughout your investment journey in the Saudi Arabia.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>966115065777 / 8002449990</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>InvestorCare@misa.gov.sa</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* MIZA Support */}
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent-cyan/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-dark-light">MIZA Support</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                MIZA provides integrated support and innovative value-added
                services tailored to the needs of businesses and individuals, facilitating
                seamless establishment and growth in the Kingdom.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-accent-cyan" />
                  <span>966115065777 / 8002449990 (ext. 4)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-accent-cyan" />
                  <span>MIZA@misa.gov.sa</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links], index) => (
            <ScrollReveal key={category} delay={index * 0.05}>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-gray-600 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">FOLLOW MISA ON SOCIAL MEDIA</span>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">For any enquiries, get in touch!</span>
              <Link
                to="/contact"
                className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            All Rights Reserved to Invest Saudi © 2026
          </div>
        </div>
      </div>
    </footer>
  );
};
