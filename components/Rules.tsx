
import React from 'react';
import { EVENT_DATA } from '../constants';

const Rules: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0f0a08]/50 relative overflow-hidden" aria-labelledby="rules-heading">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[150px] pointer-events-none" aria-hidden="true"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-10 md:p-20 rounded-[3rem] border-2 border-gold/20 relative shadow-[0_0_100px_rgba(0,0,0,0.5)]">
          <h2 id="rules-heading" className="absolute -top-6 left-12 px-8 py-3 bg-gold text-dark font-black text-sm uppercase tracking-widest rounded-full shadow-lg">
            நெறிமுறைகளும் விதிகளும்
          </h2>
          
          <ol className="space-y-8 mt-6">
            {EVENT_DATA.rules.map((rule, idx) => (
              <li key={idx} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold font-black text-lg group-hover:bg-gold group-hover:text-dark transition-all" aria-hidden="true">
                  {idx + 1}
                </div>
                <p className="text-xl text-white/90 leading-relaxed font-light group-hover:text-white transition-colors">
                  {rule}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-transparent border-l-4 border-gold italic text-gold text-lg md:text-xl font-medium">
            <blockquote>"உங்களது கற்பனைத் திறனை ஒரு முழுமையான புத்தகமாக மாற்றும் அற்புதமான வாய்ப்பு!"</blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
