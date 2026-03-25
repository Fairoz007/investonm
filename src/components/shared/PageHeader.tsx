import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: {
    label: string;
    href?: string;
  }[];
  centered?: boolean;
}

export const PageHeader = ({ title, subtitle, breadcrumb, centered = false }: PageHeaderProps) => {
  const { lang } = useParams();
  const displayLang = lang || 'en';
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#050812]">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full bg-grid-overlay opacity-20" />
      </div>

      <div className="container-custom relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
        <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
          {/* Breadcrumbs */}
          {breadcrumb && (
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <Link to={`/${displayLang}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] hover:text-white transition-colors">
                {t('footer.text.10') || 'Home'}
              </Link>
              {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-white/20">/</span>
                  {item.href ? (
                    <Link to={`/${displayLang}${item.href}`} className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94A3B8] hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </motion.nav>
          )}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-[40px] leading-[1.1] font-extrabold text-white sm:text-5xl md:text-7xl lg:text-8xl tracking-tight"
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-[800px] text-lg md:text-xl md:text-[22px] leading-relaxed text-[#94A3B8] font-medium"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Decorative Divider */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-primary rounded-full mt-10"
          />
        </div>
      </div>
    </section>
  );
};
