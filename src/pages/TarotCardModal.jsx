import React from 'react';
import { useTranslation } from 'react-i18next';

const TarotCardModal = ({ card, isOpen, onClose }) => {
  const { t } = useTranslation('extendedMeanings');
  const isPremium = true; // za test, kasnije se povezuje sa pravim statusom

  if (!isOpen || !card) return null;

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
          <img
            src={`/cards/${card.key}.jpg`}
            onError={(e) => {
              if (!e.target.src.endsWith('.png')) {
                e.target.src = `/cards/${card.key}.png`;
              }
            }}
            alt={card.name}
            className="w-32 h-auto mb-4 border border-yellow-500"
          />
          <h2 className="text-2xl font-bold mb-2">{card.name}</h2>

          {isPremium ? (
            <>
              <p className="mb-2"><strong>Simbolika:</strong> {t(`${card.key}.symbolism`)}</p>
              <p className="mb-2"><strong>Uspravno značenje:</strong> {t(`${card.key}.uprightExtended`)}</p>
              <p className="mb-2"><strong>Obrnuto značenje:</strong> {t(`${card.key}.reversedExtended`)}</p>
            </>
          ) : (
            <p className="text-yellow-400 text-center mt-4">Ova opcija je dostupna samo za Premium korisnike.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TarotCardModal;
