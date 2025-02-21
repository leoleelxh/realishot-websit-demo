'use client';

import { useState, useCallback, useEffect } from 'react';
import { products } from '@/data/products';
import Navbar from '@/components/Navbar';
import SearchFilter from '@/components/SearchFilter';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import ProductSkeleton from '@/components/ProductSkeleton';
import BackToTop from '@/components/BackToTop';
import { Product } from '@/types/product';

const ITEMS_PER_PAGE = 12; // 每页显示的产品数量

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<{[key: string]: string}>({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 初始加载
  useEffect(() => {
    setDisplayedProducts(products.slice(0, 12));
    setHasMore(products.length > 12);
  }, []);

  // 无限加载处理
  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    // 模拟API请求延迟
    setTimeout(() => {
      const start = page * 12;
      const end = start + 12;
      
      // 如果还有真实产品,就加载真实产品
      if (start < products.length) {
        const nextProducts = products.slice(start, Math.min(end, products.length));
        setDisplayedProducts(prev => [...prev, ...nextProducts]);
      }
      
      setPage(prev => prev + 1);
      setHasMore(products.length > (page + 1) * 12);
      setLoading(false);
    }, 800);
  }, [page, loading, hasMore]);

  // 监听滚动
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore]);

  // 筛选处理
  const handleFilter = useCallback((type: string, value: string | null) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      if (value === null) {
        delete newFilters[type];
      } else {
        newFilters[type] = value;
      }
      return newFilters;
    });

    // 重置分页和产品显示
    setPage(1);
    setDisplayedProducts(products.slice(0, 12));
    setHasMore(products.length > 12);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative z-50">
          <SearchFilter 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onFilterChange={handleFilter}
            activeFilters={filters}
          />
        </div>
        
        <main className="mt-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* 真实产品 */}
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
            
            {/* 永远显示的骨架图 */}
            {[...Array(12)].map((_, i) => (
              <ProductSkeleton key={`skeleton-${page}-${i}`} />
            ))}
          </div>
        </main>
      </div>

      <ProductModal
        modelUrl={selectedProduct?.modelUrl || ''}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      
      <BackToTop />
    </div>
  );
}
