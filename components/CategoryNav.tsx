import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-[63px] z-40 bg-background/95 backdrop-blur-md border-b border-border py-3 mb-6 transition-colors">
      <div className="flex overflow-x-auto no-scrollbar px-4 gap-3 snap-x">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                const element = document.getElementById(`category-${cat.id}`);
                if (element) {
                  const offset = 140; 
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className={`
                whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 snap-start border
                ${isActive 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-surface border-border text-text-muted hover:bg-text-main/5 hover:border-text-main/20'}
              `}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};