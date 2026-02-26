import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'seats', name: 'SEATS', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=200&auto=format&fit=crop' },
  { id: 'wheels', name: 'CUSTOM WHEELS', image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=200&auto=format&fit=crop' },
  { id: 'kits', name: 'FULL KITS', image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=200&auto=format&fit=crop' },
  { id: 'fans', name: 'COOLING FANS', image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&w=200&auto=format&fit=crop' },
  { id: 'brakes', name: 'BRAKE KITS', image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?q=80&w=200&auto=format&fit=crop' },
  { id: 'tires', name: 'TIRES', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=200&auto=format&fit=crop' },
];

export const FEATURED_CATEGORIES = [
  { id: 'headlights', name: 'Headlights', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&auto=format&fit=crop' },
  { id: 'wheels-featured', name: 'Custom Wheels', image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=400&auto=format&fit=crop' },
  { id: 'exhaust', name: 'Exhaust Systems', image: 'https://images.unsplash.com/photo-1611245329351-97a3844262d1?q=80&w=400&auto=format&fit=crop' },
  { id: 'audio', name: 'Car Audio', image: 'https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=400&auto=format&fit=crop' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hummingbird Printed Sweater',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 28.72,
    oldPrice: 35.90,
    image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=400&auto=format&fit=crop',
    category: 'Exterior',
    isNew: true,
    discount: '-20%'
  },
  {
    id: '2',
    name: 'Rectangular Rolled Edge...',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 29.00,
    image: 'https://images.unsplash.com/photo-1611245329351-97a3844262d1?q=80&w=400&auto=format&fit=crop',
    category: 'Exhaust',
    isNew: true
  },
  {
    id: '3',
    name: 'HOSTAGE Matte Black',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 11.90,
    image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=400&auto=format&fit=crop',
    category: 'Wheels',
    isNew: true
  },
  {
    id: '4',
    name: 'VCX 3PC Custom Painted',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 19.12,
    oldPrice: 23.90,
    image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=400&auto=format&fit=crop',
    category: 'Wheels',
    isNew: true,
    discount: '-20%',
    onSale: true
  },
  {
    id: '5',
    name: '3.5 Bull Bar With LED Light...',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 29.00,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&auto=format&fit=crop',
    category: 'Exterior',
    isNew: true
  },
  {
    id: '6',
    name: 'Custom Headlights',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 11.90,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&auto=format&fit=crop',
    category: 'Lights',
    isNew: true
  },
  {
    id: '7',
    name: 'Custom Tail Lights',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&auto=format&fit=crop',
    category: 'Lights',
    isNew: true
  },
  {
    id: '8',
    name: '3 Single Hoop Step',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 9.00,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=400&auto=format&fit=crop',
    category: 'Exterior',
    isNew: true
  }
];
