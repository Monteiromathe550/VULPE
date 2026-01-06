import React from 'react';
import { Instagram, Facebook, ArrowRight, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoDark from '../assets/logo-dark.png';

export function Footer() {
  return (
    <footer className="bg-[#F2F2F2] text-foreground pt-20 lg:pt-32 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* UPPER CTA SECTION - Split Layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20 lg:mb-32 border-b border-black/10 pb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-60">
                Atendimento Exclusivo
              </span>
            </motion.div>

            <h2 className="text-5xl sm:text-7xl lg:text-[90px] font-black leading-[0.9] tracking-tighter uppercase mb-8">
              Tem alguma <br />
              <span className="text-primary transparent-stroke">Dúvida?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
              Não compre com incerteza. Nossa equipe de especialistas está pronta para te guiar.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full lg:w-auto"
          >
            <a
              href="https://wa.me/5565981274128"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between lg:justify-center gap-8 bg-black text-white p-6 lg:px-12 lg:py-8 rounded-full group transition-all hover:bg-primary shadow-xl hover:shadow-primary/25"
            >
              <span className="text-sm lg:text-base font-black uppercase tracking-[0.2em] relative z-10">
                Chamar no WhatsApp
              </span>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-colors">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* MAIN GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <img src={logoDark} alt="VULP" className="h-10 w-auto mb-8 opacity-90" />
              <p className="text-sm font-medium leading-loose text-muted-foreground/80 max-w-xs">
                Excelência em produtos Apple.<br />
                Transparência total.<br />
                Segurança jurídica garantida.
              </p>
            </div>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-black/5 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-black/40">Menu</h4>
            <ul className="space-y-4">
              {['Home', 'Nossa Vitrine', 'Como Funciona', 'Depoimentos'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Links */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-black/40">Produtos</h4>
            <ul className="space-y-4">
              {['iPhones', 'MacBooks', 'iPads', 'Watch', 'Acessórios'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8 text-black/40">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 border border-black/5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-black/40 mb-1">Endereço</span>
                  <span className="text-sm font-medium leading-relaxed block">
                    Atendimento Digital<br />para todo o Brasil
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 border border-black/5">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-black/40 mb-1">Telefone</span>
                  <span className="text-sm font-medium leading-relaxed block">
                    (65) 98127-4128
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm shrink-0 border border-black/5">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-black/40 mb-1">Email</span>
                  <span className="text-sm font-medium leading-relaxed block">
                    vendas@vulp.com.br
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-black/10 gap-6">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 text-center md:text-left">
            © 2026 Vulp. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            {['Termos', 'Privacidade', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}