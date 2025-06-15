// START: Uvoz MembershipModal modala
import MembershipModal from './MembershipModal';
import { useState } from 'react';
// END: Uvoz MembershipModal modala

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { JEDNA_KARTA } from '../data/layoutTemplates';
import TarotHeader from '../components/TarotHeader';

const TarotHome = () => {
  const navigate = useNavigate();

  // START: State za modal
  const [openModal, setOpenModal] = useState(false);
  // END: State za modal

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat text-white"
         style={{ backgroundImage: "url('/images/background-space.jpg')" }}>
      <TarotHeader />

      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <h1 className="text-2xl font-semibold mb-6">Tarot početna</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Sva otvaranja */}
          <button
            onClick={() => navigate('/tarot/otvaranja')}
            className="flex flex-col items-center transition duration-200"
          >
            <img src="/icons/history.png" alt="Sva otvaranja" className="w-[60px] h-[60px] mb-2" />
            <span className="font-medium text-center">Sva otvaranja</span>
          </button>

          {/* Karta dana */}
          <button
            onClick={() =>
              navigate('/tarot/izbor-karti', { state: { tip: 'karta-dana' } })
            }
            className="flex flex-col items-center transition duration-200"
          >
            <img src="/icons/daily.png" alt="Karta dana" className="w-16 h-17 mb-2" />
            <span className="font-medium text-center">Karta dana</span>
          </button>

          {/* Da / Ne */}
          <button
            onClick={() =>
              navigate('/tarot/izbor-karti', { state: { tip: 'dane' } })
            }
            className="flex flex-col items-center transition duration-200"
          >
            <img src="/icons/yes.no.png" alt="Yes/No" className="w-17 h-14 mb-2" />
            <span className="font-medium text-center">Da / Ne</span>
          </button>

          {/* Značenje karata */}
          <button
            onClick={() => navigate('/tarot/znacenje')}
            className="flex flex-col items-center transition duration-200"
          >
            <img src="/icons/meaning.png" alt="Značenje karata" className="w-13 h-16 mb-2" />
            <span className="font-medium text-center">Značenje karata</span>
          </button>

          {/* Pristup aplikaciji - otvaranje modala */}
          <button
            onClick={() => setOpenModal(true)}
            className="flex flex-col items-center transition duration-200"
          >
            <img src="/icons/access.png" alt="Pristup aplikaciji" className="w-16 h-16 mb-2" />
            <span className="font-medium text-center">Pristup aplikaciji</span>
          </button>
        </div>
      </div>

      {/* START: Prikaz Membership modala */}
      {openModal && <MembershipModal onClose={() => setOpenModal(false)} />}
      {/* END: Prikaz Membership modala */}
    </div>
  );
};

export default TarotHome;
