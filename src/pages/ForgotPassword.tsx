import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ForgotPassword() {
    const { t } = useTranslation();
    const { lang } = useParams();
    const displayLang = lang || 'en';
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

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
        <div className="min-h-screen bg-[#F5F5F5] text-[#222222] flex items-center justify-center p-4 relative overflow-hidden font-sans">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8A6BCB] rounded-full blur-[150px] opacity-[0.03] -mr-64 -mt-64 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8A6BCB] rounded-full blur-[150px] opacity-[0.03] -ml-64 -mb-64 pointer-events-none" />

            {/* Back Button */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate(`/${displayLang}/signin`)}
                className="absolute top-8 left-8 flex items-center gap-2 text-[#666666] hover:text-[#8A6BCB] transition-colors group z-20"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium">{t('forgot.back_to_login', 'Back to Sign In')}</span>
            </motion.button>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-md relative z-10"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-10">
                    <div className="inline-block mb-4 p-4 rounded-2xl bg-gradient-to-br from-[#8A6BCB] to-[#7A5BC0] shadow-lg shadow-[#8A6BCB]/20">
                        <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2 text-[#222222]">
                        {isSubmitted ? t('forgot.success_title', 'Check your email') : t('forgot.title', 'Forgot Password?')}
                    </h1>
                    <p className="text-[#666666] px-4">
                        {isSubmitted
                            ? t('forgot.success_message', "We've sent a password reset link to your email address.")
                            : t('forgot.subtitle', 'Enter your email to receive a password reset link')}
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white border border-[#4F3C8C]/10 rounded-[2.5rem] p-8 md:p-10 shadow-xl overflow-hidden"
                >
                    {!isSubmitted ? (
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#666666] ml-1">{t('forgot.label_email', 'Email Address')}</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-[#666666]/60 group-focus-within:text-[#8A6BCB] transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        className="block w-full pl-11 pr-4 py-4 bg-[#F5F5F5] border border-[#4F3C8C]/10 rounded-2xl text-[#222222] placeholder:text-[#666666]/30 focus:outline-none focus:ring-2 focus:ring-[#8A6BCB]/20 focus:border-[#8A6BCB] transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[#8A6BCB] hover:bg-[#7A5BC0] text-white font-bold rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#8A6BCB]/20"
                            >
                                {t('forgot.btn_send', 'Send Reset Link')}
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center py-4"
                        >
                            <div className="w-20 h-20 bg-[#8A6BCB]/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-10 h-10 text-[#8A6BCB]" />
                            </div>
                            <button
                                onClick={() => navigate(`/${displayLang}/signin`)}
                                className="text-[#8A6BCB] font-semibold hover:underline transition-all"
                            >
                                {t('forgot.back_to_login', 'Back to Sign In')}
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Brand Footer */}
                <motion.div variants={itemVariants} className="mt-12 text-center opacity-40">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">SHOMOUKH INTERNATIONAL INVESTMENT</span>
                </motion.div>
            </motion.div>
        </div>
    );
}
