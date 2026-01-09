import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Fernanda Silva",
    location: "São Paulo, SP",
    text: "A experiência de compra pelo WhatsApp foi surpreendente. Atendimento humano, rápido e o iPhone chegou em 1 dia. O cuidado com a embalagem mostra o nível da loja.",
    product: "iPhone 15 Pro Max"
  },
  {
    name: "Rafael Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Estava receoso em comprar online um valor tão alto, mas o contrato e a transparência de todo o processo me ganharam. O MacBook Air é incrível e chegou lacrado.",
    product: "MacBook Air M2"
  },
  {
    name: "Beatriz Lima",
    location: "Belo Horizonte, MG",
    text: "Qualidade impecável. O aparelho veio exatamente como descrito. A 'Premium Store' faz jus ao nome, desde o primeiro 'olá' no WhatsApp até o pós-venda.",
    product: "iPad Pro"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-black/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-10"
          >
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/80">Social Proof</span>
            <div className="h-[1px] w-full bg-primary/20 mt-2" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl font-black tracking-tightest mb-8 text-foreground"
          >
            FEEDBACKS<br />
            <span className="text-primary italic font-light">RECENTES.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg font-light max-w-xl"
          >
            Alguns relatos de quem já recebeu o produto e quis compartilhar a experiência.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-[2.5rem] p-10 lg:p-12 border border-black/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col justify-between">

                <div className="mb-10">
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-black/30 mb-6 rotate-180" />
                  <p className="text-foreground text-[16px] leading-relaxed font-medium">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex flex-col gap-4 border-t border-black/5 pt-8">
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-[18px] mb-1">{item.name}</h4>
                    <p className="text-[14px] text-muted-foreground/80 uppercase tracking-wider">{item.location}</p>
                  </div>
                  <div className="self-start text-[10px] font-black uppercase tracking-widest text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full">
                    {item.product}
                  </div>
                </div>

                {/* Subtle hover effect overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-transparent to-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
