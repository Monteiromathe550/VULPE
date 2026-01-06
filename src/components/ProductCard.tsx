import { motion } from 'motion/react';
import { ShoppingCart, CheckCircle2, Clock, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Product {
  id: string;
  name: string;
  category: string;
  pricePix: number | null;
  priceTotalInstallment: number | null;
  installmentValue: number | null;
  image: string;
  status: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.status === 'Em falta';
  const isNew = product.status.toLowerCase().includes('novo') || product.name.toLowerCase().includes('16');

  const handlePurchase = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOutOfStock) return;

    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${product.name} que vi na Premium Store.`);
    window.open(`https://wa.me/5565981274128?text=${message}`, '_blank');
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <motion.div
      whileHover={!isOutOfStock ? { y: -8 } : {}}
      whileTap={!isOutOfStock ? { scale: 0.98 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group relative flex flex-col h-full bg-transparent ${isOutOfStock ? 'opacity-60 grayscale cursor-not-allowed' : ''}`}
    >
      {/* Image Showcase */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F5F5F7] transition-all duration-300 ease-out border border-transparent group-hover:border-black/5 group-hover:shadow-2xl group-hover:shadow-black/10 mb-4">
        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_100%) opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />

        <motion.div
          className="w-full h-full"
          whileHover={!isOutOfStock ? { scale: 1.05 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </motion.div>

        {/* Status Badge */}
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <div className={`px-4 py-1.5 rounded-full backdrop-blur-md border shadow-sm flex items-center gap-2 ${isOutOfStock ? 'bg-gray-100/90 border-gray-200' : 'bg-white/90 border-white/40'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isOutOfStock ? 'bg-gray-400' : 'bg-emerald-500 animate-pulse'}`} />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70">
              {product.status === 'Disponível' ? 'Em Estoque' : 'Esgotado'}
            </span>
          </div>

          {isNew && !isOutOfStock && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/10 shadow-sm flex items-center gap-2 w-fit"
            >
              <Sparkles className="w-3 h-3 text-primary" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Novo
              </span>
            </motion.div>
          )}
        </div>

        {/* Quick View Icon */}
        {!isOutOfStock && (
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
            <button
              onClick={handlePurchase}
              className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg hover:shadow-primary/25 active:scale-90 cursor-pointer pointer-events-auto z-10"
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Content Details */}
      <div className="pt-6 flex flex-col flex-1 gap-4">
        {/* Category */}
        <div className="flex items-center gap-3 mb-1">
          <div className={`w-6 h-[1px] shrink-0 transition-colors duration-300 ${isOutOfStock ? 'bg-gray-300' : 'bg-primary/50'}`} />
          <span className={`text-[10px] font-bold uppercase tracking-[0.25em] leading-relaxed transition-colors duration-300 ${isOutOfStock ? 'text-gray-400' : 'text-primary'}`}>
            {product.category}
          </span>
        </div>

        <h3 className="text-[20px] lg:text-[22px] font-bold tracking-tight text-foreground leading-[1.2] text-left line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-auto pt-4 border-t border-black/5 space-y-4">
          {product.pricePix ? (
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className={`text-2xl lg:text-[28px] font-black tracking-tighter leading-none transition-colors duration-300 tabular-nums ${isOutOfStock ? 'text-gray-300' : 'text-foreground'}`}>
                  {formatCurrency(product.pricePix)}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded transition-colors duration-300 ${isOutOfStock ? 'bg-gray-100 text-gray-300' : 'bg-primary/10 text-primary'}`}>PIX</span>
              </div>

              {(product.priceTotalInstallment && product.installmentValue) && (
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-muted-foreground tracking-wide tabular-nums">
                    {formatCurrency(product.priceTotalInstallment)} parcelado
                  </p>
                  <p className="text-sm font-medium text-muted-foreground/80 tracking-wide tabular-nums">
                    ou 12x de {formatCurrency(product.installmentValue)}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-1 py-2">
              <span className="text-[18px] font-black text-muted-foreground/70 uppercase tracking-widest">
                Consulte Valor
              </span>
            </div>
          )}

          <button
            onClick={handlePurchase}
            disabled={isOutOfStock}
            className={`w-full h-12 rounded-full flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 relative overflow-hidden group ${isOutOfStock
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
              : 'bg-black text-white shadow-lg hover:shadow-xl cursor-pointer pointer-events-auto'
              }`}
          >
            <span className="relative z-10">{isOutOfStock ? 'Indisponível' : 'Comprar Agora'}</span>
            {!isOutOfStock && <ArrowUpRight className="w-4 h-4 relative z-10" />}
            {!isOutOfStock && <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
