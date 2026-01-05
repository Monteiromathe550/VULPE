import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, Plus, Trash2, Package, DollarSign, Image as ImageIcon, Loader2 } from 'lucide-react';
import { CATEGORIES, PRODUCTS as DEFAULT_PRODUCTS } from '../lib/data';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';

export function ProductManager({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchProducts();
    }
  }, [isOpen]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-52dd9b5e/products`, {
        headers: { 'Authorization': `Bearer ${publicAnonKey}` }
      });
      const data = await response.json();
      setProducts(data.length > 0 ? data : DEFAULT_PRODUCTS);
    } catch (err) {
      toast.error('Erro ao carregar produtos');
      setProducts(DEFAULT_PRODUCTS);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-52dd9b5e/products`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}` 
        },
        body: JSON.stringify({ products })
      });
      if (response.ok) {
        toast.success('Produtos salvos com sucesso!');
        window.location.reload(); // Refresh to update grid
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Erro ao salvar produtos');
    } finally {
      setSaving(false);
    }
  };

  const addProduct = () => {
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      name: 'NOVO PRODUTO',
      category: 'iPhone',
      pricePix: 0,
      priceInstallments: 0,
      status: 'Disponível',
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179'
    };
    setProducts([newProduct, ...products]);
  };

  const updateProduct = (id: string, field: string, value: any) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 40 }}
          className="relative w-full max-w-6xl h-[90vh] bg-[#F5F5F7] border border-black/5 shadow-2xl rounded-[3rem] overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-8 border-b border-black/5 flex items-center justify-between bg-white">
            <div>
              <h2 className="text-2xl font-black text-foreground tracking-tightest uppercase">Gerenciador de Estoque</h2>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mt-1">Admin Mode • Premium Store</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={addProduct}
                className="flex items-center gap-2 px-6 py-3 bg-black/5 hover:bg-black/10 text-foreground text-[10px] font-black uppercase tracking-widest rounded-full transition-all"
              >
                <Plus className="w-4 h-4" /> Add Item
              </button>
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-full flex items-center justify-center text-foreground/40 hover:text-foreground hover:bg-black/5 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar bg-[#F5F5F7]">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-64 gap-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-[10px] font-black text-foreground/20 uppercase tracking-widest">Carregando Inventário...</p>
              </div>
            ) : (
              products.map((product) => (
                <div key={product.id} className="group bg-white p-6 rounded-[2rem] border border-black/5 hover:border-primary/30 transition-all flex flex-col lg:flex-row items-center gap-6 lg:gap-12 shadow-sm">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#F5F5F7] shrink-0 border border-black/5">
                    <img src={product.image} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-foreground/30 uppercase tracking-widest">Nome do Produto</label>
                      <input
                        value={product.name}
                        onChange={(e) => updateProduct(product.id, 'name', e.target.value)}
                        className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl px-4 py-2 text-[11px] font-bold text-foreground focus:border-primary/50 outline-none"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-foreground/30 uppercase tracking-widest">Preço PIX</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] text-primary">R$</span>
                        <input
                          type="number"
                          value={product.pricePix}
                          onChange={(e) => updateProduct(product.id, 'pricePix', Number(e.target.value))}
                          className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl pl-10 pr-4 py-2 text-[11px] font-bold text-foreground focus:border-primary/50 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-foreground/30 uppercase tracking-widest">Preço 12x (Total)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] text-primary">R$</span>
                        <input
                          type="number"
                          value={product.priceInstallments}
                          onChange={(e) => updateProduct(product.id, 'priceInstallments', Number(e.target.value))}
                          className="w-full bg-[#F5F5F7] border border-black/5 rounded-xl pl-10 pr-4 py-2 text-[11px] font-bold text-foreground focus:border-primary/50 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-foreground/30 uppercase tracking-widest">Status / Categoria</label>
                      <div className="flex gap-2">
                        <select
                          value={product.category}
                          onChange={(e) => updateProduct(product.id, 'category', e.target.value)}
                          className="flex-1 bg-white hover:bg-[#F5F5F7] border border-black/10 rounded-xl px-4 py-2.5 text-[12px] font-bold text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer transition-all"
                        >
                          {CATEGORIES.map(c => <option key={c} value={c} className="bg-white text-foreground">{c}</option>)}
                        </select>
                        <select
                          value={product.status}
                          onChange={(e) => updateProduct(product.id, 'status', e.target.value)}
                          className="flex-1 bg-white hover:bg-[#F5F5F7] border border-black/10 rounded-xl px-4 py-2.5 text-[12px] font-bold text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer transition-all"
                        >
                          <option value="Disponível" className="bg-white text-foreground">Disponível</option>
                          <option value="Sob encomenda" className="bg-white text-foreground">Encomenda</option>
                          <option value="Em falta" className="bg-white text-foreground">Esgotado</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pl-6 border-l border-black/5 h-full flex items-center">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="p-4 rounded-full bg-red-500/5 text-red-500/40 hover:bg-red-500 hover:text-white transition-all shrink-0 hover:scale-110"
                      title="Remover produto"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-8 border-t border-black/5 flex items-center justify-between bg-white">
            <p className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest">Total: {products.length} itens no inventário</p>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:shadow-[0_0_40px_-10px_rgba(255,77,0,0.6)] disabled:opacity-50 transition-all active:scale-95"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Salvar Alterações
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
