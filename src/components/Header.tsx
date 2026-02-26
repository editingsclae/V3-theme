import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

export function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-medium">
          <div className="flex gap-6">
            <Link to="#" className="hover:text-red-600 transition-colors">Contact us</Link>
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-colors">
              Language: English <ChevronDown size={10} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-600 transition-colors">
              Currency: USD <ChevronDown size={10} />
            </div>
          </div>
          <div className="flex gap-6">
            <Link to="/login" className="flex items-center gap-1.5 hover:text-red-600 transition-colors">
              <User size={12} /> Sign in
            </Link>
            <Link to="#" className="hover:text-red-600 transition-colors">My wishlist (0)</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-6 px-4 md:px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="w-1/3"></div>
          
          <Link to="/" className="w-1/3 flex justify-center">
            <h1 className="text-3xl font-black tracking-tighter">
              <span className="text-red-600">AUTO</span>CAPITAL
            </h1>
          </Link>

          <div className="w-1/3 flex justify-end items-center gap-4">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <ShoppingCart size={24} className="text-neutral-800 group-hover:text-red-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </div>
              <div className="text-right leading-none">
                <div className="text-[11px] font-black text-neutral-900">0 items</div>
                <div className="text-[9px] text-neutral-400 uppercase tracking-tighter">Shopping Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-10">
          {['SPARE PARTS', 'EXTERIOR', 'BRANDS', 'LIGHTS', 'POPULAR'].map((item) => (
            <Link 
              key={item} 
              to="/category" 
              className="text-[11px] font-black tracking-widest text-neutral-800 hover:text-red-600 transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="text-neutral-800 hover:text-red-600 transition-colors">
            <Search size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
