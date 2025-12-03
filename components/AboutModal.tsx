import React from 'react';
import { X, MapPin, Clock, Phone } from 'lucide-react';
import { STORE_INFO } from '../constants';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface w-full max-w-md rounded-2xl p-6 shadow-2xl border border-border animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-text-main">Sobre a {STORE_INFO.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-background rounded-full transition-colors">
            <X size={20} className="text-text-muted hover:text-text-main" />
          </button>
        </div>

        <div className="space-y-6">
          <p className="text-text-muted leading-relaxed">
            Somos especialistas em hambúrgueres artesanais feitos na brasa. Ingredientes frescos, molhos caseiros e muito sabor para você e sua família.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={20} />
              <div>
                <h4 className="text-text-main font-medium">Endereço</h4>
                <p className="text-text-muted text-sm">{STORE_INFO.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="text-primary mt-1" size={20} />
              <div>
                <h4 className="text-text-main font-medium">Horário</h4>
                <p className="text-text-muted text-sm">{STORE_INFO.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-primary mt-1" size={20} />
              <div>
                <h4 className="text-text-main font-medium">Contato</h4>
                <p className="text-text-muted text-sm">(XX) 99999-9999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};