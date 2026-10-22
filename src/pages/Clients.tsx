import React from 'react';
import { motion } from 'motion/react';
import { Building2, ArrowRight } from 'lucide-react';
import { clientsData } from '../data/clients';
import { PageView } from '../App';

interface ClientsProps {
  navigateTo?: (page: PageView) => void;
}

export default function Clients({ navigateTo }: ClientsProps) {
  return (
    <div className="w-full bg-white pb-32">
      {/* Header */}
      <div className="bg-black text-white py-28 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125 select-none pointer-events-none"></div>
        <div className="container mx-auto relative z-10 max-w-7xl text-left">
          <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-3">TRUSTED PARTNERS</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight uppercase mb-6">
            OUR CLIENTS.
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            We are proud to serve and support some of the most prestigious institutions, delivering unmatched reliability and technical excellence.
          </p>
        </div>
      </div>

      {/* Clients List */}
      <div className="container mx-auto px-6 md:px-16 mt-28 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientsData.map((client, index) => (
            <motion.div 
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-neutral-50/50 backdrop-blur-sm border border-neutral-100 p-10 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group flex flex-col justify-between h-full rounded-3xl"
            >
              <div>
                <div className="w-14 h-14 bg-white border border-neutral-100 shadow-sm group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black flex items-center justify-center mb-6 transition-all duration-300 rounded-2xl">
                  <Building2 size={24} className="text-black transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-black mb-4 group-hover:text-orange-500 transition-colors duration-200">
                  {client.name}
                </h3>
                {client.description && (
                  <p className="text-neutral-600 font-sans text-base leading-relaxed">
                    {client.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border border-neutral-800 p-10 bg-black/95 backdrop-blur-xl text-white relative overflow-hidden rounded-3xl shadow-xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight mb-4">
              Join Our Network
            </h3>
            <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-8">
              Experience the Vector Technical standard. Whether you manage a hospital, a commercial high-rise, or an industrial plant, we provide the robust infrastructure support you need to operate without interruption.
            </p>
            <button 
              onClick={() => navigateTo && navigateTo('contact')}
              className="inline-flex items-center justify-center bg-orange-500 text-black px-8 py-4 font-sans font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all rounded-full shadow-lg group"
            >
              Contact Us Today
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
