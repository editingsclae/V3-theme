import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Rss, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-center gap-6 mb-16">
          {[Facebook, Twitter, Rss, Youtube, Instagram, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-red-600 transition-colors">
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Products</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li><Link to="#" className="hover:text-white transition-colors">Prices drop</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">New products</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Best sales</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Our company</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li><Link to="#" className="hover:text-white transition-colors">Delivery</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Legal Notice</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">About us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Secure payment</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Contact us</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Sitemap</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Stores</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Your account</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li><Link to="#" className="hover:text-white transition-colors">Personal info</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Orders</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Credit slips</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Addresses</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Information</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li><Link to="#" className="hover:text-white transition-colors">Terms and conditions of use</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Environmental notice</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Legal Notice</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Revocation terms</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Shipping and payment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Store information</h4>
            <ul className="space-y-3 text-xs text-neutral-400">
              <li>Demo Shop</li>
              <li>United States</li>
              <li>Email us: demo@demo.com</li>
            </ul>
            <div className="mt-8 flex gap-2">
              <div className="bg-white px-2 py-1 rounded-sm"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-3" /></div>
              <div className="bg-white px-2 py-1 rounded-sm"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-3" /></div>
              <div className="bg-white px-2 py-1 rounded-sm"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-3" /></div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center">
          <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
            © 2019 - Ecommerce software by PrestaShop™
          </p>
        </div>
      </div>
    </footer>
  );
}
