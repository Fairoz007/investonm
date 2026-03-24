import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, MinusCircle, Maximize2, RefreshCw, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
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
 const systemPrompt = `You are a helpful AI assistant for"Shomoukh International Investment", a leading investment firm in Oman. 
 Your goal is to assist potential investors by providing information about investment opportunities in Oman, aligning with"Oman Vision 2040".
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
 transition={{ type:"spring", damping: 25, stiffness: 200 }}
 className="mb-4 overflow-hidden origin-bottom-right"
>
 <Card className="flex flex-col h-full border-white/10 bg-[#020617] rounded-3xl overflow-hidden ring-1 ring-white/10">
 {/* Header - website aesthetic */}
 <div className="flex items-center justify-between p-5  text-white shrink-0 relative z-10 border-b border-white/10">
 <div className="flex items-center gap-3">
 <div className="relative">
 <div className="h-11 w-11 rounded-2xl border border-white/20 overflow-hidden bg-white/5 flex items-center justify-center p-2">
 <img src="/images/Logo-01.png" alt="Shomoukh" className="h-full w-full object-contain filter brightness-0 invert opacity-90" />
 </div>
 <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-[#020617] shadow-lg" />
 </div>
 <div className="flex flex-col">
 <h3 className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] text-white leading-tight uppercase font-sans">
 Shomoukh International Investment
 </h3>
 <div className="flex items-center gap-2 mt-1">
 <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
 <span className="text-[9px] text-white/50 font-bold uppercase tracking-[0.15em] font-sans">
 {t('chatbot.online', 'Online Assistant')}
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
 <div className="flex-1 overflow-hidden relative bg-[#020617]/50">
 <div className="absolute inset-0 pointer-events-none" />
 <ScrollArea
 ref={scrollAreaRef}
 className="h-full w-full custom-scrollbar relative z-10"
 onScrollCapture={handleScroll}
>
 <div className="p-5 space-y-8 pb-24">
 {messages.map((m, idx) => (
 <motion.div
 initial={{ opacity: 0, y: 15 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4, delay: idx * 0.05, ease:"easeOut" }}
 key={idx}
 className={cn(
"flex gap-4 max-w-[90%] group",
 m.role === 'user' ?"ml-auto flex-row-reverse" :""
 )}
>
 <div className={cn(
"h-9 w-9 shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-white/10",
 m.role === 'user'
 ?"bg-white/10"
 :" ]"
 )}>
 {m.role === 'user' ? (
 <User className="h-5 w-5 text-white/70" />
 ) : (
 <img src="/images/Logo-01.png" alt="S" className="h-5 w-5 object-contain filter brightness-0 invert" />
 )}
 </div>
 <div
 className={cn(
"relative px-5 py-4 rounded-[2rem] text-[14px] leading-relaxed font-sans",
 m.role === 'user'
 ?"bg-[#2563EB] text-white rounded-tr-none hover:bg-[#1D4ED8] transition-colors"
 :"bg-white/5 text-white/90 border border-white/10 rounded-tl-none"
 )}
>
 {m.content}
 </div>
 </motion.div>
 ))}

 {isLoading && (
 <div className="flex gap-4 max-w-[85%]">
 <div className="h-9 w-9  animate-pulse rounded-2xl border border-white/10 flex items-center justify-center">
 <img src="/images/Logo-01.png" alt="S" className="h-5 w-5 object-contain filter brightness-0 invert" />
 </div>
 <div className="bg-white/5 border border-white/10 px-5 py-4 rounded-[2rem] rounded-tl-none flex items-center gap-3">
 <div className="flex gap-1.5">
 <span className="w-2 h-2 rounded-full bg-[#2563EB]/60 animate-bounce [animation-delay:-0.3s]" />
 <span className="w-2 h-2 rounded-full bg-[#2563EB]/60 animate-bounce [animation-delay:-0.15s]" />
 <span className="w-2 h-2 rounded-full bg-[#2563EB]/60 animate-bounce" />
 </div>
 </div>
 </div>
 )}

 {/* Suggestions when empty/at end */}
 {!isLoading && messages.length < 5 && (
 <div className="flex flex-wrap gap-3 pt-4">
 {SUGGESTIONS.map((s) => (
 <Button
 key={s.id}
 variant="outline"
 size="sm"
 onClick={() => handleSend(s.label)}
 className="text-[12px] font-bold h-9 px-5 rounded-full border-white/10 bg-white/5 text-white/70 hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all uppercase tracking-wider"
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
 className="absolute bottom-4 right-4 h-8 w-8 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-[var(--accent)] z-20 hover:bg-slate-50"
>
 <ChevronDown className="h-4 w-4" />
 </motion.button>
 )}
 </AnimatePresence>
 </div>

 {/* Input Area */}
 <div className="p-5 bg-[#020617] border-t border-white/10 shrink-0">
 <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-2 transition-all focus-within:ring-2 focus-within:ring-[#2563EB]/30 border border-white/10 focus-within:border-[#2563EB]/50">
 <Input
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={handleKeyPress}
 placeholder={t('chatbot.placeholder', 'Ask about Oman...')}
 className="bg-transparent border-none focus-visible:ring-0 shadow-none h-11 text-[14px] placeholder:text-white/30 text-white font-sans"
 disabled={isLoading}
 />
 <Button
 size="icon"
 className={cn(
"h-10 w-10 rounded-xl transition-all shrink-0",
 input.trim()
 ?"bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
 :"bg-white/5 text-white/20 cursor-not-allowed"
 )}
 onClick={() => handleSend()}
 disabled={isLoading || !input.trim()}
>
 <Send className="h-4 w-4" />
 </Button>
 </div>
 <div className="flex justify-between items-center mt-3 px-1">
 <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest font-sans">Shomoukh Intelligence</span>
 <div className="flex h-1.5 w-1.5 rounded-full bg-green-500/50" />
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
"h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-500 relative",
 isOpen
 ?"bg-white text-[var(--accent)] rotate-90"
 :" (--accent)] (--primary)] text-white"
 )}
>
 {isOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />}
 {!isOpen && (
 <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white ring-4 ring-white shadow-lg animate-bounce [animation-duration:2s]">
 1
 </span>
 )}
 </motion.button>
 </div>
 );
};
