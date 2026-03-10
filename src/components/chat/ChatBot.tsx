import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, MinusCircle, Maximize2, RefreshCw, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

const SUGGESTIONS = [
    { id: 'sectors', label: 'Key Sectors' },
    { id: 'vision', label: 'Oman Vision 2040' },
    { id: 'setup', label: 'Business Setup' },
    { id: 'contact', label: 'Contact Team' }
];

export const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState('');
    const { t, i18n } = useTranslation();
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: t('chatbot.initial', 'Hello! I am your Shomoukh International Investment assistant. How can I help you today regarding investments in Oman?')
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
        if (scrollAreaRef.current) {
            const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollContainer) {
                scrollContainer.scrollTo({
                    top: scrollContainer.scrollHeight,
                    behavior
                });
            }
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => scrollToBottom(), 100);
        return () => clearTimeout(timer);
    }, [messages, isOpen, isMinimized]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const isAtBottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 100;
        setShowScrollButton(!isAtBottom);
    };

    const handleSend = async (text: string = input) => {
        const messageText = text.trim();
        if (!messageText || isLoading) return;

        const userMessage: Message = { role: 'user', content: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const systemPrompt = `You are a helpful AI assistant for "Shomoukh International Investment", a leading investment firm in Oman. 
      Your goal is to assist potential investors by providing information about investment opportunities in Oman, aligning with "Oman Vision 2040".
      You should be professional, welcoming, and knowledgeable about Oman's key sectors (Logistics, Tourism, Manufacturing, Fisheries, Mining, Energy, etc.).
      If you don't know the answer to a specific question, suggest the user to contact the Shomoukh team directly through the contact page.
      Always respond in the language the user is using (currently the site language is ${i18n.language}).`;

            const response = await fetch(GROQ_API_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        ...messages,
                        userMessage
                    ],
                    temperature: 0.7,
                    max_tokens: 1024,
                }),
            });

            if (!response.ok) throw new Error('Failed to fetch response from Groq');

            const data = await response.json();
            const assistantMessage: Message = {
                role: 'assistant',
                content: data.choices[0].message.content
            };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error calling Groq API:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: t('chatbot.error', 'I apologize, but I am having trouble connecting to my brain right now. Please try again in a moment.')
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const resetChat = () => {
        setMessages([
            {
                role: 'assistant',
                content: t('chatbot.initial', 'Hello! I am your Shomoukh International Investment assistant. How can I help you today regarding investments in Oman?')
            }
        ]);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            height: isMinimized ? '64px' : 'min(620px, calc(100vh - 120px))',
                            width: isMinimized ? '280px' : 'min(420px, calc(100vw - 32px))'
                        }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="mb-4 overflow-hidden origin-bottom-right"
                    >
                        <Card className="flex flex-col h-full shadow-2xl border-white/20 bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden ring-1 ring-black/5">
                            {/* Header - website aesthetic */}
                            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[var(--theme-accent)] via-[#6A6AAE] to-[#7FA8C5] text-white shrink-0 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="h-10 w-10 rounded-full border-2 border-white/30 overflow-hidden shadow-inner bg-white/10 flex items-center justify-center backdrop-blur-md">
                                            <img src="/oman-logo-white.png" alt="Oman" className="h-7 w-7 object-contain drop-shadow-sm" />
                                        </div>
                                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#00B8A9] border-2 border-[var(--theme-accent)] shadow-sm" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold tracking-tight text-white leading-tight">
                                            {t('chatbot.title', 'Shomoukh AI')}
                                        </h3>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span className="flex h-1.5 w-1.5 rounded-full bg-[#00B8A9] animate-pulse" />
                                            <span className="text-[10px] text-white/80 font-medium uppercase tracking-wider">
                                                {t('chatbot.online', 'Online Now')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-white hover:bg-white/10 rounded-full"
                                        onClick={resetChat}
                                        title="Reset Conversation"
                                    >
                                        <RefreshCw className="h-3.5 w-3.5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-white hover:bg-white/10 rounded-full"
                                        onClick={() => setIsMinimized(!isMinimized)}
                                    >
                                        {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <MinusCircle className="h-3.5 w-3.5" />}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-white hover:bg-white/10 rounded-full"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {!isMinimized && (
                                <>
                                    {/* Chat Area with better scroll */}
                                    <div className="flex-1 overflow-hidden relative bg-[#F8F9FA]/50">
                                        <ScrollArea
                                            ref={scrollAreaRef}
                                            className="h-full w-full custom-scrollbar"
                                            onScrollCapture={handleScroll}
                                        >
                                            <div className="p-4 space-y-6 pb-20">
                                                {messages.map((m, idx) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                                                        key={idx}
                                                        className={cn(
                                                            "flex gap-3 max-w-[90%] group",
                                                            m.role === 'user' ? "ml-auto flex-row-reverse" : ""
                                                        )}
                                                    >
                                                        <Avatar className={cn(
                                                            "h-8 w-8 shrink-0 shadow-sm ring-1 ring-black/5",
                                                            m.role === 'user'
                                                                ? "bg-white"
                                                                : "bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)]"
                                                        )}>
                                                            {m.role === 'user' ? (
                                                                <User className="h-4 w-4 text-[var(--theme-accent)]" />
                                                            ) : (
                                                                <Bot className="h-4 w-4 text-white" />
                                                            )}
                                                        </Avatar>
                                                        <div
                                                            className={cn(
                                                                "relative px-4 py-3 rounded-2xl text-[13px] leading-relaxed shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]",
                                                                m.role === 'user'
                                                                    ? "bg-[var(--theme-accent)] text-white rounded-tr-none"
                                                                    : "bg-white text-[#222222] border border-slate-200/50 rounded-tl-none"
                                                            )}
                                                        >
                                                            {m.content}
                                                        </div>
                                                    </motion.div>
                                                ))}

                                                {isLoading && (
                                                    <div className="flex gap-3 max-w-[85%]">
                                                        <Avatar className="h-8 w-8 bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)] animate-pulse">
                                                            <Bot className="h-4 w-4 text-white" />
                                                        </Avatar>
                                                        <div className="bg-white border border-slate-200/50 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-3">
                                                            <div className="flex gap-1">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]/40 animate-bounce [animation-delay:-0.3s]" />
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]/40 animate-bounce [animation-delay:-0.15s]" />
                                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent)]/40 animate-bounce" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Suggestions when empty/at end */}
                                                {!isLoading && messages.length < 5 && (
                                                    <div className="flex flex-wrap gap-2 pt-2">
                                                        {SUGGESTIONS.map((s) => (
                                                            <Button
                                                                key={s.id}
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => handleSend(s.label)}
                                                                className="text-[11px] h-8 rounded-full border-[var(--theme-accent)]/20 text-[var(--theme-accent)] hover:bg-[var(--theme-accent)] hover:text-white transition-all shadow-sm"
                                                            >
                                                                {s.label}
                                                            </Button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </ScrollArea>

                                        {/* Scroll to bottom button */}
                                        <AnimatePresence>
                                            {showScrollButton && (
                                                <motion.button
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    onClick={() => scrollToBottom()}
                                                    className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-[var(--theme-accent)] z-20 hover:bg-slate-50"
                                                >
                                                    <ChevronDown className="h-4 w-4" />
                                                </motion.button>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Input Area */}
                                    <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-slate-100 shrink-0">
                                        <div className="flex items-center gap-2 bg-slate-100/80 rounded-xl p-1.5 transition-all focus-within:ring-2 focus-within:ring-[var(--theme-accent)]/20 border border-transparent focus-within:border-[var(--theme-accent)]/20">
                                            <Input
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                                onKeyDown={handleKeyPress}
                                                placeholder={t('chatbot.placeholder', 'Ask about Oman...')}
                                                className="bg-transparent border-none focus-visible:ring-0 shadow-none h-10 text-[13px] placeholder:text-slate-400"
                                                disabled={isLoading}
                                            />
                                            <Button
                                                size="icon"
                                                className={cn(
                                                    "h-9 w-9 rounded-lg transition-all shrink-0",
                                                    input.trim()
                                                        ? "bg-[var(--theme-accent)] hover:bg-[#3D2E6D] text-white shadow-md"
                                                        : "bg-slate-200 text-slate-400 cursor-not-allowed"
                                                )}
                                                onClick={() => handleSend()}
                                                disabled={isLoading || !input.trim()}
                                            >
                                                <Send className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                        <div className="flex justify-between items-center mt-2 px-1">
                                            <span className="text-[9px] text-slate-400 font-medium">Shomoukh International Investment</span>
                                            <span className="text-[9px] text-slate-400 uppercase tracking-tighter opacity-50">v1.2</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 relative",
                    isOpen
                        ? "bg-white text-[var(--theme-accent)] rotate-90"
                        : "bg-gradient-to-br from-[var(--theme-accent)] to-[var(--theme-primary)] text-white"
                )}
            >
                {isOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00B8A9] text-[10px] font-bold text-white ring-4 ring-white shadow-lg animate-bounce [animation-duration:2s]">
                        1
                    </span>
                )}
            </motion.button>
        </div>
    );
};
