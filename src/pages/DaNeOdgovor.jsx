import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TarotHeader from "../components/TarotHeader";

const DaNeOdgovor = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { karta } = location.state || {};

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

  const isUspravna = karta.okrenuta === "uspravno";

  return (
    <div className="background-space min-h-screen text-white p-8">
      <TarotHeader />
      <div className="flex flex-col items-center justify-center mt-16">
        <h2 className="text-2xl mb-4">Odgovor na tvoje pitanje:</h2>
        <img src={karta.slika} alt="Izvučena karta" className="w-48 h-auto mb-6 shadow-lg" />
        <h3 className={`text-3xl font-bold ${isUspravna ? "text-green-400" : "text-red-500"}`}>
          {isUspravna ? "DA" : "NE"}
        </h3>
        <p className="mt-4 italic">{`Karta je izvučena ${isUspravna ? "uspravno" : "obrnuto"}.`}</p>
      </div>
    </div>
  );
};

export default DaNeOdgovor;