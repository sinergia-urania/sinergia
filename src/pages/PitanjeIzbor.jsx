import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TarotHeader from '../components/TarotHeader';

const teme = {
  "Analiza ličnosti": [
    "Koje su moje glavne unutrašnje snage?",
    "Koji aspekt mog karaktera mi donosi prepreke?",
    "Kako da postanem autentičniji?"
  ],
  "Ljubavni odnosi": [
    "Kakva je priroda mog trenutnog odnosa?",
    "Šta moj partner/partnerka oseća prema meni?",
    "Da li je ova veza dugoročna?"
  ],
  "Porodična pitanja": [
    "Kako mogu poboljšati porodične odnose?",
    "Šta stoji iza konflikta u porodici?",
    "Koja je poruka mog porodičnog nasleđa?"
  ],
  "Posao i novac": [
    "Koji je sledeći korak u mojoj karijeri?",
    "Kako da poboljšam finansijsku situaciju?",
    "Da li je sada vreme za promenu posla?"
  ],
  "Duhovni razvoj": [
    "Koja je moja trenutna duhovna lekcija?",
    "Kako da produbim kontakt sa sobom?",
    "Gde se nalazim na svom duhovnom putu?"
  ],
  "Karmički uticaji": [
    "Koja je karmička pozadina moje situacije?",
    "Koji obrasci se ponavljaju iz prošlih života?",
    "Kako da razrešim karmički dug?"
  ]
};

const PitanjeIzbor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { layoutTemplate, tip } = location.state || {};
  const [pitanje, setPitanje] = useState("");

  const prikazaneTeme = tip === "ljubavno"
    ? { "Ljubavni odnosi": teme["Ljubavni odnosi"] }
    : teme;

  const handleNastavi = () => {
    if (!pitanje.trim()) return;
    navigate("/tarot/izbor-karti", {
      state: {
        layoutTemplate,
        pitanje,
        tip
      }
    });
  };

  return (
    <div className="min-h-screen background-space text-white pb-10">
      <TarotHeader />
      <div className="max-w-xl mx-auto mt-6 px-4">
        <h2 className="text-xl font-bold text-center mb-6">Postavite pitanje</h2>

        <div className="space-y-6">
          {Object.entries(prikazaneTeme).map(([kategorija, pitanja]) => (
            <div key={kategorija}>
              <h3 className="text-md font-semibold text-pink-400 mb-2">{kategorija}</h3>
              <div className="grid grid-cols-1 gap-2">
                {pitanja.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPitanje(p)}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm rounded text-white text-left"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <textarea
            className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none"
            rows="4"
            placeholder="Unesite svoje pitanje za AI tumača..."
            value={pitanje}
            onChange={(e) => setPitanje(e.target.value)}
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleNastavi}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
          >
            Izbor karata
          </button>
        </div>
      </div>
    </div>
  );
};

export default PitanjeIzbor;