import React from 'react';
import { Apple, Instagram, Facebook, Send, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-16 pb-12 lg:pt-32 lg:pb-16 border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Massive Reference Style CTA */}
        <div className="mb-12 lg:mb-24 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-black uppercase tracking-[0.3em] mb-8 lg:mb-12"
          >
            Atendimento Personalizado
          </motion.div>

          <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] lg:leading-[0.85] mb-8 lg:mb-12 tracking-tighter uppercase relative z-10">
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
                className="absolute -right-4 md:-right-8 top-0 text-primary/20 text-[0.4em]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.div>
            </motion.span>
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-lg mb-12 font-medium">
            Tô aqui pra resolver. Pode perguntar qualquer coisa antes de decidir.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://wa.me/5565981274128"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 md:gap-6 bg-foreground text-background rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.4em] hover:bg-primary hover:text-white transition-all text-sm md:text-sm group px-6 py-4 md:px-10 md:py-5 relative overflow-hidden"
            >
              <span className="relative z-10">
                <span className="md:hidden">Falar com o Especialista Vulp</span>
                <span className="hidden md:inline">Falar com o Especialista Vulp</span>
              </span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 -mr-2 scale-90 group-hover:scale-100 relative z-10">
                <Send className="w-4 h-4" />
              </div>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 lg:pb-20 border-b border-black/5">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img
                src={logoDark}
                alt="Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-bold uppercase tracking-widest opacity-80">
              Especialistas em ecossistema Apple com foco em transparência, segurança jurídica e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[14px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              Navegação
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-bold uppercase tracking-widest">
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
            <h4 className="text-[14px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              Categorias
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-4 text-muted-foreground text-sm font-bold uppercase tracking-widest">
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
            <h4 className="text-[14px] font-black uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
              Contato
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-6 text-muted-foreground text-sm font-bold uppercase tracking-widest">
              <li className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="leading-relaxed">Atendimento Online<br />Envio Nacional Seguro</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(65) 98127-4128</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-xl bg-black/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="lowercase">vendas@vulp.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-muted-foreground/70 text-sm font-black uppercase tracking-[0.4em]">
          <p>© 2026 VULP. Hardware de elite selecionado.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}