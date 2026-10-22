import React, { useState, useEffect } from 'react';
import { PageView } from '../App';
import { ArrowRight, Wrench, ShieldCheck, Flame, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clientsData } from '../data/clients';

interface HomeProps {
  navigateTo: (page: PageView) => void;
}

const slides = [
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
    tagline: "DRIVING OPERATIONAL EXCELLENCE",
    title: "Seamless Facility\nManagement\n<span class='text-orange-500'>Solutions</span>",
    description: "We specialize in delivering top-tier facility management solutions tailored to hospitals, residential complexes, and hotels across Kenya and Eastern Africa."
  },
  {
    image: "https://images.unsplash.com/photo-1621501103258-3e9365eb26d2?q=80&w=2070&auto=format&fit=crop",
    tagline: "PREMIUM HARDWARE & EQUIPMENT",
    title: "Comprehensive\nGeneral\n<span class='text-orange-500'>Supplies</span>",
    description: "Delivering top-grade electrical, hardware, and medical equipment supplies designed for high-performance industrial and clinical environments."
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    tagline: "BUILDING THE FUTURE",
    title: "Community\nSkills &\n<span class='text-orange-500'>Empowerment</span>",
    description: "We believe in upskilling technical teams and investing in local communities to create sustainable, long-term impact across Eastern Africa."
  }
];

export default function Home({ navigateTo }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section with Slider */}
      <section className="relative bg-black text-white min-h-[650px] flex items-center overflow-hidden py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 opacity-30 select-none pointer-events-none"
          >
            <img 
              src={slides[currentSlide].image} 
              alt="Industrial Precision Maintenance" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black"></div>
          </motion.div>
        </AnimatePresence>
        
        <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-7xl flex flex-col justify-center h-full">
          <div className="max-w-4xl min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/50 backdrop-blur-md border border-neutral-700/50 mb-6 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  <span className="text-[11px] font-sans text-orange-500 font-bold uppercase tracking-wider">
                    {slides[currentSlide].tagline}
                  </span>
                </div>
                
                <h1 
                  className="text-5xl md:text-7xl lg:text-[85px] leading-[0.9] font-display font-bold tracking-tight uppercase mb-8 text-white whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
                />
                
                <p className="text-neutral-400 text-base md:text-lg mb-10 max-w-xl font-sans leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex flex-wrap gap-4 mt-auto">
              <button 
                onClick={() => navigateTo('services')}
                className="bg-orange-500 text-black px-8 py-4 font-sans font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all rounded-full shadow-lg"
              >
                Our Services
              </button>
              <button 
                onClick={() => navigateTo('contact')}
                className="border border-neutral-400 px-8 py-4 font-sans font-bold uppercase tracking-wider text-xs text-white hover:bg-white hover:text-black hover:border-white transition-all rounded-full backdrop-blur-sm bg-black/20"
              >
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Slider Pagination */}
          <div className="absolute bottom-16 right-6 md:right-16 flex items-center gap-4 z-20">
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-12 h-1.5 rounded-full transition-colors duration-300 ${currentSlide === idx ? 'bg-orange-500' : 'bg-neutral-600/50 backdrop-blur-sm hover:bg-neutral-500'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Large Invisible Side Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute top-0 left-0 bottom-0 w-1/4 md:w-48 z-20 flex items-center justify-start px-4 md:px-8 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <div className="w-16 h-16 bg-black/40 border border-white/10 rounded-full text-white flex items-center justify-center backdrop-blur-xl hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg transition-all">
              <ChevronLeft size={32} />
            </div>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-0 right-0 bottom-0 w-1/4 md:w-48 z-20 flex items-center justify-end px-4 md:px-8 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <div className="w-16 h-16 bg-black/40 border border-white/10 rounded-full text-white flex items-center justify-center backdrop-blur-xl hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg transition-all">
              <ChevronRight size={32} />
            </div>
          </button>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-28 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-2">HOW WE EXCEL</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight uppercase text-black">
                OUR EXPERTISE
              </h2>
            </div>
            <p className="text-neutral-500 font-sans text-sm max-w-md">
              Industry-certified systems and emergency standby personnel ready to optimize, safeguard, and maintain your high-value physical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={36} className="text-black" />, title: "Disaster-Ready", desc: "Trained for rapid crisis handling and 24/7 backup safety protocols." },
              { icon: <Wrench size={36} className="text-black" />, title: "Preventive Care", desc: "Rigorous diagnostic cycles that maximize equipment life and uptime." },
              { icon: <Droplets size={36} className="text-black" />, title: "Specialized Cleaning", desc: "Precision hydro-jet drain clearance and robust chemical-free tank sanitization." },
              { icon: <Flame size={36} className="text-black" />, title: "Medical Gas", desc: "Qualified pipelines, safety manifolds, and custom appliance retrofits." }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 bg-neutral-50/50 backdrop-blur-sm border border-neutral-100 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="w-14 h-14 bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-8 rounded-2xl group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black transition-all duration-300">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-display font-bold uppercase tracking-tight mb-3 text-black group-hover:text-orange-500 transition-colors duration-200">
                  {feat.title}
                </h3>
                <p className="text-neutral-500 font-sans text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini About Section */}
      <section className="py-28 bg-neutral-50 border-b border-neutral-100">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-2">REDEFINING PROPERTY CARE</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight uppercase mb-6 text-black">
              Vector Technical <br/>Maintenance & Supplies
            </h2>
            <p className="text-neutral-600 mb-6 font-sans text-base leading-relaxed">
              We protect commercial reputations, ensure surgical clinical standards, and bolster overall facility lifespans. We are more than simple mechanics; we are partners in infrastructure preservation.
            </p>
            <p className="text-neutral-600 mb-8 font-sans text-base leading-relaxed">
              Founded on the values of total operational transparency and rapid deployment cycles, our team has integrated advanced ecological and automated workflows designed for hospitals, factories, and hotels.
            </p>
            <button 
              onClick={() => navigateTo('about')}
              className="text-black font-sans font-bold uppercase tracking-wider text-xs hover:text-orange-500 transition-colors flex items-center gap-2 group border-b border-black pb-1 hover:border-orange-500"
            >
              LEARN ABOUT OUR PRINCIPLES 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative h-[480px] rounded-[2.5rem] bg-white shadow-xl overflow-hidden border border-neutral-100/50"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1887&auto=format&fit=crop" 
                alt="Engineering Professional" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-110"
              />
            </div>
            
            <div className="absolute -bottom-1 -left-1 bg-white/70 backdrop-blur-xl p-8 rounded-tr-3xl text-black">
              <p className="text-5xl font-display font-bold text-orange-500 mb-1">24/7</p>
              <p className="text-[10px] font-sans font-bold tracking-widest uppercase text-neutral-500">Emergency Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-28 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-6 md:px-16 max-w-7xl text-center">
          <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-2">TRUSTED PARTNERS</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight uppercase mb-6 text-black">
            OUR CLIENTS
          </h2>
          <p className="text-neutral-500 font-sans text-sm max-w-2xl mx-auto mb-16">
            We are proud to serve and support some of the most prestigious institutions, delivering unmatched reliability and technical excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {clientsData.slice(0, 4).map((client) => (
              <div key={client.id} className="bg-neutral-50/50 backdrop-blur-sm border border-neutral-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group">
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-black mb-2 transition-colors">{client.name}</h3>
                <p className="text-neutral-500 font-sans text-sm line-clamp-2">{client.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={() => navigateTo('clients')}
              className="text-black font-sans font-bold uppercase tracking-wider text-xs hover:text-orange-500 transition-colors inline-flex items-center gap-2 group border-b border-black pb-1 hover:border-orange-500"
            >
              VIEW ALL PARTNERS 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-6 md:px-16 text-center relative z-10 max-w-4xl">
          <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-4">READY TO DEPLOY</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight uppercase mb-6 text-white">
            Upgrade Your Operational Reliability.
          </h2>
          <p className="mb-10 text-neutral-400 font-sans text-base max-w-2xl mx-auto leading-relaxed">
            Let our experienced team perform an initial site audit to optimize your machinery lifecycle, minimize heating downtime, and protect critical systems.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="bg-orange-500 text-black px-10 py-5 font-sans font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all rounded-full shadow-xl"
          >
            Get in Touch Today
          </button>
        </div>
      </section>
    </div>
  );
}

