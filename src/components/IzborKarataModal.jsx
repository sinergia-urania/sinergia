import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { shuffleAndSelect } from "../utils/generateRandomCards";
import { allCardKeys } from "../utils/allCardKeys";

const totalCards = 78;
const radius = 600;

const getCardNameById = (key) => key;

const IzborKarataModal = ({ layoutTemplate = [], pitanje = "", tip = "" }) => {
  const navigate = useNavigate();
  const numPlaceholders = layoutTemplate.length;

  const [availableCards, setAvailableCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [angleOffset, setAngleOffset] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [ukljuciObrnute, setUkljuciObrnute] = useState(false); // START: toggle za obrnute
  const startX = useRef(null);
  const [animatedKey, setAnimatedKey] = useState(null);

  useEffect(() => {
    const shuffled = [...allCardKeys].sort(() => Math.random() - 0.5);
    setAvailableCards(shuffled.map(key => ({ key, removed: false })));
  }, []);

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

  const handleCardClick = (cardKey) => {
    if (selectedCards.length >= numPlaceholders) return;
    const cardIndex = availableCards.findIndex(c => c.key === cardKey);
    if (cardIndex === -1 || availableCards[cardIndex].removed) return;

    const audio = new Audio("/sounds/click-card.mp3");
    audio.play();

    setAnimatedKey(cardKey);
    setTimeout(() => setAnimatedKey(null), 600);

    const isReversed = ukljuciObrnute && Math.random() < 0.5;

    const newAvailable = [...availableCards];
    newAvailable[cardIndex].removed = true;
    setAvailableCards(newAvailable);
    setSelectedCards([...selectedCards, { label: cardKey, reversed: isReversed }]);
  };

  const handleGoToAnswer = () => {
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
  const centerY = 840;

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      <div className="absolute top-4 right-4 text-white text-2xl cursor-pointer" onClick={handleBack}>×</div>
      <div className="flex flex-col items-center p-4 min-h-screen">
        {/* START: Checkbox za obrnute karte */}
        <label className="text-white mb-2 flex items-center gap-2">
          <input
            type="checkbox"
            checked={ukljuciObrnute}
            onChange={(e) => setUkljuciObrnute(e.target.checked)}
          />
          Uključi obrnute karte
        </label>
        {/* END: Checkbox za obrnute karte */}

        <div className="flex flex-col items-center justify-between flex-grow gap-4 w-full">
          <div className="grid grid-cols-4 gap-2 place-items-center">
            {layoutTemplate.map((_, i) => (
              <div key={i} className="w-[60px] h-[96px] sm:w-[72px] sm:h-[108px] border border-yellow-500 bg-gray-900 rounded flex items-center justify-center">
                {selectedCards[i] !== undefined && (
                  <img
                    src={`/cards/${selectedCards[i].label}.webp`}
                    alt="selected"
                    className={`w-full h-full object-contain ${selectedCards[i].reversed ? 'rotate-180' : ''}`}
                  />
                )}
              </div>
            ))}
          </div>

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

        {selectedCards.length === numPlaceholders && (
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
