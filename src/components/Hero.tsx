import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroDesktop from '../assets/hero-bg.png';
import heroMobile from '../assets/hero-mobile.png';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-32 lg:pt-0 flex items-center overflow-hidden bg-[#F5F5F7]">
      {/* Background Decor - Side Layout for Desktop */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-l from-[#F5F5F7] via-transparent to-transparent z-10" />
        <img
          src={heroDesktop}
          alt="Apple Specialist"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 lg:hidden z-0">
        <img
          src={heroMobile}
          alt="Background"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F7]/80 via-transparent to-[#F5F5F7]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white border border-black/5 rounded-full px-5 py-2 mb-10 shadow-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-foreground/60 font-black uppercase text-[10px] tracking-[0.3em]">Hardware de Elite</span>
            </motion.div>

            <h1 className="text-4xl lg:text-[72px] font-black leading-[1.1] lg:leading-[1.05] tracking-tightest text-foreground uppercase mb-10">
              O Apple que você<br className="hidden lg:block" />
              sempre quis, <span className="text-primary italic">sem riscos.</span>
            </h1>

            <p className="text-foreground/60 text-lg lg:text-xl font-medium max-w-xl leading-relaxed mb-12 mx-auto lg:mx-0">
              Segurança jurídica total, contrato assinado antes do pagamento e atendimento humano real. O próximo nível do seu setup começa aqui.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/5565981274128"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-4 bg-foreground text-background px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-primary transition-colors text-sm shadow-2xl shadow-black/10"
              >
                Garantir meu Apple
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <button
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-4 bg-black/5 border border-black/5 px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-black/10 transition-all text-sm"
              >
                Ver Catálogo
              </button>
            </div>
          </motion.div>

          {/* Placeholder for visual balance on desktop */}
          <div className="flex-1" />
        </div>
      </div>

      {/* Scroll Decor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4 opacity-20">
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Deslize</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
      </div>
    </section>
  );
}