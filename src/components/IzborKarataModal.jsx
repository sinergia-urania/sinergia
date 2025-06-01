import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const totalCards = 72;
const radius = 600;

const IzborKarataModal = ({ layoutTemplate = [], pitanje = "", tip = "", onClose = () => {} }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const numPlaceholders = layoutTemplate.length;

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
    if (selectedCards.length >= numPlaceholders) return;

    const card = cards[cardIndex];
    if (!card.visible) return;

    const updatedCards = [...cards];
    updatedCards[cardIndex].visible = false;
    setCards(updatedCards);
    setSelectedCards([...selectedCards, card.id]);
  };

  const handleGoToAnswer = () => {
    if (tip === "da-ne") {
      const izabranaKartaId = selectedCards[0];
      const okrenuta = Math.random() > 0.5 ? "uspravno" : "obrnuto";
      navigate("/tarot/da-ne-odgovor", {
        state: {
          karta: {
            id: izabranaKartaId,
            image: "/cards/master-card.png",
            okrenuta,
          },
          odgovor: okrenuta === "uspravno" ? "DA" : "NE",
        },
      });
      return;
    }

    if (tip === "karta-dana") {
      const izabranaKartaId = selectedCards[0];
      const naziv = "Nasumična karta";
      const okrenuta = Math.random() > 0.5 ? "uspravno" : "obrnuto";
      const slika = "/cards/master-card.png";
      const znacenje = "Ovo je značenje tvoje karte dana.";
      navigate("/tarot/karta-dana-odgovor", {
        state: {
          karta: {
            id: izabranaKartaId,
            naziv,
            slika,
            okrenuta,
            znacenje,
          },
        },
      });
      return;
    }

    if (
      ["ljubavno", "astrološko", "keltski", "drvo", "tri", "pet", "dve"].includes(tip)
    ) {
      navigate("/tarot/odgovor-ai", {
        state: {
          karte: selectedCards.map((kartaId) => ({
            id: kartaId,
            image: "/cards/master-card.png",
          })),
          pitanje,
          tip,
          korisnikTip: "profi",
        },
      });
      return;
    }

    console.warn("Nepoznat tip otvaranja. Navigacija nije moguća.");
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
        {layoutTemplate.map((_, i) => (
          <div
            key={i}
            className="w-[60px] h-[97px] border border-yellow-500 bg-gray-900 rounded flex items-center justify-center"
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

      {selectedCards.length === numPlaceholders && (
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