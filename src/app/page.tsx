'use client';

import { useState, useEffect, useCallback } from 'react';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import SearchFilter from '@/components/SearchFilter';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { Product } from '@/types/product';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('');

  // 使用 useEffect 来处理客户端的筛选逻辑
  const handleFilter = useCallback((filter: string) => {
    setActiveFilter(filter);
    // 使用固定的筛选逻辑而不是随机
    const filteredProducts = products.filter((_, index) => index % 2 === 0);
    setDisplayedProducts(filteredProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative z-50"> {/* 提高搜索筛选区域的层级 */}
          <SearchFilter 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onFilterChange={handleFilter}
          />
        </div>
        
        <main className="mt-6 relative z-10"> {/* 降低产品列表的层级 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6
                        animate-fadeIn">
            {displayedProducts.map((product) => (
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
