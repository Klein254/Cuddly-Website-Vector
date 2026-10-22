import React from 'react';
import { PageView } from '../App';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <span className="font-display font-bold text-xl tracking-tight text-white block mb-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            VECTOR<span className="text-orange-500 font-light ml-1">TECHNICAL</span>
          </span>
          <p className="text-xs text-neutral-500 max-w-sm font-sans">
            Delivering high-end precision facility management, clinical installations, and reliability engineering across Eastern Africa.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-8 text-sm font-sans font-medium">
          <button onClick={() => setCurrentPage('home')} className="hover:text-orange-500 transition-colors">Home</button>
          <button onClick={() => setCurrentPage('about')} className="hover:text-orange-500 transition-colors">About Us</button>
          <button onClick={() => setCurrentPage('services')} className="hover:text-orange-500 transition-colors">Services</button>
          <button onClick={() => setCurrentPage('clients')} className="hover:text-orange-500 transition-colors">Our Clients</button>
          <button onClick={() => setCurrentPage('contact')} className="hover:text-orange-500 transition-colors">Contact Us</button>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-neutral-900 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-neutral-600">
        <p>
          &copy; {new Date().getFullYear()} Vector Technical. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
          <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

