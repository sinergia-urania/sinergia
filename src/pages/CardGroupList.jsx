
import React, { useState } from 'react';
import TarotCardModal from './TarotCardModal';
import { useTranslation } from 'react-i18next';

const CardGroupList = ({ groupName, cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const { t } = useTranslation();

  const toSnakeCase = (str) => str.replace(/([A-Z])/g, '_$1').toLowerCase();

  const getCardImagePath = (key) => `/cards/${toSnakeCase(key)}.webp`;

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 p-4">
        {cards.map(({ key, name }) => (
          <div
            key={key}
            onClick={() =>
              setSelectedCard({
                key,
                name: t(`cards.${key}.name`),
                imageSrc: getCardImagePath(key)
              })
            }
            className="cursor-pointer hover:scale-105 transition-transform duration-200 text-white text-center"
          >
            <img
              src={getCardImagePath(key)}
              onError={(e) => {
                if (!e.target.src.endsWith('.png')) {
                  e.target.src = getCardImagePath(key).replace('.webp', '.png');
                }
              }}
              alt={name}
              className="w-full h-auto max-w-[110px] mx-auto mb-1 border border-yellow-400"
            />
            <h3 className="text-sm font-medium">{t(`cards.${key}.name`)}</h3>
          </div>
        ))}
      </div>
      {selectedCard && (
        <TarotCardModal
          card={selectedCard}
          imageSrc={selectedCard.imageSrc}
          onClose={() => setSelectedCard(null)}
          isOpen={!!selectedCard}
        />
      )}
    </>
  );
};

export default CardGroupList;
