
import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Rules from './components/Rules';
import Prizes from './components/Prizes';
import Contact from './components/Contact';
import { EVENT_DATA } from './constants';

const App: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFooterVisible(true);
          // Once visible, we can stop observing
          if (footerRef.current) observer.unobserve(footerRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full z-[100] px-6 py-4" role="banner">
        <nav className="max-w-7xl mx-auto px-8 py-4 glass-panel rounded-full border border-white/20 flex items-center justify-between shadow-2xl" aria-label="முதன்மை வழிசெலுத்தல்">
          <div className="flex items-center gap-3">
            <img src="/itlogo.png" className="w-10 h-10 object-contain" alt="இளந்தூது சின்னம்" />
            <span className="text-2xl font-black text-white tracking-tighter hidden md:block" aria-hidden="true">{EVENT_DATA.orgName}</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={EVENT_DATA.regLink} 
              className="bg-gold text-dark px-8 py-2.5 rounded-full font-black text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-lg shadow-gold/20 focus-visible:ring-4 focus-visible:ring-gold/50"
              aria-label="முத்தமிழ் வித்தைகள் பணிப்பட்டறைக்கு பதிவு செய்யவும்"
            >
              பதிவு செய்க
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content" className="relative z-10" role="main">
        <Hero />
        
        <div className="relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true"></div>
          
          <EventDetails />
          <Rules />
          <Prizes />
          <Contact />
        </div>

        <section className="py-32 px-6 text-center relative bg-gradient-to-b from-transparent to-black" aria-labelledby="final-cta-heading">
          <div className="max-w-3xl mx-auto z-10 relative">
            <h2 id="final-cta-heading" className="text-4xl md:text-6xl font-bold gold-gradient-text mb-8">இணைவோம் இலக்கியத் திருவிழாவில்!</h2>
            <p className="text-xl text-white/90 mb-12 font-light leading-relaxed">
              முத்தமிழ் வித்தைகளை வெளிக்கொணரும் இந்தப் பயணத்தில் நீங்களும் ஒரு அங்கமாகுங்கள்.
            </p>
            <a 
              href={EVENT_DATA.regLink}
              className="group relative inline-flex items-center justify-center px-16 py-6 font-black text-dark transition-all duration-300 bg-gold rounded-full text-2xl shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:shadow-gold/60 focus-visible:ring-4 focus-visible:ring-gold/50"
              aria-label="உறுதி செய்து பதிவு செய்யவும்"
            >
              உறுதி செய்க
              <span className="ml-3 group-hover:translate-x-2 transition-transform" aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer 
        ref={footerRef}
        className={`bg-black py-20 px-6 border-t border-white/10 transition-all duration-[1200ms] ease-out transform ${
          footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        role="contentinfo"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-4xl font-black text-gold mb-4 tracking-tighter" aria-hidden="true">{EVENT_DATA.orgName}</div>
          <p className="text-white/70 text-sm uppercase tracking-[0.5em] mb-12">முத்தமிழ் வித்தைகள் 2026</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-12 border-t border-white/10 text-center md:text-left">
            <div>
              <p className="text-gold font-bold mb-4 uppercase text-xs tracking-widest">கல்லூரி</p>
              <address className="not-italic text-white/80 font-light">
                <p>{EVENT_DATA.college}</p>
                <p>{EVENT_DATA.location}</p>
              </address>
            </div>
            <div className="text-center">
              <p className="text-gold font-bold mb-4 uppercase text-xs tracking-widest">பதிப்பு</p>
              <p className="text-white/80 font-light">37-ஆம் ஆண்டு ஆசிரியர் குழு</p>
              <p className="text-white/80 font-light">இளந்தூது மாணவர் இதழ்</p>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-gold font-bold mb-4 uppercase text-xs tracking-widest">உதவி</p>
              <p className="text-white/80 font-light">நிபந்தனைகள்</p>
              <p className="text-white/80 font-light">வழிகாட்டல்</p>
            </div>
          </div>
          
          <div className="mt-20 flex flex-col items-center gap-2">
            <p className="text-[10px] text-white/50 uppercase tracking-[0.3em]">
              வடிவமைப்பு: இளந்தூது தொழில்நுட்பக் குழு
            </p>
            <p className="text-[12px] text-white/70 font-medium">
              Developer: <a href="https://github.com/pugazhexploit" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline transition-all">pugazhenthi</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
