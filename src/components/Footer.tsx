import React from 'react';
import { Apple, Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import logoDark from '../assets/logo-dark.png';

export function Footer() {
    return (
        <footer className="bg-[#FAFAFA] text-foreground border-t border-black/5 font-medium">
            {/* Top Section: Links & Info */}
            <div className="container mx-auto px-6 py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column (Left) */}
                    <div className="lg:col-span-5 space-y-8">
                        <img
                            src={logoDark}
                            alt="Logo"
                            className="h-8 lg:h-10 w-auto object-contain opacity-90"
                        />
                        <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight leading-tight max-w-sm">
                            Elevando sua <br />
                            experiência Apple.
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm opacity-80">
                            Especialistas em ecossistema Apple com foco em transparência, segurança jurídica e atendimento humanizado.
                        </p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-1" />

                    {/* Links Columns (Right) */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-4">

                        {/* Column 1 */}
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">Plataforma</h4>
                            <ul className="space-y-4 text-sm font-bold text-foreground/70 tracking-wide">
                                <li><a href="#" className="hover:text-primary transition-colors block">Vitrine</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Processo</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Segurança</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Rastreio</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">Empresa</h4>
                            <ul className="space-y-4 text-sm font-bold text-foreground/70 tracking-wide">
                                <li><a href="#" className="hover:text-primary transition-colors block">Sobre</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Blog</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Carreiras</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Contato</a></li>
                            </ul>
                        </div>

                        {/* Column 3 (Social/Buttons) */}
                        <div className="space-y-6">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">Conecte-se</h4>
                            <div className="flex flex-col gap-3">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 bg-white border border-black/5 rounded-xl hover:border-black/20 transition-all group">
                                    <Instagram className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                                    <span className="text-xs font-bold uppercase tracking-wider">Instagram</span>
                                </a>
                                <a href="mailto:vendas@vulp.com.br" className="flex items-center gap-3 px-4 py-3 bg-white border border-black/5 rounded-xl hover:border-black/20 transition-all group">
                                    <Mail className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                                    <span className="text-xs font-bold uppercase tracking-wider">E-mail</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Legal */}
            <div className="bg-primary text-white py-8 lg:py-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                    <p className="text-white/80 text-center md:text-left">
                        © 2026 VULP. Todos os direitos reservados.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <a href="#" className="hover:text-white transition-colors text-white/80">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors text-white/80">Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors text-white/80">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}