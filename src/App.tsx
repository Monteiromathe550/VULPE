import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { TrustSection } from './components/TrustSection';
import { CTA } from './components/CTA';
import { ProductManager } from './components/ProductManager';
import { Toaster } from 'sonner@2.0.3';
import { Settings } from 'lucide-react';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" richColors />
      <Navbar />



      <ProductManager
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      <main>
        <Hero />
        <ProductGrid />
        <HowItWorks />
        <Testimonials />
        <TrustSection />
      </main>
      <CTA />
    </div>
  );
}