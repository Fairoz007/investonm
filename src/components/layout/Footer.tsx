import { Link, useParams } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <footer className="bg-white text-[#666666] border-t border-[#4F3C8C]/10 font-sans">
      {/* Main Footer Content */}
      <div className="container-custom pt-20 pb-12">
        <div className="flex flex-col lg:flex-row gap-16 justify-between mb-16">

          {/* Company Info */}
          <div className="lg:w-1/3 space-y-8">
            <ScrollReveal>
              <div className="flex items-center mb-6">
                <img
                  src="/images/Logo-01.png"
                  alt="Shomoukh International Investment"
                  className="h-12 w-auto object-contain"
                />
              </div>

              <p className="text-[#666666] text-sm leading-relaxed mb-8 max-w-sm">
                {t('footer.text.3')} </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8A6BCB] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#666666]">
                    {t('footer.text.4')} <br />
                    {t('footer.text.5')} <br />
                    {t('footer.text.6')} <br />
                    {t('footer.text.7')} </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8A6BCB] shrink-0" />
                  <a href="mailto:info@shomoukh.om" className="text-sm text-[#666666] hover:text-[#8A6BCB] transition-colors">
                    {t('footer.text.8')} </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Navigation Links */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">

            {/* Useful Links */}
            <ScrollReveal delay={0.1}>
              <h4 className="text-[#222222] font-bold mb-6 uppercase tracking-wider text-sm"> {t('footer.text.9')} </h4>
              <ul className="space-y-4">
                <li><Link to={`/${displayLang}`} className="text-sm hover:text-[#8A6BCB] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#8A6BCB] opacity-0 group-hover:opacity-100 transition-opacity"></span> {t('footer.text.10')} </Link></li>
                <li><Link to={`/${displayLang}/who-we-are`} className="text-sm hover:text-[#8A6BCB] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#8A6BCB] opacity-0 group-hover:opacity-100 transition-opacity"></span> {t('footer.text.11')} </Link></li>
                <li><Link to={`/${displayLang}/contact`} className="text-sm hover:text-[#8A6BCB] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#8A6BCB] opacity-0 group-hover:opacity-100 transition-opacity"></span> {t('footer.text.12')} </Link></li>
                <li><Link to="#" className="text-sm hover:text-[#8A6BCB] transition-colors flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-[#8A6BCB] opacity-0 group-hover:opacity-100 transition-opacity"></span> {t('footer.text.13')} </Link></li>
              </ul>
            </ScrollReveal>

            {/* Key Sectors */}
            <ScrollReveal delay={0.2}>
              <h4 className="text-[#222222] font-bold mb-6 uppercase tracking-wider text-sm"> {t('footer.text.14')} </h4>
              <ul className="space-y-4">
                {[
                  { label: 'Energy', href: '/key-sectors#energy' },
                  { label: 'Luxury', href: '/key-sectors#luxury' },
                  { label: 'Trade', href: '/key-sectors#trade' },
                  { label: 'Investments', href: '/key-sectors#investments' },
                  { label: 'Tourism & Hospitality', href: '/key-sectors#tourism' },
                  { label: 'Education', href: '/key-sectors#education' },
                  { label: 'Logistics', href: '/key-sectors#logistics' },
                  { label: 'Real Estate', href: '/key-sectors#real-estate' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={`/${displayLang}${item.href}`} className="text-sm hover:text-[#8A6BCB] transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#8A6BCB] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* About Oman */}
            <ScrollReveal delay={0.3}>
              <h4 className="text-[#222222] font-bold mb-6 uppercase tracking-wider text-sm"> {t('footer.text.15')} </h4>
              <ul className="space-y-4">
                {[
                  { label: 'Oman’s Infrastructure Advantage', href: '/about-oman#infrastructure' },
                  { label: 'Legislation', href: '/about-oman#legislation' },
                  { label: 'Business Ecosystem', href: '/about-oman#ecosystem' },
                  { label: 'Strategic Location', href: '/about-oman#location' },
                  { label: 'A Cost-Effective Business Hub', href: '/about-oman#hub' },
                  { label: 'Friendly Business Environment', href: '/about-oman#environment' },
                  { label: 'Incentives to Invest', href: '/about-oman#incentives' }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={`/${displayLang}${item.href}`} className="text-sm hover:text-[#8A6BCB] transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-[#8A6BCB] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4F3C8C]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-sm text-[#666666]/50 text-center md:text-left">
              {t('footer.text.16')} </div>
            <img
              src="/images/Oman_Vision_2040_Logo.png"
              alt="Oman Vision 2040"
              className="h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#8A6BCB] hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#8A6BCB] hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
