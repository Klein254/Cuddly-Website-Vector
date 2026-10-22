import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simple basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setResponseMsg('Please fill in all required fields.');
      return;
    }

    try {
       const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setResponseMsg('Your message has been sent successfully. We will be in touch soon!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.error || 'Something went wrong, please try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setResponseMsg('Network error. Please try again.');
    }
  };

  return (
    <div className="w-full bg-white pb-32">
      {/* Header */}
      <div className="bg-black text-white py-28 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125 select-none pointer-events-none"></div>
        <div className="container mx-auto relative z-10 max-w-7xl text-left">
          <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-3">GET IN TOUCH</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight uppercase mb-6">
            CONTACT US.
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            Get in touch with Vector Technical Maintenance & supplies for prompt field engineering, clinical layout support, and site audits.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-16 mt-28 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-2">COMMUNICATION HOUSES</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-black tracking-tight uppercase leading-none">
                Let's<br/>Talk.
              </h2>
            </div>
            
            <ul className="space-y-8 mt-12">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 rounded-2xl group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 shadow-sm">
                  <MapPin size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-neutral-400 uppercase tracking-widest mb-1">Our Office</h4>
                  <p className="text-lg font-display font-medium text-black">
                    Jogoo Road Plaza, 2nd Floor, Room 517<br/>
                    Nairobi, Kenya
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 rounded-2xl group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 shadow-sm">
                  <Phone size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-neutral-400 uppercase tracking-widest mb-1">Phone</h4>
                  <a href="tel:+254115526992" className="text-lg font-display font-medium text-black hover:text-orange-500 transition-colors">
                    +254 115 526 992
                  </a>
                  <p className="text-xs text-neutral-400 mt-1">Mon-Fri, 8 AM - 6 PM</p>
                </div>
              </li>
              
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-100 flex items-center justify-center shrink-0 rounded-2xl group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 shadow-sm">
                  <Mail size={18} className="text-black" />
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-neutral-400 uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:vectortech254@gmail.com" className="text-lg font-display font-medium text-black hover:text-orange-500 transition-colors">
                    vectortech254@gmail.com
                  </a>
                  <p className="text-xs text-neutral-400 mt-1">24/7 client portal standby</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-neutral-100 p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5"
          >
            {status === 'success' && (
              <div className="mb-6 p-6 bg-neutral-50/80 backdrop-blur-sm border-l-4 border-orange-500 text-black flex items-start gap-4 rounded-2xl shadow-sm">
                <CheckCircle2 className="shrink-0 mt-0.5 text-orange-500" size={20} />
                <div>
                  <p className="font-sans font-bold uppercase tracking-wider text-xs mb-1">TRANSMISSION SECURED</p>
                  <p className="text-neutral-600 font-sans text-sm">{responseMsg}</p>
                </div>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-6 p-6 bg-neutral-50/80 backdrop-blur-sm border-l-4 border-red-500 text-black flex items-start gap-4 rounded-2xl shadow-sm">
                <AlertCircle className="shrink-0 mt-0.5 text-red-500" size={20} />
                <div>
                  <p className="font-sans font-bold uppercase tracking-wider text-xs mb-1">TRANSMISSION ERROR</p>
                  <p className="text-neutral-600 font-sans text-sm">{responseMsg}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block uppercase font-sans font-bold text-[10px] tracking-wider text-neutral-400">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-neutral-50/50 border border-neutral-200 p-4 focus:border-black focus:bg-white focus:ring-1 focus:ring-black outline-none text-black font-sans text-sm rounded-2xl transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block uppercase font-sans font-bold text-[10px] tracking-wider text-neutral-400">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-neutral-50/50 border border-neutral-200 p-4 focus:border-black focus:bg-white focus:ring-1 focus:ring-black outline-none text-black font-sans text-sm rounded-2xl transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block uppercase font-sans font-bold text-[10px] tracking-wider text-neutral-400">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-50/50 border border-neutral-200 p-4 focus:border-black focus:bg-white focus:ring-1 focus:ring-black outline-none text-black font-sans text-sm rounded-2xl transition-all duration-300"
                  placeholder="+254 XXXXXXXX"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block uppercase font-sans font-bold text-[10px] tracking-wider text-neutral-400">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-neutral-50/50 border border-neutral-200 p-4 focus:border-black focus:bg-white focus:ring-1 focus:ring-black outline-none resize-none text-black font-sans text-sm rounded-3xl transition-all duration-300"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-white font-sans font-bold uppercase tracking-wider py-4 hover:bg-orange-500 hover:text-black hover:shadow-lg transition-all duration-300 disabled:opacity-75 rounded-full text-xs"
              >
                {status === 'loading' ? (
                  <span>SENDING MESSAGE...</span>
                ) : (
                  <span>SEND MESSAGE</span>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

