import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div 
      className="bg-white cursor-pointer overflow-hidden rounded-xl shadow-sm
                hover:shadow-lg transition-all duration-300 group"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-50">
        <Image
          src={product.image}
          alt={`${product.manufacturer} ${product.series}`}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 border-t border-purple-50">
        <p className="text-purple-500 text-sm mb-1">{product.manufacturer}</p>
        <h3 className="text-gray-800 font-medium group-hover:text-purple-700
                      transition-colors duration-300">
          {product.series}
        </h3>
      </div>
    </div>
  );
} 