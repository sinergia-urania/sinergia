
import React from "react";
import { useLocation } from "react-router-dom";
import TarotHeader from "../components/TarotHeader";
import getLayoutByTip from "../utils/getLayoutByTip";
const unaAvatar = "/icons/una-avatar.png";

const OdgovorAI = () => {
  const location = useLocation();
  const { tip, pitanje, podpitanja = [], izabraneKarte = [] } = location.state || {};

  const layout = getLayoutByTip(tip);

  return (
    <div className="min-h-screen bg-space text-white p-4 relative">
      <TarotHeader />

      <div className="flex flex-col items-center mt-4">
        <img src={unaAvatar} alt="AI Una" className="w-32 h-32 rounded-full mb-4" />

        <div className="text-xl font-semibold mb-2">Pitanje:</div>
        <div className="mb-4 px-4 text-center max-w-xl">{pitanje || "Nema pitanja."}</div>

        {podpitanja.length > 0 && (
          <div className="mb-4 w-full max-w-xl">
            {podpitanja.map((p, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 text-white px-4 py-2 mb-2 rounded"
              >
                Podpitanje {idx + 1}: {p}
              </div>
            ))}
          </div>
        )}

        {/* Prikaz placeholdera na osnovu layout-a */}
        <div className="relative w-[400px] h-[400px] my-8">
          {layout.map((pos, idx) => {
            const card = izabraneKarte[idx];
            const cardLabel = card ? card.label || "Karta" : `Karta ${idx + 1}`;

            return (
              <div
                key={idx}
                className="absolute w-[60px] h-[90px] bg-yellow-500 text-black text-xs flex items-center justify-center rounded shadow"
                style={{
                  left: `calc(50% + ${pos.x * 50}px - 30px)`,
                  top: `calc(50% + ${pos.y * 50}px - 45px)`,
                }}
              >
                {cardLabel}
              </div>
            );
          })}
        </div>

        {/* AI Odgovor */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg max-w-2xl text-center">
          <h2 className="text-lg font-bold mb-2">AI Tumačenje</h2>
          <p>Ovo je mesto gde će AI dati odgovor na osnovu odabranih karata.</p>
        </div>
      </div>
    </div>
  );
};

export default OdgovorAI;
