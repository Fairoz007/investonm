import { motion } from 'framer-motion';
import { Users, FileText, HandshakeIcon, Lightbulb, Building2, Phone } from 'lucide-react';
import { ScrollReveal } from '@/components/shared/ScrollReveal';
import { useTranslation } from "react-i18next";
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

const services = [
  {
    icon: Users,
    title: 'Investor Registration',
    description: 'Streamlined registration process for establishing your business in Oman.',
    features: [
      'Online application submission',
      'Document verification support',
      'License issuance assistance',
      'Regulatory compliance guidance',
    ],
  },
  {
    icon: Building2,
    title: 'Business Setup Support',
    description: 'Comprehensive assistance for setting up your operations in the Sultanate.',
    features: [
      'Location selection guidance',
      'Facility setup support',
      'Utility connections',
      'Infrastructure coordination',
    ],
  },
  {
    icon: FileText,
    title: 'Regulatory Guidance',
    description: 'Expert advice on navigating Oman regulations and compliance requirements.',
    features: [
      'Legal structure consultation',
      'Compliance requirements',
      'Permit applications',
      'Regulatory updates',
    ],
  },
  {
    icon: HandshakeIcon,
    title: 'Government Liaison',
    description: 'Facilitating communication with government entities for smooth operations.',
    features: [
      'Inter-agency coordination',
      'Issue resolution',
      'Approval facilitation',
      'Ongoing support',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Investment Advisory',
    description: 'Strategic advice to optimize your investment and maximize returns.',
    features: [
      'Market analysis',
      'Opportunity identification',
      'Risk assessment',
      'Growth strategies',
    ],
  },
  {
    icon: Phone,
    title: 'Dedicated Support',
    description: '24/7 support through our Investor Care Center for all your needs.',
    features: [
      'Multilingual support',
      'Dedicated account managers',
      'Quick response times',
      'Issue tracking system',
    ],
  },
];

const processSteps = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Connect with our team to discuss your investment plans and requirements.',
  },
  {
    step: '2',
    title: 'Application Submission',
    description: 'Submit your investment application through our digital platform.',
  },
  {
    step: '3',
    title: 'Review & Approval',
    description: 'Our team reviews your application and facilitates necessary approvals.',
  },
  {
    step: '4',
    title: 'License Issuance',
    description: 'Receive your investment license and begin operations.',
  },
  {
    step: '5',
    title: 'Ongoing Support',
    description: 'Access continuous support throughout your investment journey.',
  },
];

export default function InvestorServices() {
  const { t } = useTranslation();
  return (
    <div className="bg-background min-h-screen text-[var(--text-paragraph)] pt-24">
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
              <span>{t('investorservices.text.2')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[34px] font-semibold mb-[14px] leading-tight tracking-tight text-white"
            >
              {t('investorservices.text.3')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18px] text-white/90 leading-relaxed max-w-2xl"
            >
              {t('investorservices.text.4')}
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('investorservices.text.5')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('investorservices.text.6')} </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card p-6 h-full"
                >
                  <div className="p-4 bg-primary/20 rounded-2xl w-fit mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
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

      {/* Process */}
      <section className="section-padding bg-dark-light/30">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              {t('investorservices.text.7')} </h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
              {t('investorservices.text.8')} </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.step} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>
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
