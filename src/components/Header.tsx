import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, Phone, Globe, DollarSign } from 'lucide-react';
import { cn } from '../lib/utils';

export function Header() {
  const location = useLocation();
  
  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white text-[11px] py-2 px-4 md:px-8 flex justify-between items-center">
        <div className="flex gap-6">
          <Link to="#" className="hover:text-red-600 transition-colors">Contact us</Link>
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-600">
            <span>Language: English</span>
            <Menu size={10} />
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-red-600">
            <span>Currency: USD</span>
            <Menu size={10} />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Link to="/login" className="flex items-center gap-1 hover:text-red-600">
            <User size={12} />
            <span>Sign in</span>
          </Link>
          <Link to="#" className="hover:text-red-600">My wishlist (0)</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center border-b border-neutral-100">
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-black tracking-tighter flex items-center">
            <span className="text-red-600">AUTO</span>CAPITAL
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold">
            <Link to="/category" className="hover:text-red-600 transition-colors">SPARE PARTS</Link>
            <Link to="/category" className="hover:text-red-600 transition-colors">EXTERIOR</Link>
            <Link to="/category" className="hover:text-red-600 transition-colors">BRANDS</Link>
            <Link to="/category" className="hover:text-red-600 transition-colors">LIGHTS</Link>
            <Link to="/category" className="hover:text-red-600 transition-colors">POPULAR</Link>
            <button className="hover:text-red-600 transition-colors">
              <Search size={18} />
            </button>
          </nav>

          <div className="flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-sm border border-neutral-100">
            <div className="relative">
              <ShoppingCart size={20} className="text-neutral-700" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
            <div className="text-[11px] leading-tight">
              <div className="font-bold">0 items</div>
              <div className="text-neutral-400">Shopping Cart</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
