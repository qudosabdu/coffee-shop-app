import { Category, Product } from '@/types';
import { AssetsImage } from '@/utils/image';

export const categories: Category[] = [
  { id: '1', name: 'Cappuccino', isActive: true },
  { id: '2', name: 'Coffee', isActive: false },
  { id: '3', name: 'Espresso', isActive: false },
  { id: '4', name: 'Latte', isActive: false },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Cappuccino',
    price: 50000,
    image: AssetsImage.confee1,
    rating: 4.8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'Cappuccino',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Cappuccino',
    price: 50000,
    image: AssetsImage.scoffee1,
    rating: 4.6,
    description: 'A rich and creamy cappuccino with perfect foam art, made from the finest Italian beans.',
    category: 'Cappuccino',
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Cappuccino',
    price: 50000,
    image: AssetsImage.coffee2,
    rating: 4.9,
    description: 'Expertly crafted cappuccino with silky smooth texture and balanced flavor profile.',
    category: 'Cappuccino',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Coffee',
    price: 50000,
    image: AssetsImage.scoffee1,
    rating: 4.7,
    description: 'Rich black coffee brewed to perfection using premium arabica beans.',
    category: 'Coffee',
    isFavorite: false,
  },
  {
    id: '5',
    name: 'Cappuccino',
    price: 50000,
    image: AssetsImage.coffee2,
    rating: 4.5,
    description: 'Classic cappuccino with beautiful latte art and perfectly steamed milk.',
    category: 'Cappuccino',
    isFavorite: true,
  },
];