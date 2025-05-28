import React from 'react';
import { useNavigate } from 'react-router-dom';

const KlasicnoModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const options = [
    { key: '1', label: 'Jedna karta', icon: '/icons/one-card.png' },
    { key: '3', label: 'Tri karte', icon: '/icons/history.png' },
    { key: '5', label: 'Pet karata', icon: '/icons/five-cards.png' },
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
              onClick={() => navigate(`/tarot/otvaranja/klasicno/${opt.key}`)}
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
