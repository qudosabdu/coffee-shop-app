export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    rating: number;
    description: string;
    category: string;
    isFavorite?: boolean;
  }
  
  export interface Category {
    id: string;
    name: string;
    isActive?: boolean;
  }
  
  export interface CartItem extends Product {
    quantity: number;
    size: 'Small' | 'Medium' | 'Large';
    sugarLevel: 'No Sugar' | 'Low' | 'Medium';
    showIcons?: boolean;
  }