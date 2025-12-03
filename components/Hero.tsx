import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { STORE_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="px-4 mb-6">
      <div className="bg-surface rounded-2xl p-5 border border-border shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-lg text-text-muted mb-2 font-medium">Bateu a fome? 🍔</h2>
          <p className="text-text-main text-sm leading-relaxed mb-4 max-w-[90%]">
            Hambúrgueres artesanais, porções generosas e aquele sabor que você só encontra aqui.
          </p>
          
          <div className="flex flex-wrap gap-3 text-xs font-medium text-text-muted">
            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
              <Star size={12} className="text-secondary fill-secondary" />
              <span className="text-white">{STORE_INFO.rating}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
              <Clock size={12} />
              <span>{STORE_INFO.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md">
              <MapPin size={12} />
              <span>Retirada ou Entrega</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};