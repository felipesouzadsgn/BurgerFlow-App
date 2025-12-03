import React, { useEffect, useState } from 'react';
import { X, Trash2, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { STORE_INFO } from '../constants';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemoveItem: (id: string) => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cart, onRemoveItem }) => {
  const [paymentMethod, setPaymentMethod] = useState('pix'); 

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const calculateItemTotal = (item: CartItem) => {
    const basePrice = item.product.promoPrice || item.product.price;
    const addonsPrice = item.addons.reduce((acc, add) => acc + add.price, 0);
    return (basePrice + addonsPrice) * item.quantity;
  };

  const total = cart.reduce((acc, item) => acc + calculateItemTotal(item), 0);

  const handleCheckout = () => {
    // Cabeçalho da Mensagem
    let message = `Olá, *${STORE_INFO.name}*! 👋\nGostaria de fazer um pedido:\n\n`;
    message += `--------------------------------\n`;
    
    // Itens
    cart.forEach((item) => {
      const itemTotal = calculateItemTotal(item).toFixed(2);
      message += `🛒 *${item.quantity}x ${item.product.name}*\n`;
      
      if (item.addons.length > 0) {
        message += `   + ${item.addons.map(a => a.name).join(', ')}\n`;
      }
      
      if (item.observation) {
        message += `   📝 _Obs: ${item.observation}_\n`;
      }
      message += `   💰 R$ ${itemTotal}\n\n`;
    });

    message += `--------------------------------\n`;
    message += `💲 *TOTAL: R$ ${total.toFixed(2)}*\n`;
    message += `--------------------------------\n\n`;
    
    // Rodapé para preenchimento
    message += `📍 *Endereço de Entrega:*\n(Escreva aqui seu endereço)\n\n`;
    message += `💳 *Forma de Pagamento:*\n${paymentMethod.toUpperCase()}\n`;
    message += `\nAguardo confirmação!`;

    // Encode e Envio
    const url = `https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-surface w-full max-w-lg h-[90vh] sm:h-auto sm:max-h-[85vh] sm:rounded-2xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300">
        
        {/* Header */}
        <div className="p-5 border-b border-border flex justify-between items-center bg-surface">
          <h2 className="text-xl font-bold text-text-main">Seu Pedido ({cart.length})</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-main p-2">
            <X size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-background">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-muted opacity-50 space-y-4">
               <div className="bg-surface border border-border p-6 rounded-full">
                  <Trash2 size={48} />
               </div>
               <p className="text-lg font-medium">Seu carrinho está vazio.</p>
               <button onClick={onClose} className="text-primary font-bold hover:underline">
                 Ver cardápio
               </button>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.internalId} className="flex gap-4 p-3 bg-surface rounded-xl border border-border shadow-sm">
                   <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-border">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1">
                      <div className="flex justify-between items-start">
                         <h4 className="font-bold text-text-main text-sm line-clamp-1">{item.quantity}x {item.product.name}</h4>
                         <span className="text-sm font-semibold text-text-main">R$ {calculateItemTotal(item).toFixed(2)}</span>
                      </div>
                      
                      {item.addons.length > 0 && (
                        <p className="text-xs text-text-muted mt-1 line-clamp-1">
                          + {item.addons.map(a => a.name).join(', ')}
                        </p>
                      )}
                      {item.observation && (
                        <p className="text-xs text-secondary mt-1 italic line-clamp-1">"{item.observation}"</p>
                      )}
                      
                      <button 
                        onClick={() => onRemoveItem(item.internalId)}
                        className="mt-3 text-xs text-red-500 font-medium flex items-center gap-1 hover:text-red-600 bg-red-500/10 px-2 py-1 rounded-md w-fit"
                      >
                        <Trash2 size={12} /> Remover
                      </button>
                   </div>
                </div>
              ))}

              {/* Opção de Pagamento Simples (Visual) */}
              <div className="mt-6 pt-4 border-t border-border">
                <h3 className="text-sm font-bold text-text-muted mb-3 uppercase tracking-wider">Pagamento</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${paymentMethod === 'pix' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-border text-text-muted hover:bg-background'}`}
                  >
                    PIX / Dinheiro
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('cartao')}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${paymentMethod === 'cartao' ? 'bg-primary/10 border-primary text-primary' : 'bg-surface border-border text-text-muted hover:bg-background'}`}
                  >
                    Cartão (Maquininha)
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="p-5 bg-surface border-t border-border space-y-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
            <div className="flex justify-between items-center text-lg">
              <span className="text-text-muted font-medium">Total</span>
              <span className="text-2xl font-bold text-text-main">R$ {total.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1faa53] text-white font-extrabold h-14 rounded-xl flex items-center justify-center gap-3 transition-colors active:scale-95 shadow-lg shadow-[#25D366]/20"
            >
              <span>Enviar Pedido no WhatsApp</span>
              <MessageCircle size={22} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};