import React, { useState } from 'react';

import { 
  Wrench, 
  Zap, 
  Paintbrush, 
  Hammer, 
  Settings, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Globe
} from 'lucide-react';

type Language = 'en' | 'es';

const content = {
  en: {
    nav: { services: 'Services', about: 'About', contact: 'Contact' },
    actions: { callNow: 'Call Now', quote: 'Get a Free Quote', lang: 'Español', send: 'Send Request' },
    hero: {
      title: 'Reliable Handyman Services in New York',
      sub: 'Expert solutions for plumbing, electrical, and repairs. Fast, professional, and trusted by homeowners across NYC.',
    },
    services: {
      title: 'Professional Services',
      items: [
        { id: 'str1', title: 'Plumbing', desc: 'Fixing leaks, installing fixtures, and unclogging drains with expert care.', icon: 'Wrench' },
        { id: 'str2', title: 'Electrical', desc: 'Safe electrical repairs, light fixture installations, and wiring updates.', icon: 'Zap' },
        { id: 'str3', title: 'Painting', desc: 'Transform your space with our premium interior and exterior painting.', icon: 'Paintbrush' },
        { id: 'str4', title: 'Carpentry', desc: 'Custom woodwork, cabinet installation, and structural repairs.', icon: 'Hammer' },
        { id: 'str5', title: 'General Repair', desc: 'No job is too small. Quick fixes and comprehensive home maintenance.', icon: 'Tool' },
      ]
    },
    about: {
      title: 'About Quirino Handyman',
      text: 'Serving New York with dedication and craft. We prioritize quality work, fair pricing, and punctuality. Whether it\'s a leaky faucet or a full room repaint, we handle your home with professional care.'
    },
    contact: {
      title: 'Contact Information',
      name: 'Name',
      email: 'Email',
      timeline: 'Preferred Timeline',
      urgent: 'Urgent (ASAP)',
      thisWeek: 'Sometime this week',
      flexible: 'Flexible / No rush',
      upload: 'Upload a Photo (Optional)',
      message: 'How can we help you?',
      phoneLabel: 'Call Us Directly',
      emailLabel: 'Send an Email',
      phone: '347-472-6966',
      mail: 'santosmisales32@gmail.com'
    },
    footer: '© 2026 Quirino Handyman. New York, NY. All rights reserved.'
  },
  es: {
    nav: { services: 'Servicios', about: 'Nosotros', contact: 'Contacto' },
    actions: { callNow: 'Llamar', quote: 'Presupuesto Gratis', lang: 'English', send: 'Enviar Solicitud' },
    hero: {
      title: 'Servicios de Handyman Confiables en NY',
      sub: 'Soluciones expertas en plomería, electricidad y reparaciones. Rápido, profesional y confiable.',
    },
    services: {
      title: 'Servicios Profesionales',
      items: [
        { id: 'str1', title: 'Plomería', desc: 'Reparación de fugas, instalación de accesorios y destape de desagües con cuidado experto.', icon: 'Wrench' },
        { id: 'str2', title: 'Electricidad', desc: 'Reparaciones eléctricas seguras, instalación de luces y actualizaciones de cableado.', icon: 'Zap' },
        { id: 'str3', title: 'Pintura', desc: 'Transforme su espacio con nuestra pintura interior y exterior de primera calidad.', icon: 'Paintbrush' },
        { id: 'str4', title: 'Carpintería', desc: 'Trabajo en madera a medida, instalación de gabinetes y reparaciones estructurales.', icon: 'Hammer' },
        { id: 'str5', title: 'Reparación General', desc: 'Ningún trabajo es demasiado pequeño. Soluciones rápidas y mantenimiento.', icon: 'Tool' },
      ]
    },
    about: {
      title: 'Sobre Quirino Handyman',
      text: 'Sirviendo a Nueva York con dedicación. Priorizamos el trabajo de calidad, precios justos y puntualidad. Ya sea un grifo que gotea o repintar una habitación entera, cuidamos su hogar con profesionalismo.'
    },
    contact: {
      title: 'Información de Contacto',
      name: 'Nombre',
      email: 'Correo',
      timeline: 'Tiempo Preferido',
      urgent: 'Urgente (Lo antes posible)',
      thisWeek: 'Esta semana',
      flexible: 'Flexible / Sin prisa',
      upload: 'Subir una Foto (Opcional)',
      message: '¿Cómo podemos ayudarle?',
      phoneLabel: 'Llámenos',
      emailLabel: 'Envíenos un Correo',
      phone: '347-472-6966',
      mail: 'santosmisales32@gmail.com'
    },
    footer: '© 2026 Quirino Handyman. New York, NY. Todos los derechos reservados.'
  }
};

const iconMap = {
  Wrench: <Wrench className="w-8 h-8 text-blue-600 mb-2 mx-auto" />,
  Zap: <Zap className="w-8 h-8 text-blue-600 mb-2 mx-auto" />,
  Paintbrush: <Paintbrush className="w-8 h-8 text-blue-600 mb-2 mx-auto" />,
  Hammer: <Hammer className="w-8 h-8 text-blue-600 mb-2 mx-auto" />,
  Tool: <Settings className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = content[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-700 scroll-smooth overflow-x-hidden">
      
      {/* Header / Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-blue-900 text-white px-4 sm:px-8 py-3 flex justify-between items-center shrink-0 shadow-md">
        <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
          <span>🛠️</span>
          <span>Quirino Handyman</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wide">
            <a href="#services" className="hover:text-blue-200 transition-colors">{t.nav.services}</a>
            <a href="#about" className="hover:text-blue-200 transition-colors">{t.nav.about}</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">{t.nav.contact}</a>
          </div>
          <button 
            onClick={toggleLang} 
            className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded text-xs border border-white/30 flex items-center gap-1 font-bold tracking-wide transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{t.actions.lang}</span>
          </button>
          
          <button 
            className="md:hidden p-1 text-white hover:bg-white/10 rounded transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             {isMobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white absolute top-14 w-full z-40 border-t border-blue-700 shadow-lg">
          <div className="flex flex-col px-4 py-3 space-y-2 font-medium uppercase tracking-wide text-sm">
            <a href="#services" onClick={closeMenu} className="block py-3 hover:bg-blue-700 px-3 rounded">{t.nav.services}</a>
            <a href="#about" onClick={closeMenu} className="block py-3 hover:bg-blue-700 px-3 rounded">{t.nav.about}</a>
            <a href="#contact" onClick={closeMenu} className="block py-3 hover:bg-blue-700 px-3 rounded">{t.nav.contact}</a>
          </div>
        </div>
      )}

      <main className="flex-1 shrink-0 flex flex-col">
        {/* Hero Section */}
        <section className="bg-white px-4 sm:px-8 py-10 lg:py-16 xl:py-20 flex justify-center text-center lg:text-left lg:justify-between items-center gap-12 shrink-0 border-b border-slate-100 w-full">
           <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
             <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-blue-900 leading-tight mb-4 tracking-tight">
                  {t.hero.title}
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {t.hero.sub}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                   <a href="#contact" className="bg-blue-600 text-white px-8 py-3.5 rounded-md font-bold shadow-lg hover:brightness-110 transition-all uppercase text-sm tracking-wide inline-flex justify-center items-center">
                     {t.actions.quote}
                   </a>
                   <a href="#services" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3.5 rounded-md font-bold transition-all uppercase text-sm tracking-wide inline-flex justify-center items-center">
                     {t.nav.services}
                   </a>
                </div>
             </div>
             
             {/* Abstract Layout graphic matching the theme */}
             <div className="hidden lg:flex shrink-0 w-80 h-48 bg-sky-50 rounded-2xl items-center justify-center border-2 border-dashed border-blue-200">
                <div className="text-center">
                   <div className="text-4xl mb-2 flex justify-center">🏘️</div>
                   <div className="text-blue-900 font-bold uppercase text-xs tracking-widest">Serving All Boroughs</div>
                </div>
             </div>
           </div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-4 sm:px-8 py-12 lg:py-20 bg-slate-50 flex-1 w-full">
           <div className="max-w-7xl mx-auto">
             <h2 className="text-center text-2xl lg:text-3xl font-bold text-blue-900 mb-10">{t.services.title}</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
               {t.services.items.map(service => (
                  <div key={service.id} className="bg-white p-5 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform border border-slate-50">
                     {iconMap[service.icon as keyof typeof iconMap]}
                     <h3 className="font-bold text-sm text-slate-800 mt-2 tracking-wide">{service.title}</h3>
                     <p className="text-xs text-slate-500 line-clamp-3 mt-2 hidden md:block">{service.desc}</p>
                  </div>
               ))}
             </div>
             
             {/* About & Contact Side-by-Side */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 lg:mt-24">
                <div id="about">
                  <h3 className="font-bold text-xl lg:text-2xl text-blue-900 mb-3">{t.about.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-10 tracking-wide">{t.about.text}</p>
                  
                  <h4 className="font-bold text-lg text-blue-900 mb-4">{t.contact.title}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100 transition-colors hover:border-blue-200">
                      <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold tracking-widest">{t.contact.phoneLabel}</div>
                        <a href={`tel:${t.contact.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-blue-900 hover:text-blue-700">{t.contact.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100 transition-colors hover:border-blue-200">
                      <div className="w-10 h-10 bg-sky-50 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-bold tracking-widest">{t.contact.emailLabel}</div>
                        <a href={`mailto:${t.contact.mail}`} className="font-bold text-blue-900 hover:text-blue-700">{t.contact.mail}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="contact" className="bg-white p-6 lg:p-8 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] border border-slate-100 h-fit mt-2 lg:mt-0">
                  <h4 className="font-bold text-lg text-blue-900 mb-4 tracking-wide">{t.contact.message}</h4>
                  
                  {/* UPDATED FORM: Added encType for files */}
                  <form className="space-y-4" action={`https://formsubmit.co/${t.contact.mail}`} method="POST" encType="multipart/form-data">
                    <input type="hidden" name="_subject" value="New Service Request from Quirino Handyman Website" />
                    <input type="hidden" name="_template" value="table" />
                    
                    {/* Anti-spam honeypot */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="name"
                        placeholder={t.contact.name} 
                        className="text-xs sm:text-sm p-3 border border-slate-200 rounded-md w-full focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none transition-shadow" 
                        required 
                      />
                      <input 
                        type="email" 
                        name="email"
                        placeholder={t.contact.email} 
                        className="text-xs sm:text-sm p-3 border border-slate-200 rounded-md w-full focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none transition-shadow" 
                        required 
                      />
                    </div>

                    {/* NEW: Timeline Dropdown */}
                    <select 
                      name="timeline" 
                      className="text-xs sm:text-sm p-3 border border-slate-200 rounded-md w-full focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none transition-shadow bg-white" 
                      required
                    >
                      <option value="">{t.contact.timeline}...</option>
                      <option value="urgent">{t.contact.urgent}</option>
                      <option value="this-week">{t.contact.thisWeek}</option>
                      <option value="flexible">{t.contact.flexible}</option>
                    </select>

                    <textarea 
                      name="message"
                      placeholder={t.contact.message} 
                      rows={4} 
                      className="text-xs sm:text-sm p-3 border border-slate-200 rounded-md w-full focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:outline-none resize-none transition-shadow" 
                      required
                    ></textarea>

                    {/* NEW: File Upload */}
                    <div>
                      <label className="text-xs font-bold text-slate-500 mb-1 block">{t.contact.upload}</label>
                      <input 
                        type="file" 
                        name="attachment" 
                        accept="image/*"
                        className="text-xs sm:text-sm w-full text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors cursor-pointer"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 w-full py-3 mt-2 rounded-md text-sm font-bold text-white uppercase tracking-wide transition-colors shadow-md"
                    >
                      {t.actions.send}
                    </button>
                  </form>
                </div>
             </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-slate-300 px-4 sm:px-8 py-5 text-xs sm:text-sm flex flex-col md:flex-row justify-between items-center shrink-0 border-t border-blue-800 gap-4 w-full z-10 relative">
        <div className="flex gap-4 sm:gap-6 font-medium text-slate-200">
           <span>{t.contact.phone}</span>
           <span className="hidden sm:inline">{t.contact.mail}</span>
        </div>
        <div className="text-center">{t.footer}</div>
        
      </footer>

      {/* Sticky Bottom Calling Button */}
      <a 
        href={`tel:${t.contact.phone.replace(/[^0-9]/g, '')}`} 
        className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 bg-green-500 text-white font-bold px-5 sm:px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-2 hover:bg-green-600 transition-transform hover:-translate-y-1"
      >
         <span className="text-xl">📞</span> 
         <span className="uppercase tracking-wide font-bold hidden sm:inline-block">{t.actions.callNow}</span>
      </a>
    </div>
  );
}