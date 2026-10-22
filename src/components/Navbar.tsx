import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { PageView } from '../App';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'clients', label: 'Our Clients' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-xl border-b border-neutral-100 z-50">
      {/* Top Bar */}
      <div className="bg-black text-neutral-300 py-2.5 px-6 md:px-16 text-xs flex flex-col md:flex-row justify-between items-center gap-2 font-sans tracking-wide">
        <div className="flex items-center gap-6">
          <a href="tel:+254115526992" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
            <Phone size={13} className="text-orange-500" /> +254 115 526 992
          </a>
          <a href="mailto:vectortech254@gmail.com" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
            <Mail size={13} className="text-orange-500" /> vectortech254@gmail.com
          </a>
        </div>
        <div className="text-[11px] text-neutral-400 font-medium">Jogoo Road Plaza | Mon-Fri, 8 AM - 6 PM</div>
      </div>

      {/* Main Nav */}
      <nav className="px-6 md:px-16 py-4.5 flex justify-between items-center bg-transparent">
        {/* Logo area */}
        <div 
          className="flex items-center cursor-pointer py-1" 
          onClick={() => setCurrentPage('home')}
        >
          <span className="font-display font-bold text-2xl tracking-tight text-black">
            VECTOR<span className="text-orange-500 font-light ml-1">TECHNICAL</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`font-sans text-sm font-medium transition-colors relative py-1 ${
                currentPage === item.id 
                  ? 'text-black border-b-2 border-orange-500' 
                  : 'text-neutral-500 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-black text-white px-6 py-3 font-sans font-medium text-xs uppercase tracking-wider hover:bg-orange-500 transition-colors duration-150 rounded-full ml-4 shadow-sm"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-black p-1 hover:text-orange-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-neutral-100 shadow-xl rounded-b-3xl py-8 px-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              }}
              className={`font-sans text-left text-lg font-medium py-2 ${
                currentPage === item.id 
                  ? 'text-orange-500 border-l-4 border-orange-500 pl-3' 
                  : 'text-neutral-600 pl-3'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => {
              setCurrentPage('contact');
              setIsMenuOpen(false);
            }}
            className="w-full bg-black text-white py-4 font-sans font-medium uppercase tracking-wider text-xs hover:bg-orange-500 transition-colors rounded-full mt-4 text-center shadow-sm"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
}

