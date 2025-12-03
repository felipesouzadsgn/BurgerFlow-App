import React, { ReactNode, useState, useEffect } from 'react';
import { Info, MessageCircle, Moon, Sun } from 'lucide-react';
import { STORE_INFO } from '../constants';

interface LayoutProps {
  children: ReactNode;
  onOpenAbout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onOpenAbout }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-background text-text-main transition-colors duration-300">
      {/* Center Wrapper for Desktop */}
      <div className="max-w-5xl mx-auto bg-background min-h-screen shadow-2xl shadow-black/20 border-x border-border relative flex flex-col">
        
        {/* Top Bar */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border h-16 flex items-center justify-between px-4 transition-all duration-300">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                {/* Burger Logo Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.5 12.57C19.5 12.57 20.5 13.07 19.5 14.07C18.5 15.07 18.5 14.57 17.5 14.57H6.5C5.5 14.57 5.5 15.07 4.5 14.07C3.5 13.07 4.5 12.57 4.5 12.57" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 18.5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.5 8.5C4.5 8.5 5.5 4.5 12 4.5C18.5 4.5 19.5 8.5 19.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.5 12.5H4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="18.5" x2="12" y2="20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h1 className="text-xl font-bold tracking-tight text-text-main leading-none">{STORE_INFO.name}</h1>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 ml-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-text-muted font-medium uppercase tracking-wide leading-none">Aberto agora</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface active:scale-95 transition-all text-text-muted hover:text-text-main"
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button 
              onClick={onOpenAbout}
              className="p-2 rounded-full hover:bg-surface active:scale-95 transition-all text-text-muted hover:text-text-main"
            >
              <Info size={24} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pb-32">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="mt-auto px-6 pb-8 text-center border-t border-border pt-8 bg-surface/30">
          <h3 className="font-bold text-lg mb-2 text-text-main">{STORE_INFO.name}</h3>
          <p className="text-sm text-text-muted mb-4">
            Feito com ❤️ para matar sua fome.
          </p>
          <div className="text-xs text-text-muted/50">
            <p>Imagens meramente ilustrativas.</p>
            <p>© 2024 BurgerFlow. Todos os direitos reservados.</p>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a 
          href={`https://wa.me/${STORE_INFO.whatsapp}?text=Olá,%20tenho%20uma%20dúvida.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-4 md:right-[calc(50%-40rem+1rem)] z-40 bg-[#25D366] text-white p-3 rounded-full shadow-lg shadow-green-900/20 hover:scale-110 transition-transform active:scale-95 flex items-center justify-center"
          title="Fale conosco no WhatsApp"
        >
          <MessageCircle size={28} />
        </a>

      </div>
    </div>
  );
};