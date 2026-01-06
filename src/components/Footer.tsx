import React from 'react';
import { Apple, Instagram, Facebook, Send, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';

export function Footer() {
    return (
        <footer className="bg-[#FAFAFA] text-foreground pt-24 pb-12 lg:pt-32 lg:pb-16 border-t border-black/5 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Massive Reference Style CTA */}
                <div className="text-center relative mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 lg:mb-12 shadow-sm"
                    >
                        Atendimento Personalizado
                    </motion.div>

                    <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[110px] font-black leading-[1.1] lg:leading-[0.8] mb-10 lg:mb-16 tracking-tight lg:tracking-tightest uppercase relative z-10">
                        <motion.span
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="block"
                        >
                            FICOU COM
                        </motion.span>
                        <motion.span
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="block text-primary italic relative"
                        >
                            DÚVIDA? ME CHAMA.
                            <motion.div
                                className="absolute -right-6 md:-right-12 top-0 text-primary/30 text-[0.3em] font-normal"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            >
                                ✦
                            </motion.div>
                        </motion.span>
                    </h2>

                    <p className="max-w-xl mx-auto text-muted-foreground text-sm md:text-xl md:leading-relaxed mb-12 font-medium px-4 opacity-80 uppercase tracking-widest leading-loose md:normal-case md:tracking-normal">
                        Tô aqui pra resolver. Pode perguntar qualquer coisa antes de decidir. Nossa equipe está pronta para te guiar na melhor escolha.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative inline-block"
                    >
                        <a
                            href="https://wa.me/5565981274128"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-foreground text-background rounded-full font-black uppercase tracking-[0.2em] hover:bg-primary transition-all text-[10px] md:text-xs group px-8 py-4 relative overflow-hidden shadow-2xl shadow-black/10 hover:shadow-primary/30"
                        >
                            <span className="relative z-10">
                                Falar com o Especialista Vulp
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 -mr-2 scale-90 group-hover:scale-100 relative z-10">
                                <Send className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </a>
                    </motion.div>
                </div>

                {/* Minimal Centered Footer Content */}
                <div className="flex flex-col items-center text-center pb-12 lg:pb-16 border-b border-black/5">
                    {/* 1. Centered Logo */}
                    <div className="mb-12">
                        <img
                            src={logoDark}
                            alt="Logo"
                            className="h-10 lg:h-12 w-auto object-contain opacity-90"
                        />
                    </div>

                    {/* 2. Horizontal Navigation - Stacked on Mobile */}
                    <nav className="mb-12 w-full md:w-auto">
                        <ul className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                            {['Vitrine', 'Como Funciona', 'Segurança', 'Rastreio', 'Contato'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
                                    >
                                        {item}
                                        <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* 3. Social Icons */}
                    <div className="flex items-center gap-8">
                        <a href="https://instagram.com" className="text-foreground/40 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                            <Instagram className="w-5 h-5" strokeWidth={1.5} />
                        </a>
                        <a href="https://facebook.com" className="text-foreground/40 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                            <Facebook className="w-5 h-5" strokeWidth={1.5} />
                        </a>
                        <a href="mailto:vendas@vulp.com.br" className="text-foreground/40 hover:text-primary transition-colors duration-300 transform hover:scale-110">
                            <Mail className="w-5 h-5" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground/50 text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-left">
                    <p>© 2026 VULP. EXCELÊNCIA EM APPLE. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        <a href="#" className="hover:text-primary transition-colors relative group text-[10px]">
                            Termos
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors relative group text-[10px]">
                            Privacidade
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                        </a>
                        <a href="#" className="hover:text-primary transition-colors relative group text-[10px]">
                            Cookies
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}