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
        <div className="mb-20 lg:mb-32 text-center relative">
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
              className="inline-flex items-center gap-4 md:gap-6 bg-foreground text-background rounded-full font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-primary transition-all text-[11px] md:text-sm group px-10 py-5 md:px-12 md:py-6 relative overflow-hidden shadow-2xl shadow-black/10 hover:shadow-primary/30"
            >
              <span className="relative z-10">
                Falar com o Especialista Vulp
              </span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-500 -mr-2 scale-90 group-hover:scale-100 relative z-10">
                <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 lg:pb-24 border-b border-black/5">
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-3">
              <img
                src={logoDark}
                alt="Logo"
                className="h-8 lg:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-bold uppercase tracking-widest opacity-70">
              Especialistas em ecossistema Apple com foco em transparência, segurança jurídica e atendimento humanizado. Elevando sua experiência tecnológica ao próximo nível.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-10 lg:space-y-0">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 lg:mb-8 flex items-center gap-3 text-foreground/40">
              Navegação
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-6 lg:space-y-4 text-foreground/80 text-sm font-bold uppercase tracking-widest">
              {['Vitrine de Produtos', 'Processo de Compra', 'Segurança & Contrato', 'Acompanhar Pedido'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-1 group whitespace-nowrap">
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-10 lg:space-y-0">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 lg:mb-8 flex items-center gap-3 text-foreground/40">
              Categorias
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-6 lg:space-y-4 text-foreground/80 text-sm font-bold uppercase tracking-widest">
              {['iPhones', 'MacBooks', 'iPads & Apple Watch', 'Acessórios Originais'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-1 group whitespace-nowrap">
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pl-12 space-y-10 lg:space-y-0">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] mb-10 lg:mb-8 flex items-center gap-3 text-foreground/40">
              Contato
              <div className="h-[1px] flex-1 bg-black/5" />
            </h4>
            <ul className="space-y-8 lg:space-y-6 text-foreground/80 text-sm font-bold uppercase tracking-widest">
              <li className="flex items-start gap-5 group">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-foreground/30 font-black">Localização</span>
                  <span className="leading-relaxed group-hover:text-primary transition-colors">Atendimento Online<br />Envio Nacional Seguro</span>
                </div>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-foreground/30 font-black">WhatsApp</span>
                  <span className="leading-relaxed group-hover:text-primary transition-colors text-base">(65) 98127-4128</span>
                </div>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-black/[0.03] flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-foreground/30 font-black">E-mail</span>
                  <span className="lowercase group-hover:text-primary transition-colors">vendas@vulp.com.br</span>
                </div>
              </li>
            </ul>
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