import { Link, useParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <footer className="relative overflow-hidden bg-transparent text-foreground border-t border-white/5 font-sans pt-24 pb-12">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Top Section: Branding & Vision */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24 pb-12 border-b border-white/5">
          <div className="flex flex-col sm:flex-row items-center gap-10 text-center sm:text-left">
            <Link to={`/${displayLang}/`} className="transition-transform hover:scale-105">
              <img
                src="/images/Logo-01.png"
                alt="Shomoukh Investment"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="hidden sm:block h-12 w-[1px] bg-white/10" />
            <p className="text-sm text-slate-400 font-bold max-w-[300px] leading-relaxed opacity-80 uppercase tracking-widest">
              Strategic development and private investment across the Sultanate of Oman.
            </p>
          </div>

          <div className="flex items-center">
            <img
              src="/images/Oman_Vision_2040_Logo.png"
              alt="Oman Vision 2040"
              className="h-12 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-12 gap-y-16 mb-24">
          {/* Navigation Links - 4 Columns Span */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { title: t('footer.text.14'), links: [
                { to: `/${displayLang}/key-sectors`, label: t('footer.text.x1') },
                { to: `/${displayLang}/key-sectors`, label: t('footer.text.x2') }
              ]},
              { title: t('footer.text.15'), links: [
                { to: `/${displayLang}/about-oman`, label: t('footer.text.x3') },
                { to: `/${displayLang}/about-oman#incentives`, label: t('footer.text.x4') },
                { to: `/${displayLang}/resources#reports`, label: t('footer.text.x5') }
              ]},
              { title: t('footer.text.19'), links: [
                { to: `/${displayLang}/who-we-are`, label: t('footer.text.11') },
                { to: `/${displayLang}/our-experts`, label: 'Our Experts' },
                { to: `/${displayLang}/contact`, label: t('footer.text.12') }
              ]},
              { title: t('footer.text.17'), links: [
                { to: `/${displayLang}/resources#guide`, label: 'Investor Guide' },
                { to: `/${displayLang}/resources#simulator`, label: 'Business Simulator' }
              ]}
            ].map((col, idx) => (
              <div key={idx} className="space-y-8">
                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] opacity-50">{col.title}</h4>
                <ul className="space-y-5">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <Link to={link.to} className="text-[14px] text-slate-400 font-bold hover:text-blue-400 transition-all flex items-center group">
                        <span className="w-2 h-2 rounded-full border border-blue-500/30 mr-3 scale-0 group-hover:scale-100 transition-transform bg-blue-500/20" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-4 lg:pl-12">
            <div className="relative glass-card-premium p-10 rounded-[48px] overflow-hidden group">
              <div className="relative z-10 space-y-10">
                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] opacity-50">{t('footer.text.12')}</h4>

                <div className="space-y-8">
                  {[
                    { icon: Mail, label: 'Email Inquiry', value: 'info@shomoukh.om', href: 'mailto:info@shomoukh.om' },
                    { icon: Phone, label: 'Direct Line', value: '+968 71770077', href: 'tel:+96871770077' }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex gap-6 items-center group/item">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-all duration-500 shadow-xl">
                        <contact.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">{contact.label}</p>
                        <a href={contact.href} className="text-base font-black text-white hover:text-blue-400 transition-colors tracking-tight">{contact.value}</a>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-6 items-start group/item">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover/item:border-purple-500/30 group-hover/item:bg-purple-500/10 transition-all duration-500 shadow-xl">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">HQ Address</p>
                      <p className="text-base font-black text-white leading-relaxed tracking-tight">
                        PO Box: 1756 | PC: 111<br />
                        Airport Heights, Muscat<br />
                        The Sultanate of Oman
                      </p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                  {[Linkedin, Twitter, Youtube, Instagram].map((Icon, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/20 transition-all duration-500 group/social"
                    >
                      <Icon className="w-5 h-5 group-hover/social:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-10 border-t border-white/5 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <p className="text-center md:text-left opacity-60">
            &copy; {new Date().getFullYear()} Shomoukh Investment. {t('footer.text.16')}
          </p>
          <div className="flex gap-10">
            {['Terms of Service', 'Privacy Policy', 'Site Map'].map((label, idx) => (
              <Link key={idx} to="#" className="hover:text-blue-400 transition-colors opacity-60 hover:opacity-100">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
