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

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1561758033-d8f19662cb23?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    link: '#'
  }
];

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
  { id: 'ad6', name: 'Cebola Caramelizada', price: 3.00 },
];

export const PRODUCTS: Product[] = [
  // 1. HAMBÚRGUERES (Cat: 2)
  {
    id: 'b1',
    categoryId: '2',
    name: 'Smash Duplo Bacon',
    description: 'Dois burgers smash 80g, queijo cheddar, muito bacon crocante e maionese da casa no pão brioche selado na manteiga.',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    tags: ['Mais Pedido'],
    allowAddons: true,
  },
  {
    id: 'b2',
    categoryId: '2',
    name: 'Classic Salad',
    description: 'Burger 160g suculento, alface americana, tomate fresco, cebola roxa, picles e queijo prato.',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: true,
  },
  {
    id: 'b3',
    categoryId: '2',
    name: 'Crispy Chicken',
    description: 'Sobrecoxa de frango empanada crocante, alface, maionese de limão e picles no pão de gergelim.',
    price: 26.90,
    image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?auto=format&fit=crop&w=800&q=80',
    tags: ['Novo'],
    allowAddons: true,
  },
  {
    id: 'b4',
    categoryId: '2',
    name: 'Mushroom Melt',
    description: 'Burger 160g, queijo suíço derretido e mix de cogumelos salteados na manteiga e alho.',
    price: 36.00,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    tags: ['Gourmet'],
    allowAddons: true,
  },
  {
    id: 'b5',
    categoryId: '2',
    name: 'Onion Rings BBQ',
    description: 'Burger 160g, cheddar, anéis de cebola empanados e molho barbecue defumado.',
    price: 32.50,
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: true,
  },
  {
    id: 'b6',
    categoryId: '2',
    name: 'Veggie Future',
    description: 'Hambúrguer de plantas (100% vegetal), queijo cheddar vegano, alface, tomate e cebola roxa.',
    price: 34.00,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetariano'],
    allowAddons: true,
  },

  // 2. COMBOS (Cat: 3)
  {
    id: 'c1',
    categoryId: '3',
    name: 'Combo Casal',
    description: '2 Smash Duplo Bacon + 1 Batata Frita Grande com Cheddar e Bacon + 2 Refrigerantes.',
    price: 89.90,
    promoPrice: 79.90,
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=800&q=80',
    tags: ['Promo', 'Para Dois'],
    allowAddons: false,
  },
  {
    id: 'c2',
    categoryId: '3',
    name: 'Trio Clássico',
    description: '1 Classic Salad + Batata Frita Individual + 1 Refrigerante Lata.',
    price: 42.00,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: false,
  },
  {
    id: 'c3',
    categoryId: '3',
    name: 'Box da Galera',
    description: '4 Burgers (Classic ou Smash) + 2 Batatas Grandes + 1 Refrigerante 2 Litros.',
    price: 139.00,
    promoPrice: 119.90,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80',
    tags: ['Família'],
    allowAddons: false,
  },

  // 3. PORÇÕES (Cat: 4)
  {
    id: 'p1',
    categoryId: '4',
    name: 'Batata Rústica',
    description: 'Batatas cortadas com casca, fritas e temperadas com alecrim, sal grosso e alho.',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1630384060421-a4323ce56d23?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: true,
  },
  {
    id: 'p2',
    categoryId: '4',
    name: 'Fritas com Cheddar e Bacon',
    description: 'Porção generosa de fritas cobertas com creme de cheddar e farofa de bacon.',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80',
    tags: ['Mais Pedido'],
    allowAddons: true,
  },
  {
    id: 'p3',
    categoryId: '4',
    name: 'Nuggets (10 un)',
    description: 'Nuggets de frango crocantes. Acompanha molho barbecue ou maionese verde.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1562967960-f5549258340d?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: true,
  },
  {
    id: 'p4',
    categoryId: '4',
    name: 'Dadinhos de Tapioca',
    description: 'Cubos de tapioca com queijo coalho, fritos e dourados. Acompanha geleia de pimenta.',
    price: 24.00,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetariano'],
    allowAddons: true,
  },
  {
    id: 'p5',
    categoryId: '4',
    name: 'Anéis de Cebola',
    description: 'Onion rings empanadas e douradas.',
    price: 20.00,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: true,
  },

  // 4. BEBIDAS (Cat: 5)
  {
    id: 'd1',
    categoryId: '5',
    name: 'Coca-Cola Lata 350ml',
    description: 'Original, bem gelada.',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: false,
  },
  {
    id: 'd2',
    categoryId: '5',
    name: 'Guaraná Antarctica Lata',
    description: 'O original do Brasil.',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: false,
  },
  {
    id: 'd3',
    categoryId: '5',
    name: 'Suco de Laranja Natural',
    description: '500ml. Feito na hora.',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: false,
  },
  {
    id: 'd4',
    categoryId: '5',
    name: 'Heineken Long Neck',
    description: '330ml. Produto para maiores de 18 anos.',
    price: 14.00,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=800&q=80',
    tags: ['+18'],
    allowAddons: false,
  },
  {
    id: 'd5',
    categoryId: '5',
    name: 'Água Mineral',
    description: '500ml. Com ou sem gás.',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1560693225-b8a9a8a726fa?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: false,
  },

  // 5. SOBREMESAS (Cat: 6)
  {
    id: 's1',
    categoryId: '6',
    name: 'Brownie com Sorvete',
    description: 'Brownie de chocolate meio amargo servido quente com sorvete de creme.',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: false,
  },
  {
    id: 's2',
    categoryId: '6',
    name: 'Milkshake de Morango',
    description: '500ml. Sorvete de morango batido com leite e calda de morango artesanal.',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    tags: ['Mais Pedido'],
    allowAddons: false,
  },
  {
    id: 's3',
    categoryId: '6',
    name: 'Churros de Doce de Leite',
    description: '4 unidades de mini churros recheados com muito doce de leite.',
    price: 16.00,
    image: 'https://images.unsplash.com/photo-1624300603305-4158d6a6e0f9?auto=format&fit=crop&w=800&q=80',
    tags: [],
    allowAddons: false,
  }
];

// Re-map category IDs to ensure products appear in "Destaques" and their native category
export const GET_PRODUCTS_BY_CATEGORY = (catId: string) => {
  if (catId === '1') return PRODUCTS.filter(p => p.tags?.includes('Mais Pedido') || p.tags?.includes('Promo'));
  return PRODUCTS.filter(p => p.categoryId === catId);
};