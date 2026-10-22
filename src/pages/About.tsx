import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Shield, Zap, Globe, Clock, ThumbsUp } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Clock size={22} className="text-black group-hover:text-white transition-colors" />, title: 'Reliability', desc: 'Consistent, bulletproof delivery always aligned with scheduled metrics.' },
    { icon: <Shield size={22} className="text-black group-hover:text-white transition-colors" />, title: 'Transparency', desc: 'Completely open communication channels and reliable site reports.' },
    { icon: <Globe size={22} className="text-black group-hover:text-white transition-colors" />, title: 'Sustainability', desc: 'Eco-conscious solutions and equipment designed to reduce footprint.' },
    { icon: <Zap size={22} className="text-black group-hover:text-white transition-colors" />, title: 'Empowerment', desc: 'We train and upskill technical teams regularly for peak safety compliance.' },
    { icon: <ThumbsUp size={22} className="text-black group-hover:text-white transition-colors" />, title: 'Client-Centricity', desc: 'Your long-term asset health is our ultimate benchmark of success.' }
  ];

  return (
    <div className="w-full bg-white pb-32">
      {/* Header */}
      <div className="bg-black text-white py-28 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125 select-none pointer-events-none"></div>
        <div className="container mx-auto relative z-10 max-w-7xl text-left">
          <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-3">WHO WE ARE</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight uppercase mb-6">
            ENGINEERED FOR <br/>PRECISION.
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            Blending decade-strong mechanical expertise, structural innovation, and extreme attention to detail to protect your real estate assets.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 mt-28 max-w-7xl">
        {/* History Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-7">
            <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-2">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-black uppercase tracking-tight mb-6">
              Our History & Reputation
            </h2>
            <div className="space-y-4 text-neutral-600 font-sans text-base leading-relaxed">
              <p>
                Vector Technical Maintenance and General Supplies was established to challenge the status quo in Eastern African facility preservation. We launched with a singular focus: to replace slow, unpredictable repairs with scientific preventive maintenance routines.
              </p>
              <p>
                What began as a precise clinical-gas deployment squad in Nairobi has expanded into a full-scale industrial facilities agency. Today, top-tier medical facilities, complex residential plazas, and leading commercial operations depend on Vector Technical to secure their daily systems.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-neutral-50 p-10 border border-neutral-100 flex flex-col justify-center h-full min-h-[220px] rounded-3xl shadow-sm">
            <span className="text-neutral-400 font-sans text-xs font-bold uppercase tracking-widest block mb-2">FOUNDED YEAR</span>
            <p className="text-6xl md:text-7xl font-display font-bold text-black leading-none mb-2">2025</p>
            <p className="text-xs font-sans text-orange-500 font-bold tracking-wider uppercase">Nairobi Headquarters</p>
          </div>
        </motion.div>

        {/* Vision & Mission Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 border border-neutral-100 rounded-3xl hover:border-transparent hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 rounded-2xl shadow-sm">
              <Lightbulb size={24} className="text-orange-500" />
            </div>
            <h2 className="text-2xl font-display font-bold text-black uppercase tracking-tight mb-4">Our Vision</h2>
            <p className="text-neutral-600 font-sans text-base leading-relaxed">
              To remain the primary, most reliable engineering and maintenance partner in Eastern Africa, setting modern gold standards for medical automation, safety redundancy, and sustainable HVAC solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/90 backdrop-blur-xl text-white p-10 rounded-3xl shadow-xl border border-neutral-800 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 rounded-2xl">
                <Target size={24} className="text-orange-500" />
              </div>
              <h2 className="text-2xl font-display font-bold uppercase tracking-tight mb-4">Our Mission</h2>
              <ul className="space-y-4 text-neutral-400 font-sans text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">•</span> 
                  Deliver hyper-customized clinical-gas and power grids that exceed industry standards.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">•</span> 
                  Enforce strict occupational health safeguards and eco-conscious cleaning protocols.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">•</span> 
                  Provide transparent, predictable pricing models with zero hidden infrastructure margins.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div className="border-t border-neutral-100 pt-24">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-16"
          >
            <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-2">GUIDING ETHICS</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-black uppercase tracking-tight">Our Core Values</h2>
            <p className="text-neutral-500 font-sans text-sm max-w-md mt-4">These core tenets define our professional codes of conduct and field engineering standards.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-neutral-50/50 backdrop-blur-sm border border-neutral-100 p-8 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group rounded-3xl"
              >
                <div className="w-12 h-12 bg-white border border-neutral-100 shadow-sm group-hover:bg-orange-500 flex items-center justify-center mb-6 transition-all duration-300 rounded-2xl group-hover:border-orange-500">
                  {v.icon}
                </div>
                <h3 className="text-lg font-display font-bold uppercase tracking-tight text-black group-hover:text-orange-500 mb-2 transition-colors duration-200">{v.title}</h3>
                <p className="text-neutral-500 font-sans text-sm leading-relaxed transition-colors duration-200">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

