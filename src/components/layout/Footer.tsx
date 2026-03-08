import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

export const Footer = () => {
  return (
    <footer className="bg-[#020b0d] text-white/70 border-t border-white/10 font-sans">
      {/* Main Footer Content */}
      <div className="container-custom pt-20 pb-12">
        <div className="flex flex-col lg:flex-row gap-16 justify-between mb-16">

          {/* Company Info */}
          <div className="lg:w-1/3 space-y-8">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#00c2b5]/10 flex items-center justify-center border border-[#00c2b5]/30">
                  <span className="text-xl font-bold tracking-widest text-[#00c2b5]">S</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/50 leading-tight font-arabic">استثمر في عُمان</span>
                  <span className="text-sm font-bold text-white tracking-widest">SHOMOUKH</span>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm">
                Your strategic partner for exploring, establishing, and growing your investment in the Sultanate of Oman.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#00c2b5] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/70">
                    Postal Office Box: 1756<br />
                    Postal Code: 111<br />
                    Airport Heights, Muscat<br />
                    Sultanate of Oman
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00c2b5] shrink-0" />
                  <a href="mailto:info@shomoukh.om" className="text-sm text-white/70 hover:text-[#00c2b5] transition-colors">
                    info@shomoukh.om
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Navigation Links */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">

            {/* Useful Links */}
            <ScrollReveal delay={0.1}>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Useful Links</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-sm hover:text-[#00c2b5] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#00c2b5] opacity-0 group-hover:opacity-100 transition-opacity"></span>Home</Link></li>
                <li><Link to="/who-we-are" className="text-sm hover:text-[#00c2b5] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#00c2b5] opacity-0 group-hover:opacity-100 transition-opacity"></span>Who We Are</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-[#00c2b5] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#00c2b5] opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact Us</Link></li>
                <li><Link to="#" className="text-sm hover:text-[#00c2b5] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#00c2b5] opacity-0 group-hover:opacity-100 transition-opacity"></span>Privacy Policy</Link></li>
              </ul>
            </ScrollReveal>

            {/* Key Sectors */}
            <ScrollReveal delay={0.2}>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Key Sectors</h4>
              <ul className="space-y-4">
                {['Energy', 'Luxury', 'Trade', 'Investments', 'Tourism & Hospitality', 'Education', 'Logistics', 'Real Estate'].map((sector) => (
                  <li key={sector}>
                    <Link to={`/key-sectors`} className="text-sm hover:text-[#00c2b5] transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#00c2b5] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {sector}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* About Oman */}
            <ScrollReveal delay={0.3}>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">About Oman</h4>
              <ul className="space-y-4">
                {[
                  'Oman’s Infrastructure Advantage',
                  'Legislation',
                  'Business Ecosystem',
                  'Strategic Location',
                  'A Cost-Effective Business Hub',
                  'Oman’s Friendly Business Environment',
                  'Incentives to Invest in Oman'
                ].map((item) => (
                  <li key={item}>
                    <Link to="/about-oman" className="text-sm hover:text-[#00c2b5] transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#00c2b5] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/50 text-center md:text-left">
            © 2025 Shomoukh International Investment LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00c2b5] hover:text-[#111] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00c2b5] hover:text-[#111] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
