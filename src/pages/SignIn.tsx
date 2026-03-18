import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User, Apple, Chrome } from 'lucide-react';
import { useState } from 'react';

export default function SignIn() {
    const { t } = useTranslation();
    const { lang } = useParams();
    const displayLang = lang || 'en';
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-[0.05] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px] opacity-[0.05] -ml-64 -mb-64 pointer-events-none" />

            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(`/${displayLang}`)}
                className="absolute top-8 left-8 flex items-center gap-2 text-secondary hover:text-primary transition-colors group z-20"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">{t('signin.back_to_home', 'Back to Home')}</span>
            </motion.button>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md relative z-10"
            >
                {/* Logo/Brand */}
                <motion.div variants={itemVariants} className="text-center mb-10">
                    <div className="inline-block mb-4 p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg shadow-primary/20">
                        <Landmark className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2 text-foreground">
                        {isLogin ? (t('signin.title', 'Welcome Back')) : (t('signin.signup_title', 'Join Us'))}
                    </h1>
                    <p className="text-muted-foreground">
                        {isLogin
                            ? (t('signin.subtitle', 'Access your investment portal'))
                            : (t('signin.signup_subtitle', 'Start your investment journey in Oman'))}
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white border border-border rounded-[2.5rem] p-8 md:p-10 shadow-xl"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground ml-1">{t('signin.label_name', 'Full Name')}</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="block w-full pl-11 pr-4 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground ml-1">{t('signin.label_email', 'Email Address')}</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="name@company.com"
                                    className="block w-full pl-11 pr-4 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-medium text-muted-foreground">{t('signin.label_password', 'Password')}</label>
                                {isLogin && (
                                    <Link
                                        to={`/${displayLang}/forgot-password`}
                                        className="text-xs text-primary hover:underline transition-all"
                                    >
                                        {t('signin.forgot_password', 'Forgot password?')}
                                    </Link>
                                )}
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="block w-full pl-11 pr-4 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold font-sans rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                        >
                            {isLogin ? (t('signin.btn_login', 'Sign In')) : (t('signin.btn_signup', 'Create Account'))}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-4 text-secondary font-medium tracking-widest">{t('signin.or_continue', 'Or continue with')}</span>
                        </div>
                    </div>

                    {/* Social Logins */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 py-3 bg-background border border-border rounded-2xl hover:bg-border/50 transition-all font-sans group">
                            <Chrome className="w-5 h-5 text-secondary group-hover:text-foreground transition-colors" />
                            <span className="text-sm font-medium">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-3 py-3 bg-background border border-border rounded-2xl hover:bg-border/50 transition-all font-sans group">
                            <Apple className="w-5 h-5 text-secondary group-hover:text-foreground transition-colors" />
                            <span className="text-sm font-medium">Apple</span>
                        </button>
                    </div>
                </motion.div>

                {/* Footer Link */}
                <motion.p variants={itemVariants} className="text-center mt-8 text-secondary">
                    {isLogin ? (
                        <>
                            {t('signin.no_account', "Don't have an account?")}{' '}
                            <button
                                onClick={() => setIsLogin(false)}
                                className="text-primary font-semibold hover:underline transition-all"
                            >
                                {t('signin.signup_link', 'Sign up for free')}
                            </button>
                        </>
                    ) : (
                        <>
                            {t('signin.have_account', 'Already have an account?')}{' '}
                            <button
                                onClick={() => setIsLogin(true)}
                                className="text-primary font-semibold hover:underline transition-all"
                            >
                                {t('signin.login_link', 'Sign in here')}
                            </button>
                        </>
                    )}
                </motion.p>
            </motion.div>
        </div>
    );
}

// Icon component needed locally or imported
function Landmark({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <line x1="3" y1="22" x2="21" y2="22"></line>
            <line x1="6" y1="18" x2="6" y2="11"></line>
            <line x1="10" y1="18" x2="10" y2="11"></line>
            <line x1="14" y1="18" x2="14" y2="11"></line>
            <line x1="18" y1="18" x2="18" y2="11"></line>
            <polygon points="12 2 20 7 4 7 12 2"></polygon>
        </svg>
    );
}
