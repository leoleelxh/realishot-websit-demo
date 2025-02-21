'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import SearchFilter from '@/components/SearchFilter';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { Product } from '@/types/product';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchFilter 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
        <main className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>
        </main>
      </div>

      <ProductModal
        modelUrl={selectedProduct?.modelUrl || ''}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
