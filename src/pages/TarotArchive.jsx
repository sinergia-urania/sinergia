// TarotArchive.jsx
import React from 'react';
import TarotHeader from '../components/TarotHeader';

const TarotArchive = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <TarotHeader />
      <div className="mt-8 text-white text-lg">
        (Ovde će biti prikazana arhiva prethodnih otvaranja...)
      </div>
    </div>
  );
};

export default TarotArchive;