import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, Check } from 'lucide-react';
import { Product, AddOn, CartItem } from '../types';
import { ADDONS } from '../constants';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<AddOn[]>([]);
  const [observation, setObservation] = useState('');

  // Reset state when product changes
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setSelectedAddons([]);
      setObservation('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const currentPrice = product.promoPrice || product.price;
  
  const toggleAddon = (addon: AddOn) => {
    if (selectedAddons.find(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const total = (currentPrice + selectedAddons.reduce((acc, curr) => acc + curr.price, 0)) * quantity;

  const handleConfirm = () => {
    onAddToCart({
      internalId: Math.random().toString(36).substr(2, 9),
      product,
      quantity,
      addons: selectedAddons,
      observation
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="relative bg-surface w-full max-w-lg h-[90vh] sm:h-auto sm:max-h-[90vh] sm:rounded-2xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        
        {/* Header Image */}
        <div className="relative h-56 shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-2xl font-bold text-text-main">{product.name}</h2>
              <div className="flex flex-col items-end">
                {product.promoPrice && (
                  <span className="text-sm text-text-muted line-through">R$ {product.price.toFixed(2)}</span>
                )}
                <span className="text-xl font-bold text-secondary">R$ {currentPrice.toFixed(2)}</span>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed">{product.description}</p>
          </div>

          {product.allowAddons && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">Adicionais</h3>
              <div className="space-y-2">
                {ADDONS.map(addon => {
                  const isSelected = !!selectedAddons.find(a => a.id === addon.id);
                  return (
                    <div 
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={`
                        flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all
                        ${isSelected ? 'bg-primary/10 border-primary' : 'bg-background border-border hover:border-text-main/20'}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${isSelected ? 'bg-primary border-primary' : 'border-text-muted'}`}>
                          {isSelected && <Check size={14} className="text-white" />}
                        </div>
                        <span className={isSelected ? 'text-text-main font-medium' : 'text-text-muted'}>{addon.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-text-main">+ R$ {addon.price.toFixed(2)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-sm font-bold text-text-main uppercase tracking-wider">Observações</h3>
            <textarea
              placeholder="Ex: Tirar a cebola, ponto da carne bem passado..."
              className="w-full bg-background border border-border rounded-xl p-3 text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary resize-none h-24"
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-background border-t border-border shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-surface border border-border rounded-lg h-12">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-full flex items-center justify-center text-text-muted hover:text-text-main"
              >
                <Minus size={18} />
              </button>
              <span className="w-8 text-center font-bold text-lg text-text-main">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-full flex items-center justify-center text-text-muted hover:text-text-main"
              >
                <Plus size={18} />
              </button>
            </div>
            
            <button 
              onClick={handleConfirm}
              className="flex-1 bg-primary hover:bg-red-600 text-white font-bold h-12 rounded-xl flex items-center justify-between px-6 transition-colors active:scale-95"
            >
              <span>Adicionar</span>
              <span>R$ {total.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};