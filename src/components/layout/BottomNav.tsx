import { Link, useLocation, useParams } from 'react-router-dom';
import { Home, LayoutGrid, Info, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BottomNav = () => {
    const location = useLocation();
    const { lang } = useParams();
    const { t } = useTranslation();
    const displayLang = lang || 'en';

    const navItems = [
        { label: 'HOME', href: `/${displayLang}`, icon: Home },
        { label: 'KEY SECTORS', href: `/${displayLang}/key-sectors`, icon: LayoutGrid },
        { label: 'ABOUT OMAN', href: `/${displayLang}/about-oman`, icon: Info },
        { label: 'CONTACT US', href: `/${displayLang}/contact`, icon: Phone },
    ];

    return (
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-[var(--secondary)]/10 px-6 py-3 z-[1000] flex justify-between items-center shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
            {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                    <Link
                        key={index}
                        to={item.href}
                        className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-[#666666]'
                            }`}
                    >
                        <item.icon className={`w-6 h-6 ${isActive ? 'fill-[var(--primary)]/10' : ''}`} />
                        <span className="text-[10px] font-bold uppercase tracking-wider">
                            {t(item.label).split(' ')[0]}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
};
