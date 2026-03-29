import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Mail, PhoneCall, Facebook, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';
  const isRTL = i18n.dir() === 'rtl';

  const footerMenu = [
    {
      title: t('nav.aboutUs').toUpperCase(),
      items: [
        { name: t('nav.ourStory'), path: `/${currentLang}/learn-our-story` },
        { name: t('nav.whoWeAre'), path: `/${currentLang}/who-we-are` },
        { name: t('nav.ourExperts'), path: `/${currentLang}/our-experts` }
      ]
    },
    {
      title: t('nav.whyOman').toUpperCase(),
      items: [
        { name: t('nav.overview'), path: `/${currentLang}/about-oman` },
        { name: t('nav.keyBenefits'), path: `/${currentLang}/about-oman` }
      ]
    },
    {
      title: t('nav.sectors').toUpperCase(),
      items: [
        { name: t('nav.tourism'), path: `/${currentLang}/key-sectors` },
        { name: t('nav.logistics'), path: `/${currentLang}/key-sectors` },
        { name: t('nav.energy'), path: `/${currentLang}/key-sectors` }
      ]
    }
  ];

  return (
    <footer className="bg-background pt-16 lg:pt-24 pb-12 lg:pb-16 overflow-hidden relative">
      <div className="container-custom">
        {/* Animated CTA Heading */}
        <div className="relative mb-24 md:mb-32 group cursor-pointer overflow-hidden pb-4">
          <Link to={`/${currentLang}/contact`} className="block relative h-20 md:h-28 lg:h-36">
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight flex items-center flex-wrap gap-4 lg:gap-8 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0 absolute inset-0 text-white">
              {t('footer.cta')} <ArrowRight className={`w-10 h-10 lg:w-12 lg:h-12 text-primary ${isRTL ? 'rotate-135' : '-rotate-45'}`} />
            </h4>
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight flex items-center flex-wrap gap-4 lg:gap-8 transition-all duration-700 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 absolute inset-0 text-primary">
              {t('footer.cta')} <ArrowRight className={`w-10 h-10 lg:w-12 lg:h-12 text-primary ${isRTL ? 'rotate-135' : '-rotate-45'}`} />
            </h4>
          </Link>
        </div>

        <div className="h-px w-full bg-white/5 mb-16 lg:mb-20" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-12 lg:gap-20">
          <div className="space-y-16">
            <div className="space-y-8">
              <Link to={`/${currentLang}`} className="inline-block group">
                <span className="text-4xl font-display font-bold text-white tracking-tight uppercase group-hover:text-primary transition-colors">Shomoukh</span>
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
              </Link>
              <p className="text-white/40 max-w-[400px] text-lg leading-relaxed font-light italic">
                {t('footer.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-white/20 font-display text-[10px] font-black uppercase tracking-[0.3em]">{t('footer.address').toUpperCase()}</h4>
                <p className="text-white/60 leading-relaxed font-medium">
                  {t('footer.addressLine1')}<br />
                  {t('footer.addressLine2')}<br />
                  {t('footer.addressLine3')}
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-white/20 font-display text-[10px] font-black uppercase tracking-[0.3em]">{t('footer.directInquiry').toUpperCase()}</h4>
                <div className="space-y-4">
                  <a href="mailto:info@shomoukh.om" className="text-white/80 flex items-center gap-3 hover:text-primary transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <Mail size={16} className="text-primary" />
                    </div>
                    info@shomoukh.om
                  </a>
                  <a href="tel:+96871770077" className="text-white/80 flex items-center gap-3 hover:text-primary transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <PhoneCall size={16} className="text-primary" />
                    </div>
                    +968 7177 0077
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-12 border-t border-white/5">
               <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-dark hover:bg-primary hover:rotate-[15deg] transition-all duration-500">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] sm:ml-auto">
                {t('footer.rights')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-10 pt-4 lg:pt-0">
            {footerMenu.map((group) => (
              <div key={group.title} className="space-y-10">
                <h4 className="text-primary font-display font-black uppercase tracking-[0.2em] text-[10px] opacity-80">{group.title}</h4>
                <ul className="space-y-5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link to={item.path} className="text-white/40 hover:text-white transition-all text-base md:text-lg hover:translate-x-2 block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="space-y-10">
               <h4 className="text-primary font-display font-black uppercase tracking-[0.2em] text-[10px] opacity-80">{t('nav.connect').toUpperCase()}</h4>
               <Link to={`/${currentLang}/contact`} className="inline-flex items-center gap-4 group text-white/40 hover:text-primary transition-all">
                  <span className="text-lg">{t('nav.connect')}</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-dark transition-all">
                    <ArrowRight size={18} className={`transition-transform ${isRTL ? 'rotate-135' : 'group-hover:rotate-[-45deg]'}`} />
                  </div>
               </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[150px] pointer-events-none" />
    </footer>
  );
}

