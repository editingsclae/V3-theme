import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { LayoutGrid, List, ChevronDown } from 'lucide-react';

export function CategoryListingPage() {
  return (
    <div className="bg-neutral-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="text-[11px] text-neutral-400 mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <span className="text-neutral-800">Spare parts</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 border-b border-neutral-100 pb-4">Spare Parts</h3>
              <ul className="space-y-4 text-[11px] font-bold text-neutral-500">
                <li className="flex justify-between items-center hover:text-red-600 cursor-pointer">
                  <span>Exterior</span>
                  <ChevronDown size={12} />
                </li>
                <li className="flex justify-between items-center hover:text-red-600 cursor-pointer">
                  <span>Interior</span>
                  <ChevronDown size={12} />
                </li>
                <li className="flex justify-between items-center hover:text-red-600 cursor-pointer">
                  <span>Lights</span>
                  <ChevronDown size={12} />
                </li>
                <li className="flex justify-between items-center hover:text-red-600 cursor-pointer">
                  <span>Wheels & Tires</span>
                  <ChevronDown size={12} />
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest mb-6 border-b border-neutral-100 pb-4">Filter By</h3>
              
              <div className="space-y-8">
                {/* Size */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">Size</h4>
                  <div className="space-y-2">
                    {['S (2)', 'M (2)', 'L (1)', 'XL (1)'].map(size => (
                      <label key={size} className="flex items-center gap-2 text-[11px] font-bold text-neutral-500 cursor-pointer hover:text-red-600">
                        <input type="checkbox" className="accent-red-600" />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">Color</h4>
                  <div className="space-y-2">
                    {['White (4)', 'Black (4)'].map(color => (
                      <label key={color} className="flex items-center gap-2 text-[11px] font-bold text-neutral-500 cursor-pointer hover:text-red-600">
                        <input type="checkbox" className="accent-red-600" />
                        {color}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">Price</h4>
                  <div className="px-2">
                    <input type="range" className="w-full accent-red-600" />
                    <div className="flex justify-between mt-2 text-[10px] font-bold text-neutral-400">
                      <span>$7.00</span>
                      <span>$35.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h1 className="text-2xl font-black text-neutral-900 tracking-tight">Spare parts</h1>
                  <p className="text-[11px] text-neutral-400 mt-1">There are 19 products.</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-red-600 bg-red-50 rounded-md"><LayoutGrid size={18} /></button>
                    <button className="p-2 text-neutral-400 hover:text-neutral-800"><List size={18} /></button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Sort by:</span>
                    <select className="text-[11px] font-bold bg-neutral-50 border border-neutral-100 px-3 py-2 rounded-md outline-none">
                      <option>Relevance</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-red-600 text-white font-bold text-xs">1</button>
              <button className="w-10 h-10 rounded-full bg-white text-neutral-400 hover:text-red-600 font-bold text-xs transition-colors">2</button>
              <button className="text-xs font-bold text-neutral-400 hover:text-red-600 transition-colors uppercase tracking-widest ml-4">Next &gt;</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
