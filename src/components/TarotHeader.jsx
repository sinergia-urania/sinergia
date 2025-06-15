import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const TarotHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const showBack = location.pathname !== '/tarot';

  return (
    <div className="flex justify-between items-center bg-black/70 text-white text-base sm:text-lg py-3 px-6 border-b border-yellow-400 min-h-16">
      {showBack ? (
        <button
          onClick={() => navigate(-1)}
          className="text-yellow-400 hover:text-yellow-300"
          title="Nazad"
        >
          <ArrowLeft size={24} />
        </button>
      ) : (
        <div className="w-6" /> // da zadrži razmak
      )}
      <div className="flex-1 flex justify-center space-x-6">
        <NavLink
          to="/tarot"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 font-semibold drop-shadow-yellow' : 'hover:text-yellow-300'
          }
        >
          <Home size={20} className="inline-block mr-1 text-yellow-400" /> Tarot
        </NavLink>
        <NavLink
          to="/tarot/arhiva"
          className={({ isActive }) =>
            isActive ? 'text-yellow-400 font-semibold drop-shadow-yellow' : 'hover:text-yellow-300'
          }
        >
          📂 Arhiva otvaranja
        </NavLink>
      </div>
      <div className="w-6" /> {/* balans na desnoj strani */}
    </div>
  );
};

export default TarotHeader;
