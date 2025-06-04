
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DVE_KARTE,
  TRI_KARTE,
  PET_KARATA,
} from '../data/layoutTemplates';

const KlasicnoModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSelect = (key) => {
    if (key === '2') {
      navigate("/tarot/izbor", {
        state: { layoutTemplate: DVE_KARTE, tip: "ljubavno", opisOtvaranja: "Ja – On/Ona" }
      });
    } else if (key === '3') {
      navigate("/tarot/izbor", {
        state: { layoutTemplate: TRI_KARTE, tip: "tri", opisOtvaranja: "Prošlost – Sadašnjost – Budućnost" }
      });
    } else if (key === '5') {
      navigate("/tarot/izbor", {
        state: { layoutTemplate: PET_KARATA, tip: "pet", opisOtvaranja: "Put spoznaje" }
      });
    }
  };

  const options = [
    { key: '2', label: 'Ja – On/Ona', icon: '/icons/love.png' },
    { key: '3', label: 'Prošlost – Sadašnjost – Budućnost', icon: '/icons/history.png' },
    { key: '5', label: 'Put spoznaje', icon: '/icons/five-cards.png' },
  ];

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-start pt-10 overflow-y-auto">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>
        <h3 className="text-center text-lg mb-4">Izaberite broj karata</h3>
        <div className="flex flex-col items-center space-y-6">
          {options.map((opt) => (
            <div
              key={opt.key}
              onClick={() => handleSelect(opt.key)}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
            >
              <img src={opt.icon} alt={opt.label} className="w-16 h-16 mb-1 object-contain" />
              <span className="text-xs text-center">{opt.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KlasicnoModal;
