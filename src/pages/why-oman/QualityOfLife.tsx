import { motion } from 'framer-motion';
import { Heart, GraduationCap, Stethoscope, Music, ShoppingBag, TreePine } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from"react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const lifestyleCategories = [
 {
 icon: Heart,
 title: 'Healthcare',
 description: 'World-class healthcare facilities with cutting-edge medical technology and highly trained professionals.',
 features: ['Universal healthcare coverage', 'Advanced medical facilities', 'Specialized treatment centers'],
 },
 {
 icon: GraduationCap,
 title: 'Education',
 description: 'Top-tier educational institutions offering international curricula and world-class research facilities.',
 features: ['International schools', 'World-class universities', 'Research centers'],
 },
 {
 icon: Music,
 title: 'Entertainment',
 description: 'Vibrant entertainment scene with world-class events, concerts, and cultural experiences.',
 features: ['Major concerts & events', 'Cultural festivals', 'Theme parks'],
 },
 {
 icon: ShoppingBag,
 title: 'Shopping & Dining',
 description: 'Premium shopping destinations and diverse culinary experiences from around the world.',
 features: ['Luxury malls', 'International cuisine', 'Traditional markets'],
 },
 {
 icon: TreePine,
 title: 'Recreation',
 description: 'Beautiful landscapes, outdoor activities, and modern recreational facilities.',
 features: ['Pristine beaches', 'Desert adventures', 'Green spaces'],
 },
 {
 icon: Stethoscope,
 title: 'Wellness',
 description: 'Comprehensive wellness programs and facilities promoting healthy living.',
 features: ['Fitness centers', 'Spa resorts', 'Wellness programs'],
 },
];

const cities = [
 {
 name: 'Riyadh',
 description: 'The vibrant capital city offering modern amenities, business districts, and cultural landmarks.',
 highlights: ['Business Hub', 'Cultural Sites', 'Modern Infrastructure'],
 },
 {
 name: 'Jeddah',
 description: 'The cosmopolitan gateway to Mecca, known for its beautiful coastline and diverse culture.',
 highlights: ['Coastal Living', 'Historic District', 'International Community'],
 },
 {
 name: 'Dammam',
 description: 'A thriving economic center in the Eastern Province with excellent industrial facilities.',
 highlights: ['Industrial Hub', 'Port City', 'Economic Zone'],
 },
 {
 name: 'NEOM',
 description: 'The futuristic city being built from scratch, offering a new model for sustainable living.',
 highlights: ['Smart City', 'Sustainable Living', 'Innovation Hub'],
 },
];

export default function QualityOfLife() {
 const { t } = useTranslation();
 return (
 <div className="min-h-screen bg-background text-[var(--text-paragraph)] pt-24">
 {/* Hero Section */}
 <section className="relative h-[300px] flex items-center border-b border-black/5 overflow-hidden">
 <div className="absolute inset-0 z-0">
 <div className="absolute inset-0 bg-[url('/images/oman_landscape.png')] bg-cover bg-center opacity-10" />
 <div className="absolute inset-0 hero-gradient opacity-90" />
 </div>
 <div className="container-custom relative z-10 text-left w-full text-white">
 <ScrollReveal>
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="flex items-center justify-start gap-2 text-[12px] font-medium uppercase tracking-wider opacity-70 mb-[10px]"
>
 <span>Home</span>
 <span className="opacity-40">/</span>
 <span>Quality of Life</span>
 </motion.div>

 <motion.h1
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8 }}
 className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
>
 Quality of Life
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="text-[18px] text-white leading-relaxed max-w-2xl"
>
 The Sultanate of Oman offers a high quality of life supported by safety, political stability, and a welcoming cultural environment.
 Residents benefit from modern healthcare systems, internationally recognized educational institutions, and a high standard of living. Combined with the country’s rich cultural heritage and natural landscapes, these factors contribute to an environment that attracts investors, entrepreneurs, and international professionals.
 </motion.p>
 </ScrollReveal>
 </div>
 </section>

 {/* Lifestyle Categories */}
 <section className="section-padding bg-secondary text-white">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-white mb-4 text-left">
 {t('qualityoflife.text.5')}
 </h2>
 <p className="text-white/70 text-left mb-12 max-w-2xl">
 {t('qualityoflife.text.6')}
 </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {lifestyleCategories.map((category, index) => (
 <ScrollReveal key={category.title} delay={index * 0.1}>
 <motion.div
 whileHover={{ y: -5 }}
 className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full transition-all duration-300 hover:bg-white/10 group"
>
 <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6 transition-transform duration-300 group-">
 <category.icon className="w-8 h-8 text-primary" />
 </div>
 <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
 <p className="text-white/60 text-base mb-6 leading-relaxed">{category.description}</p>
 <ul className="space-y-3">
 {category.features.map((feature) => (
 <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
 <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]" />
 {feature}
 </li>
 ))}
 </ul>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Cities Section */}
 <section className="section-padding bg-background">
 <div className="container-custom">
 <ScrollReveal>
 <h2 className="text-[32px] font-semibold text-[var(--heading-main)] mb-4 text-left">
 {t('qualityoflife.text.7')}
 </h2>
 <p className="text-[var(--text-paragraph)] text-left mb-12 max-w-2xl">
 {t('qualityoflife.text.8')}
 </p>
 </ScrollReveal>

 <div className="grid md:grid-cols-2 gap-8">
 {cities.map((city, index) => (
 <ScrollReveal key={city.name} delay={index * 0.1}>
 <motion.div
 whileHover={{ scale: 1.01 }}
 className="bg-white border border-black/5 p-8 rounded-2xl shadow-sm transition-all duration-300"
>
 <h3 className="text-2xl font-bold text-[var(--heading-main)] mb-3">{city.name}</h3>
 <p className="text-[var(--text-paragraph)] mb-6 text-base leading-relaxed">{city.description}</p>
 <div className="flex flex-wrap gap-2">
 {city.highlights.map((highlight) => (
 <span
 key={highlight}
 className="px-4 py-1.5 bg-primary/5 text-primary text-sm font-medium rounded-full"
>
 {highlight}
 </span>
 ))}
 </div>
 </motion.div>
 </ScrollReveal>
 ))}
 </div>
 </div>
 </section>

 {/* Research CTA section */}
 <ResearchDataCTA />
 </div>
 );
}
