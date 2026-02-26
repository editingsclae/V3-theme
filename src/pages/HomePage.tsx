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
      <section className="relative h-[600px] bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center">
          <div className="max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase"
            >
              Custom <span className="text-red-600 block">Gauges</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-300 text-sm mb-8 leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud exercitation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/category" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold uppercase tracking-widest text-xs transition-colors inline-block">
                Learn More
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
            <img 
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1000&auto=format&fit=crop" 
              alt="Gauge Cluster" 
              className="w-[500px] drop-shadow-[0_0_50px_rgba(255,0,0,0.3)]"
            />
          </div>
        </div>

        {/* Hero Controls */}
        <div className="absolute bottom-1/2 left-4 -translate-y-1/2 flex flex-col gap-4">
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronLeft size={20} />
          </button>
        </div>
        <div className="absolute bottom-1/2 right-4 -translate-y-1/2 flex flex-col gap-4">
          <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* Category Icons */}
      <section className="py-16 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-12">
            {CATEGORIES.map((cat) => (
              <Link key={cat.id} to="/category" className="flex flex-col items-center group">
                <div className="w-20 h-20 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <img src={cat.image} alt={cat.name} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-[11px] font-black tracking-widest text-neutral-800 group-hover:text-red-600 transition-colors">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link key={cat.id} to="/category" className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-64">
              <div className="absolute inset-0">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <span className="text-white font-bold text-lg">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-center gap-12 mb-12 border-b border-neutral-100 pb-4">
            {['BEST SELLERS', 'NEW ARRIVAL', 'SPECIAL'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                className={`text-xs font-black tracking-widest pb-4 relative transition-colors ${
                  activeTab === tab.toLowerCase().replace(' ', '-') ? 'text-red-600' : 'text-neutral-400 hover:text-neutral-800'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase().replace(' ', '-') && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center gap-4">
            <Clock className="text-red-600" size={32} />
            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-wider">24/7 Free Support</h4>
              <p className="text-[10px] text-neutral-400">Reference clock support</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Truck className="text-red-600" size={32} />
            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-wider">Free Shipping</h4>
              <p className="text-[10px] text-neutral-400">In order more €200</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <ShieldCheck className="text-red-600" size={32} />
            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-wider">Delivery Policy</h4>
              <p className="text-[10px] text-neutral-400">Money back guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
