/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ArrowRight, 
  ArrowUpRight, 
  Music, 
  Handshake, 
  Lightbulb, 
  Building2, 
  Mic2, 
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Send
} from 'lucide-react';

// --- Types ---
interface Concert {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  badge?: string;
}

const CONCERTS: Concert[] = [
  {
    id: 0,
    category: "CONCIERTO PRINCIPAL · 2025",
    title: "Requiem",
    subtitle: "for the Living",
    description: "Una obra coral de inmensa profundidad espiritual y belleza musical. Una pregunta que atraviesa cada nota: <span class='italic text-blue-300'>¿Qué elegís vivir hoy?</span>",
    date: "Por confirmar",
    location: "Buenos Aires",
    badge: "PRÓXIMAMENTE"
  },
  {
    id: 1,
    category: "ESPECIAL · 2024",
    title: "Concierto de Navidad",
    subtitle: "Villancicos y Tradiciones",
    description: "Una celebración mágica con las obras más queridas del repertorio navideño universal para toda la familia.",
    date: "20 de Diciembre",
    location: "Teatro Nacional"
  },
  {
    id: 2,
    category: "CICLO TEMÁTICO · 2024",
    title: "Especial de Películas",
    subtitle: "Soundtracks & Cinema",
    description: "Un viaje sonoro por las bandas sonoras más icónicas de la historia del cine, arregladas magistralmente para coro.",
    date: "15 de Noviembre",
    location: "Auditorio Nacional"
  },
  {
    id: 3,
    category: "FESTIVAL · 2024",
    title: "Choral Fest",
    subtitle: "Festival Internacional",
    description: "Encuentro de agrupaciones corales celebrando la diversidad de la música vocal en un entorno único.",
    date: "05 de Octubre",
    location: "Estadio Nacional"
  }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1514320298543-63e245191b6f?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200"
];

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-void/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center glow-blue">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-brand-light transition-colors">Estudio Choralia</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {['NOSOTROS', 'CONCIERTOS', 'REPERTORIO', 'AUDICIONES', 'GALERÍA', 'NEGOCIOS', 'CONTACTO'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-[10px] font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2.5 bg-brand-blue text-white text-[10px] font-bold tracking-[0.2em] rounded-sm hover:bg-brand-blue/80 transition-all glow-blue">
          ÚNETE AL CORO
        </button>
      </div>
    </nav>
  );
}

function Starfield() {
  return <div className="fixed inset-0 stars z-0 pointer-events-none" />;
}

export default function App() {
  const [activeConcertIndex, setActiveConcertIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(1);

  const activeConcert = CONCERTS[activeConcertIndex];

  return (
    <div className="relative min-h-screen bg-void selection:bg-brand-blue/30 overflow-x-hidden">
      <Starfield />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2000" 
            alt="Choir background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-void/40 to-void" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 text-brand-light font-bold tracking-[0.3em] text-[10px] uppercase mb-8"
          >
            <div className="h-[1px] w-12 bg-brand-blue/50" />
            TOP 200 MEJORES COROS DEL MUNDO
            <div className="h-[1px] w-12 bg-brand-blue/50" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-none tracking-tighter uppercase mb-6"
          >
            ESTUDIO <br /> CHORALIA
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Donde cada voz encuentra su lugar, <br />
            <span className="text-brand-blue font-bold">y el conjunto trasciende.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-brand-blue text-white text-[11px] font-bold tracking-[0.2em] rounded-sm hover:bg-brand-blue/80 transition-all flex items-center justify-center gap-3 glow-blue">
              PRÓXIMOS CONCIERTOS
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white text-[11px] font-bold tracking-[0.2em] rounded-sm hover:bg-white/10 transition-all">
              QUIENES SOMOS
            </button>
          </motion.div>
        </div>
      </section>

      {/* Performance Preview Section */}
      <section className="relative z-10 w-full aspect-video md:h-[80vh] group overflow-hidden border-y border-white/5">
        <img 
          src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=2000" 
          alt="Choir performance" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
        />
        <div className="absolute inset-0 bg-void/20 group-hover:bg-transparent transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 rounded-full bg-brand-blue/80 flex items-center justify-center backdrop-blur-md cursor-pointer border border-white/20 shadow-2xl transition-all"
          >
            <Play className="w-10 h-10 text-white fill-current ml-1" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-32 relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-brand-blue/50" />
              <span className="text-brand-blue text-[11px] font-bold tracking-[0.3em] uppercase">QUIÉNES SOMOS</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold leading-tight">
              Una comunidad <br />
              <span className="text-brand-blue">unida por la música</span>
            </h2>
            <div className="flex flex-col gap-6 text-white/60 font-medium leading-relaxed">
              <p>
                Estudio Choralia es un coro de voces mixtas fundado en Buenos Aires con la visión de elevar la música coral a una experiencia transformadora. Reunimos voces de distintas trayectorias bajo una dirección artística exigente.
              </p>
              <p>
                Nuestro repertorio abarca desde obras corales clásicas hasta composiciones contemporáneas, con el desafío permanente de presentar producciones de alto impacto artístico.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-4">
              <div>
                <div className="text-brand-blue font-serif text-4xl md:text-5xl font-black mb-2">30+</div>
                <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Voces Activas</div>
              </div>
              <div>
                <div className="text-brand-blue font-serif text-4xl md:text-5xl font-black mb-2">8</div>
                <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Años</div>
              </div>
              <div>
                <div className="text-brand-blue font-serif text-4xl md:text-5xl font-black mb-2">40+</div>
                <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase">Conciertos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-brand-dark/20 rounded-sm border border-white/5 flex items-center justify-center glass-panel">
              <span className="text-brand-blue font-serif text-5xl font-black tracking-tighter opacity-20 pointer-events-none uppercase">Estudio Choralia</span>
            </div>
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 lg:-left-20 bg-void border border-white/10 p-8 rounded-sm shadow-2xl glass-panel w-80"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-brand-light text-[10px] font-bold tracking-[0.2em] uppercase">PRÓXIMA FUNCIÓN</span>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-2">Requiem for the Living</h4>
              <p className="text-white/50 text-xs font-medium">Dan Forrest · Próximamente</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Concerts Section */}
      <section id="conciertos" className="py-32 relative z-10 bg-void/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-brand-blue/50" />
              <span className="text-brand-blue text-[11px] font-bold tracking-[0.3em] uppercase">AGENDA</span>
              <div className="h-[1px] w-8 bg-brand-blue/50" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold">Próximos Conciertos</h2>
          </div>

          <div className="bg-void border border-white/5 rounded-sm overflow-hidden flex flex-col lg:flex-row relative mb-16 glass-panel">
            {activeConcert.badge && (
              <div className="absolute top-8 left-8 z-20 px-4 py-2 bg-brand-blue/20 border border-brand-blue/40 rounded-sm backdrop-blur-md">
                <span className="text-brand-light text-[10px] font-bold tracking-[0.2em] uppercase">{activeConcert.badge}</span>
              </div>
            )}
            
            <div className="w-full lg:w-[45%] aspect-square lg:aspect-auto relative bg-brand-dark/20 overflow-hidden">
              <img 
                src={`https://images.unsplash.com/photo-1514320298543-63e245191b6f?auto=format&fit=crop&q=80&w=1200&sig=${activeConcertIndex}`} 
                alt="Concert visual" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/20 to-transparent" />
            </div>

            <div className="w-full lg:w-[55%] p-10 md:p-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeConcertIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-brand-light text-[11px] font-bold tracking-[0.3em] uppercase mb-6">{activeConcert.category}</div>
                  <h3 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-2">{activeConcert.title}</h3>
                  <div className="font-serif italic text-brand-blue text-3xl mb-8">{activeConcert.subtitle}</div>
                  <p 
                    className="text-white/60 text-base leading-relaxed mb-10 max-w-md"
                    dangerouslySetInnerHTML={{ __html: activeConcert.description }}
                  />
                  <div className="flex gap-16 mb-12">
                    <div>
                      <div className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">FECHA</div>
                      <div className="text-white font-medium">{activeConcert.date}</div>
                    </div>
                    <div>
                      <div className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">LUGAR</div>
                      <div className="text-white font-medium">{activeConcert.location}</div>
                    </div>
                  </div>
                  <button className="px-10 py-5 bg-brand-blue text-white text-[11px] font-bold tracking-[0.2em] rounded-sm hover:bg-brand-blue/80 transition-all w-fit glow-blue">
                    RECIBIR INFORMACIÓN
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {CONCERTS.map((concert, idx) => (
              <button 
                key={concert.id}
                onClick={() => setActiveConcertIndex(idx)}
                className={`px-8 py-4 text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm border transition-all ${
                  activeConcertIndex === idx 
                    ? 'bg-brand-blue border-brand-blue text-white glow-blue' 
                    : 'bg-void border-white/10 text-white/50 hover:border-white/30'
                }`}
              >
                {concert.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galería" className="py-32 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center justify-between">
          <h2 className="font-serif text-4xl font-bold tracking-tight">GALERÍA</h2>
          <div className="flex gap-4">
            <button 
              onClick={() => setGalleryIndex(prev => Math.max(0, prev - 1))}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setGalleryIndex(prev => Math.min(GALLERY_IMAGES.length - 1, prev + 1))}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all text-white/50 hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex gap-8 px-6 md:px-0 transition-transform duration-700 ease-out" style={{ transform: `translateX(calc(50% - ${galleryIndex * 40}vw - 20vw))` }}>
          {GALLERY_IMAGES.map((src, idx) => (
            <motion.div 
              key={idx}
              animate={{ 
                scale: galleryIndex === idx ? 1.1 : 0.85,
                opacity: galleryIndex === idx ? 1 : 0.4
              }}
              className="w-[80vw] md:w-[40vw] aspect-[4/3] flex-shrink-0 relative rounded-sm overflow-hidden cursor-pointer shadow-2xl border border-white/10"
              onClick={() => setGalleryIndex(idx)}
            >
              <img src={src} alt="Gallery" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-void/20" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Business Section */}
      <section id="negocios" className="py-32 relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 bg-brand-dark/30 border border-brand-blue/30 rounded-sm text-brand-light text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
            ALIANZAS
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">SERVICIOS EMPRESARIALES</h2>
          <p className="max-w-2xl mx-auto text-white/60 leading-relaxed font-light text-lg">
            Elevando eventos corporativos a través de una precisión sonora etérea. Ofrecemos experiencias corales inmersivas y oportunidades de colaboración artística.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Music, 
              title: "Contrataciones", 
              desc: "Servicios corales profesionales diseñados para aportar profundidad y sofisticación a eventos privados y corporativos." 
            },
            { 
              icon: Handshake, 
              title: "Patrocinios", 
              desc: "Oportunidades de asociación exclusivas que alinean su marca con el impacto cultural y la excelencia artística." 
            },
            { 
              icon: Lightbulb, 
              title: "Coproducciones", 
              desc: "Proyectos artísticos colaborativos y producciones musicales que desafían los límites sonoros convencionales." 
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-panel p-10 flex flex-col items-center text-center gap-6 group rounded-sm"
            >
              <div className="w-16 h-16 rounded-full bg-brand-dark/20 border border-brand-blue/20 flex items-center justify-center transition-all group-hover:border-brand-blue group-hover:glow-blue">
                <item.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              <div className="pt-4 w-full border-t border-white/5 group-hover:border-brand-blue/20 transition-all" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-12 py-5 bg-brand-blue text-white text-[11px] font-bold tracking-[0.2em] rounded-sm hover:bg-brand-blue/80 transition-all glow-blue">
            SOLICITAR PROPUESTA
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contacto" className="relative z-10 pt-32 pb-16 border-t border-white/10 bg-void/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div id="se-parte" className="lg:col-span-4 flex flex-col gap-8">
              <h3 className="font-serif text-3xl font-bold">SÉ PARTE</h3>
              <p className="text-white/50 leading-relaxed font-light">
                Únete a la resonancia. Buscamos voces que entiendan la profunda dimensión de la precisión absoluta y la pasión compartida.
              </p>
              <a href="#" className="flex items-center gap-3 text-brand-light text-[11px] font-bold tracking-widest uppercase group">
                AUDITION DETAILS
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <h3 className="font-serif text-3xl font-bold uppercase">Categorías</h3>
              <ul className="flex flex-col gap-5">
                {[
                  { icon: Building2, text: "Eventos Corporativos" },
                  { icon: Mic2, text: "Grabación de Soundtracks" },
                  { icon: GraduationCap, text: "Masterclasses" }
                ].map((li, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer group">
                    <li.icon className="w-5 h-5 text-brand-blue group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{li.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <h3 className="font-serif text-3xl font-bold">CONTACTO</h3>
              <form className="flex flex-col gap-6">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="bg-transparent border-0 border-b border-white/20 pb-2 focus:ring-0 focus:border-brand-blue transition-all outline-none placeholder:text-white/20 text-sm"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-0 border-b border-white/20 pb-2 focus:ring-0 focus:border-brand-blue transition-all outline-none placeholder:text-white/20 text-sm"
                />
                <button type="button" className="w-full py-4 bg-white/5 border border-white/10 rounded-sm hover:bg-brand-blue hover:border-brand-blue transition-all group flex items-center justify-center gap-3">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase">ENVIAR MENSAJE</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center glow-blue">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-black tracking-tighter uppercase">Estudio Choralia</span>
            </div>

            <div className="flex gap-8">
              {['LEGAL', 'PRIVACY POLICY', 'COOKIES'].map(item => (
                <a key={item} href="#" className="text-[10px] font-bold tracking-widest text-white/30 hover:text-white transition-colors uppercase">
                  {item}
                </a>
              ))}
            </div>

            <div className="text-center text-brand-blue/60 text-[10px] font-bold tracking-[0.3em] uppercase">
              © 2024 ESTUDIO CHORALIA. TODOS LOS DERECHOS RESERVADOS.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
