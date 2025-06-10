
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TarotHeader from "../components/TarotHeader";
import KlasicnoModal from "./KlasicnoModal";

const TarotOtvaranja = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (key) => {
    new Audio("/hover-click.mp3").play();

    if (key === 'klasicno') {
      setShowModal(true);
    } else if (key === 'keltski') {
      navigate('/tarot/izbor', {
        state: {
          layoutTemplate: 'keltski',
          tip: 'keltski'
        }
      });
    } else if (key === 'astrološko') {
      navigate('/tarot/izbor', {
        state: {
          layoutTemplate: 'astrološko',
          tip: 'astrološko'
        }
      });
    } else if (key === 'kabalisticko') {
      navigate('/tarot/izbor', {
        state: {
          layoutTemplate: 'drvo',
          tip: 'drvo'
        }
      });
    } else {
      console.log("Nepoznata selekcija:", key);
    }
  };

  return (
    <div className="background-space text-white min-h-screen">
      <TarotHeader />
      <div className="flex flex-col items-center pt-8 gap-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Odaberite vrstu otvaranja</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button onClick={() => handleSelect("klasicno")} className="bg-transparent p-4 rounded-lg hover:bg-gray-700 text-center border border-gray-700">
            <img src="/icons/otvaranje-klasicno.png" alt="Klasično otvaranje" className="w-16 h-16 mx-auto mb-2" />
            Klasično otvaranje
          </button>
          <button onClick={() => handleSelect("keltski")} className="bg-transparent p-4 rounded-lg hover:bg-gray-700 text-center border border-gray-700">
            <img src="/icons/otvaranje-keltski.png" alt="Keltski krst" className="w-16 h-16 mx-auto mb-2" />
            Keltski krst
          </button>
          <button onClick={() => handleSelect("astrološko")} className="bg-transparent p-4 rounded-lg hover:bg-gray-700 text-center border border-gray-700">
            <img src="/icons/otvaranje-astro.png" alt="Astrološko otvaranje" className="w-16 h-16 mx-auto mb-2" />
            Astrološko otvaranje
          </button>
          <button onClick={() => handleSelect("kabalisticko")} className="bg-transparent p-4 rounded-lg hover:bg-gray-700 text-center border border-gray-700">
            <img src="/icons/otvaranje-drvo.png" alt="Kabalističko otvaranje" className="w-16 h-16 mx-auto mb-2" />
            Kabalističko otvaranje
          </button>
        </div>
      </div>
      {showModal && <KlasicnoModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default TarotOtvaranja;
