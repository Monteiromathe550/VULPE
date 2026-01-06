import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function CTA() {
    return (
        <section className="bg-[#FAFAFA] pt-32 lg:pt-56 pb-40 lg:pb-56 border-t border-black/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center relative">
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
                        className="relative inline-block z-20"
                    >
                        <a
                            href="https://wa.me/5565981274128"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-foreground text-background rounded-full font-black uppercase tracking-[0.2em] hover:bg-primary transition-all text-[10px] md:text-xs group px-8 py-4 relative overflow-hidden shadow-2xl shadow-black/10 hover:shadow-primary/30 cursor-pointer pointer-events-auto z-20"
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
            </div>
        </section>
    );
}
