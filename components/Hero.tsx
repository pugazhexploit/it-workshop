
import React from 'react';
import { EVENT_DATA, Logo } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        {[...Array(18)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute rounded-full blur-2xl opacity-10 ${i % 2 === 0 ? 'bg-red-800' : 'bg-amber-700'}`}
            style={{
              width: Math.random() * 250 + 80 + 'px',
              height: Math.random() * 250 + 80 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 12 + 8}s linear infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="z-10 flex flex-col items-center animate-fade-up w-full max-w-4xl mx-auto text-center">
        <Logo />
        
        <div className="mt-8 md:mt-12 space-y-4 px-2">
          <p className="text-lg md:text-2xl text-gold font-semibold tracking-[0.2em] uppercase">
            {EVENT_DATA.college}
          </p>
          
          <div className="relative inline-block py-4 md:py-6">
            <h1 id="hero-heading" className="text-5xl sm:text-7xl md:text-9xl font-bold gold-gradient-text tracking-tighter leading-tight px-2">
              {EVENT_DATA.title}
            </h1>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true"></div>
          </div>

          <p className="text-xl md:text-4xl text-white font-light mt-2 md:mt-4 italic leading-relaxed">
            {EVENT_DATA.subtitle}
          </p>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center gap-6 md:gap-8 w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto px-4">
            <a 
              href={EVENT_DATA.regLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-10 py-4 md:px-12 md:py-5 bg-gold text-dark font-black text-lg md:text-xl rounded-full shadow-[0_15px_35px_rgba(212,175,55,0.3)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.5)] transition-all text-center transform hover:-translate-y-1 active:scale-95 focus-visible:ring-4 focus-visible:ring-gold/50"
              aria-label="பணிப்பட்டறைக்கான கூகுள் படிவத்தில் பதிவு செய்ய"
            >
              பதிவு செய்க
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
