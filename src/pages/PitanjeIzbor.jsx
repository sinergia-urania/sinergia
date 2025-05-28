import React from "react";
import TarotVoz from "../components/TarotVoz";
import TarotHeader from "./TarotHeader"; // ispravljeno u ./ jer je u pages

const PitanjeIzbor = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <TarotHeader />

      <div className="flex flex-1 flex-col px-4 pt-2 pb-32 gap-4">
        {/* Gornji deo: predefinisana pitanja i placeholderi */}
        <div className="flex justify-between">
          {/* Levo: kategorije pitanja */}
          <div className="w-1/2 pr-2">
            <h2 className="text-lg font-semibold mb-2">Izaberi oblast</h2>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-indigo-700 rounded p-2">Ljubav</button>
              <button className="bg-indigo-700 rounded p-2">Posao</button>
              <button className="bg-indigo-700 rounded p-2">Zdravlje</button>
              <button className="bg-indigo-700 rounded p-2">Karma</button>
              <button className="bg-indigo-700 rounded p-2">Duhovni razvoj</button>
              <button className="bg-indigo-700 rounded p-2">Porodica</button>
            </div>
          </div>

          {/* Desno: placeholderi za izvučene karte */}
          <div className="w-1/2 pl-2">
            <h2 className="text-lg font-semibold mb-2">Tvoje karte</h2>
            <div className="flex gap-2">
              <div className="w-20 h-32 bg-gray-800 rounded shadow-inner border border-gray-600"></div>
              <div className="w-20 h-32 bg-gray-800 rounded shadow-inner border border-gray-600"></div>
              <div className="w-20 h-32 bg-gray-800 rounded shadow-inner border border-gray-600"></div>
            </div>
          </div>
        </div>

        {/* Polje za unos pitanja */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1">Unesi svoje pitanje</label>
          <input
            type="text"
            placeholder="Na šta želiš odgovor?"
            className="w-full p-2 rounded bg-gray-900 border border-gray-700 text-white"
          />
        </div>
      </div>

      {/* Tarot voz pri dnu */}
      <div className="fixed bottom-0 w-full h-14 overflow-hidden z-30">
        <div className="tarot-voznja h-full w-[200%] bg-repeat-x bg-[url('/sprites/tarot_row_12_cards.png')]"></div>
      </div>
    </div>
  );
};

export default PitanjeIzbor;
