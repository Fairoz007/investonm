import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { PageHeader } from '@/components/shared/PageHeader';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { ResearchDataCTA } from '@/components/shared/ResearchDataCTA';

export default function WhoWeAre() {
  const { t } = useTranslation();

  const values = [
    { icon: ShieldCheck, title: "whoweare.values.1.title", desc: "whoweare.values.1.desc" },
    { icon: Heart, title: "whoweare.values.2.title", desc: "whoweare.values.2.desc" },
    { icon: Award, title: "whoweare.values.3.title", desc: "whoweare.values.3.desc" }
  ];

  const successStories = [
    { title: "whoweare.success.1.title", desc: "whoweare.success.1.desc" },
    { title: "whoweare.success.2.title", desc: "whoweare.success.2.desc" }
  ];

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300">
      <PageHeader 
        title={t('whoweare.text.1')}
        subtitle={t('whoweare.text.3')}
        breadcrumb={[{ label: t('whoweare.text.1') }]}
      />

      {/* Mission & Vision */}
      <section className="py-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                <Target className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">{t('whoweare.text.4')}</h2>
              <p className="text-lg text-[#94A3B8] leading-relaxed font-light">
                {t('whoweare.text.5')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 md:p-12 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                <Eye className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-white">{t('whoweare.text.6')}</h2>
              <p className="text-lg text-[#94A3B8] leading-relaxed font-light">
                {t('whoweare.text.7')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('whoweare.values.title')}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8" />
            <p className="text-xl text-[#94A3B8] font-light">
              {t('whoweare.values.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center group hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                  <value.icon className="w-7 h-7 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t(value.title)}</h3>
                <p className="text-[#94A3B8] leading-relaxed font-light">{t(value.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 border-t border-white/5">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                  {t('whoweare.success.title')}
                </h2>
                <p className="text-xl text-[#94A3B8] font-light">
                  {t('whoweare.success.subtitle')}
                </p>
              </motion.div>

              <div className="space-y-6">
                {successStories.map((story, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 p-8 rounded-2xl bg-white/[0.03] border border-white/10 group hover:bg-white/[0.05] transition-all"
                  >
                    <div className="shrink-0 p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{t(story.title)}</h4>
                      <p className="text-[#94A3B8] leading-relaxed font-light">{t(story.desc)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="aspect-square rounded-[3rem] overflow-hidden relative border border-white/10"
              >
                <img 
                  src="/images/oman_landscape.png" 
                  alt="Success in Oman" 
                  className="object-cover w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050812] via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Research CTA */}
      <ResearchDataCTA />
    </div>
  );
}

