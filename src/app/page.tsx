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

  // 初始加载
  useEffect(() => {
    setDisplayedProducts(products.slice(0, 12));
  }, []);

  // 简化的筛选处理
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

    // 简单的随机重排效果
    if (value === null) {
      // 如果取消筛选,恢复原始顺序
      setDisplayedProducts(products.slice(0, 12));
    } else {
      // 随机重排所有产品并显示前12个
      const shuffled = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 12);
      setDisplayedProducts(shuffled);
    }

    // 重置分页
    setPage(1);
  }, []);

  // 修改loadMore逻辑,保持随机效果
  const loadMore = useCallback(() => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      // 如果有筛选条件,继续随机展示
      if (Object.keys(filters).length > 0) {
        const shuffled = [...products]
          .sort(() => Math.random() - 0.5)
          .slice(0, 12);
        setDisplayedProducts(prev => [...prev, ...shuffled]);
      } else {
        // 否则按正常顺序加载
        const start = page * 12;
        const end = start + 12;
        if (start < products.length) {
          const nextProducts = products.slice(start, Math.min(end, products.length));
          setDisplayedProducts(prev => [...prev, ...nextProducts]);
        }
      }
      setPage(prev => prev + 1);
      setLoading(false);
    }, 800);
  }, [page, loading, filters]);

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
