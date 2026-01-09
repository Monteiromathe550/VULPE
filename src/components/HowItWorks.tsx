import React from 'react';
import { Smartphone, MessageCircle, FileSignature, Box, Truck, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "1. Conversa inicial",
    description: "Você me chama, fala o que precisa, e a gente define o modelo ideal. Sem pressão."
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "2. Verificação de estoque",
    description: "Confirmo disponibilidade real e te passo preço atualizado. Se tiver, a gente segue."
  },
  {
    icon: <FileSignature className="w-8 h-8" />,
    title: "3. Contrato digital",
    description: "Antes de qualquer pagamento, você recebe o contrato. Lê, tira dúvida e assina."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "4. Pagamento confirmado",
    description: "Só depois do contrato assinado. Pix, cartão ou parcelado. A gente confirma o recebimento."
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "5. Preparação e envio",
    description: "Te envio foto/vídeo do produto sendo embalado + rastreio. Você acompanha tudo."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "6. Entrega com seguro",
    description: "Chega na sua casa com seguro total. Qualquer problema no transporte, resolvemos."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white text-foreground relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6 mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-2 md:mb-4 leading-[1.2] lg:leading-[1.1] tracking-tight lg:tracking-tightest uppercase">
              CONHEÇA NOSSO<br /><span className="text-primary">PROCESSO</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-end"
          >
            <p className="text-muted-foreground max-w-lg leading-relaxed font-medium uppercase tracking-widest text-base md:text-[16px]">
              Esse é o fluxo padrão da VULP. Nada acontece fora dessa ordem.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-black/5 border border-black/5 rounded-[2rem] md:rounded-[3rem] overflow-hidden"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="bg-white p-10 md:p-12 group hover:bg-[#F5F5F7] transition-colors"
            >
              <div className="mb-8 md:mb-10">
                <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-6 tracking-tightest uppercase">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-full text-base font-bold uppercase tracking-widest opacity-90">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-sm flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            <div className="w-full md:w-1/2 aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#F5F5F7]">
              <img src="https://images.unsplash.com/photo-1537183673931-f890242dbaef" alt="Productivity" className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-primary text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] mb-4">Embalagem</p>
              <h4 className="font-black mb-4 md:mb-6 leading-none tracking-tightest uppercase text-[22px] md:text-[28px]">PROTEÇÃO ADEQUADA</h4>
              <p className="text-muted-foreground leading-relaxed text-[14px] md:text-[16px] font-bold uppercase tracking-widest opacity-85">Caixas reforçadas, lacre e proteção interna para evitar qualquer dano.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-sm flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center"
          >
            <div className="w-full md:w-1/2 aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#F5F5F7]">
              <img src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0" alt="Content" className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-primary text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] mb-4">Envio</p>
              <h4 className="font-black mb-4 md:mb-6 leading-none tracking-tightest uppercase text-[22px] md:text-[28px]">RASTREIO E SEGURO</h4>
              <p className="text-muted-foreground text-[14px] md:text-[16px] font-bold uppercase tracking-widest opacity-85 leading-relaxed">Você recebe o código de rastreio assim que sai. Seguro completo até a entrega.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}