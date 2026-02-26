import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Star, ChevronDown } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-800 hover:bg-red-600 hover:text-white transition-all shadow-sm"
          >
            <X size={20} />
          </button>

          {/* Image Gallery */}
          <div className="w-full md:w-1/2 bg-neutral-50 p-8 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-w-full max-h-[400px] object-contain drop-shadow-xl"
            />
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">(12 Reviews)</span>
            </div>

            <h2 className="text-3xl font-black text-neutral-900 mb-4 tracking-tight uppercase">{product.name}</h2>
            
            <div className="flex items-center gap-3 mb-6">
              {product.oldPrice && (
                <span className="text-lg text-neutral-400 line-through">${product.oldPrice.toFixed(2)}</span>
              )}
              <span className="text-3xl font-black text-red-600">${product.price.toFixed(2)}</span>
              {product.discount && (
                <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded-sm uppercase">
                  Save {product.discount}
                </span>
              )}
            </div>

            <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
              {product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block mb-3">Size</label>
                <div className="flex gap-2">
                  {['S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className="w-12 h-12 border border-neutral-200 rounded-md text-xs font-bold hover:border-red-600 hover:text-red-600 transition-all">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 block mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-neutral-200 rounded-md overflow-hidden">
                    <button className="px-4 py-2 hover:bg-neutral-50 transition-colors">-</button>
                    <input type="number" defaultValue={1} className="w-12 text-center text-sm font-bold outline-none" />
                    <button className="px-4 py-2 hover:bg-neutral-50 transition-colors">+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-md flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs">
                <ShoppingCart size={18} />
                Add to cart
              </button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-neutral-100">
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest space-y-2">
                <p>Category: <span className="text-neutral-800">{product.category}</span></p>
                <p>Availability: <span className="text-green-600">In Stock</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
