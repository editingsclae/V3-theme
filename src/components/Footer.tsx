import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Rss, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Newsletter</h3>
          <p className="text-neutral-400 text-sm mb-8">
            You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.
          </p>
          <div className="flex items-start gap-3 mb-6">
            <input type="checkbox" id="terms" className="mt-1 accent-red-600" />
            <label htmlFor="terms" className="text-xs text-neutral-400 text-left">
              Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex deserunt.
            </label>
          </div>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white text-black px-4 py-3 text-sm outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 transition-colors px-8 py-3 text-sm font-bold uppercase tracking-wider">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="bg-white py-8 mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <img src="https://picsum.photos/seed/brand1/100/40" alt="Brand" className="h-8" />
          <img src="https://picsum.photos/seed/brand2/100/40" alt="Brand" className="h-8" />
          <img src="https://picsum.photos/seed/brand3/100/40" alt="Brand" className="h-8" />
          <img src="https://picsum.photos/seed/brand4/100/40" alt="Brand" className="h-8" />
          <img src="https://picsum.photos/seed/brand5/100/40" alt="Brand" className="h-8" />
          <img src="https://picsum.photos/seed/brand6/100/40" alt="Brand" className="h-8" />
        </div>
      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center gap-4 mb-16">
        {[Facebook, Twitter, Rss, Youtube, Instagram, Linkedin].map((Icon, i) => (
          <Link key={i} to="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-red-600 transition-colors">
            <Icon size={18} />
          </Link>
        ))}
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Products</h4>
          <ul className="text-neutral-400 text-xs space-y-3">
            <li><Link to="#" className="hover:text-white transition-colors">Prices drop</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">New products</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Best sales</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Our company</h4>
          <ul className="text-neutral-400 text-xs space-y-3">
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
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Your account</h4>
          <ul className="text-neutral-400 text-xs space-y-3">
            <li><Link to="#" className="hover:text-white transition-colors">Personal info</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Orders</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Credit slips</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Addresses</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Information</h4>
          <ul className="text-neutral-400 text-xs space-y-3">
            <li><Link to="#" className="hover:text-white transition-colors">Terms and conditions of use</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Environmental notice</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Legal Notice</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Privacy</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Revocation terms</Link></li>
            <li><Link to="#" className="hover:text-white transition-colors">Shipping and payment</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Store information</h4>
          <ul className="text-neutral-400 text-xs space-y-3">
            <li>Demo Shop</li>
            <li>United States</li>
            <li>Email us: demo@demo.com</li>
            <li className="pt-4 flex gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4 opacity-50" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 pt-8 text-center text-[10px] text-neutral-500">
        © 2019 - Ecommerce software by PrestaShop™
      </div>
    </footer>
  );
}
