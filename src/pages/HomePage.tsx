import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES, FEATURED_CATEGORIES, PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ChevronLeft, ChevronRight, Clock, Truck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [activeTab, setActiveTab] = React.useState('best-sellers');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[550px] bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center">
          <div className="max-w-xl z-10">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl font-black text-white mb-4 tracking-tighter uppercase"
            >
              Custom <span className="block">Gauges</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-sm mb-8 leading-relaxed max-w-md"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud exercitation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/category" className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 font-bold uppercase tracking-widest text-[11px] transition-colors inline-block rounded-sm">
                Learn More
              </Link>
            </motion.div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop" 
              alt="Gauge Cluster" 
              className="w-[600px] drop-shadow-[0_0_80px_rgba(255,255,255,0.1)]"
            />
          </div>
        </div>

        {/* Hero Controls */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:bg-white/10 hover:text-white transition-all">
          <ChevronLeft size={24} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 hover:bg-white/10 hover:text-white transition-all">
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Category Icons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to="/category" className="flex flex-col items-center group">
                <div className="w-24 h-24 mb-4 flex items-center justify-center overflow-hidden">
                  <img src={cat.image} alt={cat.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-[10px] font-black tracking-widest text-neutral-800 group-hover:text-red-600 transition-colors uppercase">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories Bento */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link key={cat.id} to="/category" className="group bg-neutral-50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all border border-neutral-100">
              <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="text-sm font-bold text-neutral-800 group-hover:text-red-600 transition-colors">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center gap-10 mb-12">
            {['BEST SELLERS', 'NEW ARRIVAL', 'SPECIAL'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                className={`text-[11px] font-black tracking-widest pb-2 relative transition-colors ${
                  activeTab === tab.toLowerCase().replace(' ', '-') ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-800'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().replace(' ', '-') && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400">
              <Clock size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">24/7 Free Support</h4>
              <p className="text-[10px] text-neutral-400">Reference clock support</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400">
              <Truck size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">Free Shipping</h4>
              <p className="text-[10px] text-neutral-400">In order more €200</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-1">Delivery Policy</h4>
              <p className="text-[10px] text-neutral-400">Money back guaranteed</p>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Newsletter</h2>
          <p className="text-neutral-500 text-xs mb-8 max-w-2xl mx-auto leading-relaxed">
            You may unsubscribe at any time. For that purpose, please find our contact info in the legal notice.
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <input type="checkbox" id="newsletter-consent" className="w-4 h-4 accent-red-600" />
            <label htmlFor="newsletter-consent" className="text-[10px] text-neutral-500 text-left max-w-md">
              Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex deserunt.
            </label>
          </div>

          <div className="flex max-w-lg mx-auto shadow-sm">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white border border-neutral-200 px-6 py-4 text-xs outline-none focus:border-red-600 transition-colors"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-[11px] font-black uppercase tracking-widest transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
            {['AUTOCRIB', 'AUTOLIA', 'CHAINC', 'MECHANIC', 'POSTON', 'SAM AUTO'].map((brand) => (
              <div key={brand} className="text-xl font-black tracking-tighter text-neutral-400 grayscale hover:grayscale-0 transition-all cursor-pointer">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
