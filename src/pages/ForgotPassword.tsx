import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function ForgotPassword() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(`/${displayLang}/signin`)}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group z-20"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-widest">{t('forgot.back_to_login', 'Back to Sign In')}</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        {/* Branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-8 shadow-xl shadow-blue-500/10">
            {isSubmitted ? <CheckCircle2 className="w-10 h-10 text-blue-400" /> : <ShieldCheck className="w-10 h-10 text-blue-400" />}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {isSubmitted ? t('forgot.success_title', 'Check your email') : t('forgot.title', 'Forgot Password?')}
          </h1>
          <p className="text-slate-400 text-lg font-light max-w-sm mx-auto">
            {isSubmitted
              ? t('forgot.success_message',"We've sent a password reset link to your email address.")
              : t('forgot.subtitle', 'Enter your email to receive a password reset link')}
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8 md:p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
          {!isSubmitted ? (
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">{t('forgot.label_email', 'Email Address')}</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="block w-full pl-14 pr-6 py-5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all font-light"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 active:scale-[0.98]"
              >
                {t('forgot.btn_send', 'Send Reset Link')}
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <button
                onClick={() => navigate(`/${displayLang}/signin`)}
                className="text-blue-400 font-bold hover:text-white transition-colors uppercase tracking-[0.2em] text-xs"
              >
                {t('forgot.back_to_login', 'Back to Sign In')}
              </button>
            </div>
          )}
        </div>

        {/* Brand Footer */}
        <div className="mt-12 text-center opacity-20">
          <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-white">SHOMOUKH INTERNATIONAL INVESTMENT</span>
        </div>
      </motion.div>
    </div>
  );
}
