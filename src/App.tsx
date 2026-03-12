/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Instagram, 
  ChevronRight, 
  Star, 
  Clock, 
  Menu, 
  X,
  Sparkles,
  ShieldCheck,
  Heart
} from 'lucide-react';

// Mock data based on the clinic's profile
const CLINIC_DATA = {
  name: "Greicy Garcia",
  tagline: "Estética Avançada & Bem-estar",
  about: "Localizada no coração de Florianópolis, a Clínica Greicy Garcia é dedicada a proporcionar experiências únicas em estética. Combinamos tecnologia de última geração com um olhar artístico para realçar sua beleza natural de forma sutil e elegante.",
  services: [
    {
      title: "Harmonização Facial",
      description: "Equilíbrio e proporção facial com resultados naturais e sofisticados.",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Bioestimuladores",
      description: "Tratamentos que estimulam a produção natural de colágeno para uma pele firme.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Protocolos Corporais",
      description: "Tecnologias avançadas para contorno corporal e redução de medidas.",
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800"
    }
  ],
  testimonials: [
    {
      name: "Analuzi Lobo",
      text: "Fiz um peeling com a Greicy e fiquei extremamente satisfeita com o resultado. Além de demonstrar conhecimento técnico, o atendimento foi feito com cuidado, carinho e atenção. O ambiente é acolhedor, com música ambiente e limpo.",
      rating: 5
    },
    {
      name: "Andréia Senna",
      text: "Foi uma experiência muito gratificante! A Greicy faz uma limpeza de pele extremamente bem feita, com muito cuidado, atenção e delicadeza em cada etapa. Me senti acolhida durante todo o processo.",
      rating: 5
    },
    {
      name: "Valesca Farias",
      text: "Faço tratamento para acne com a Greicy desde 2023. Os resultados são ótimos, super recomendo! Ela é muito atenciosa, faz o tratamento personalizado sempre com produtos de qualidade.",
      rating: 5
    },
    {
      name: "Sulmara Silva",
      text: "A Greicy é um ser iluminado. Com suas mãos de fada deixou minha pele macia e leve. Ela é uma excelente profissional, muito atenciosa e cuidadosa em cada detalhe.",
      rating: 5
    },
    {
      name: "Amanda Raymundo",
      text: "Greicy é uma profissional muito atenciosa além de ter mãos de fada! Espaço muito aconchegante, produtos de excelente qualidade, você entra em uma sessão e sai leve para a semana toda.",
      rating: 5
    },
    {
      name: "Ana Carolina Thomé",
      text: "A limpeza é completa, inclui peeling, máscara, teve até massagem. Profissional calma, com mãos delicadas, e ambiente ótimo. Recomendo para qualquer um.",
      rating: 5
    }
  ],
  address: "R. Ten. Silveira, 225 - Centro, Florianópolis - SC, 88010-300",
  phone: "+55 (48) 98479-4189",
  instagram: "@clinicagreicygarcia",
  heroImage: "https://i.imgur.com/5CAgOcD.jpg",
  heroVideo: "https://i.imgur.com/62VWdXy.mp4",
  aboutImage: "https://i.imgur.com/NRte7M8.jpg",
  gallery: [
    { url: "https://i.imgur.com/moiaTLk.jpg", type: "image" },
    { url: "https://i.imgur.com/62VWdXy.jpg", type: "image" },
    { url: "https://i.imgur.com/PH3BDh1.jpg", type: "image" },
    { url: "https://i.imgur.com/F9wIoUE.jpg", type: "image" },
    { url: "https://i.imgur.com/QSZ6i8Z.jpg", type: "image" },
    { url: "https://i.imgur.com/lbqI1Pu.jpg", type: "image" },
    { url: "https://i.imgur.com/oDWTc5v.jpg", type: "image" },
    { url: "https://i.imgur.com/oQeRcBx.jpg", type: "image" },
    { url: "https://i.imgur.com/xQ6MSa7.jpg", type: "image" },
    { url: "https://i.imgur.com/P1TQZB2.jpg", type: "image" },
    { url: "https://i.imgur.com/ZBcpZk3.jpg", type: "image" },
    { url: "https://i.imgur.com/AmRYFyd.jpg", type: "image" },
    { url: "https://i.imgur.com/ACHgfFD.jpg", type: "image" },
    { url: "https://i.imgur.com/TmMcgeM.jpg", type: "image" },
    { url: "https://i.imgur.com/2ZChJZ6.jpg", type: "image" },
    { url: "https://i.imgur.com/eswd1b4.jpg", type: "image" },
    { url: "https://i.imgur.com/H7cGXy4.jpg", type: "image" },
    { url: "https://i.imgur.com/LVpMleX.jpg", type: "image" },
    { url: "https://i.imgur.com/LlyNKmt.jpg", type: "image" },
    { url: "https://i.imgur.com/zq7qMGj.jpg", type: "image" },
    { url: "https://i.imgur.com/ko8R7TD.jpg", type: "image" },
    { url: "https://i.imgur.com/pxAlswB.jpg", type: "image" },
    { url: "https://i.imgur.com/3hbfWgC.jpg", type: "image" },
    { url: "https://i.imgur.com/JioWGJ2.jpg", type: "image" },
    { url: "https://i.imgur.com/PDV9dNK.jpg", type: "image" }
  ]
};

const SmoothMedia = ({ item, index }: { item: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
      className="break-inside-avoid rounded-[32px] overflow-hidden group relative bg-brand-cream/10 mb-8 shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={item.url}
          alt={`Galeria ${index + 1}`}
          referrerPolicy="no-referrer"
          className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-[10px] font-bold text-white">{index + 1}</span>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-brand-cream/80 backdrop-blur-xl py-4 border-b border-brand-gold/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 border border-brand-gold flex items-center justify-center rounded-full">
            <span className="font-serif text-lg text-brand-gold">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.2em] uppercase text-brand-dark leading-none">Greicy Garcia</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-semibold mt-1">Estética de Prestígio</span>
          </div>
        </div>

        <div className="hidden lg:flex space-x-12 items-center">
          {['Serviços', 'Galeria', 'Sobre', 'Depoimentos'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] text-brand-dark/60 hover:text-brand-gold transition-all duration-500 luxury-underline font-medium">
              {item}
            </a>
          ))}
          <a 
            href={`https://instagram.com/${CLINIC_DATA.instagram.replace('@', '')}`} 
            target="_blank" 
            rel="noreferrer"
            className="text-brand-dark/60 hover:text-brand-gold transition-colors duration-500"
          >
            <Instagram size={18} />
          </a>
          <button className="border border-brand-dark px-10 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-dark hover:text-brand-cream transition-all duration-700 rounded-full font-semibold">
            Agendar
          </button>
        </div>

        <button className="lg:hidden text-brand-dark p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-t border-brand-gold/10 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="py-12 px-8 flex flex-col space-y-8">
              {['Serviços', 'Galeria', 'Sobre', 'Depoimentos'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-serif text-brand-dark italic" onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="bg-brand-dark text-brand-cream py-5 rounded-full uppercase tracking-[0.3em] text-[10px] font-bold">
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="início" className="relative h-screen flex items-center overflow-hidden bg-brand-cream">
      {/* Vertical Rail Left */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center space-y-12 z-20">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-px bg-brand-gold/30"
        />
        <a 
          href={`https://instagram.com/${CLINIC_DATA.instagram.replace('@', '')}`} 
          target="_blank" 
          rel="noreferrer" 
          className="w-10 h-10 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-500"
        >
          <Instagram size={18} />
        </a>
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-px bg-brand-gold/30"
        />
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src={CLINIC_DATA.heroImage} 
          className="w-full h-full object-cover opacity-60 scale-105"
          alt="Hero Background"
        />
        <video 
          src={CLINIC_DATA.heroVideo} 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          onCanPlay={(e) => e.currentTarget.style.opacity = "0.6"}
          onError={(e) => e.currentTarget.style.display = "none"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/40 via-transparent to-brand-cream" />
        <div className="absolute inset-0 bg-brand-dark/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="w-12 h-px bg-brand-gold"></div>
              <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold">
                Florianópolis • SC
              </span>
            </motion.div>
            
            <h1 className="text-[12vw] lg:text-[8vw] font-serif leading-[0.85] text-brand-dark mb-12 tracking-tighter overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="block"
              >
                A Arte da
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                className="italic font-light text-brand-gold ml-[0.5em] block"
              >
                Estética
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="block"
              >
                Superior.
              </motion.span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-8"
            >
              <button className="group relative overflow-hidden bg-brand-dark text-brand-cream px-12 py-6 rounded-full uppercase tracking-[0.3em] text-[10px] font-bold transition-all duration-700 hover:pr-16">
                <span className="relative z-10">Iniciar Jornada</span>
                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500" size={16} />
              </button>
              
              <a 
                href={`https://instagram.com/${CLINIC_DATA.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500">
                  <Instagram size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-dark font-bold">Ver no Instagram</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-brand-dark/40 font-bold">Scroll</span>
        <motion.div 
          animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-brand-gold"
        />
      </motion.div>
    </section>
  );
};

const FeaturedVideo = () => {
  return (
    <section className="py-32 bg-brand-dark overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold">Alta Performance</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-cream leading-[1.1]">
                Excelência <br />
                <span className="italic font-light text-brand-gold">em cada detalhe.</span>
              </h2>
            </div>
            
            <p className="text-brand-cream/50 font-medium leading-relaxed text-sm uppercase tracking-widest max-w-sm">
              Combinamos tecnologia de ponta com um olhar artístico para resultados que transcendem o comum.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-cream/10">
              <div>
                <span className="block text-brand-gold text-2xl font-serif mb-1">100%</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-cream/40 font-bold">Personalizado</span>
              </div>
              <div>
                <span className="block text-brand-gold text-2xl font-serif mb-1">Premium</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-cream/40 font-bold">Tecnologia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative perspective-1000"
          >
            <div className="absolute -inset-4 border border-brand-gold/20 rounded-[40px] -z-10" />
            <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] bg-brand-dark">
              <img
                src="https://i.imgur.com/moiaTLk.jpg"
                alt="Excelência em Estética"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="serviços" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Especialidades</span>
            <h2 className="font-serif text-6xl text-brand-dark leading-tight">
              Tratamentos <br />
              <span className="italic font-light">Transformadores.</span>
            </h2>
          </div>
          <p className="text-brand-dark/50 text-sm uppercase tracking-widest font-medium max-w-xs lg:text-right">
            Ciência e arte em perfeita harmonia para resultados naturais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {CLINIC_DATA.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden mb-8">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-card rounded-2xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[10px] text-brand-dark uppercase tracking-widest font-bold">Ver Detalhes</p>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-brand-dark mb-4 group-hover:text-brand-gold transition-colors duration-300">{service.title}</h3>
              <p className="text-brand-dark/60 text-sm leading-relaxed font-medium">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden">
              <img 
                src={CLINIC_DATA.aboutImage} 
                alt="Greicy Garcia" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-gold rounded-full flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl border-8 border-white">
              <span className="font-serif text-4xl leading-none mb-2">10+</span>
              <span className="text-[9px] uppercase tracking-widest font-bold leading-tight">Anos de <br />Experiência</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-12"
          >
            <div className="space-y-6">
              <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold">A Profissional</span>
              <h2 className="font-serif text-6xl text-brand-dark leading-tight">
                Greicy <br />
                <span className="italic font-light text-brand-gold">Garcia.</span>
              </h2>
            </div>
            
            <p className="text-lg text-brand-dark/70 leading-relaxed font-medium">
              {CLINIC_DATA.about}
            </p>

            <div className="space-y-8 pt-8 border-t border-brand-dark/5">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-1">Qualificação Técnica</h4>
                  <p className="text-sm text-brand-dark/50 font-medium">Especializações constantes nos melhores protocolos mundiais.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-1">Atendimento Humanizado</h4>
                  <p className="text-sm text-brand-dark/50 font-medium">Cada paciente é único, cada tratamento é uma obra de arte.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Reconhecimento</span>
          <h2 className="font-serif text-6xl text-brand-cream">Vozes de Satisfação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_DATA.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[32px] border border-brand-cream/10 bg-brand-cream/[0.02] flex flex-col justify-between group hover:bg-brand-gold/5 transition-all duration-700"
            >
              <div className="space-y-8">
                <div className="flex space-x-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-cream/70 italic font-serif text-xl leading-relaxed">"{t.text}"</p>
              </div>
              <div className="mt-12 pt-8 border-t border-brand-cream/5">
                <span className="block text-brand-gold text-sm uppercase tracking-widest font-bold">{t.name}</span>
                <span className="text-[9px] uppercase tracking-widest text-brand-cream/30 font-bold">Cliente Verificada</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="galeria" className="py-32 bg-brand-cream/40 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Portfólio</span>
          <h2 className="font-serif text-6xl text-brand-dark">Galeria de Resultados</h2>
        </div>

        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {CLINIC_DATA.gallery.map((item, i) => (
            <SmoothMedia key={i} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="contato" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Localização</span>
            <h2 className="font-serif text-6xl text-brand-dark mb-12 leading-tight">
              Onde a <br />
              <span className="italic font-light">Beleza Acontece.</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-1">Endereço</h4>
                  <p className="text-brand-dark/50 font-medium leading-relaxed">{CLINIC_DATA.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-1">Contato</h4>
                  <p className="text-brand-dark/50 font-medium leading-relaxed">{CLINIC_DATA.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-dark mb-1">Horário</h4>
                  <p className="text-brand-dark/50 font-medium leading-relaxed">Segunda a Sexta: 09:00 - 19:00</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${CLINIC_DATA.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-16 inline-flex items-center space-x-4 bg-brand-dark text-brand-cream px-10 py-5 rounded-full uppercase tracking-widest text-[10px] font-bold hover:bg-brand-gold transition-all duration-500 group"
            >
              <span>Agendar Consulta</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-brand-cream relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.123456789012!2d-48.548!3d-27.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzQyLjAiUyA0OMKwMzInNTIuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center group-hover:bg-brand-gold transition-all duration-500">
                <span className="font-serif text-2xl text-brand-gold group-hover:text-brand-dark">G</span>
              </div>
              <span className="font-serif text-2xl tracking-widest uppercase">Greicy Garcia</span>
            </div>
            <p className="text-brand-cream/40 text-lg leading-relaxed font-light max-w-md italic">
              "Redefinindo os padrões da estética avançada através da excelência técnica e do cuidado personalizado."
            </p>
            <div className="flex space-x-6">
              <a 
                href={`https://instagram.com/${CLINIC_DATA.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Navegação</h4>
              <ul className="space-y-4">
                {['Início', 'Serviços', 'Sobre', 'Galeria', 'Contato'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm text-brand-cream/50 hover:text-brand-gold transition-colors font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2">
              <h4 className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-8">Newsletter</h4>
              <p className="text-sm text-brand-cream/40 mb-8 font-medium">Receba novidades e conteúdos exclusivos sobre estética.</p>
              <div className="flex border-b border-brand-cream/10 pb-4 group focus-within:border-brand-gold transition-colors">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="bg-transparent border-none outline-none flex-grow text-sm font-medium placeholder:text-brand-cream/20"
                />
                <button className="text-brand-gold uppercase tracking-widest text-[10px] font-bold hover:opacity-70 transition-opacity">Assinar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-cream/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-brand-cream/20 uppercase tracking-[0.3em] font-bold">
            © 2024 Greicy Garcia Estética. Todos os direitos reservados.
          </p>
          <div className="flex space-x-8 text-[10px] text-brand-cream/20 uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedVideo />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      
      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
        <a 
          href={`https://instagram.com/${CLINIC_DATA.instagram.replace('@', '')}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-brand-dark p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group border border-brand-gold/20"
        >
          <Instagram size={24} />
          <span className="absolute right-full mr-4 bg-brand-dark text-brand-cream px-4 py-2 rounded-lg text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Siga-nos no Instagram
          </span>
        </a>
        <a 
          href="https://wa.me/5548984794189" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-brand-gold text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        >
          <Phone size={24} />
          <span className="absolute right-full mr-4 bg-brand-dark text-brand-cream px-4 py-2 rounded-lg text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Agendar via WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}
