import React from 'react';
import { X } from 'lucide-react';

const Zlatnik = () => <span className="text-yellow-400">🪙</span>;

const MembershipModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-black text-white rounded-2xl shadow-xl w-full max-w-4xl relative p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-yellow-400">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-yellow-300">
          Uporedni pregled funkcija po paketima
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-yellow-500">
            <thead className="bg-yellow-500 text-black">
              <tr>
                <th className="p-2 border">Funkcija</th>
                <th className="p-2 border">Free</th>
                <th className="p-2 border">Premium</th>
                <th className="p-2 border">Pro</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="bg-black/40">
                <td className="p-2 border text-left">Značenje karata</td>
                <td className="p-2 border"><Zlatnik /></td>
                <td className="p-2 border"><Zlatnik /></td>
                <td className="p-2 border"><Zlatnik /></td>
              </tr>
              <tr>
                <td className="p-2 border text-left">Klasična otvaranja</td>
                <td className="p-2 border"><Zlatnik /></td>
                <td className="p-2 border"><Zlatnik /></td>
                <td className="p-2 border"><Zlatnik /></td>
              </tr>
              <tr className="bg-black/40">
                <td className="p-2 border text-left">Keltski krst</td>
                <td className="p-2 border"><Zlatnik /></td>
                <td className="p-2 border"><Zlatnik /></td>
                <td className="p-2 border"><Zlatnik /></td>
              </tr>
              <tr>
                <td className="p-2 border text-left">Astrološko otvaranje</td>
                <td className="p-2 border text-red-500">—</td>
                <td className="p-2 border"><Zlatnik /></td>
                <td className="p-2 border"><Zlatnik /></td>
              </tr>
              <tr className="bg-black/40">
                <td className="p-2 border text-left">Drvo života</td>
                <td className="p-2 border text-red-500">—</td>
                <td className="p-2 border text-red-500">—</td>
                <td className="p-2 border"><Zlatnik /></td>
              </tr>
              <tr>
                <td className="p-2 border text-left">AI potpitanja</td>
                <td className="p-2 border text-red-500">—</td>
                <td className="p-2 border text-red-500">—</td>
                <td className="p-2 border"><Zlatnik /></td>
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

        <p className="mt-4 text-xs text-center text-gray-400">
          ⚠️ Zlatnici se osvajaju gledanjem reklama. Otključavanje dodatnih otvaranja moguće je samo u Free paketu.
        </p>
      </div>
    </div>
  );
};

export default MembershipModal;
