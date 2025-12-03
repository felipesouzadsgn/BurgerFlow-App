import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col h-full active:scale-[0.98] transition-all cursor-pointer group shadow-sm hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.tags.map((tag, idx) => (
              <span key={idx} className="bg-black/70 backdrop-blur-md text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-text-main font-bold text-base mb-1 leading-tight">{product.name}</h3>
        <p className="text-text-muted text-xs line-clamp-2 mb-3 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            {product.promoPrice ? (
              <>
                <span className="text-text-muted text-xs line-through">R$ {product.price.toFixed(2)}</span>
                <span className="text-secondary font-bold text-lg">R$ {product.promoPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-text-main font-bold text-lg">R$ {product.price.toFixed(2)}</span>
            )}
          </div>
          
          <button className="bg-text-main/5 hover:bg-primary hover:text-white text-primary rounded-full p-2 transition-colors">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};