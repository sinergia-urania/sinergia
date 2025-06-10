import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TarotCardModal from './TarotCardModal';

const VelikaArkanaList = () => {
  const { t } = useTranslation('cardMeanings');
  const [selectedCard, setSelectedCard] = useState(null);

  const cardKeys = [
    'theFool', 'theMagician', 'theHighPriestess', 'theEmpress', 'theEmperor',
    'theHierophant', 'theLovers', 'theChariot', 'strength', 'theHermit',
    'wheelOfFortune', 'justice', 'theHangedMan', 'death', 'temperance',
    'theDevil', 'theTower', 'theStar', 'theMoon', 'theSun', 'judgement', 'theWorld'
  ];

  const toSnakeCase = (str) =>
    str.replace(/([A-Z])/g, '_$1').toLowerCase();

  const handleCardClick = (key) => {
    const snakeKey = toSnakeCase(key);
    const card = {
      key,
      name: t(`cards.${key}.name`),
      imageSrc: `/cards/${snakeKey}.webp`
    };
    setSelectedCard(card);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 p-4">
        {cardKeys.map((key) => {
          const snakeKey = toSnakeCase(key);
          return (
            <div
              key={key}
              onClick={() => handleCardClick(key)}
              className="cursor-pointer hover:scale-105 transition-transform duration-200 text-white text-center"
            >
              <img
                src={`/cards/${snakeKey}.webp`}
                onError={(e) => {
                  if (!e.target.src.endsWith('.png')) {
                    e.target.src = `/cards/${snakeKey}.png`;
                  }
                }}
                alt={t(`cards.${key}.name`)}
                className="w-full h-auto max-w-[110px] mx-auto mb-1 border border-yellow-400"
              />
              <h3 className="text-sm font-medium">{t(`cards.${key}.name`)}</h3>
            </div>
          );
        })}
      </div>
      <TarotCardModal
        card={selectedCard}
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        imageSrc={selectedCard?.imageSrc}
      />
    </>
  );
};

export default VelikaArkanaList;
