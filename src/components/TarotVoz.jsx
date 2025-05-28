import React from "react";
import "./tarotVozFix.css";

const TarotVoz = () => {
  return (
    <div className="fixed bottom-0 w-full h-34 overflow-hidden z-30">
      <div className="tarot-voznja h-full w-[200%] bg-repeat-x bg-[url('/sprites/tarot_row_12_cards.png')]"></div>
    </div>
  );
};

export default TarotVoz;
