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
                hover:shadow-xl hover:-translate-y-1 transform-gpu
                transition-all duration-300 group"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[4/3] bg-white">
        <Image
          src={product.image}
          alt={`${product.manufacturer} ${product.series}`}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-purple-500 text-sm mb-1 opacity-70 group-hover:opacity-100">{product.manufacturer}</p>
        <h3 className="text-gray-800 font-medium group-hover:text-purple-700
                      transition-colors duration-300">
          {product.series}
        </h3>
      </div>
    </div>
  );
} 