import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function SignIn() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const displayLang = lang || 'en';
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#050812] text-slate-300 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -ml-48 -mb-48 pointer-events-none" />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate(`/${displayLang}`)}
        className="absolute top-8 left-8 flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group z-20"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-widest">{t('signin.back_to_home', 'Back to Home')}</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg relative z-10"
      >
        {/* Branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 mb-8 shadow-xl shadow-blue-500/10">
            <Terminal className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {isLogin ? (t('signin.title', 'Welcome Back')) : (t('signin.signup_title', 'Join Us'))}
          </h1>
          <p className="text-slate-400 text-lg font-light max-w-sm mx-auto">
            {isLogin
              ? (t('signin.subtitle', 'Access your investment portal'))
              : (t('signin.signup_subtitle', 'Start your investment journey in Oman'))}
          </p>
        </div>

        {/* Form Container */}
        <div className="p-8 md:p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">{t('signin.label_name', 'Full Name')}</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="block w-full pl-14 pr-6 py-5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all font-light"
                  />
                </div>
              </div>
            )}

            <div className="space-y-3">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">{t('signin.label_email', 'Email Address')}</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="block w-full pl-14 pr-6 py-5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all font-light"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{t('signin.label_password', 'Password')}</label>
                {isLogin && (
                  <Link
                    to={`/${displayLang}/forgot-password`}
                    className="text-[10px] font-bold text-blue-400 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    {t('signin.forgot_password', 'Forgot password?')}
                  </Link>
                )}
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="block w-full pl-14 pr-6 py-5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all font-light"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 active:scale-[0.98]"
            >
              {isLogin ? (t('signin.btn_login', 'Sign In')) : (t('signin.btn_signup', 'Create Account'))}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center mt-10">
             <p className="text-sm text-slate-500">
               {isLogin ? (
                 <>
                   {t('signin.no_account',"Don't have an account?")}{' '}
                   <button
                     onClick={() => setIsLogin(false)}
                     className="text-blue-400 font-bold hover:text-white transition-colors"
                   >
                     {t('signin.signup_link', 'Sign up for free')}
                   </button>
                 </>
               ) : (
                 <>
                   {t('signin.have_account', 'Already have an account?')}{' '}
                   <button
                     onClick={() => setIsLogin(true)}
                     className="text-blue-400 font-bold hover:text-white transition-colors"
                   >
                     {t('signin.login_link', 'Sign in here')}
                   </button>
                 </>
               )}
             </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
