import React, { useState } from 'react';
import TarotHeader from './TarotHeader';
import KlasicnoModal from './KlasicnoModal';

const TarotOtvaranja = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (key) => {
    if (key === 'klasicno') {
      setShowModal(true);
    } else {
      // Možeš dodati navigaciju i za ostale kasnije
      console.log("Otvaranje:", key);
    }
  };

  const options = [
    { key: 'klasicno', label: 'Klasično otvaranje', icon: '/icons/otvaranje-klasicno.png' },
    { key: 'keltski', label: 'Keltski krst', icon: '/icons/otvaranje-keltski.png' },
    { key: 'astrološko', label: 'Astrološko otvaranje', icon: '/icons/otvaranje-astro.png' },
    { key: 'kabalisticko', label: 'Kabalističko otvaranje', icon: '/icons/otvaranje-drvo.png' },
  ];

  return (
    <div className="min-h-screen w-full text-white flex flex-col items-center"
         style={{
           backgroundImage: "url('/background-space.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}
    >
      <TarotHeader />

      <h2 className="text-xl font-semibold mt-10 mb-6">Izaberite vrstu otvaranja</h2>

      <div className="flex flex-col items-center space-y-6 mb-20">
        {options.map((opt) => (
          <div
            key={opt.key}
            onClick={() => handleSelect(opt.key)}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
          >
            <img src={opt.icon} alt={opt.label} className="w-24 h-24 mb-1 object-contain" />
            <span className="text-xs text-center">{opt.label}</span>
          </div>
        ))}
      </div>

      <KlasicnoModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default TarotOtvaranja;
