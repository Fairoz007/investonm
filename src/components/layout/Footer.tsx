import { Link, useParams } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';

  return (
    <footer className="relative overflow-hidden bg-transparent text-foreground font-sans pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12">
      <div className="container-custom relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Top Section: Branding & Vision */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12 mb-16 sm:mb-20 lg:mb-24 pb-10 sm:pb-12">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <Link to={`/${displayLang}/`} className="transition-transform hover:scale-105">
              <img
                src="/images/Logo-01.png"
                alt="Shomoukh Investment"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="hidden sm:block h-12 w-[1px] bg-white/10" />
            <p className="text-sm text-slate-400 font-bold max-w-[300px] leading-relaxed opacity-80 uppercase tracking-widest">
              {t('footer.description')}
            </p>
          </div>

          <div className="flex items-center">
            <img
              src="https://www.oman2040.om/assets/img/logo-oman2040.png"
              alt="Oman Vision 2040"
              className="h-12 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-16 mb-16 sm:mb-20 lg:mb-24">
          {/* Navigation & Newsletter - 8 Columns Span */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {[
                {
                  title: t('footer.text.14'), links: [
                    { to: `/${displayLang}/key-sectors`, label: t('footer.text.x1') },
                    { to: `/${displayLang}/key-sectors`, label: t('footer.text.x2') }
                  ]
                },
                {
                  title: t('footer.text.15'), links: [
                    { to: `/${displayLang}/about-oman`, label: t('footer.text.x3') },
                    { to: `/${displayLang}/about-oman#incentives`, label: t('footer.text.x4') },
                    { to: `/${displayLang}/resources#reports`, label: t('footer.text.x5') }
                  ]
                },
                {
                  title: t('footer.text.19'), links: [
                    { to: `/${displayLang}/who-we-are`, label: t('footer.text.11') },
                    { to: `/${displayLang}/our-experts`, label: t('ourExperts.heroTitle') },
                    { to: `/${displayLang}/contact`, label: t('footer.text.12') }
                  ]
                },
                {
                  title: t('footer.text.17'), links: [
                    { to: `/${displayLang}/resources#guide`, label: t('resources.heroTitle') },
                    { to: `/${displayLang}/resources#simulator`, label: t('common.readMore') }
                  ]
                }
              ].map((col, idx) => (
                <div key={idx} className="space-y-8">
                  <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] opacity-50">{col.title}</h4>
                  <ul className="space-y-5">
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link to={link.to} className="text-[14px] text-slate-400 font-bold hover:text-blue-400 transition-all flex items-center group">
                          <span className={`w-2 h-2 rounded-full border border-blue-500/30 ${displayLang === 'ar' || displayLang === 'fa' ? 'ml-3' : 'mr-3'} scale-0 group-hover:scale-100 transition-transform bg-blue-500/20`} />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10 rounded-[32px] sm:rounded-[48px] bg-white/[0.02] border border-white/5 group transition-all duration-700 hover:bg-white/[0.04]">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] group-hover:bg-blue-500/10 transition-colors" />

              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12">
                <div className={`max-w-md ${displayLang === 'ar' || displayLang === 'fa' ? 'text-right' : 'text-left'}`}>
                  <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
                    {t('footer.newsletter.title')}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-bold leading-relaxed opacity-70 uppercase tracking-widest">
                    {t('footer.newsletter.description')}
                  </p>
                </div>

                <form className="relative w-full lg:max-w-md group/form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder={t('footer.newsletter.placeholder')}
                    className={`w-full bg-[#0A0F1E] border border-white/10 rounded-full py-4 sm:py-5 px-6 sm:px-10 text-[13px] font-bold text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all duration-500 ${displayLang === 'ar' || displayLang === 'fa' ? 'pl-32 sm:pl-40 pr-6 sm:pr-10' : 'pr-32 sm:pr-40 pl-6 sm:pl-10'}`}
                  />
                  <button className={`absolute ${displayLang === 'ar' || displayLang === 'fa' ? 'left-2' : 'right-2'} top-2 bottom-2 px-5 sm:px-8 rounded-full bg-blue-600 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-500 shadow-xl`}>
                    {t('footer.newsletter.button')}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className={`lg:col-span-4 ${displayLang === 'ar' || displayLang === 'fa' ? 'lg:pr-12' : 'lg:pl-12'}`}>
            <div className="relative glass-card-premium p-6 sm:p-8 lg:p-10 rounded-[32px] sm:rounded-[48px] overflow-hidden group">
              <div className="relative z-10 space-y-8">
                <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em] opacity-50">{t('footer.text.12')}</h4>

                <div className="space-y-8">
                  {[
                    { icon: Mail, label: t('contact.form.email'), value: 'info@shomoukh.om', href: 'mailto:info@shomoukh.om' },
                    { icon: Phone, label: t('contact.info.phone'), value: '+968 71770077', href: 'tel:+96871770077' }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex gap-6 items-center group/item">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover/item:border-blue-500/30 group-hover/item:bg-blue-500/10 transition-all duration-500 shadow-xl">
                        <contact.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className={displayLang === 'ar' || displayLang === 'fa' ? 'text-right' : 'text-left'}>
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">{contact.label}</p>
                        <a href={contact.href} className="text-base font-black text-white hover:text-blue-400 transition-colors tracking-tight">{contact.value}</a>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-6 items-start group/item">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 group-hover/item:border-purple-500/30 group-hover/item:bg-purple-500/10 transition-all duration-500 shadow-xl">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className={displayLang === 'ar' || displayLang === 'fa' ? 'text-right' : 'text-left'}>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">{t('footer.address')}</p>
                      <p className="text-base font-black text-white leading-relaxed tracking-tight">
                        {t('footer.addressLine1')}<br />
                        {t('footer.addressLine2')}<br />
                        {t('footer.addressLine3')}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 py-8 sm:py-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 opacity-60">
          <p className="text-center sm:text-left opacity-60">
            &copy; {new Date().getFullYear()} Shomoukh Investment. {t('footer.rights')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {[
              { label: t('footer.termsOfService'), href: 'terms' },
              { label: t('footer.privacyPolicy'), href: 'privacy' },
              { label: t('footer.siteMap'), href: 'sitemap' }
            ].map((link, idx) => (
              <Link key={idx} to={`/${displayLang}/${link.href}`} className="hover:text-blue-400 transition-colors opacity-60 hover:opacity-100">{link.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
