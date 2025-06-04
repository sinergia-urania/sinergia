
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TarotCardModal from './TarotCardModal';
import { getCardImagePath } from '../utils/getCardImagePath';

const VelikaArkanaList = () => {
  const { t } = useTranslation('cardMeanings');
  const [selectedCard, setSelectedCard] = useState(null);

  const cardKeys = [
    'theFool', 'theMagician', 'theHighPriestess', 'theEmpress', 'theEmperor',
    'theHierophant', 'theLovers', 'theChariot', 'strength', 'theHermit',
    'wheelOfFortune', 'justice', 'theHangedMan', 'death', 'temperance',
    'theDevil', 'theTower', 'theStar', 'theMoon', 'theSun', 'judgement', 'theWorld'
  ];

  const handleCardClick = (key) => {
    const keywords = t(`cards.${key}.keywords`, { returnObjects: true });
    const card = {
      key,
      name: t(`cards.${key}.name`),
      upright: t(`cards.${key}.upright`),
      reversed: t(`cards.${key}.reversed`),
      element: t(`cards.${key}.element`),
      jyotish: t(`cards.${key}.jyotish`),
      keywords: Array.isArray(keywords) ? keywords : []
    };
    setSelectedCard(card);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 p-4">
        {cardKeys.map((key) => (
          <div
            key={key}
            onClick={() => handleCardClick(key)}
            className="cursor-pointer hover:scale-105 transition-transform duration-200 text-white text-center"
          >
            <img
              src={getCardImagePath(key)}
              alt={t(`cards.${key}.name`)}
              className="w-full h-auto max-w-[110px] mx-auto mb-1 border border-yellow-400"
            />
            <h3 className="text-sm font-medium">{t(`cards.${key}.name`)}</h3>
          </div>
        ))}
      </div>
      <TarotCardModal
        card={selectedCard}
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </>
  );
};

export default VelikaArkanaList;
