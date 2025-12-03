export interface AddOn {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  promoPrice?: number;
  image: string;
  tags?: string[]; // e.g., 'Novo', 'Mais Pedido', 'Picante'
  allowAddons: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface CartItem {
  internalId: string; // unique id for cart entry (to separate same product with diff options)
  product: Product;
  quantity: number;
  addons: AddOn[];
  observation: string;
}

export interface StoreInfo {
  name: string;
  whatsapp: string; // numbers only
  address: string;
  hours: string;
  rating: number;
  minOrder: number;
  deliveryTime: string;
}