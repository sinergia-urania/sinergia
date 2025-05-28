// TarotMembershipTable.jsx
import React from 'react';

const TarotMembershipTable = () => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-10 text-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Tarot - Pristup po korisničkom nivou
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-yellow-500 text-sm sm:text-base">
          <thead>
            <tr className="bg-yellow-500 text-black">
              <th className="p-2 border">Funkcija</th>
              <th className="p-2 border">Free</th>
              <th className="p-2 border">Premium</th>
              <th className="p-2 border">Profi</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="bg-black/40">
              <td className="p-2 border text-left">Značenje karata</td>
              <td className="p-2 border">36 karata</td>
              <td className="p-2 border">Sve karte</td>
              <td className="p-2 border">Sve karte</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">Klasična otvaranja (3/5 karata)</td>
              <td className="p-2 border">✅</td>
              <td className="p-2 border">✅</td>
              <td className="p-2 border">✅</td>
            </tr>
            <tr className="bg-black/40">
              <td className="p-2 border text-left">Keltski krst</td>
              <td className="p-2 border">❌</td>
              <td className="p-2 border">✅</td>
              <td className="p-2 border">✅</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">Astrološko otvaranje (12 kuća)</td>
              <td className="p-2 border">❌</td>
              <td className="p-2 border">✅</td>
              <td className="p-2 border">✅</td>
            </tr>
            <tr className="bg-black/40">
              <td className="p-2 border text-left">Kabalističko otvaranje (Drvo života)</td>
              <td className="p-2 border">❌</td>
              <td className="p-2 border">❌</td>
              <td className="p-2 border">✅</td>
            </tr>
            <tr>
              <td className="p-2 border text-left">AI potpitanja tokom otvaranja</td>
              <td className="p-2 border">❌</td>
              <td className="p-2 border">❌</td>
              <td className="p-2 border">2–3 pitanja</td>
            </tr>
            <tr className="bg-black/40">
              <td className="p-2 border text-left">Reklame</td>
              <td className="p-2 border">Prikazane</td>
              <td className="p-2 border">Bez reklama</td>
              <td className="p-2 border">Bez reklama</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TarotMembershipTable;
