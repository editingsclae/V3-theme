import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-neutral-100 p-4 transition-all hover:shadow-xl relative flex flex-col h-full">
      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
        {product.isNew && (
          <span className="bg-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm uppercase">New</span>
        )}
        {product.discount && (
          <span className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">{product.discount}</span>
        )}
        {product.onSale && (
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">On sale!</span>
        )}
      </div>

      {/* Image */}
      <Link to={`/product/${product.id}`} className="block mb-4 overflow-hidden rounded-md aspect-square">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <Link to={`/product/${product.id}`} className="text-sm font-bold hover:text-red-600 transition-colors mb-2 line-clamp-1">
          {product.name}
        </Link>
        <p className="text-neutral-400 text-[11px] mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-black text-red-600">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-xs text-neutral-400 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>

          <div className="flex gap-2">
            <select className="flex-1 bg-neutral-50 border border-neutral-100 text-[11px] px-2 py-1.5 rounded-sm outline-none">
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>
            <input 
              type="number" 
              defaultValue={1} 
              className="w-12 bg-neutral-50 border border-neutral-100 text-[11px] px-2 py-1.5 rounded-sm outline-none text-center"
            />
          </div>

          <button className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white text-[11px] font-bold py-2.5 rounded-sm flex items-center justify-center gap-2 transition-colors uppercase">
            <ShoppingCart size={14} />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
