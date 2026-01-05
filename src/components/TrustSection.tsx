import React from 'react';
import { ShieldCheck, MapPin, CreditCard, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  {
    icon: <MapPin />,
    title: "Onde a Vulp entrega",
    description: "SP, RJ, MG, ES, PR, SC, RS, BA, DF e GO."
  },
  {
    icon: <ShieldCheck />,
    title: "Garantia",
    description: "1 ano de Garantia Apple Mundial (para lacrados)."
  },
  {
    icon: <CreditCard />,
    title: "Pagamento",
    description: "Pix, Cartão ou Entrada + Parcelado."
  },
  {
    icon: <RefreshCw />,
    title: "Sem surpresas",
    description: "Tudo documentado e com nota/recibo."
  }
];

export function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="seguranca"
      className="py-16 lg:py-32 bg-white relative transition-colors duration-500"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-black/5 border border-black/5">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-black uppercase tracking-[0.2em] text-foreground">Compra Segura</span>
            </div>

            <h2 className="mb-6 text-foreground tracking-tighter leading-[0.9] uppercase text-3xl lg:text-5xl font-black">
              Tranquilidade<br />
              <span className="text-black/10">Absoluta.</span>
            </h2>

            <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest opacity-60 leading-relaxed max-w-sm">
              Nossa missão é eliminar a ansiedade da compra online. Protocolos de segurança rigorosos e atendimento humano real em cada etapa.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, backgroundColor: "rgba(0,0,0,0.03)" }}
                transition={{ duration: 0.3 }}
                className="group p-6 lg:p-8 bg-black/[0.02] border border-black/5 hover:border-primary/20 transition-colors duration-500"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-black group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 20, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-[14px] font-black text-foreground mb-3 uppercase tracking-widest group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-bold uppercase tracking-wide opacity-50">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}