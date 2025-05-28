// TarotCardGrid.jsx
import React from 'react';

const suitNames = {
  wands: 'Štapovi',
  cups: 'Pehari',
  swords: 'Mačevi',
  pentacles: 'Zlatnici',
  major: 'Velika Arkana',
};

const dummyCards = {
  wands: [
    { name: 'Ace of Wands', img: '/cards/ace_of_wands.png' },
    { name: 'Two of Wands', img: '/cards/two_of_wands.png' },
    { name: 'Three of Wands', img: '/cards/three_of_wands.png' },
  ],
  cups: [
    { name: 'Ace of Cups', img: '/cards/ace_of_cups.png' },
    { name: 'Two of Cups', img: '/cards/two_of_cups.png' },
    { name: 'Three of Cups', img: '/cards/three_of_cups.png' },
  ],
  swords: [
    { name: 'Ace of Swords', img: '/cards/ace_of_swords.png' },
    { name: 'Two of Swords', img: '/cards/two_of_swords.png' },
    { name: 'Three of Swords', img: '/cards/three_of_swords.png' },
  ],
  pentacles: [
    { name: 'Ace of Pentacles', img: '/cards/ace_of_pentacles.png' },
    { name: 'Two of Pentacles', img: '/cards/two_of_pentacles.png' },
    { name: 'Three of Pentacles', img: '/cards/three_of_pentacles.png' },
  ],
  major: [
    { name: 'The Fool', img: '/cards/the_fool.png' },
    { name: 'The Magician', img: '/cards/the_magician.png' },
    { name: 'The High Priestess', img: '/cards/the_high_priestess.png' },
  ],
};

const TarotCardGrid = ({ suit }) => {
  const cards = dummyCards[suit] || [];
  const title = suitNames[suit] || '';

  return (
    <div className="w-full px-4">
      <h2 className="text-center text-xl font-semibold text-white mb-4">{title}</h2>
      {cards.length === 0 && (
        <p className="text-red-500 text-center mt-4">⚠️ Nema pronađenih karata za ovu grupu.</p>
      )}
      <div className="grid grid-cols-3 gap-4 mt-6 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white hover:scale-105 transition-transform cursor-pointer"
          >
            <img src={card.img} alt={card.name} className="w-14 h-auto rounded shadow" />
          </div>
        ))}
      </div>
      <p className="text-sm mt-6 text-center text-white">{cards.length} karti učitano</p>
    </div>
  );
};

export default TarotCardGrid;
