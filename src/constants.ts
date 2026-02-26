import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'seats', name: 'SEATS', image: 'https://picsum.photos/seed/seat/100/100' },
  { id: 'wheels', name: 'CUSTOM WHEELS', image: 'https://picsum.photos/seed/wheel/100/100' },
  { id: 'kits', name: 'FULL KITS', image: 'https://picsum.photos/seed/kit/100/100' },
  { id: 'fans', name: 'COOLING FANS', image: 'https://picsum.photos/seed/fan/100/100' },
  { id: 'brakes', name: 'BRAKE KITS', image: 'https://picsum.photos/seed/brake/100/100' },
  { id: 'tires', name: 'TIRES', image: 'https://picsum.photos/seed/tire/100/100' },
];

export const FEATURED_CATEGORIES = [
  { id: 'headlights', name: 'Headlights', image: 'https://picsum.photos/seed/headlight/300/200' },
  { id: 'wheels-featured', name: 'Custom Wheels', image: 'https://picsum.photos/seed/wheel2/300/200' },
  { id: 'exhaust', name: 'Exhaust Systems', image: 'https://picsum.photos/seed/exhaust/300/200' },
  { id: 'audio', name: 'Car Audio', image: 'https://picsum.photos/seed/audio/300/200' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hummingbird Printed Sweater',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 28.72,
    oldPrice: 35.90,
    image: 'https://picsum.photos/seed/p1/400/400',
    category: 'Exterior',
    isNew: true,
    discount: '-20%'
  },
  {
    id: '2',
    name: 'Rectangular Rolled Edge...',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 29.00,
    image: 'https://picsum.photos/seed/p2/400/400',
    category: 'Exhaust',
    isNew: true
  },
  {
    id: '3',
    name: 'HOSTAGE Matte Black',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 11.90,
    image: 'https://picsum.photos/seed/p3/400/400',
    category: 'Wheels',
    isNew: true
  },
  {
    id: '4',
    name: 'VCX 3PC Custom Painted',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 19.12,
    oldPrice: 23.90,
    image: 'https://picsum.photos/seed/p4/400/400',
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
    image: 'https://picsum.photos/seed/p5/400/400',
    category: 'Exterior',
    isNew: true
  },
  {
    id: '6',
    name: 'Custom Headlights',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 11.90,
    image: 'https://picsum.photos/seed/p6/400/400',
    category: 'Lights',
    isNew: true
  },
  {
    id: '7',
    name: 'Custom Tail Lights',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 18.90,
    image: 'https://picsum.photos/seed/p7/400/400',
    category: 'Lights',
    isNew: true
  },
  {
    id: '8',
    name: '3 Single Hoop Step',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem...',
    price: 9.00,
    image: 'https://picsum.photos/seed/p8/400/400',
    category: 'Exterior',
    isNew: true
  }
];
