
import React from 'react';

export const COLORS = {
  dark: '#120806',
  redDeep: '#2d0a0a',
  brownDeep: '#1a0f0b',
  gold: '#d4af37',
  muted: '#8d6e63',
  light: '#fdfaf5',
};

export const EVENT_DATA = {
  title: "முத்தமிழ் வித்தைகள்",
  subtitle: "புத்தகம் உருவாக்கும் இருநாட்கள் பணிப்பட்டறை",
  orgName: "இளந்தூது",
  college: "அ.வ.அ. கல்லூரி (தன்னாட்சி)",
  location: "மன்னம்பந்தல், மயிலாடுதுறை - 609305",
  dates: "2026 ஜனவரி 21, 22",
  time: "காலை 09:00 மணி",
  venue: "PEKAK அரங்கம், அ.வ.அ. கல்லூரி",
  fee: "₹100/- (தனிநபர் கட்டணம்)",
  regLink: "https://docs.google.com/forms/d/e/1FAIpQLSe599J1zL5C_fUy8Na7pLA6dzLYBQMonb4OYUquTrC_HDFp8w/viewform?usp=dialog",
  legacy: "37 ஆண்டு கால இலக்கியப் பாரம்பரியம்",
  contacts: [
    { name: "வெ. நரேந்திரன்", phone: "8056643655" },
    { name: "ஜெ. பிரசாந்த்", phone: "8056613107" }
  ],
  rules: [
    "ஒரு கல்லூரிக்கு அதிகபட்சம் 6 மாணவர்கள் மட்டுமே அனுமதிக்கப்படுவர்.",
    "பங்குபெறும் மாணவர்களுக்கு மதிய உணவு கல்லூரியால் வழங்கப்படும்.",
    "அடையாள அட்டை (College ID Card) கட்டாயம் கொண்டு வரப்பட வேண்டும்.",
    "படைப்புகளுக்குத் தேவையான உபகரணங்கள் (காகிதம் தவிர) தாங்களே கொண்டு வர வேண்டும்.",
    "21.01.2026 அன்று காலை 9:00 மணிக்குள் வருகை பதிவு செய்ய வேண்டும்.",
    "கவிதை, கட்டுரை, ஓவியம் உள்ளடக்கிய முழுமையான புத்தகம் உருவாக்கம் குறித்த வழிகாட்டுதல் வழங்கப்படும்."
  ]
};

export const Logo = () => (
  <div className="relative group perspective-1000">
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 floating transition-transform duration-500 group-hover:scale-110">
      {/* 3D Glow Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-gold opacity-50 blur-md animate-pulse"></div>
      <div className="absolute inset-0 rounded-full border border-gold/30"></div>

      <div className="relative w-full h-full p-3 rounded-full bg-black/40 backdrop-blur-sm border-2 border-gold/60 shadow-[0_0_50px_rgba(212,175,55,0.3)] overflow-hidden">
        <img
          src="/itlogo.png"
          alt="இளந்தூது"
          className="w-full h-full object-contain rounded-full shadow-inner"
          onError={(e) => {
            // Fallback if local image fails, though it should exist now
            console.error("Logo image failed to load");
          }}
        />
      </div>
    </div>
  </div>
);
