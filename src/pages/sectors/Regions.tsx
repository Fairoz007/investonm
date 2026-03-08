import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const regions = [
  {
    name: 'Riyadh Region',
    description: 'The political and administrative capital, Riyadh is the largest city and main business hub of Saudi Arabia.',
    highlights: ['Financial center', 'Government headquarters', 'Technology hub', 'Cultural landmarks'],
    keyCities: ['Riyadh', 'Diriyah', 'Kharj'],
    gdpContribution: '25%',
    population: '8M+',
  },
  {
    name: 'Makkah Region',
    description: 'Home to the holy cities of Makkah and Jeddah, this region is the gateway for millions of pilgrims annually.',
    highlights: ['Religious tourism', 'Port city', 'Commercial hub', 'Logistics center'],
    keyCities: ['Jeddah', 'Makkah', 'Taif'],
    gdpContribution: '22%',
    population: '9M+',
  },
  {
    name: 'Eastern Province',
    description: 'The industrial heartland of Saudi Arabia, home to the oil industry and major petrochemical complexes.',
    highlights: ['Oil & gas hub', 'Industrial zone', 'Port facilities', 'Free zones'],
    keyCities: ['Dammam', 'Khobar', 'Dhahran', 'Jubail'],
    gdpContribution: '28%',
    population: '5M+',
  },
  {
    name: 'Madinah Region',
    description: 'A region of historical and religious significance with growing tourism and agricultural sectors.',
    highlights: ['Religious tourism', 'Agriculture', 'Date production', 'Heritage sites'],
    keyCities: ['Madinah', 'Yanbu'],
    gdpContribution: '8%',
    population: '2M+',
  },
  {
    name: 'Asir Region',
    description: 'Known for its mountainous terrain and moderate climate, Asir is a growing tourism destination.',
    highlights: ['Mountain tourism', 'Agriculture', 'Cultural heritage', 'Eco-tourism'],
    keyCities: ['Abha', 'Khamis Mushait'],
    gdpContribution: '5%',
    population: '2M+',
  },
  {
    name: 'Tabuk Region',
    description: 'A strategic region with significant potential for renewable energy and tourism development.',
    highlights: ['NEOM project', 'Renewable energy', 'Red Sea coast', 'Archaeological sites'],
    keyCities: ['Tabuk', 'NEOM'],
    gdpContribution: '4%',
    population: '900K+',
  },
];

const specialZones = [
  {
    name: 'King Abdullah Economic City (KAEC)',
    description: 'A mega-city project on the Red Sea coast focusing on logistics, manufacturing, and tourism.',
  },
  {
    name: 'King Abdullah Financial District (KAFD)',
    description: 'A world-class financial hub in Riyadh housing major banks and financial institutions.',
  },
  {
    name: 'Ras Al-Khair',
    description: 'A minerals and metals city supporting the mining industry with world-class infrastructure.',
  },
  {
    name: 'Jazan Economic City',
    description: 'An integrated economic city focusing on energy, manufacturing, and logistics.',
  },
];

export default function Regions() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Sectors & Opportunities</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">Regions</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Investment Regions
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Discover the unique opportunities each region of Saudi Arabia offers, 
                from bustling commercial centers to emerging economic zones.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <ScrollReveal key={region.name} delay={index * 0.1}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{region.name}</h3>
                  </div>

                  <p className="text-white/60 text-sm mb-4">{region.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-primary">{region.gdpContribution}</div>
                      <div className="text-xs text-white/50">GDP Share</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-primary">{region.population}</div>
                      <div className="text-xs text-white/50">Population</div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-xs text-white/50 mb-2">Key Cities:</div>
                    <div className="flex flex-wrap gap-1">
                      {region.keyCities.map((city) => (
                        <span key={city} className="px-2 py-0.5 bg-white/5 text-white/70 text-xs rounded">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-white/50 mb-2">Highlights:</div>
                    <div className="flex flex-wrap gap-1">
                      {region.highlights.map((highlight) => (
                        <span key={highlight} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Special Economic Zones */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Special Economic Zones
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Designated zones offering unique incentives and infrastructure for specific industries.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {specialZones.map((zone, index) => (
              <ScrollReveal key={zone.name} delay={index * 0.1}>
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-white">{zone.name}</h3>
                  </div>
                  <p className="text-white/60 text-sm">{zone.description}</p>
                </div>
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
                Find the Right Location for Your Business
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Our regional experts can help you identify the optimal location 
                based on your industry and business requirements.
              </p>
              <button className="btn-primary">Connect with Regional Experts</button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
