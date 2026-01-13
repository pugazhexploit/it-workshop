
import React from 'react';
import { EVENT_DATA } from '../constants';

const DetailCard: React.FC<{ icon: string; title: string; value: string; iconLabel: string }> = ({ icon, title, value, iconLabel }) => (
  <article className="depth-card glass-panel p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20 group relative z-10">
    <div className="text-4xl md:text-5xl mb-4 md:mb-6 bg-dark/50 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl border border-gold/30 shadow-inner group-hover:scale-110 transition-transform">
      <span role="img" aria-label={iconLabel}>{icon}</span>
    </div>
    <h3 className="text-gold text-xs md:text-sm font-black uppercase tracking-[0.2em] mb-2">{title}</h3>
    <p className="text-xl md:text-2xl font-bold text-white leading-tight">{value}</p>
  </article>
);

const EventDetails: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden" aria-labelledby="details-heading">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-900/5 rounded-full blur-[120px]" style={{ animation: 'float 10s infinite alternate-reverse' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 id="details-heading" className="text-3xl md:text-5xl font-bold text-white mb-4">நிகழ்வுத் தகவல்கள்</h2>
          <div className="w-16 md:w-20 h-1 bg-gold mx-auto rounded-full" aria-hidden="true"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <DetailCard icon="📅" iconLabel="தேதி" title="பணிப்பட்டறை நாட்கள்" value={EVENT_DATA.dates} />
          <DetailCard icon="🕒" iconLabel="நேரம்" title="தொடங்கும் நேரம்" value={EVENT_DATA.time} />
          <DetailCard icon="🎭" iconLabel="இடம்" title="அரங்கம்" value={EVENT_DATA.venue} />
          <DetailCard icon="🪙" iconLabel="கட்டணம்" title="பதிவுத் தொகை" value={EVENT_DATA.fee} />
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
