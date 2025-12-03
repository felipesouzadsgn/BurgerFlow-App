import React from 'react';
import { ArrowRight, MapPin, Clock, Instagram, Star, ExternalLink, ChevronDown } from 'lucide-react';
import { STORE_INFO, INSTAGRAM_POSTS } from '../constants';

interface LandingPageProps {
  onGoToMenu: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGoToMenu }) => {
  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-border">
        {/* Background Overlay with Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=1920&q=80" 
            alt="Delicious Burger" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="bg-primary/20 text-primary border border-primary/30 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            O melhor da cidade
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
            Sabor que <br/>
            <span className="text-primary">vicia.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-lg font-light leading-relaxed drop-shadow-md">
            Hambúrgueres artesanais feitos na brasa, ingredientes frescos e aquele toque especial que você só encontra aqui.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={onGoToMenu}
              className="bg-primary hover:bg-red-600 text-white font-bold text-lg h-14 px-8 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary/40"
            >
              Ver Cardápio <ArrowRight size={20} />
            </button>
            
            <a 
              href="#location"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-semibold text-lg h-14 px-8 rounded-full flex items-center justify-center transition-all"
            >
              Onde Estamos
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2. INSTAGRAM / VIBE SECTION */}
      <section className="py-20 px-4 bg-surface/50 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-text-main mb-2">
                Acompanhe o <span className="text-secondary">@burgerflow</span>
              </h2>
              <p className="text-text-muted">Fique por dentro das novidades e promoções.</p>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-main font-semibold hover:text-primary transition-colors bg-surface border border-border px-4 py-2 rounded-lg"
            >
              <Instagram size={20} /> Seguir no Instagram
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a 
                key={post.id} 
                href={post.link} 
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md"
              >
                <img 
                  src={post.image} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" size={32} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOCATION & IFOOD SECTION */}
      <section id="location" className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface rounded-3xl border border-border overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Left: Info */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-text-main mb-4">Peça no conforto de casa ou venha nos visitar.</h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-lg">Endereço</h4>
                    <p className="text-text-muted leading-relaxed">{STORE_INFO.address}</p>
                    <a href="#" className="text-primary text-sm font-medium hover:underline mt-1 inline-block">Ver no mapa</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-lg">Funcionamento</h4>
                    <p className="text-text-muted">{STORE_INFO.hours}</p>
                  </div>
                </div>
              </div>

              {/* iFood Button - Big & Prominent */}
              <div className="pt-4">
                <p className="text-text-muted mb-3 text-sm font-medium uppercase tracking-wide">Prefere delivery?</p>
                <a 
                  href="https://www.ifood.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#EA1D2C] hover:bg-[#c91824] text-white w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-lg shadow-[#EA1D2C]/20 group"
                >
                  <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9689 7.4645C17.6519 8.16368 18.0645 9.15578 18.0645 10.2393C18.0645 12.3582 16.2917 14.074 14.1032 14.074C13.251 14.074 12.464 13.8055 11.8234 13.3441L13.7933 11.4361C14.0069 11.6669 14.1446 11.9698 14.1446 12.3065C14.1446 12.8711 13.6703 13.3304 13.0873 13.3304C12.7396 13.3304 12.4268 13.197 12.1885 12.9902L9.22709 15.8583C10.4908 17.0622 12.1963 17.8 14.1032 17.8C18.1729 17.8 21.4678 14.4149 21.4678 10.2393C21.4678 8.01202 20.4851 6.01202 18.9175 4.65422L16.9689 7.4645ZM7.78546 15.0116L4.5 18.1947C5.90807 19.1691 7.62562 19.7431 9.48834 19.7431C9.69894 19.7431 9.90709 19.7348 10.1126 19.7186L7.78546 15.0116ZM8.08639 9.38914L4.8516 12.5222C4.77443 12.1495 4.73347 11.7635 4.73347 11.3693C4.73347 8.04085 6.90675 5.14668 9.9392 4.09914L8.08639 9.38914ZM12.7935 4.19539C16.0366 5.22855 18.2325 8.13459 18.2325 11.4727C18.2325 11.5312 18.2319 11.5893 18.2302 11.647L14.4844 4.07008C13.9431 4.06733 13.3857 4.11059 12.7935 4.19539Z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-xs uppercase font-bold opacity-90">Pedir delivery pelo</span>
                    <span className="text-xl font-extrabold">iFood</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Map / Image */}
            <div className="md:w-1/2 bg-surface border-l border-border relative min-h-[300px]">
              <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                 <img 
                   src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" 
                   alt="Restaurant Interior" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <a 
                      href="#"
                      className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <MapPin size={20} className="text-primary" /> Abrir no Google Maps
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FOOTER SIMPLE */}
      <footer className="bg-surface border-t border-border py-8 text-center px-4 mt-auto">
        <h3 className="font-bold text-xl text-text-main mb-2">{STORE_INFO.name}</h3>
        <p className="text-text-muted text-sm mb-4">O verdadeiro sabor artesanal.</p>
        <div className="flex justify-center gap-4 text-sm text-text-muted">
           <a href="#" className="hover:text-primary">Instagram</a>
           <span>•</span>
           <a href="#" className="hover:text-primary">Facebook</a>
           <span>•</span>
           <a href={`https://wa.me/${STORE_INFO.whatsapp}`} className="hover:text-primary">WhatsApp</a>
        </div>
      </footer>

    </div>
  );
};