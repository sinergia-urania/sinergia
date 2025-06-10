import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shuffleAndSelect } from "../utils/generateRandomCards";
import { allCardKeys } from "../utils/allCardKeys";
import { useTranslation } from "react-i18next";
import { toCamelCase } from "../utils/toCamelCase";



// START: import funkcije za formatiranje imena
import { toSnakeCase } from "../utils/toSnakeCase";
// END: import funkcije za formatiranje imena

const totalCards = 78;
const radius = 600;

const getCardSizeClass = (count) => {
  if (count === 5) return "w-24 h-40 sm:w-32 sm:h-52";
  if (count >= 1 && count < 5) return "w-32 h-52 sm:w-36 sm:h-60";
  return "w-[60px] h-[96px] sm:w-[72px] sm:h-[108px]";
};

const getCardNameById = (key) => key;

const IzborKarataModal = ({ layoutTemplate = [], pitanje = "", tip = "" }) => {
  const navigate = useNavigate();
  const { t } = useTranslation("cardMeanings");
  const { t: tExtended } = useTranslation("extendedMeanings");

  const numPlaceholders = layoutTemplate.length || 1;

  const [availableCards, setAvailableCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [angleOffset, setAngleOffset] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [ukljuciObrnute, setUkljuciObrnute] = useState(tip === "dane");
  const startX = useRef(null);
  const [animatedKey, setAnimatedKey] = useState(null);
  const [instantAnswer, setInstantAnswer] = useState(null);

  // START: automatska logika za Karta Dana
  useEffect(() => {
      if (tip === "karta-dana") {
        const today = new Date().toISOString().split("T")[0];
        const localKey = `kartaDana-${today}`;
        const saved = localStorage.getItem(localKey);
  
        if (saved) {
          const parsed = JSON.parse(saved);
          setSelectedCards([parsed]);
        } else {
          const allKeys = Object.keys(t("cards", { returnObjects: true }));
          const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];
          const karta = { label: randomKey, reversed: false };
          localStorage.setItem(localKey, JSON.stringify(karta));
          setSelectedCards([karta]);
        }
      } else {
        const shuffled = [...allCardKeys].sort(() => Math.random() - 0.5);
        setAvailableCards(shuffled.map((key) => ({ key, removed: false })));
      }
    }, [tip, t]);
// END: automatska logika za Karta Dana

// START: inicijalizacija availableCards iz prosleđenih karata
useEffect(() => {
  if (location.state?.karte && location.state.karte.length > 0) {
    const dostupne = location.state.karte.map((karta) => ({
      key: karta.label,
      removed: false,
    }));
    setAvailableCards(dostupne);
  }
}, [location.state]);
// END: inicijalizacija availableCards iz prosleđenih karata

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth || 360;
      const height = window.innerHeight || 640;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // START: automatska navigacija na KartaDanaOdgovor
  useEffect(() => {
    if (tip === "dane" && selectedCards.length === 1) {
      const karta = selectedCards[0];
      const okrenuta = karta.reversed ? "obrnuto" : "uspravno";
      

      navigate("/tarot/da-ne-odgovor", {
        state: {
          karta: {
            naziv: karta.label,
            slika: `/cards/${toSnakeCase(karta.label)}.webp`,
            okrenuta,
          },
        },
        replace: true,
      });
    }

    if (tip === "karta-dana" && selectedCards.length === 1) {
      const karta = selectedCards[0];
      navigate("/tarot/karta-dana-odgovor", {
        state: {
          karta: {
            naziv: karta.label,
            slika: `/cards/${toSnakeCase(karta.label)}.webp`,
            znacenje: tExtended(`${toCamelCase(karta.label)}.daily`, tExtended(`${toCamelCase(karta.label)}.upright`)),



          },
        },
        replace: true,
      });
    }
  }, [selectedCards, tip, navigate, t]);
  // END: automatska navigacija na KartaDanaOdgovor

  const handleCardClick = (cardKey) => {
    if (selectedCards.length >= numPlaceholders) return;
    const cardIndex = availableCards.findIndex((c) => c.key === cardKey);
    if (cardIndex === -1 || availableCards[cardIndex].removed) return;

    const audio = new Audio("/sounds/click-card.mp3");
    audio.play();

    setAnimatedKey(cardKey);
    setTimeout(() => setAnimatedKey(null), 600);

    const isReversed = ukljuciObrnute && Math.random() < 0.5;

    const newAvailable = [...availableCards];
    newAvailable[cardIndex].removed = true;
    setAvailableCards(newAvailable);
    const novaKarta = { label: cardKey, reversed: isReversed };
    setSelectedCards((prev) => [...prev, novaKarta]);

    if (tip === "dane") {
      setInstantAnswer(isReversed ? "Ne" : "Da");
    }
  };

  const handleGoToAnswer = () => {
    if (tip === "dane" || tip === "karta-dana") return;

    navigate("/tarot/odgovor-ai", {
      state: {
        karte: selectedCards,
        pitanje,
        tip,
        korisnikTip: "profi",
      },
    });
  };

  const handleBack = () => navigate(-1);

  const handleTouchStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = endX - startX.current;
    if (Math.abs(diff) > 10) {
      setAngleOffset((prev) => prev + (diff > 0 ? -6 : 6));
    }
    startX.current = null;
  };

  const centerX = dimensions.width / 2;
  const centerY = (() => {
    if (numPlaceholders === 1) return dimensions.height * 1.20;
    if (numPlaceholders === 2) return dimensions.height * 1.20;
    if (numPlaceholders === 3) return dimensions.height * 1.20;
    if (numPlaceholders === 5) return dimensions.height * 1.20;
    if (numPlaceholders === 10) return dimensions.height * 1.16;
    if (numPlaceholders === 12) return dimensions.height * 1.16;
    return dimensions.height * 0.86;
  })();

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      <div className="absolute top-4 right-4 text-white text-2xl cursor-pointer" onClick={handleBack}>×</div>
      <div className="flex flex-col items-center p-4 min-h-screen">
        {tip !== "dane" && (
          <label className="text-white mb-2 flex items-center gap-2">
            <input
              type="checkbox"
              checked={ukljuciObrnute}
              onChange={(e) => setUkljuciObrnute(e.target.checked)}
            />
            Uključi obrnute karte
          </label>
        )}

        <div className="flex flex-col items-center justify-between flex-grow gap-4 w-full">
          <div className={`grid gap-2 place-items-center justify-center ${
            numPlaceholders === 1 ? 'grid-cols-1' :
            numPlaceholders === 2 ? 'grid-cols-2' :
            numPlaceholders === 3 ? 'grid-cols-3' :
            numPlaceholders === 4 ? 'grid-cols-4' :
            numPlaceholders === 5 ? 'grid-cols-5' :
            'grid-cols-4'
          }`}>
            {Array.from({ length: numPlaceholders }).map((_, i) => (
              <div
                key={i}
                className={`${getCardSizeClass(numPlaceholders)} border border-yellow-500 bg-gray-900 rounded flex items-center justify-center`}
              >
                {selectedCards[i] !== undefined && (
                  // START: koristi snake_case za naziv slike
                  <img
                    src={`/cards/${toSnakeCase(selectedCards[i].label)}.webp`}
                    alt="selected"
                    className={`w-full h-full object-contain ${selectedCards[i].reversed ? 'rotate-180' : ''}`}
                  />
                  // END: koristi snake_case za naziv slike
                )}
              </div>
            ))}
          </div>

          {instantAnswer && (
            <div className="text-white text-3xl font-bold mt-4">Odgovor: {instantAnswer}</div>
          )}

          <div className="relative w-full h-[400px]"
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {availableCards.map((card, i) => {
              const angleDeg = angleOffset + (i * 360) / totalCards;
              const angleRad = (angleDeg * Math.PI) / 180;
              const x = centerX + radius * Math.cos(angleRad);
              const y = centerY + radius * Math.sin(angleRad);
              const isAnimating = card.key === animatedKey;
              return (
                <div key={card.key}
                  className={`w-20 h-32 absolute transition-all duration-300 ${isAnimating ? 'animate-card' : ''}`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -100%) rotate(${angleDeg + 90}deg)` ,
                    transformOrigin: "bottom center",
                    zIndex: i,
                    visibility: card.removed ? "hidden" : "visible"
                  }}
                  onClick={() => handleCardClick(card.key)}
                >
                  <img src="/cards/master-card.png" alt="card" className="w-full h-full object-contain hover:scale-110 cursor-pointer" />
                </div>
              );
            })}
          </div>
        </div>

        {selectedCards.length === numPlaceholders && tip !== "dane" && tip !== "karta-dana" && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <button onClick={handleGoToAnswer} className="px-6 py-2 bg-yellow-600 text-black rounded shadow-lg hover:bg-yellow-500">
              Odgovor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default IzborKarataModal;
