
import React from 'react';

const PrizeCard: React.FC<{ rank: string; color: string; label: string; icon: string }> = ({ rank, color, label, icon }) => (
  <div className="relative group perspective-1000 z-10">
    <div className={`depth-card glass-panel p-10 rounded-3xl border border-white/5 flex flex-col items-center text-center overflow-hidden h-full shadow-2xl transition-all duration-500`}>
      {/* Dynamic rank-specific top border */}
      <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${color}`}></div>
      
      {/* Animated Icon Container */}
      <div className="relative mb-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-full animate-pulse`}></div>
        <div className="text-6xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 relative z-10">
          {icon}
        </div>
      </div>
      
      <h4 className="text-3xl font-black text-white mb-2 tracking-tight">{rank}</h4>
      <p className="text-gold/70 font-medium tracking-widest uppercase text-xs">{label}</p>
      
      {/* Decorative progress-like bar */}
      <div className="mt-8 w-16 h-1 bg-white/10 rounded-full overflow-hidden group-hover:w-full transition-all duration-700 ease-out">
        <div className={`h-full bg-gradient-to-r ${color} w-0 group-hover:w-full transition-all duration-1000 delay-100`}></div>
      </div>
    </div>
  </div>
);

const Prizes: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#120806] to-[#0c0605]">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Flowing Abstract Shapes */}
        <div className="absolute top-0 -right-1/4 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] animate-[pulse_8s_infinite]"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[150px] animate-[pulse_12s_infinite]"></div>
        
        {/* Animated Particles with different sizes and speeds */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className={`absolute rounded-full blur-[1px] ${i % 3 === 0 ? 'bg-gold/30' : i % 3 === 1 ? 'bg-gray-300/20' : 'bg-orange-500/20'}`}
            style={{
              width: Math.random() * 5 + 2 + 'px',
              height: Math.random() * 5 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `-${Math.random() * 20}s`
            }}
          />
        ))}

        {/* Subtle radial light beam */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">அங்கீகாரமும் சிறப்புகளும்</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-px bg-gold/30"></div>
            <p className="text-gold/80 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">சிறந்த படைப்பாளிகளுக்கான கௌரவம்</p>
            <div className="w-8 h-px bg-gold/30"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <PrizeCard 
            rank="முதல் இடம்" 
            color="from-yellow-400 via-yellow-200 to-yellow-600" 
            label="பெருமைமிகு சான்றிதழ் & பரிசு" 
            icon="🥇"
          />
          <PrizeCard 
            rank="இரண்டாம் இடம்" 
            color="from-gray-300 via-white to-gray-500" 
            label="சிறப்பு சான்றிதழ் & பரிசு" 
            icon="🥈"
          />
          <PrizeCard 
            rank="மூன்றாம் இடம்" 
            color="from-orange-400 via-orange-200 to-orange-700" 
            label="ஊக்கச் சான்றிதழ் & பரிசு" 
            icon="🥉"
          />
        </div>
        
        <div className="mt-20 text-center animate-fade-up">
          <p className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 italic text-sm md:text-base">
            "பங்குபெறும் அனைத்து மாணவர்களுக்கும் பங்கேற்புச் சான்றிதழ் வழங்கப்படும்."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
