import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronRight, Shield, Eye, Lock, Database, Globe2, Bell, UserCheck } from 'lucide-react';

const sections = [
  {
    id: 'overview',
    icon: Eye,
    title: 'Privacy Overview',
    content: [
      'Shomoukh International Investment LLC ("Shomoukh," "we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, investment portal, and related digital services (collectively, "Services").',
      'We believe privacy is a fundamental right. We design our data practices to be transparent, to give you meaningful choices, and to use your information only in ways that serve a clear, legitimate purpose. Please read this policy carefully — if you disagree with its terms, please discontinue use of our Services.',
    ],
  },
  {
    id: 'data-we-collect',
    icon: Database,
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly to us when you: register for an investor account, submit a contact or inquiry form, subscribe to our newsletter, request research reports or investment documents, or communicate with our team by any means.',
      'Information collected directly includes: full name, email address, phone number, company name and role, country of residence or incorporation, investment interests and portfolio preferences, and any other information you choose to share with us.',
      'We also automatically collect certain technical data when you access our Services, including: IP address, browser type and version, operating system, device identifiers, pages visited and time spent, referral URLs, and clickstream data. This data is collected through standard technologies such as cookies, web beacons, and server logs.',
      'Where permitted by law, we may receive information about you from third-party sources including business partners, data providers, publicly available databases, and government registries, which we combine with the information we hold about you to improve our Services and ensure compliance.',
    ],
  },
  {
    id: 'how-we-use',
    icon: UserCheck,
    title: 'How We Use Your Information',
    content: [
      'We use the information we collect to: provide, operate, and maintain our Services; process and fulfill your requests and transactions; communicate with you about investment opportunities, market updates, events, and platform changes; and send you newsletters and marketing communications where you have opted in.',
      'We also use your information to: personalize your experience and deliver content tailored to your investment interests; analyze usage patterns and improve our platform\'s functionality and user experience; ensure the security of our Services and prevent fraud or unauthorized access; comply with applicable legal obligations and regulatory requirements.',
      'We process your personal data on the following lawful bases: performance of a contract with you; compliance with our legal obligations; pursuit of our legitimate business interests (provided these do not override your rights); and your explicit consent where required.',
    ],
  },
  {
    id: 'data-sharing',
    icon: Globe2,
    title: 'Sharing & Disclosure',
    content: [
      'We do not sell, rent, or trade your personal information to third parties for their own marketing purposes. We may share your information with carefully selected partners and service providers who assist us in operating our Services, subject to strict confidentiality obligations.',
      'We may share your information with: technology service providers (hosting, cloud infrastructure, analytics); professional service firms (legal, accounting, compliance advisors); government authorities or regulators when required by applicable law; and strategic investment partners where you have expressly requested such introductions.',
      'In the event of a merger, acquisition, corporate restructuring, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email or prominent notice on our website before your information is subject to a different Privacy Policy.',
      'We may disclose your information when we believe in good faith that disclosure is necessary to: comply with applicable law or respond to valid legal process; protect the rights, property, or safety of Shomoukh, our users, or the public; prevent or investigate fraud, security breaches, or technical issues.',
    ],
  },
  {
    id: 'cookies',
    icon: Bell,
    title: 'Cookies & Tracking Technologies',
    content: [
      'We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies are small text files stored on your device that help us recognize you, remember your preferences, and understand how you interact with our Services.',
      'We use the following types of cookies: Essential cookies (required for core functionality); Analytics cookies (to understand usage patterns and improve our Services); Preference cookies (to remember your language, region, and display settings); and Marketing cookies (where you have consented, to deliver relevant content and measure campaign effectiveness).',
      'You can control cookies through your browser settings and, where applicable, through the cookie preference center on our platform. Please note that disabling certain cookies may affect the functionality of our Services. For more information about cookies and how to manage them, visit www.allaboutcookies.org.',
    ],
  },
  {
    id: 'data-retention',
    icon: Lock,
    title: 'Data Retention & Security',
    content: [
      'We retain your personal information for as long as necessary to fulfill the purposes described in this Policy, comply with our legal obligations, resolve disputes, and enforce our agreements. When determining retention periods, we consider the nature and sensitivity of the data, the potential risk of unauthorized use, and the purposes for which we process the data.',
      'We implement industry-standard technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include: SSL/TLS encryption for data in transit; encryption of sensitive data at rest; access controls and multi-factor authentication; regular security assessments and penetration testing; and employee training on data protection practices.',
      'No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security. We will notify you of any data breach that is likely to result in significant risk to your rights and freedoms, as required by applicable law.',
    ],
  },
  {
    id: 'your-rights',
    icon: Shield,
    title: 'Your Privacy Rights',
    content: [
      'Depending on your location, you may have certain rights with respect to your personal information. These may include: the right to access and receive a copy of your personal data; the right to correct inaccurate or incomplete data; the right to request deletion of your personal data; the right to restrict or object to certain processing; and the right to data portability.',
      'To exercise any of these rights, please contact our Data Protection Officer at privacy@shomoukh.om. We will respond to all legitimate requests within 30 days, or longer if the request is complex or numerous.',
      'You have the right to withdraw your consent at any time where we rely on consent as the legal basis for processing. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal. If you have concerns about our data practices, you have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.',
    ],
  },
  {
    id: 'international-transfers',
    title: 'International Data Transfers',
    icon: Globe2,
    content: [
      'Shomoukh International Investment is headquartered in the Sultanate of Oman. If you are accessing our Services from outside Oman, your information may be transferred to, stored, and processed in Oman, where data protection laws may differ from those in your country.',
      'Whenever we transfer personal data outside of a given jurisdiction, we ensure appropriate safeguards are in place, which may include standard contractual clauses, adequacy decisions, or other legally recognized transfer mechanisms. By using our Services, you consent to such transfers.',
    ],
  },
  {
    id: 'children',
    title: 'Children\'s Privacy',
    icon: Shield,
    content: [
      'Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information from our records promptly.',
      'If you believe a child has provided us with personal information, please contact us at privacy@shomoukh.om and we will take immediate action to investigate and remediate the situation.',
    ],
  },
  {
    id: 'changes',
    title: 'Policy Updates',
    icon: Bell,
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in our data practices, legal requirements, or business operations. We will notify you of material changes by posting the updated Policy on our website with a new "Last Updated" date, and where required, by sending notification to your registered email address.',
      'We encourage you to review this Policy periodically to stay informed about how we are protecting your information. Your continued use of our Services after any changes constitutes your acceptance of the updated Policy.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact & DPO',
    icon: UserCheck,
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Data Protection Officer:',
      'Data Protection Officer\nShomoukh International Investment LLC\nPO Box: 1756 | PC: 111\nAirport Heights, Muscat\nSultanate of Oman\n\nEmail: privacy@shomoukh.om\nPhone: +968 71770077\n\nWe are committed to addressing your concerns and will respond to all inquiries within 30 business days.',
    ],
  },
];

const highlights = [
  { icon: Lock, title: 'We Never Sell Your Data', desc: 'Your personal information is never sold or rented to third parties for marketing.' },
  { icon: Eye, title: 'Full Transparency', desc: 'We tell you exactly what data we collect and how we use it.' },
  { icon: UserCheck, title: 'Your Rights Matter', desc: 'You can access, correct, or delete your data at any time upon request.' },
  { icon: Shield, title: 'Security First', desc: 'Industry-standard encryption and access controls protect your information.' },
];

export default function PrivacyPolicy() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const displayLang = lang || 'en';
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const isRtl = displayLang === 'ar' || displayLang === 'fa';

  return (
    <div
      className="min-h-screen bg-transparent text-white font-sans"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Hero Banner */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1a2a5a]/20 blur-[100px] rounded-full" />
          <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-purple-500/5 blur-[80px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] text-slate-500 uppercase tracking-widest font-bold mb-8">
            <Link to={`/${displayLang}`} className="hover:text-slate-300 transition-colors">
              {t('common.siteTitle', 'Shomoukh')}
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-slate-400">{t('footer.privacyPolicy', 'Privacy Policy')}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 shrink-0 mt-1">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {t('footer.privacyPolicy', 'Privacy Policy')}
              </h1>
              <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                Your privacy matters to us. This policy explains how Shomoukh International Investment handles your personal information across all our services and platforms.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-[12px] text-slate-500 uppercase tracking-widest font-bold">
                <span>Last Updated: March 29, 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>Effective: March 29, 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="flex items-center gap-1.5 text-purple-400">
                  <Lock className="w-3.5 h-3.5" />
                  GDPR Aligned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Grid — like Apple's privacy page */}
      <div className="border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center mb-4 group-hover:border-purple-500/30 transition-colors">
                  <item.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-[13px] md:text-sm font-bold text-white mb-2 leading-snug">{item.title}</h3>
                <p className="text-[12px] md:text-[13px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          {/* Sticky Sidebar */}
          <aside className="lg:w-[260px] shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 mb-5 px-1">
                Table of Contents
              </p>
              <nav className="flex flex-col gap-0.5">
                {sections.map((section, idx) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13px] transition-all duration-200 cursor-pointer ${
                      activeSection === section.id
                        ? 'bg-purple-600/15 text-purple-300 border border-purple-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className={`w-5 h-5 text-[10px] font-bold rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      activeSection === section.id ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
                    }`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="leading-snug font-medium">{section.title}</span>
                  </a>
                ))}
              </nav>

              {/* Privacy Contact Card */}
              <div className="mt-8 p-5 rounded-2xl bg-purple-500/5 border border-purple-500/10 space-y-3">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Data Protection</p>
                <p className="text-[13px] text-slate-300 leading-relaxed">Questions about your privacy rights? Contact our DPO directly.</p>
                <a
                  href="mailto:privacy@shomoukh.om"
                  className="inline-flex items-center gap-2 text-[12px] font-bold text-purple-400 hover:text-purple-300 transition-colors mt-1"
                >
                  privacy@shomoukh.om
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <article className="flex-1 min-w-0">
            {/* Intro summary card */}
            <div className="mb-12 p-6 md:p-8 rounded-2xl bg-purple-600/8 border border-purple-500/15">
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                <strong className="text-white">Summary:</strong> We collect limited personal data to provide our investment services. We never sell your information. You have full rights to access, correct, and delete your data. We use industry-standard security to protect your information and only process it with a clear legal basis.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-14">
              {sections.map((section, idx) => {
                const Icon = section.icon;
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    onMouseEnter={() => setActiveSection(section.id)}
                    className="scroll-mt-32 group"
                  >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[11px] font-bold text-purple-500/70 uppercase tracking-widest tabular-nums">
                        {(idx + 1).toString().padStart(2, '0')}
                      </span>
                      <div className="h-px flex-1 bg-white/5 group-hover:bg-purple-500/20 transition-colors duration-500" />
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                        <Icon className="w-4 h-4 text-slate-400" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {section.content.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-[15px] text-slate-300 leading-[1.8] whitespace-pre-line"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">Document Version</p>
                <p className="text-sm text-slate-300">Version 2.1 — Effective March 29, 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to={`/${displayLang}/terms`}
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  {t('footer.termsOfService', 'Terms of Service')}
                </Link>
                <span className="text-white/10">|</span>
                <Link
                  to={`/${displayLang}/contact`}
                  className="text-[13px] font-bold text-slate-400 hover:text-purple-400 transition-colors"
                >
                  {t('footer.contact', 'Contact')}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
