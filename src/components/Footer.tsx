import React from 'react';
import { Apple, Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';
import logoDark from '../assets/logo-dark.png';

export function Footer() {
    return (
        <footer className="bg-[#FAFAFA] text-foreground border-t border-black/5 font-medium">
            {/* Top Section: Links & Info */}
            {/* Top Section: Links & Info */}
            <div className="container mx-auto px-6 pt-20 pb-16 lg:pt-24 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Brand Column (Left) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full">
                        <div className="space-y-8">
                            <img
                                src={logoDark}
                                alt="Logo"
                                className="h-8 lg:h-10 w-auto object-contain opacity-90"
                            />
                            <h3 className="text-3xl lg:text-4xl font-bold tracking-tight leading-tight max-w-sm text-foreground">
                                Elevando sua <br />
                                experiência Apple.
                            </h3>
                        </div>
                        <p className="hidden lg:block text-muted-foreground text-sm font-medium mt-auto pt-12">
                            VULP, 2026.
                        </p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-1" />

                    {/* Links Columns (Right) */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-4">

                        {/* Column 1 */}
                        <div className="space-y-6">
                            <h4 className="text-base font-bold text-foreground">Empresa</h4>
                            <ul className="space-y-4 text-sm font-medium text-muted-foreground/80">
                                <li><a href="#" className="hover:text-primary transition-colors block">Vitrine</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Sobre Nós</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Carreiras</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Contato</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-6">
                            <h4 className="text-base font-bold text-foreground">Recursos</h4>
                            <ul className="space-y-4 text-sm font-medium text-muted-foreground/80">
                                <li><a href="#" className="hover:text-primary transition-colors block">Blog & News</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Segurança</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Rastreio</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Column 3 (Legal) */}
                        <div className="space-y-6">
                            <h4 className="text-base font-bold text-foreground">Legal</h4>
                            <ul className="space-y-4 text-sm font-medium text-muted-foreground/80">
                                <li><a href="#" className="hover:text-primary transition-colors block">Termos de Uso</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Privacidade</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Cookies</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors block">Processamento de Dados</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Mobile VULP Date */}
                <p className="lg:hidden text-muted-foreground text-sm font-medium mt-12">
                    VULP, 2026.
                </p>
            </div>

            {/* Divider */}
            <div className="container mx-auto px-6">
                <div className="h-[1px] bg-black/10 w-full" />
            </div>

            {/* Bottom Bar: Copyright & Socials */}
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-muted-foreground text-xs font-medium text-center md:text-left">
                    © 2026 Vulp Inc. Todos os direitos reservados.
                </p>
                <div className="flex items-center gap-4">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-black/5 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-black/5 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-md bg-black/5 hover:bg-primary/10 hover:text-primary transition-all text-muted-foreground">
                        <Mail className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}