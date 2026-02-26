import React from 'react';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div className="bg-neutral-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="text-[11px] text-neutral-400 mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <span className="text-neutral-800">Log in to your account</span>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm p-12 text-center">
          <h1 className="text-3xl font-black text-neutral-900 mb-12 tracking-tight">Log in to your account</h1>
          
          <form className="space-y-6 text-left">
            <div className="flex items-center gap-4">
              <label className="w-24 text-[11px] font-bold uppercase tracking-wider text-neutral-400">Email</label>
              <input 
                type="email" 
                className="flex-1 bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-md outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-24 text-[11px] font-bold uppercase tracking-wider text-neutral-400">Password</label>
              <div className="flex-1 relative">
                <input 
                  type="password" 
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-md outline-none focus:border-red-600 transition-colors"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase text-neutral-400 hover:text-red-600">Show</button>
              </div>
            </div>

            <div className="pl-28">
              <Link to="#" className="text-[11px] font-bold text-neutral-400 hover:text-red-600 transition-colors">Forgot your password?</Link>
            </div>

            <div className="pl-28 pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 rounded-xl transition-colors uppercase tracking-wider text-xs">
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-neutral-100">
            <Link to="#" className="text-[11px] font-bold text-neutral-400 hover:text-red-600 transition-colors uppercase tracking-widest">
              No account? Create one here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
