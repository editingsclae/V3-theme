import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye, ChevronDown } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isQuickViewOpen, setIsQuickViewOpen] = React.useState(false);

  return (
    <>
      <div className="group bg-white rounded-lg border border-neutral-100 p-5 transition-all hover:shadow-2xl relative flex flex-col h-full">
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
          {product.onSale && (
            <span className="bg-neutral-900 text-white text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">On sale!</span>
          )}
          {product.isNew && (
            <span className="bg-white text-neutral-900 text-[9px] font-black px-2 py-0.5 rounded-sm shadow-sm uppercase tracking-tighter border border-neutral-100">New</span>
          )}
          {product.discount && (
            <span className="bg-neutral-900 text-white text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-tighter">{product.discount}</span>
          )}
        </div>

        {/* Image Container */}
        <div className="relative mb-6 overflow-hidden rounded-md aspect-square bg-neutral-50 group/img">
          <Link to={`/product/${product.id}`} className="block w-full h-full">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
            />
          </Link>
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button 
              onClick={() => setIsQuickViewOpen(true)}
              className="bg-white text-neutral-900 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all transform translate-y-4 group-hover/img:translate-y-0 duration-300"
              title="Quick View"
            >
              <Eye size={18} />
            </button>
            <button 
              className="bg-white text-neutral-900 p-3 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition-all transform translate-y-4 group-hover/img:translate-y-0 duration-300 delay-75"
              title="Add to Wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <Link to={`/product/${product.id}`} className="text-[13px] font-bold text-neutral-800 hover:text-red-600 transition-colors mb-2 line-clamp-1">
            {product.name}
          </Link>
          <p className="text-neutral-400 text-[11px] mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] text-neutral-400 line-through">${product.oldPrice?.toFixed(2)}</span>
              <span className="text-sm font-black text-red-600">${product.price.toFixed(2)}</span>
            </div>

            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <select className="w-full bg-white border border-neutral-200 text-[10px] font-bold px-3 py-2 rounded-sm outline-none appearance-none">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400" size={12} />
              </div>
              <input 
                type="number" 
                defaultValue={1} 
                className="w-12 bg-white border border-neutral-200 text-[10px] font-bold px-2 py-2 rounded-sm outline-none text-center"
              />
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] font-black py-3 rounded-sm flex items-center justify-center gap-2 transition-colors uppercase tracking-widest">
              <ShoppingCart size={14} />
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <QuickViewModal 
        product={product} 
        isOpen={isQuickViewOpen} 
        onClose={() => setIsQuickViewOpen(false)} 
      />
    </>
  );
}
