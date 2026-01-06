import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroDesktop from '../assets/hero-bg.png';
import heroMobile from '../assets/hero-mobile.png';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[900px] pt-40 pb-20 flex items-center overflow-hidden">
      {/* Background Images for Desktop and Mobile */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <picture>
          <source media="(min-width: 1024px)" srcSet={heroDesktop} />
          <img
            src={heroMobile}
            alt="VULPE Apple Specialist"
            className="w-full h-full object-cover object-center"
          />
        </picture>

        {/* Neutral dark gradient to ensure text readability - Stronger on mobile */}
        <div className="absolute inset-0 bg-black/40 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black/90 lg:via-black/20 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary font-black uppercase text-[10px] tracking-[0.2em]">Hardware Selecionado</span>
            </motion.div>

            <h1 className="mb-8 text-white tracking-tighter text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
              Seu Apple com segurança total e sem enrolação.
            </h1>

            <p className="mb-8 text-white text-lg lg:text-xl font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
              Aqui na Vulp o papo é reto: contrato assinado com validade jurídica <strong>antes</strong> de você pagar. Atendimento humano, direto comigo, e garantia de entrega.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start w-full relative z-20">
              <a
                href="https://wa.me/5565981274128"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary text-white border border-primary hover:bg-primary/90 px-8 py-4 rounded-full text-sm font-black uppercase tracking-[0.2em] transition-all flex items-center gap-4 mx-auto lg:mx-0 relative overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 cursor-pointer pointer-events-auto z-20"
              >
                <span className="relative z-10">Chamar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}