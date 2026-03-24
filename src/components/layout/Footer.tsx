import { Link, useParams } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <footer className="relative overflow-hidden bg-background/90 text-foreground border-t border-border/80 font-sans pt-16 pb-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-overlay opacity-20" />
      <div className="container-custom">
        {/* Top Header Logos */}
        <div className="flex flex-wrap items-center justify-between gap-8 mb-16 pb-8 border-b border-border">
          <div className="flex items-center gap-6">
            <img
              src="/images/Logo-01.png"
              alt="Shomoukh Investment"
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <div className="h-10 w-[1px] bg-border hidden sm:block" />
            <div className="hidden sm:block">
            </div>
          </div>

          <div className="flex items-center gap-8">
            <img
              src="/images/Oman_Vision_2040_Logo.png"
              alt="Oman Vision 2040"
              className="h-12 w-auto object-contain brightness-0 invert opacity-80"
            />
          </div>
        </div>

        {/* Main 5-Column Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: Start Investing */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider">{t('footer.text.14')}</h4>
            <ul className="space-y-3">
              <li><Link to={`/${displayLang}/key-sectors`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x1')}</Link></li>
              <li><Link to={`/${displayLang}/key-sectors`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x2')}</Link></li>
            </ul>
          </div>

          {/* Column 2: Discover */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider">{t('footer.text.15')}</h4>
            <ul className="space-y-3">
              <li><Link to={`/${displayLang}/about-oman`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x3')}</Link></li>
              <li><Link to={`/${displayLang}/about-oman#incentives`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x4')}</Link></li>
              <li><Link to={`/${displayLang}/resources#reports`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x5')}</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x6')}</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x7')}</Link></li>
            </ul>
          </div>

          {/* Column 3: About Invest Oman / Shomoukh */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider">{t('footer.text.19')}</h4>
            <ul className="space-y-3">
              <li><Link to={`/${displayLang}/who-we-are`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.11')}</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x14')}</Link></li>
              <li><Link to={`/${displayLang}/contact`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.12')}</Link></li>
            </ul>

            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider pt-4">Connect</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x8')}</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x9')}</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x10')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources & Tools */}
          <div className="space-y-6">
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider">{t('footer.text.17')}</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x11')}</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x12')}</Link></li>
              <li><Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t('footer.text.x13')}</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact us */}
          <div className="space-y-6 bg-card/80 p-6 rounded-2xl border border-border/80 backdrop-blur-md shadow-md">
            <h4 className="font-sans font-bold text-foreground text-sm uppercase tracking-wider">{t('footer.text.12')}</h4>

            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Email:</p>
                  <a href="mailto:info@shomoukh.om" className="text-xs font-bold text-foreground hover:text-primary transition-colors">info@shomoukh.om</a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Phone:</p>
                  <a href="tel:+96880000777" className="text-xs font-bold text-foreground hover:text-primary transition-colors">+968 80000777</a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"><Youtube className="w-5 h-5" /></a>
                <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/60 transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-muted-foreground">
          <p>{t('footer.text.16')}</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
