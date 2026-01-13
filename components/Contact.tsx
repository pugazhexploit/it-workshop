
import React from 'react';
import { EVENT_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-[#0c0806] relative" aria-labelledby="contact-main-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 id="contact-main-heading" className="text-3xl md:text-5xl font-black gold-gradient-text tracking-tight">தொடர்பு விவரங்கள்</h2>
          <p className="text-gold/70 text-xs md:text-sm mt-3 font-bold tracking-[0.2em] uppercase">
            மேலும் விவரங்களுக்குத் தொடர்பு கொள்க
          </p>
        </div>

        {/* Solid, distinct background with professional brown tone */}
        <div className="bg-[#1a0f0d] p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] border border-gold/15 relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Subtle glow effects */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-red-900/10 blur-[80px] pointer-events-none" aria-hidden="true"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gold/5 blur-[80px] pointer-events-none" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 relative z-10">
            <div className="space-y-8">
              <div className="relative pl-5 border-l-2 border-gold/40">
                <h3 className="text-gold/60 text-sm md:text-base font-black uppercase tracking-widest mb-4">
                  மடல் தொடர்புக்கு
                </h3>
                <div className="space-y-2 md:space-y-3">
                  <p className="text-2xl md:text-4xl font-black text-white tracking-tight">ஆசிரியர்</p>
                  <p className="text-xl md:text-2xl font-bold text-gold/80">இளந்தூது</p>
                  <address className="pt-3 space-y-1 text-white/70 text-base md:text-lg font-light not-italic leading-relaxed">
                    <p>{EVENT_DATA.college},</p>
                    <p>{EVENT_DATA.location}.</p>
                  </address>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative pl-5 border-l-2 border-gold/40">
                <h3 className="text-gold/60 text-sm md:text-base font-black uppercase tracking-widest mb-4">
                  அலைப்பேசி தொடர்புக்கு
                </h3>
                
                <div className="space-y-10 md:space-y-12">
                  {EVENT_DATA.contacts.map((contact, i) => (
                    <div key={i} className="group">
                      {/* Reduced font size for names and numbers - more professional */}
                      <h4 className="text-xl md:text-3xl font-black text-white mb-3 group-hover:text-gold transition-colors leading-tight tracking-tight">
                        {contact.name}
                      </h4>
                      <a 
                        href={`tel:${contact.phone}`} 
                        className="inline-flex items-center gap-3 text-lg md:text-xl font-bold text-white/90 hover:text-white transition-all bg-white/5 px-5 py-3 rounded-xl border border-white/10 shadow-lg group-hover:bg-gold/10 group-hover:border-gold/30 focus-visible:ring-4 focus-visible:ring-gold/50"
                        aria-label={`${contact.name} அவர்களை அழைக்க ${contact.phone}`}
                      >
                        <span className="text-gold text-xl" role="img" aria-label="தொலைபே시">📞</span>
                        <span className="font-mono">{contact.phone}</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center relative z-10">
            <p className="text-white/40 italic text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              "ஒரு கல்லூரிக்கு ஆறு மாணவர்கள் (படைப்புதிறன் தொடர்பாக) என்னும் முறையில் இந்தப் பணிப்பட்டறையை அரங்கேற்ற உள்ளோம்."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
