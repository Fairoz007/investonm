import { motion } from 'framer-motion';
import { ArrowRight, Building2, TrendingUp, Zap, Leaf, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const gigaProjects = [
  {
    name: 'NEOM',
    tagline: 'The Land of the Future',
    description: 'A $500 billion futuristic city project that will serve as a model for sustainable living, innovation, and human progress.',
    investment: '$500B',
    area: '26,500 km²',
    highlights: ['THE LINE', 'OXAGON', 'Sindalah', 'Trojena'],
    sectors: ['Technology', 'Renewable Energy', 'Tourism', 'Manufacturing'],
    icon: Zap,
  },
  {
    name: 'Red Sea Project',
    tagline: 'A New Luxury Destination',
    description: 'An ultra-luxury tourism destination spanning 28,000 km² with 50 hotels, 1,300 residential properties, and pristine natural landscapes.',
    investment: '$20B',
    area: '28,000 km²',
    highlights: ['50 Hotels', '1,300 Residences', 'Protected Marine Area', '18-Month Construction'],
    sectors: ['Tourism', 'Hospitality', 'Real Estate'],
    icon: Leaf,
  },
  {
    name: 'Qiddiya',
    tagline: 'The Capital of Entertainment',
    description: 'The entertainment, sports, and arts capital of Saudi Arabia, offering world-class attractions and experiences.',
    investment: '$8B',
    area: '334 km²',
    highlights: ['Six Flags Qiddiya', 'Speed Park', 'Water Theme Park', 'Performing Arts Center'],
    sectors: ['Entertainment', 'Sports', 'Culture'],
    icon: Users,
  },
  {
    name: 'Diriyah Gate',
    tagline: 'Birthplace of a Nation',
    description: 'A cultural and heritage destination celebrating the birthplace of the Saudi nation, featuring museums, galleries, and cultural experiences.',
    investment: '$20B',
    area: '7 km²',
    highlights: ['At-Turaif', 'Samhan Bridge', 'Museum District', 'Cultural Events'],
    sectors: ['Culture', 'Tourism', 'Hospitality'],
    icon: Building2,
  },
  {
    name: 'Amaala',
    tagline: 'The Riviera of the Middle East',
    description: 'An ultra-luxury wellness and tourism destination on the Red Sea coast, focused on wellness, arts, and yachting.',
    investment: '$20B',
    area: '3,800 km²',
    highlights: ['Wellness Resorts', 'Art District', 'Yacht Club', 'Marine Sanctuary'],
    sectors: ['Wellness', 'Tourism', 'Arts'],
    icon: Leaf,
  },
  {
    name: 'King Abdullah Financial District',
    tagline: 'The Financial Hub',
    description: 'A world-class financial hub in Riyadh housing major banks, financial institutions, and corporate headquarters.',
    investment: '$8B',
    area: '1.6 km²',
    highlights: ['73 Towers', 'Financial Center', 'Smart City Features', 'Sustainable Design'],
    sectors: ['Finance', 'Business Services', 'Technology'],
    icon: TrendingUp,
  },
];

const impactStats = [
  { value: '$1T+', label: 'Total Investment Value' },
  { value: '1M+', label: 'Jobs to be Created' },
  { value: '70K+', label: 'Hotel Rooms' },
  { value: '30M+', label: 'Annual Visitors Target' },
];

export default function GigaProjects() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Sectors & Opportunities</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Giga Projects</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Giga Projects
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Transformational projects reshaping the economic landscape and creating 
                unprecedented investment opportunities across multiple sectors.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 border-y border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Giga Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Vision 2030 Giga Projects
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              These transformational projects are creating new industries, attracting global talent, 
              and positioning Saudi Arabia as a leader in innovation and sustainable development.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {gigaProjects.map((project, index) => (
              <ScrollReveal key={project.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-8 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-4">
                        <project.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                      <p className="text-primary text-sm">{project.tagline}</p>
                    </div>
                  </div>

                  <p className="text-white/60 mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="text-sm text-white/50">Investment</div>
                      <div className="text-xl font-bold text-primary">{project.investment}</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="text-sm text-white/50">Area</div>
                      <div className="text-xl font-bold text-primary">{project.area}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-white/50 mb-2">Key Components:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-white/50 mb-2">Investment Sectors:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.sectors.map((sector) => (
                        <span
                          key={sector}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
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
                Be Part of the Transformation
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Connect with our team to explore investment opportunities in Saudi Arabia's 
                giga projects and secure your place in the future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Explore Opportunities</button>
                <button className="btn-secondary">Download Project Brochures</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
