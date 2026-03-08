import { motion } from 'framer-motion';
import { ArrowRight, Laptop, FileText, CheckCircle2, Clock, Shield, Globe } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';

const eServices = [
  {
    icon: FileText,
    title: 'Investment License Application',
    description: 'Apply for and manage your investment license entirely online.',
    features: ['Online application', 'Document upload', 'Status tracking', 'Digital license issuance'],
  },
  {
    icon: CheckCircle2,
    title: 'License Renewal',
    description: 'Renew your investment license with a few simple clicks.',
    features: ['Automated reminders', 'One-click renewal', 'Payment integration', 'Instant confirmation'],
  },
  {
    icon: Globe,
    title: 'Visa Services',
    description: 'Apply for investor visas and work permits online.',
    features: ['Visa applications', 'Work permits', 'Family visas', 'Status tracking'],
  },
  {
    icon: Shield,
    title: 'Compliance Management',
    description: 'Manage regulatory compliance and submit required reports.',
    features: ['Compliance tracking', 'Report submission', 'Deadline alerts', 'Document management'],
  },
];

const benefits = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Access services anytime, anywhere, without waiting for business hours.',
  },
  {
    icon: CheckCircle2,
    title: 'Faster Processing',
    description: 'Digital workflows reduce processing times significantly.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-grade security ensures your data is always protected.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Services available in multiple languages for global accessibility.',
  },
];

const quickLinks = [
  { name: 'Apply for Investment License', description: 'Start your investment journey' },
  { name: 'Renew Your License', description: 'Keep your license up to date' },
  { name: 'Apply for Visa', description: 'Investor and work visa applications' },
  { name: 'Track Application Status', description: 'Check the status of your applications' },
  { name: 'Submit Compliance Reports', description: 'Meet regulatory requirements' },
  { name: 'Update Company Information', description: 'Keep your records current' },
];

export default function EServices() {
  return (
    <div className="min-h-screen bg-dark pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-dark to-dark" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="text-sm font-medium">Setup & Scale</span>
                <ArrowRight className="w-4 h-4" />
                <span className="text-sm text-white/60">E-Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                E-Services Portal
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Access all investment services digitally, anytime, anywhere. 
                Our secure online platform makes managing your investment simple and efficient.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* E-Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Available E-Services
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Complete range of digital services to manage your investment journey.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {eServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-8 h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/5 text-white/70 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Benefits of E-Services
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Why use our digital platform for your investment needs.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/60 text-sm">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Quick Access
            </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              Frequently used services at your fingertips.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <ScrollReveal key={link.name} delay={index * 0.05}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 w-full text-left hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white mb-1">{link.name}</h3>
                  <p className="text-white/50 text-sm">{link.description}</p>
                </motion.button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Login CTA */}
      <section className="py-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="glass-card p-12 text-center">
              <div className="p-6 bg-primary/20 rounded-full w-fit mx-auto mb-6">
                <Laptop className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Access E-Services Portal
              </h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Login to your account to access all digital services, track applications, 
                and manage your investment online.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">Login to Portal</button>
                <button className="btn-secondary">Create Account</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
