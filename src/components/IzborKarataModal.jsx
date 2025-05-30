import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const totalCards = 72;
const radius = 600;

const IzborKarataModal = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState(
    Array.from({ length: totalCards }, (_, i) => ({ id: i, visible: true }))
  );
  const [selectedCards, setSelectedCards] = useState([]);
  const [angleOffset, setAngleOffset] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const startX = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth || document.documentElement.clientWidth || 360;
      const height = window.innerHeight || document.documentElement.clientHeight || 640;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const centerX = dimensions.width / 2;
  const centerY = dimensions.height + radius - 280;

  const handleCardClick = (cardIndex) => {
    if (selectedCards.length >= 3) return;

    const card = cards[cardIndex];
    if (!card.visible) return;

    const updatedCards = [...cards];
    updatedCards[cardIndex].visible = false;
    setCards(updatedCards);
    setSelectedCards([...selectedCards, card.id]);
  };

  const handleGoToAnswer = () => {
    navigate("/tarot/odgovor");
  };

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

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-between p-4">
      <div className="flex justify-center gap-4 mt-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-[72px] h-[115px] border border-yellow-500 bg-gray-900 rounded flex items-center justify-center"
          >
            {selectedCards[i] !== undefined && (
              <img
                src="/cards/master-card.png"
                alt="selected"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        ))}
      </div>

      <div
        className="relative mt-10 mb-6 w-full h-[400px]"
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* SVG strelica levo */}
        <img
          src="/icons/arrow-left.svg"
          alt="left-arrow"
          className="absolute left-[10%] bottom-[80px] w-10 h-10 opacity-80"
        />

        {/* SVG strelica desno */}
        <img
          src="/icons/arrow-right.svg"
          alt="right-arrow"
          className="absolute right-[10%] bottom-[80px] w-10 h-10 opacity-80"
        />

        {cards.map((card, i) => {
          if (!card.visible) return null;

          const angleDeg = angleOffset + (i * 360) / totalCards;
          const angleRad = (angleDeg * Math.PI) / 180;

          const x = centerX + radius * Math.cos(angleRad);
          const y = centerY + radius * Math.sin(angleRad);

          return (
            <div
              key={card.id}
              className="w-20 h-32 absolute transition-all duration-300"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -100%) rotate(${angleDeg + 90}deg)`,
                transformOrigin: "bottom center",
                zIndex: i,
              }}
              onClick={() => handleCardClick(i)}
            >
              <img
                src="/cards/master-card.png"
                alt="card"
                className="w-full h-full object-contain hover:scale-110 cursor-pointer"
              />
            </div>
          );
        })}
      </div>

      {selectedCards.length === 3 && (
        <button
          onClick={handleGoToAnswer}
          className="mt-20 mb-4 px-6 py-2 bg-yellow-600 text-black rounded shadow-lg hover:bg-yellow-500"
        >
          Odgovor
        </button>
      )}
    </div>
  );
};

export default IzborKarataModal;