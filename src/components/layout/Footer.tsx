import { Link, useParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <footer className="relative overflow-hidden bg-[#050812] text-foreground border-t border-white/5 font-sans pt-20 pb-10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.02]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Top Section: Branding & Vision */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20 pb-10 border-b border-white/5">
          <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
            <Link to={`/${displayLang}/`}>
              <img
                src="/images/Logo-01.png"
                alt="Shomoukh Investment"
                className="h-12 w-auto object-contain brightness-0 invert hover:opacity-80 transition-opacity"
              />
            </Link>
            <div className="hidden sm:block h-10 w-[1px] bg-white/10" />
            <p className="text-sm text-muted-foreground font-medium max-w-[280px] leading-relaxed">
              Strategic development and private investment across the Sultanate of Oman.
            </p>
          </div>

          <div className="flex items-center">
            <img
              src="/images/Oman_Vision_2040_Logo.png"
              alt="Oman Vision 2040"
              className="h-10 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16 mb-20">
          {/* Navigation Links - 4 Columns Span */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1: Start Investing */}
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">{t('footer.text.14')}</h4>
              <ul className="space-y-4">
                <li><Link to={`/${displayLang}/key-sectors`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />{t('footer.text.x1')}</Link></li>
                <li><Link to={`/${displayLang}/key-sectors`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />{t('footer.text.x2')}</Link></li>
              </ul>
            </div>

            {/* Column 2: Discover */}
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">{t('footer.text.15')}</h4>
              <ul className="space-y-4">
                <li><Link to={`/${displayLang}/about-oman`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />{t('footer.text.x3')}</Link></li>
                <li><Link to={`/${displayLang}/about-oman#incentives`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />{t('footer.text.x4')}</Link></li>
                <li><Link to={`/${displayLang}/resources#reports`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />{t('footer.text.x5')}</Link></li>
              </ul>
            </div>

            {/* Column 3: Corporate */}
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">{t('footer.text.19')}</h4>
              <ul className="space-y-4">
                <li><Link to={`/${displayLang}/who-we-are`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />{t('footer.text.11')}</Link></li>
                <li><Link to={`/${displayLang}/our-experts`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />Our Experts</Link></li>
                <li><Link to={`/${displayLang}/contact`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />{t('footer.text.12')}</Link></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">{t('footer.text.17')}</h4>
              <ul className="space-y-4">
                <li><Link to={`/${displayLang}/resources#guide`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />Investor Guide</Link></li>
                <li><Link to={`/${displayLang}/resources#simulator`} className="text-[13px] text-muted-foreground hover:text-primary transition-all flex items-center group"><span className="w-1.5 h-[1px] bg-primary/0 group-hover:bg-primary group-hover:w-3 transition-all mr-0 group-hover:mr-2" />Business Simulator</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Card - 4 Columns Span */}
          <div className="lg:col-span-4 lg:pl-8">
            <div className="relative p-8 rounded-[24px] overflow-hidden group">
              {/* Glass Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500" />
              
              <div className="relative z-10 space-y-8">
                <h4 className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">{t('footer.text.12')}</h4>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Inquiry</p>
                      <a href="mailto:info@shomoukh.om" className="text-sm font-bold text-white hover:text-primary transition-colors">info@shomoukh.om</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Direct Line</p>
                      <a href="tel:+96871770077" className="text-sm font-bold text-white hover:text-primary transition-colors">+968 71770077</a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">HQ Address</p>
                      <p className="text-sm font-bold text-white leading-relaxed">
                        PO Box: 1756 | PC: 111<br />
                        Airport Heights, Muscat<br />
                        The Sultanate of Oman
                      </p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                  {[
                    { icon: Linkedin, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Youtube, href: '#' },
                    { icon: Instagram, href: '#' }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-white/5 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Shomoukh Investment. {t('footer.text.16')}
          </p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
