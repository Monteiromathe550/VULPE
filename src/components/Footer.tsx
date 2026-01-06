import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import logoDark from '../assets/logo-dark.png';

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-24 pb-12 lg:pt-32 lg:pb-16 border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-20 border-b border-black/5">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logoDark}
                alt="Premium Store"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed max-w-xs">
              Seu pedido vai com seguro total. Qualquer B.O. no caminho, a responsabilidade é minha, não sua.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110 cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110 cursor-pointer">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              Navegação
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              {['Vitrine de Produtos', 'Processo de Compra', 'Segurança & Contrato', 'Acompanhar Pedido'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              Categorias
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              {['iPhones', 'MacBooks', 'iPads & Apple Watch', 'Acessórios Originais'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
              Contato
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-medium">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">Atendimento Online<br />Envio Nacional Seguro</span>
              </li>
              <li className="flex items-center gap-4 group">
                <a href="https://wa.me/5565981274128" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>(65) 98127-4128</span>
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <a href="mailto:contato@premiumstore.com" className="flex items-center gap-4 w-full">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="lowercase">contato@premiumstore.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-muted-foreground/60 text-[10px] font-medium uppercase tracking-[0.2em]">
          <p>© 2026 Premium Store. Hardware de elite selecionado.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
