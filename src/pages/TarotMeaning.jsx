import React, { useState } from 'react';
import TarotHeader from '../components/TarotHeader';
import VelikaArkanaList from './VelikaArkanaList';
import CardGroupList from './CardGroupList';
import { getCardImagePath } from '../utils/getCardImagePath';

const groupMap = {
  velika: { label: 'Velika Arkana', icon: '/icons/major.png' },
  stapovi: { label: 'Štapovi', icon: '/icons/wands.png' },
  pehari: { label: 'Pehari', icon: '/icons/cups.png' },
  macevi: { label: 'Mačevi', icon: '/icons/swords.png' },
  zlatnici: { label: 'Zlatnici', icon: '/icons/pentacles.png' },
};

// START: vraćeni camelCase ključevi jer su sada standard
const wandKeys = [
  'aceOfWands', 'twoOfWands', 'threeOfWands', 'fourOfWands', 'fiveOfWands',
  'sixOfWands', 'sevenOfWands', 'eightOfWands', 'nineOfWands', 'tenOfWands',
  'pageOfWands', 'knightOfWands', 'queenOfWands', 'kingOfWands'
];

const cupKeys = [
  'aceOfCups', 'twoOfCups', 'threeOfCups', 'fourOfCups', 'fiveOfCups',
  'sixOfCups', 'sevenOfCups', 'eightOfCups', 'nineOfCups', 'tenOfCups',
  'pageOfCups', 'knightOfCups', 'queenOfCups', 'kingOfCups'
];

const swordKeys = [
  'aceOfSwords', 'twoOfSwords', 'threeOfSwords', 'fourOfSwords', 'fiveOfSwords',
  'sixOfSwords', 'sevenOfSwords', 'eightOfSwords', 'nineOfSwords', 'tenOfSwords',
  'pageOfSwords', 'knightOfSwords', 'queenOfSwords', 'kingOfSwords'
];

const pentacleKeys = [
  'aceOfPentacles', 'twoOfPentacles', 'threeOfPentacles', 'fourOfPentacles', 'fiveOfPentacles',
  'sixOfPentacles', 'sevenOfPentacles', 'eightOfPentacles', 'nineOfPentacles', 'tenOfPentacles',
  'pageOfPentacles', 'knightOfPentacles', 'queenOfPentacles', 'kingOfPentacles'
];
// END: vraćeni camelCase ključevi jer su sada standard

const TarotMeaning = () => {
  const [selectedGroup, setSelectedGroup] = useState('velika');

  const generateCardList = (keys) =>
    keys.map((key) => ({
      key,
      name: key, // prikazaće se iz prevoda
    }));

  const renderGroup = () => {
    switch (selectedGroup) {
      case 'velika':
        return <VelikaArkanaList />;
      case 'stapovi':
        return <CardGroupList cards={generateCardList(wandKeys)} getCardImagePath={getCardImagePath} />;
      case 'pehari':
        return <CardGroupList cards={generateCardList(cupKeys)} getCardImagePath={getCardImagePath} />;
      case 'macevi':
        return <CardGroupList cards={generateCardList(swordKeys)} getCardImagePath={getCardImagePath} />;
      case 'zlatnici':
        return <CardGroupList cards={generateCardList(pentacleKeys)} getCardImagePath={getCardImagePath} />;
      default:
        return (
          <p className="text-white text-center mt-10">
            Još nije implementirano: {groupMap[selectedGroup].label}
          </p>
        );
    }
  };

  return (
    <div className="w-full">
      <TarotHeader />

      {/* Navigacija grupa ikonicama */}
      <div className="flex justify-center gap-2 py-4 bg-black/70 flex-wrap">
        {Object.entries(groupMap).map(([key, { icon }]) => (
          <button
            key={key}
            onClick={() => setSelectedGroup(key)}
            className={`transition-opacity duration-200 ${
              selectedGroup === key ? 'opacity-100' : 'opacity-50 hover:opacity-80'
            }`}
          >
            <img src={icon} alt={key} className="w-16 h-16 border border-yellow-400" />
          </button>
        ))}
      </div>

      {/* Naziv grupe */}
      <div className="text-center text-white text-xl font-bold pt-2">
        {groupMap[selectedGroup].label}
      </div>

      {/* Prikaz izabrane grupe */}
      <div className="px-4 py-6">
        {renderGroup()}
      </div>
    </div>
  );
};

export default TarotMeaning;
