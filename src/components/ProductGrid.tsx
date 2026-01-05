import React, { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../lib/data';
import { ProductCard } from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, ChevronDown, Loader2 } from 'lucide-react';

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Use local data directly
  const products = PRODUCTS;

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => p.category === activeCategory);

    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => (a.pricePix || Infinity) - (b.pricePix || Infinity));
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => (b.pricePix || 0) - (a.pricePix || 0));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy, products]);

  return (
    <section id="produtos" className="py-16 lg:py-32 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-16">
          <div className="inline-block mb-8">
            <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary/80">
              Tabela Oficial • Fevereiro/2026
            </span>
            <div className="h-[1px] w-full bg-primary/20 mt-2" />
          </div>
          <h2 className="mb-8 text-foreground tracking-tighter">
            O que você procura?<br />
            <span className="text-primary/90 font-light italic text-lg block mt-2 tracking-normal">
              iPhones e Apple Watch a pronta entrega. Tudo original e com garantia.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Dispositivos Apple selecionados e verificados por especialistas.
          </p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-16">
          {/* Controls - Search and Sort */}
          <div className="flex flex-col gap-6 pb-6 border-b border-black/5">
            {/* Categories - Minimal Tabs */}
            <div className="w-full overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0">
              <div className="flex items-center gap-8 min-w-max lg:justify-center">
                {CATEGORIES.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category);
                        setSearchQuery('');
                      }}
                      className={`relative py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground/50 hover:text-foreground'
                        }`}
                    >
                      {category.replace('iPhone ', '').replace(' (Modelos Anteriores e 16)', ' 16').replace(' Linha 17', ' 17')}
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryTab"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Controls - Minimal Inputs */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-6 w-full">
              <div className="relative w-full sm:w-64 group">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/40 group-focus-within:text-primary transition-colors" />
                <input
                  type="text"
                  placeholder="BUSCAR..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-black/10 focus:border-primary py-2 pl-7 pr-4 text-[11px] font-bold text-foreground placeholder:text-muted-foreground/30 focus:outline-none uppercase tracking-widest transition-all rounded-none"
                />
              </div>

              <div className="relative flex items-center w-full sm:w-auto min-w-[160px]">
                <SlidersHorizontal className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/40 pointer-events-none z-10" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full appearance-none bg-transparent py-2 pl-7 pr-8 text-[11px] font-bold text-foreground uppercase tracking-widest focus:outline-none cursor-pointer border-b border-black/10 focus:border-primary transition-all rounded-none"
                >
                  <option value="featured">Destaques</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground/40 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-x-12 lg:gap-y-20">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: [0.21, 0.45, 0.32, 0.9]
                  }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center opacity-50">
                <p className="text-xl font-medium">Nenhum produto encontrado nesta categoria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
