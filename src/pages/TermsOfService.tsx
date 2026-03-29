import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ChevronRight, Shield, FileText } from 'lucide-react';

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using the Shomoukh International Investment website, platforms, or any associated services (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). Please read them carefully before using our Services.',
      'These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Shomoukh International Investment LLC ("Shomoukh," "we," "us," or "our"), a company incorporated under the laws of the Sultanate of Oman.',
      'If you do not agree to these Terms, you must discontinue use of our Services immediately. Your continued use of our Services following any update to these Terms constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    id: 'services',
    title: 'Description of Services',
    content: [
      'Shomoukh International Investment provides a digital platform offering investment intelligence, market research, sector analysis, and strategic advisory services focused on the Sultanate of Oman and international markets.',
      'Our Services include, but are not limited to: investment portal access, market dashboards, research reports, event information, regulatory guidance, and direct investor communications.',
      'We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice. We shall not be liable to you or any third party for any such modification, suspension, or discontinuation.',
    ],
  },
  {
    id: 'eligibility',
    title: 'Eligibility & User Accounts',
    content: [
      'Our Services are available to individuals who are at least 18 years of age and have the legal capacity to enter into binding contracts. By using our Services, you represent and warrant that you meet these eligibility requirements.',
      'If you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.',
      'We reserve the right to terminate accounts, refuse service, or remove content at our sole discretion, particularly in cases of suspected violation of these Terms or applicable law.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: [
      'All content available through our Services, including but not limited to text, graphics, logos, images, data compilations, software, and audiovisual material, is the proprietary property of Shomoukh International Investment or its content suppliers and is protected by applicable intellectual property laws.',
      'You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our Services for your personal or internal business purposes only. This license does not include the right to resell, reproduce, distribute, publicly display, or create derivative works of our content.',
      'All trademarks, service marks, and trade names displayed through the Services are the proprietary marks of Shomoukh International Investment or their respective owners. Nothing in these Terms grants you any right to use our brand identity without express written permission.',
    ],
  },
  {
    id: 'investment-disclaimer',
    title: 'Investment Information Disclaimer',
    content: [
      'The information and materials provided through our Services are for informational and educational purposes only and do not constitute financial advice, investment advice, trading advice, or any other form of professional advice. You should not treat any of our content as such.',
      'Shomoukh International Investment does not guarantee the accuracy, completeness, timeliness, or suitability of any information provided. Investment decisions should be made only after consulting with qualified financial and legal professionals who are familiar with your specific circumstances.',
      'Past performance of any investment is not indicative of future results. All investments involve risk, including the potential loss of principal. We make no representations or warranties that the use of our Services will result in profits or that our analysis will be error-free.',
    ],
  },
  {
    id: 'prohibited-use',
    title: 'Prohibited Activities',
    content: [
      'You agree not to use our Services in any manner that: (a) violates any applicable local, national, or international law or regulation; (b) infringes upon the intellectual property rights of Shomoukh or any third party; (c) transmits unsolicited or unauthorized advertising or promotional material.',
      'You are expressly prohibited from: reverse engineering or decompiling any software component of our Services; using automated systems or bots to access our Services in ways that exceed normal human usage; attempting to gain unauthorized access to any portion of our Services or related systems.',
      'You may not use our Services to transmit harmful, offensive, defamatory, or otherwise objectionable content. We reserve the right to investigate and take appropriate legal action against anyone who violates these prohibitions.',
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    content: [
      'Your use of our Services is also governed by our Privacy Policy, incorporated herein by reference. We encourage you to review our Privacy Policy to understand our practices regarding the collection, use, and sharing of your personal information.',
      'By using our Services, you consent to the collection, processing, and storage of your data as described in our Privacy Policy. If you are located outside the Sultanate of Oman, you acknowledge that your data may be transferred to and processed in Oman, where data protection laws may differ from those in your jurisdiction.',
    ],
  },
  {
    id: 'limitation',
    title: 'Limitation of Liability',
    content: [
      'To the maximum extent permitted by applicable law, Shomoukh International Investment shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business, or goodwill, arising out of or in connection with your use of our Services.',
      'Our total aggregate liability to you for any claims arising from or related to these Terms or your use of our Services shall not exceed the greater of: (a) the amount you paid us in the twelve months preceding the claim, or (b) one hundred United States Dollars (USD $100).',
      'Some jurisdictions do not allow the exclusion or limitation of certain damages, so the above limitations may not apply to you. In such cases, our liability shall be limited to the fullest extent permitted by applicable law.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Dispute Resolution',
    content: [
      'These Terms shall be governed by and construed in accordance with the laws of the Sultanate of Oman, without regard to its conflict of law provisions.',
      'Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the competent courts of the Sultanate of Oman, Muscat Governorate.',
      'We encourage users to contact us directly to resolve any concerns before initiating formal proceedings. We are committed to working in good faith to address any issues that may arise.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to Terms',
    content: [
      'We reserve the right to modify these Terms at any time at our sole discretion. We will provide notice of material changes by updating the "Last Updated" date at the top of this document and, where appropriate, by sending a notification to your registered email address.',
      'Your continued use of our Services after the effective date of any revised Terms constitutes your acceptance of the changes. If you do not agree to the revised Terms, you must stop using our Services.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Information',
    content: [
      'If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:',
      'Shomoukh International Investment LLC\nPO Box: 1756 | PC: 111\nAirport Heights, Muscat\nSultanate of Oman\n\nEmail: legal@shomoukh.om\nPhone: +968 71770077',
    ],
  },
];

export default function TermsOfService() {
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1a3a6a]/20 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] text-slate-500 uppercase tracking-widest font-bold mb-8">
            <Link to={`/${displayLang}`} className="hover:text-slate-300 transition-colors">
              {t('common.siteTitle', 'Shomoukh')}
            </Link>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <span className="text-slate-400">{t('footer.termsOfService', 'Terms of Service')}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 shrink-0 mt-1">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {t('footer.termsOfService', 'Terms of Service')}
              </h1>
              <p className="mt-4 text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                Please read these terms carefully before using Shomoukh International Investment's services and platforms.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-[12px] text-slate-500 uppercase tracking-widest font-bold">
                <span>Last Updated: March 29, 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>Effective: March 29, 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Shield className="w-3.5 h-3.5" />
                  Governed by Omani Law
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          {/* Sticky Sidebar Table of Contents */}
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
                        ? 'bg-blue-600/15 text-blue-300 border border-blue-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className={`w-5 h-5 text-[10px] font-bold rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      activeSection === section.id ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
                    }`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="leading-snug font-medium">{section.title}</span>
                  </a>
                ))}
              </nav>

              {/* Contact Support Card */}
              <div className="mt-8 p-5 rounded-2xl bg-white/[0.03] border border-white/8 space-y-3">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Need Clarification?</p>
                <p className="text-[13px] text-slate-300 leading-relaxed">Contact our legal team for any questions about these terms.</p>
                <Link
                  to={`/${displayLang}/contact`}
                  className="inline-flex items-center gap-2 text-[12px] font-bold text-blue-400 hover:text-blue-300 transition-colors mt-1"
                >
                  {t('contact.form.title', 'Contact Us')}
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <article className="flex-1 min-w-0">
            {/* Intro box — like Apple/Google summary card */}
            <div className="mb-12 p-6 md:p-8 rounded-2xl bg-blue-600/8 border border-blue-500/15">
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                <strong className="text-white">Summary:</strong> These Terms govern your use of Shomoukh International Investment's digital platforms and services. They cover your rights and responsibilities, investment disclaimers, intellectual property protections, and how disputes are resolved. By accessing our Services, you agree to these terms in full.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-14">
              {sections.map((section, idx) => (
                <section
                  key={section.id}
                  id={section.id}
                  onMouseEnter={() => setActiveSection(section.id)}
                  className="scroll-mt-32 group"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[11px] font-bold text-blue-500/70 uppercase tracking-widest tabular-nums">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-white/5 group-hover:bg-blue-500/20 transition-colors duration-500" />
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white mb-5 leading-tight">
                    {section.title}
                  </h2>

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
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">Document Version</p>
                <p className="text-sm text-slate-300">Version 2.1 — Effective March 29, 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  to={`/${displayLang}/privacy`}
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  {t('footer.privacyPolicy', 'Privacy Policy')}
                </Link>
                <span className="text-white/10">|</span>
                <Link
                  to={`/${displayLang}/contact`}
                  className="text-[13px] font-bold text-slate-400 hover:text-blue-400 transition-colors"
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
