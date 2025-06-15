import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { normalizeKey } from "../utils/stringUtils";
import TarotHeader from "../components/TarotHeader";

const KartaDanaOdgovor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t: tExtended, ready } = useTranslation("extendedMeanings");
  const { karta } = location.state || {};
  


  if (!ready) return null;

  const key = karta ? normalizeKey(karta.naziv) : "";
  
  console.log("KEY KOJI TRAŽIMO:", key);

  const daily = key ? tExtended(`${key}.daily`, { defaultValue: "" }) : "";
  const opis = karta?.znacenje || daily || "Ovde će biti opis značenja karte dana.";

  if (!karta) {
    return (
      <div className="background-space min-h-screen text-white p-8">
        <TarotHeader />
        <div className="text-center mt-20">
          <p className="text-xl">Nema izvučene karte. Vratite se i pokušajte ponovo.</p>
          <button
            className="mt-6 bg-purple-700 px-6 py-2 rounded hover:bg-purple-600"
            onClick={() => navigate("/tarot")}
          >
            Nazad na Tarot početnu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="background-space min-h-screen text-white p-8">
      <TarotHeader />
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-2xl mb-4">Tvoja karta dana:</h2>
        <img src={karta.slika} alt="Karta dana" className="w-48 h-auto mb-6 shadow-lg" />
        <h3 className="text-xl font-semibold mb-4">{karta.naziv}</h3>
        <p className="max-w-xl text-center text-gray-300">
          {opis}
        </p>
      </div>
    </div>
  );
};

export default KartaDanaOdgovor;