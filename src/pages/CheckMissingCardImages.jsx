import React, { useEffect, useState } from 'react';

const cardKeys = [
  "theFool", "theMagician", "theHighPriestess", "theEmpress", "theEmperor",
  "theHierophant", "theLovers", "theChariot", "strength", "theHermit",
  "wheelOfFortune", "justice", "theHangedMan", "death", "temperance",
  "theDevil", "theTower", "theStar", "theMoon", "theSun", "judgement", "theWorld",
  ...["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"].flatMap(rank => [
    `${rank}OfWands`,
    `${rank}OfCups`,
    `${rank}OfSwords`,
    `${rank}OfPentacles`
  ])
];

const CheckMissingCardImages = () => {
  const [missing, setMissing] = useState([]);

  useEffect(() => {
    const checkImages = async () => {
      const missingList = [];
      for (const key of cardKeys) {
        const img = new Image();
        img.src = `/images/cards/${key}.jpg`;
        await new Promise(resolve => {
          img.onload = resolve;
          img.onerror = () => {
            missingList.push(key);
            resolve();
          };
        });
      }
      setMissing(missingList);
    };
    checkImages();
  }, []);

  return (
    <div className="text-white p-4">
      <h2 className="text-xl font-bold mb-2">Nedostajuće slike:</h2>
      {missing.length === 0 ? (
        <p>Sve slike su prisutne ✅</p>
      ) : (
        <ul className="list-disc list-inside">
          {missing.map(key => (
            <li key={key}>{key}.jpg</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CheckMissingCardImages;
