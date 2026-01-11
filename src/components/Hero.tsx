import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroDesktop from '../assets/hero-iphones-orange.png';
import heroMobile from '../assets/hero-mobile.png';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[900px] pt-24 pb-20 flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/20 lg:bg-gradient-to-r lg:from-black/90 lg:via-black/20 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl flex flex-col items-center lg:items-start"
          >

            <h1 className="mb-4 text-white tracking-tighter text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] drop-shadow-[0_5px_6px_rgba(0,0,0,0.65)]">
              Seu Apple com segurança total e sem enrolação.
            </h1>

            <p className="mb-8 text-white text-lg lg:text-xl font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-[0_3px_5px_rgba(0,0,0,0.6)]">
              Na VULP o processo é simples: escolha o aparelho, receba o contrato, acompanhe tudo até a entrega. Sem surpresas, sem enrolação.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start w-full relative z-20">
              <a
                href="https://wa.me/5565981274128"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 sm:gap-4 mx-auto lg:mx-0 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] cursor-pointer pointer-events-auto z-20 relative overflow-hidden"
              >
                <span className="relative z-10">Ver produtos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}