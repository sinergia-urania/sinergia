import React from "react";
import { useLocation } from "react-router-dom";
import TarotHeader from "../components/TarotHeader";
import getLayoutByTip from "../utils/getLayoutByTip";
import { getCardImagePath } from "../utils/getCardImagePath";

const unaAvatar = "/icons/una-avatar.png";

const sefiroti = [
  "Keter (Kruna)",
  "Hokmah (Mudrost)",
  "Binah (Razumevanje)",
  "Hesed (Milosrđe)",
  "Gevurah (Stroga pravda)",
  "Tiferet (Lepota)",
  "Necah (Večnost)",
  "Hod (Slava)",
  "Jesod (Temelj)",
  "Malhut (Carstvo)",
];

const kuceAstro = [
  "1. kuća (Ličnost)",
  "2. kuća (Finansije)",
  "3. kuća (Komunikacija)",
  "4. kuća (Dom i porodica)",
  "5. kuća (Kreativnost)",
  "6. kuća (Zdravlje)",
  "7. kuća (Partnerstva)",
  "8. kuća (Transformacija)",
  "9. kuća (Putovanja i uverenja)",
  "10. kuća (Karijera)",
  "11. kuća (Prijatelji i zajednica)",
  "12. kuća (Podsvest)",
];

const keltskePozicije = [
  "1. Sadašnja situacija",
  "2. Prepreka / izazov",
  "3. Temelj (nesvesno)",
  "4. Prošlost",
  "5. Svesno / mogućnosti",
  "6. Bliska budućnost",
  "7. Stav prema situaciji",
  "8. Uticaj okoline",
  "9. Nada / strah",
  "10. Ishod"
];

const OdgovorAI = () => {
  const location = useLocation();
  const {
    tip,
    pitanje,
    podpitanja = [],
    izabraneKarte,
    karte,
    opisOtvaranja = ""
  } = location.state || {};

  const prikazaneKarte = izabraneKarte || karte || [];
  const kontekstOtvaranja = opisOtvaranja ? `Tip otvaranja: ${opisOtvaranja}. ` : "";
  const layout = getLayoutByTip(tip);

  return (
    <div className="min-h-screen bg-space text-white p-4 relative">
      <TarotHeader />

      <div className="flex flex-col items-center mt-4">
        <img src={unaAvatar} alt="AI Una" className="w-63 h-64 rounded-full mb-4" />

        <div className="text-xl font-semibold mb-2">Pitanje:</div>
        <div className="mb-4 px-4 text-center max-w-xl">{pitanje || "Nema pitanja."}</div>

        {/* START: Prikaz podpitanja sa validnom map petljom */}
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
        {/* END: Prikaz podpitanja sa validnom map petljom */}

        {/* START: Prikaz placeholdera + slike karte ako postoji */}
        <div className="relative w-[450px] h-[450px] my-8">
          {layout.map((pos, idx) => {
            const card = prikazaneKarte[idx];
            const isRotated = tip === "keltski" && idx === 1;
            const zIndex = idx === 1 ? 20 : 10 + idx;
            return (
              <div
                key={idx}
                className="absolute w-[48px] h-[72px] bg-yellow-500 text-black text-[10px] flex items-center justify-center rounded shadow text-center overflow-hidden"
                style={{
                  left: `calc(50% + ${pos.x * 48}px - 24px)`,
                  top: `calc(50% + ${pos.y * 48}px - 36px)`,
                  transform: isRotated ? "rotate(90deg)" : "none",
                  zIndex,
                }}
              >
                {card && card.label ? (
                  <img
                    src={getCardImagePath(card.label)}
                    alt={card?.label || `Karta ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  `Karta ${idx + 1}`
                )}
              </div>
            );
          })}
        </div>
        {/* END: Prikaz placeholdera + slike karte ako postoji */}

        {/* START: AI odgovor sa avatarom */}
        <div className="bg-white bg-opacity-10 p-4 rounded-lg max-w-2xl text-center">
          <div className="flex items-center mb-2">
            <img src={unaAvatar} alt="AI Una" className="w-12 h-12 rounded-full mr-2" />
            <span className="text-lg font-semibold">Una odgovara:</span>
          </div>
          <p>{`${kontekstOtvaranja}Ovo je mesto gde će AI dati odgovor na osnovu odabranih karata.`}</p>

          {tip === "astrološko" && (
            <div className="mt-6 text-left">
              <h3 className="text-md font-semibold mb-2">Tumačenje po astrološkim kućama:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {prikazaneKarte.map((card, index) => card ? (
                  <li key={index}>
                    <strong>{kuceAstro[index]}:</strong> {card?.label || `Karta #${card.id}`}
                  </li>
                ) : null)}
              </ul>
            </div>
          )}

          {tip === "drvo" && (
            <div className="mt-6 text-left">
              <h3 className="text-md font-semibold mb-2">Tumačenje po sefirotima:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {prikazaneKarte.map((card, index) => card ? (
                  <li key={index}>
                    <strong>{index + 1}. {sefiroti[index]}:</strong> {card?.label || `Karta #${card.id}`}
                  </li>
                ) : null)}
              </ul>
            </div>
          )}

          {tip === "keltski" && (
            <div className="mt-6 text-left">
              <h3 className="text-md font-semibold mb-2">Tumačenje Keltskog krsta:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {prikazaneKarte.map((card, index) => card ? (
                  <li key={index}>
                    <strong>{keltskePozicije[index]}:</strong> {card?.label || `Karta #${card.id}`}
                  </li>
                ) : null)}
              </ul>
            </div>
          )}
        </div>
        {/* END: AI odgovor sa avatarom */}
      </div>
    </div>
  );
};

export default OdgovorAI;
