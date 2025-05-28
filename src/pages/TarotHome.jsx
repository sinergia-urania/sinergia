import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TarotHeader from './TarotHeader';
import TarotMembershipTable from './TarotMembershipTable';

const TarotHome = () => {
  const [showTable, setShowTable] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Tarot zaglavlje */}
      <div className="w-full z-10">
        <TarotHeader />
      </div>

      {/* Glavni sadržaj: dugmići */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 text-white px-4">
        <button
          onClick={() => navigate('/tarot/otvaranja')}
          className="flex flex-col items-center transition duration-200"
        >
          <img src="/icons/history.png" alt="Sva otvaranja" className="w-[74px] h-[74px] mb-2" />
          <span className="font-medium text-center">Sva otvaranja</span>
        </button>
        <button className="flex flex-col items-center transition duration-200">
          <img src="/icons/daily.png" alt="Karta dana" className="w-16 h-16 mb-2" />
          <span className="font-medium text-center">Karta dana</span>
        </button>
        <button
          onClick={() => navigate('/tarot/znacenje')}
          className="flex flex-col items-center transition duration-200"
        >
          <img src="/icons/meaning.png" alt="Značenje karata" className="w-16 h-16 mb-2" />
          <span className="font-medium text-center">Značenje karata</span>
        </button>
      </div>

      {/* Dugme za prikaz tabele */}
      <div className="mt-10">
        <button
          onClick={() => setShowTable(!showTable)}
          className="flex flex-col items-center transition duration-200 text-white"
        >
          <img src="/icons/access.png" alt="" className="w-16 h-16 mb-2" />
          <span className="font-medium text-center">Pristup aplikaciji</span>
        </button>
      </div>

      {/* Tabela pristupa */}
      {showTable && (
        <div className="w-full bg-black/70 mt-6 rounded p-2 max-w-3xl text-xs text-white">
          <TarotMembershipTable />
        </div>
      )}
    </div>
  );
};

export default TarotHome;
