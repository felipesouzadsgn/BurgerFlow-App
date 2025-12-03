import { Category, Product, AddOn, StoreInfo } from './types';

export const STORE_INFO: StoreInfo = {
  name: "BurgerFlow",
  whatsapp: "5511999999999", // Replace with real number
  address: "Rua das Flores, 123 - Centro",
  hours: "Ter à Dom: 18h às 23h30",
  rating: 4.8,
  minOrder: 25.00,
  deliveryTime: "30-45 min"
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Destaques', slug: 'destaques' },
  { id: '2', name: 'Hambúrgueres', slug: 'burgers' },
  { id: '3', name: 'Combos', slug: 'combos' },
  { id: '4', name: 'Porções', slug: 'porcoes' },
  { id: '5', name: 'Bebidas', slug: 'bebidas' },
  { id: '6', name: 'Sobremesas', slug: 'sobremesas' },
];

export const ADDONS: AddOn[] = [
  { id: 'ad1', name: 'Bacon Crocante', price: 4.00 },
  { id: 'ad2', name: 'Cheddar Extra', price: 3.50 },
  { id: 'ad3', name: 'Ovo Frito', price: 2.00 },
  { id: 'ad4', name: 'Hamburguer Extra', price: 8.00 },
  { id: 'ad5', name: 'Maionese da Casa (Pote)', price: 2.50 },
];

export const PRODUCTS: Product[] = [
  // Destaques / Burgers
  {
    id: 'p1',
    categoryId: '1',
    name: 'Smash Duplo Cheddar',
    description: 'Dois burgers smash 80g, muito cheddar cremoso e bacon no pão brioche selado.',
    price: 32.00,
    promoPrice: 28.90,
    image: 'https://picsum.photos/id/1080/800/600', // Strawberries? No, let's trust picsum random for demo or placeholders
    tags: ['Mais Pedido', 'Promo'],
    allowAddons: true,
  },
  {
    id: 'p2',
    categoryId: '2',
    name: 'Classic Salad',
    description: 'Burger 160g, alface americana, tomate, cebola roxa e queijo prato.',
    price: 26.00,
    image: 'https://picsum.photos/id/292/800/600', // Food placeholder
    tags: [],
    allowAddons: true,
  },
  {
    id: 'p3',
    categoryId: '2',
    name: 'Onion BBQ',
    description: 'Burger 160g, anéis de cebola empanados, molho barbecue e cheddar.',
    price: 30.00,
    image: 'https://picsum.photos/id/488/800/600',
    tags: ['Novo'],
    allowAddons: true,
  },
  // Combos
  {
    id: 'p4',
    categoryId: '3',
    name: 'Combo Casal',
    description: '2 Smash Burgers + 1 Porção de Fritas com Cheddar + 2 Refrigerantes Lata.',
    price: 75.00,
    promoPrice: 68.00,
    image: 'https://picsum.photos/id/429/800/600',
    tags: ['Fome de Dois'],
    allowAddons: false,
  },
  // Porções
  {
    id: 'p5',
    categoryId: '4',
    name: 'Batata Rústica',
    description: 'Batatas cortadas rusticamente com alecrim e alho.',
    price: 18.00,
    image: 'https://picsum.photos/id/493/800/600',
    tags: ['Vegetariano'],
    allowAddons: true,
  },
  // Bebidas
  {
    id: 'p6',
    categoryId: '5',
    name: 'Coca-Cola Lata',
    description: '350ml, gelada.',
    price: 6.00,
    image: 'https://picsum.photos/id/437/800/600',
    tags: [],
    allowAddons: false,
  },
  // Sobremesas
  {
    id: 'p7',
    categoryId: '6',
    name: 'Brownie com Sorvete',
    description: 'Brownie de chocolate meio amargo com bola de sorvete de creme.',
    price: 16.00,
    image: 'https://picsum.photos/id/102/800/600',
    tags: [],
    allowAddons: false,
  }
];

// Re-map category IDs to ensure products appear in "Destaques" and their native category
export const GET_PRODUCTS_BY_CATEGORY = (catId: string) => {
  if (catId === '1') return PRODUCTS.filter(p => p.tags?.includes('Mais Pedido') || p.tags?.includes('Promo'));
  return PRODUCTS.filter(p => p.categoryId === catId);
};
