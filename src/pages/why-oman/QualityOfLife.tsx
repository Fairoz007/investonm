import { motion } from 'framer-motion';
import { ArrowRight, Heart, GraduationCap, Stethoscope, Music, ShoppingBag, TreePine } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";

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
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium"> {t('qualityoflife.text.1')} </span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60"> {t('qualityoflife.text.2')} </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                 {t('qualityoflife.text.3')} </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                 {t('qualityoflife.text.4')} </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lifestyle Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
               {t('qualityoflife.text.5')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
               {t('qualityoflife.text.6')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifestyleCategories.map((category, index) => (
              <ScrollReveal key={category.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="p-3 bg-primary/20 rounded-xl w-fit mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
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
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
               {t('qualityoflife.text.7')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
               {t('qualityoflife.text.8')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {cities.map((city, index) => (
              <ScrollReveal key={city.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-3">{city.name}</h3>
                  <p className="text-white/60 mb-4">{city.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                 {t('qualityoflife.text.9')} </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                 {t('qualityoflife.text.10')} </p>
              <button className="btn-primary"> {t('qualityoflife.text.11')} </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
