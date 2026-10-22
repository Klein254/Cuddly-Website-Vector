import React from 'react';
import { motion } from 'motion/react';
import { 
  Wind, ThermometerSun, Zap, Activity, Grid, Beaker,
  ShieldAlert, Droplet, Stethoscope, HardHat, Package, Wrench, ArrowRight
} from 'lucide-react';
import { PageView } from '../App';

interface ServicesProps {
  navigateTo?: (page: PageView) => void;
}

export default function Services({ navigateTo }: ServicesProps) {
  const servicesList = [
    {
      title: "Medical Gas Systems",
      description: "We provide a fast, reliable and efficient service for all medical gas plumbing and gas fitting; that includes installation, repair and maintenance of gas lines and gas appliances. For any medical gas fitting work, you can trust our expertise. Our fully qualified, gasfitters will be able to do anything you need with medical gas appliances and gas piping.",
      icon: <Wind size={24} />
    },
    {
      title: "Industrial Tanks & Filtration",
      description: "Serving the Fuel, Beverage and Dairy industries, Vector cleans diverse tanks (plastic, fiberglass, aluminum, stainless steel, concrete). We revive neglected tanks, handling plumbing, cleaning and disinfection for safe reuse. Our focus: ensuring your tanks are clean, functional and well-maintained through scheduled services. We assess and repair worn or damaged tanks, extending their lifespan, and also supply and install new, larger tanks to meet your evolving storage needs.",
      icon: <Beaker size={24} />
    },
    {
      title: "Hydro-jet Drain Cleaning",
      description: "Hydro-jetting is one of the safest and most effective ways to clean the drain. The benefits of hydro jet cleaning is that it's environmentally friendly. No chemicals are used that might end up in the environment or, worse, damage your pipes.",
      icon: <Droplet size={24} />
    },
    {
      title: "Steam Supply & Sterilization",
      description: "We provide comprehensive services for the installation, calibration, and maintenance of steam supply accessories and heating systems. These systems are vital for sterilization, space heating, and hot water supply in hospital facilities. Our technicians ensure optimal performance, energy efficiency, and safety compliance, minimizing downtime and maximizing reliability.",
      icon: <ThermometerSun size={24} />
    },
    {
      title: "HVAC Systems",
      description: "Our HVAC services are designed to support the unique environmental needs of healthcare settings, including cleanrooms, operating theaters, and patient wards. We offer full-spectrum solutions—from system design and installation to routine preventive maintenance and emergency repairs—ensuring proper ventilation, air quality, humidity control, and temperature regulation to meet health standards.",
      icon: <Wind size={24} />
    },
    {
      title: "Emergency Power & UPS",
      description: "Power continuity is non-negotiable in hospitals. We maintain and service generators, Uninterruptible Power Supply (UPS) systems, and related power infrastructure to guarantee seamless operation during outages or voltage fluctuations. Regular testing, load assessments, and compliance checks are part of our service to ensure 24/7 power availability.",
      icon: <Zap size={24} />
    },
    {
      title: "Proper Maintenance of Equipment",
      description: "We perform detailed preventive and corrective maintenance on all medical and technical equipment strictly according to manufacturer specifications and catalogues. This includes scheduled servicing, parts replacement, calibration, and performance testing ensuring equipment reliability, extended lifespan, and regulatory compliance. Our strength lies in Dialysis, ICU, Theater and Radiology Equipment.",
      icon: <Activity size={24} />
    },
    {
      title: "Hardware and Electrical Supplies",
      description: "We provide comprehensive hardware and electrical equipment supply services, offering a wide range of tools, wiring accessories, lighting solutions, circuit protection devices, power tools, and general hardware items. Our products support construction, maintenance, and technical operations, ensuring high quality, reliability, and timely delivery.",
      icon: <HardHat size={24} />
    },
    {
      title: "Commercial Kitchens & Laundry",
      description: "We supply, install, and maintain a full range of laundry and kitchen equipment tailored for commercial, industrial, and institutional use. Our services cover washing machines, dryers, steam irons, dishwashers, ovens, cookers, refrigerators, and food service appliances. We ensure reliable performance through preventive maintenance, repairs, and fast response support.",
      icon: <Package size={24} />
    },
    {
      title: "Stainless Steel Fabrication",
      description: "We offer high-quality stainless steel fabrication services, producing durable and customized solutions for kitchens, hospitals, laboratories, and commercial facilities. Our fabrication work includes tables, sinks, worktops, trolleys, cabinets, rails, and specialized structural fittings, all designed to meet hygiene, safety, and operational standards.",
      icon: <Grid size={24} />
    },
    {
      title: "Surgical Equipment & Consumables",
      description: "We supply and maintain a wide range of surgical equipment and medical consumables, ensuring accuracy, safety, and compliance with healthcare standards. Our services cover surgical instruments, sterilization units, diagnostic tools, and clinical devices, supported by scheduled maintenance, repairs, and timely service.",
      icon: <Stethoscope size={24} />
    },
    {
      title: "Industrial Incinerators",
      description: "We supply, install, and maintain high-efficiency incinerators designed for medical, industrial, and municipal waste management. Our systems comply with environmental and regulatory requirements, offering safe and reliable waste disposal. We also provide routine servicing, repairs, and operator training for optimal performance.",
      icon: <ShieldAlert size={24} />
    },
    {
      title: "Facility Management Consulting",
      description: "We offer expert consultation services to optimize your facility's operational footprint. Our experienced team conducts comprehensive site audits, energy assessments, and lifecycle analysis to develop customized maintenance strategies that minimize downtime and reduce long-term operational expenditures.",
      icon: <Activity size={24} />
    },
    {
      title: "General Maintenance & Repair",
      description: "Our general maintenance division handles all aspects of routine building upkeep, ensuring structural integrity and aesthetic appeal. From masonry and professional painting to minor civil works and carpentry, we preserve the value and safety of your commercial or residential property.",
      icon: <Wrench size={24} />
    },
    {
      title: "Electrical Installations & Safety",
      description: "We deliver complete electrical engineering solutions, including high-voltage installations, switchgear maintenance, and comprehensive energy audits. Our certified electricians ensure your power distribution networks operate safely, efficiently, and in strict compliance with all national electrical codes.",
      icon: <Zap size={24} />
    },
    {
      title: "Commercial Plumbing Systems",
      description: "Our plumbing experts manage complex water supply networks, industrial pump stations, and waste management systems. We provide advanced leak detection, pipe retrofitting, and emergency repairs to guarantee seamless water flow and prevent costly water damage to your infrastructure.",
      icon: <Droplet size={24} />
    }
  ];

  return (
    <div className="w-full bg-white pb-32">
      {/* Header */}
      <div className="bg-black text-white py-28 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125 select-none pointer-events-none"></div>
        <div className="container mx-auto relative z-10 max-w-7xl text-left">
          <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-3">WHAT WE DELIVER</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight uppercase mb-6">
            TECHNICAL SERVICES.
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl font-sans">
            End-to-end industrial engineering, clinical installations, and facility management at the highest safety compliance standards.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 md:px-16 mt-28 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
              className="bg-neutral-50/50 backdrop-blur-sm border border-neutral-100 p-8 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300 group flex flex-col justify-between h-full rounded-3xl"
            >
              <div>
                <div className="w-14 h-14 bg-white border border-neutral-100 shadow-sm group-hover:bg-orange-500 group-hover:border-orange-500 group-hover:text-black flex items-center justify-center mb-6 transition-all duration-300 rounded-2xl">
                  {React.cloneElement(service.icon, { size: 24, className: "text-black transition-colors" })}
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-tight text-black mb-3 group-hover:text-orange-500 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-neutral-500 font-sans text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Custom Sourcing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border border-neutral-800 p-10 bg-black/95 backdrop-blur-xl text-white relative overflow-hidden rounded-3xl shadow-xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ff6b00_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 max-w-4xl">
            <span className="text-orange-500 font-sans text-xs font-bold uppercase tracking-widest block mb-2">BEYOND OUR CATALOG</span>
            <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Unlimited Procurement & Sourcing</h3>
            <p className="text-neutral-400 font-sans text-base leading-relaxed mb-8">
              If it belongs in a commercial, clinical, or residential facility, we can source it. Beyond our specialized engineering supplies, we maintain a vast network of manufacturers and distributors to procure general products—from plumbing fixtures like showers and faucets, to architectural hardware like door stoppers, hinges, and custom fittings. Whatever your project requires, we deliver it directly to your site.
            </p>
            <button 
              onClick={() => navigateTo && navigateTo('contact')}
              className="inline-flex items-center justify-center bg-orange-500 text-black px-8 py-4 font-sans font-bold uppercase tracking-wider text-xs hover:bg-white hover:text-black transition-all rounded-full shadow-lg group"
            >
              Contact Procurement
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

