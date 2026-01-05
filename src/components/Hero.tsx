import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Headphones, Truck, FileText } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[900px] pt-40 pb-20 flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover object-center lg:object-right"
        />
        {/* Gradient Overlay for Text Readability - Updated to Deep Navy Blue */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/95 via-[#0a192f]/80 to-black/30 lg:from-[#0a192f] lg:via-[#0a192f]/60 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >


            <h1 className="mb-8 text-white tracking-tighter text-4xl sm:text-5xl md:text-7xl drop-shadow-sm font-black leading-[1.1]">
              Seu Apple com segurança total e sem enrolação.
            </h1>

            <p className="mb-8 text-white text-lg lg:text-xl font-light max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-sm opacity-90">
              Aqui na Vulp o papo é reto: contrato assinado com validade jurídica <strong>antes</strong> de você pagar. Atendimento humano, direto comigo, e garantia de entrega.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
              <button className="group text-white border-b border-white/30 hover:border-white pb-2 text-sm font-black uppercase tracking-[0.2em] transition-all flex items-center gap-4 mx-auto lg:mx-0 relative overflow-hidden">
                <span className="relative z-10">Chamar no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}