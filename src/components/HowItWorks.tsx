import React from 'react';
import { Smartphone, MessageCircle, FileSignature, Box, Truck, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "A gente troca ideia",
    description: "Sem robô. Você me chama, diz o que precisa e eu te ajudo a escolher o melhor modelo pra você."
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Zero empurroterapia",
    description: "Eu entendo seu orçamento e uso. Só te ofereço o que faz sentido."
  },
  {
    icon: <FileSignature className="w-8 h-8" />,
    title: "Segurança no Papel",
    description: "O contrato vem antes do pix. Documento com validade jurídica pra você ficar tranquilo."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Pagamento Transparente",
    description: "Pix com desconto ou cartão em até 12x. Sem letras miúdas."
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "Você acompanha tudo",
    description: "Te mando foto e vídeo do seu pedido sendo embalado e o rastreio na hora."
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Entrega Garantida",
    description: "Seu pedido vai com seguro total. Qualquer B.O. no caminho, a responsabilidade é minha, não sua."
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="pt-32 pb-24 lg:pt-48 lg:pb-32 bg-white text-foreground relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-0 leading-[1.2] lg:leading-[1.1] tracking-tight lg:tracking-tightest uppercase md:text-[64px]">
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
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed font-medium uppercase tracking-widest text-base md:text-[16px]">
              Descubra a jornada da sua compra, desde a escolha do hardware até a entrega segura em suas mãos.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('detalhes-processo');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative bg-black/5 border border-black/10 px-8 py-4 md:px-10 md:py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all hover:border-primary/50 self-start cursor-pointer"
            >
              <span className="relative z-10 text-foreground group-hover:text-white transition-colors text-[12px]">Ver detalhes do fluxo</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </button>
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
              <h3 className="text-xl md:text-2xl font-black mb-4 tracking-tightest uppercase">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-full text-base font-bold uppercase tracking-widest opacity-80">
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
              <p className="text-primary text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] mb-4">Experiência</p>
              <h4 className="font-black mb-4 md:mb-6 leading-none tracking-tightest uppercase text-[22px] md:text-[28px]">DO JEITO QUE VOCÊ MERECE</h4>
              <p className="text-muted-foreground leading-relaxed text-[12px] md:text-[14px] font-bold uppercase tracking-widest opacity-70 mb-8">Caixa preparada com cuidado, proteção e carinho. Pra chegar intacto aí.</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] border-b border-primary/30 pb-1 hover:border-primary transition-colors">
                Ver unboxing no Insta
              </a>
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
              <p className="text-primary text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] mb-4">Logística</p>
              <h4 className="font-black mb-4 md:mb-6 leading-none tracking-tightest uppercase text-[22px] md:text-[28px]">ENTREGA RÁPIDA</h4>
              <p className="text-muted-foreground text-[12px] md:text-[14px] font-bold uppercase tracking-widest opacity-70 leading-relaxed mb-8">Quem é de SP recebe no dia. Outros estados com envio expresso e seguro.</p>
              <a href="#" className="inline-flex items-center gap-2 text-primary text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] border-b border-primary/30 pb-1 hover:border-primary transition-colors">
                Ver prazos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}