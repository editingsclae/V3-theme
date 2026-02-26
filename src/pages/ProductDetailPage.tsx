import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Heart, Share2, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [activeTab, setActiveTab] = React.useState('description');

  return (
    <div className="bg-neutral-50 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="text-[11px] text-neutral-400 mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link to="/category" className="hover:text-red-600">Spare parts</Link>
          <span>/</span>
          <Link to="/category" className="hover:text-red-600">Lights</Link>
          <span>/</span>
          <span className="text-neutral-800">{product.name}</span>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-neutral-100 group">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.onSale && <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">On sale!</span>}
                {product.isNew && <span className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">New</span>}
                {product.discount && <span className="bg-neutral-900 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">{product.discount}</span>}
              </div>
              <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:text-red-600 transition-colors">
                <Heart size={18} />
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden border border-neutral-100 cursor-pointer hover:border-red-600 transition-colors">
                  <img src={`https://picsum.photos/seed/p${i}/200/200`} alt="Thumbnail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-black text-neutral-900 mb-4 tracking-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-red-600">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-lg text-neutral-400 line-through">${product.oldPrice.toFixed(2)}</span>
              )}
              <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-sm uppercase">Save 20%</span>
            </div>

            <p className="text-neutral-500 text-sm mb-8 leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">Share</span>
              <div className="flex gap-4">
                <button className="text-neutral-400 hover:text-blue-600 transition-colors"><Share2 size={16} /></button>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl space-y-6 mb-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider">Size</span>
                <select className="bg-white border border-neutral-200 text-xs px-4 py-2 rounded-md outline-none w-48">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider">Color</span>
                <div className="flex gap-2">
                  <button className="w-6 h-6 rounded-full bg-white border border-neutral-300 ring-2 ring-offset-2 ring-red-600" />
                  <button className="w-6 h-6 rounded-full bg-neutral-800" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider">Quantity</span>
                <div className="flex items-center border border-neutral-200 rounded-md bg-white">
                  <button className="px-4 py-2 hover:bg-neutral-50 transition-colors">-</button>
                  <input type="number" defaultValue={1} className="w-12 text-center text-sm outline-none" />
                  <button className="px-4 py-2 hover:bg-neutral-50 transition-colors">+</button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors uppercase tracking-wider">
                <ShoppingCart size={20} />
                Add to cart
              </button>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 size={18} />
                In stock
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-8 border-b border-neutral-200 mb-8">
            {['Description', 'Product Details', 'Custom tab 1', 'Custom tab 2'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                className={`pb-4 text-xs font-bold uppercase tracking-widest relative transition-colors ${
                  activeTab === tab.toLowerCase().replace(' ', '-') ? 'text-red-600' : 'text-neutral-400 hover:text-neutral-800'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().replace(' ', '-') && (
                  <motion.div layoutId="productTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </button>
            ))}
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm text-sm text-neutral-500 leading-relaxed">
            Symbol of lightness and delicacy, the hummingbird evokes curiosity and joy. Studio Design' PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional color rendering and a color, guaranteed overtime.
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-center text-xl font-black uppercase tracking-widest mb-12">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
