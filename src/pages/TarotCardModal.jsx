import React from 'react';
import { useTranslation } from 'react-i18next';

const TarotCardModal = ({ card, isOpen, onClose }) => {
  const { t } = useTranslation('extendedMeanings');
  const isPremium = true; // za test, kasnije se povezuje sa pravim statusom

  if (!isOpen || !card) return null;

  const getText = (key) => t(`${card.key}.${key}`) || 'Nije dostupno.';

  const toSnakeCase = (str) => str.replace(/([A-Z])/g, '_$1').toLowerCase();
  const snakeKey = toSnakeCase(card.key);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-start overflow-y-auto pt-10 pb-10">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6 w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <div className="flex flex-col items-center">
          {/* START: ispravljena snake_case putanja slike */}
          <img
            src={`/cards/${snakeKey}.webp`}
            onError={(e) => {
              if (!e.target.src.endsWith('.png')) {
                e.target.src = `/cards/${snakeKey}.png`;
              }
            }}
            alt={card.name}
            className="w-32 h-auto mb-4 border border-yellow-500"
          />
          {/* END: ispravljena snake_case putanja slike */}

          <h2 className="text-2xl font-bold mb-4 text-center">{card.name}</h2>

          {isPremium ? (
            <div className="space-y-3 text-sm sm:text-base text-left">
              <p><strong>Simbolika:</strong> {getText('symbolism')}</p>
              <p><strong>Uspravno značenje:</strong> {getText('uprightExtended')}</p>
              <p><strong>Obrnuto značenje:</strong> {getText('reversedExtended')}</p>
              <p><strong>Značenje kao karta dana:</strong> {getText('daily')}</p>
            </div>
          ) : (
            <p className="text-yellow-400 text-center mt-4">Ova opcija je dostupna samo za Premium korisnike.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCardModal;
