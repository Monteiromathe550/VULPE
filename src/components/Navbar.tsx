import React, { useState, useEffect } from 'react';
import { Apple, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';
import logoDark from '../assets/logo-dark.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'PRODUTOS', href: '#produtos' },
    { name: 'COMO FUNCIONA', href: '#como-funciona' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/5 py-4 shadow-sm' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group relative z-50">
          <img
            src={scrolled || isOpen ? logoDark : logo}
            alt="Logo"
            className="h-10 w-auto object-contain transition-all duration-500 group-hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[12px] font-black transition-all tracking-[0.3em] relative group/link ${scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all duration-500 group-hover/link:w-full ${scrolled ? 'bg-primary' : 'bg-white'}`} />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5565981274128"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3.5 text-[12px] font-black rounded-full transition-all duration-500 uppercase tracking-widest group overflow-hidden relative shadow-lg ${scrolled ? 'bg-foreground text-background hover:shadow-primary/20' : 'bg-white text-black hover:bg-white/90 hover:shadow-white/20'}`}
          >
            <span className="relative z-10">ORÇAMENTO WHATSAPP</span>
            <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out ${scrolled ? 'bg-primary' : 'bg-black/5'}`} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className={`relative z-50 transition-colors duration-500 ${isOpen || scrolled ? 'text-foreground' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 min-h-screen bg-white p-8 md:hidden text-foreground pt-32 flex flex-col items-center justify-start z-40"
          >
            <div className="flex flex-col gap-12 w-full max-w-xs text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black uppercase tracking-widest text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-20 bg-black/5 mx-auto my-4" />
              <a
                href="https://wa.me/5565981274128"
                className="bg-black text-white text-center py-5 rounded-full font-black uppercase tracking-widest shadow-xl shadow-black/10 active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}