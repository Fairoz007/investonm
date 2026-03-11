import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const themes = [
    { id: 'purple', color: '#8A6BCB', name: 'Purple Gradient', class: 'theme-purple' },
    { id: 'gold', color: '#C8A45D', name: 'Royal Gold', class: 'theme-gold' },
    { id: 'midnight', color: '#0D2A5C', name: 'Midnight Blue', class: 'theme-midnight' },
    { id: 'emerald', color: '#198754', name: 'Emerald Wealth', class: 'theme-emerald' },
    { id: 'burgundy', color: '#7A1E2C', name: 'Burgundy Elite', class: 'theme-burgundy' },
];

export const ThemeSwitcher: React.FC = () => {
    const [activeTheme, setActiveTheme] = useState<string>('purple');

    useEffect(() => {
        const savedTheme = localStorage.getItem('shomoukh-theme') || 'purple';
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (themeId: string) => {
        const root = document.documentElement;

        // Remove all theme classes
        themes.forEach(t => {
            if (t.class) root.classList.remove(t.class);
        });

        const theme = themes.find(t => t.id === themeId);

        // Add new theme class
        if (theme?.class) {
            root.classList.add(theme.class);
        }

        setActiveTheme(themeId);
        localStorage.setItem('shomoukh-theme', themeId);
    };

    return (
        <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 p-2.5 sm:p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl transition-all duration-500 hover:bg-white/20 group/switcher">
            <div className="flex flex-col gap-4">
                {themes.map((theme) => (
                    <button
                        key={theme.id}
                        onClick={() => applyTheme(theme.id)}
                        className={cn(
                            "w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all duration-300 relative group/btn",
                            activeTheme === theme.id
                                ? "ring-2 ring-offset-2 ring-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                                : "hover:scale-125 shadow-md opacity-80 hover:opacity-100"
                        )}
                        style={{ backgroundColor: theme.color }}
                        aria-label={`Switch to ${theme.name}`}
                    >
                        {activeTheme === theme.id && (
                            <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping opacity-20" />
                        )}

                        {/* Tooltip */}
                        <span className={cn(
                            "absolute right-full mr-4 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-[10px] sm:text-xs rounded-lg opacity-0 group-hover/btn:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none uppercase tracking-widest font-bold translate-x-2 group-hover/btn:translate-x-0 border border-white/10",
                            "after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-full after:border-[6px] after:border-transparent after:border-l-black/80"
                        )}>
                            {theme.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};
