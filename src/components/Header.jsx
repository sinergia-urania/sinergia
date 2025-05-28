import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleToggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.muted = false;
      audio.play().catch(() => {});
      setIsPlaying(true);
    } else {
      audio.pause();
      audio.muted = true;
      setIsPlaying(false);
    }
  };

  return (
    <header className="w-full bg-black/60 backdrop-blur-sm shadow-md px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      {/* Gornji red — mobilni raspored: ☰ 🏠 🌐 🔊 */}
      <div className="flex items-center justify-between w-full sm:w-auto space-x-4">

        {/* ☰ Meni dugme (mobilno) */}
        <button
          className="text-white text-2xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* 🏠 Početna */}
        <button
          onClick={() => navigate('/')}
          className="text-white hover:text-yellow-400 transition-colors text-lg"
        >
          🏠
        </button>

        {/* 🌐 Jezik izbor */}
        <div className="flex items-center space-x-1">
          <label htmlFor="language-select" className="text-white text-lg">🌐</label>
          <select
            id="language-select"
            onChange={changeLanguage}
            value={i18n.language}
            className="bg-white text-black px-2 py-1 rounded text-sm"
          >
            <option value="sr">SR</option>
            <option value="en">EN</option>
            <option value="hi">HI</option>
            <option value="es">ES</option>
            <option value="fr">FR</option>
            <option value="pt">PT</option>
            <option value="de">DE</option>
          </select>
        </div>

        {/* 🔊 Zvuk bez teksta */}
        <button
          onClick={handleToggleSound}
          className="text-white hover:text-yellow-400 transition-colors text-xl"
        >
          {isPlaying ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Hamburger meni — otvara se ispod */}
      {menuOpen && (
        <div className="grid grid-cols-1 gap-2 mt-4 sm:hidden text-white bg-black/80 rounded p-4 text-base shadow-inner">
          <NavLink to="/profil" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-yellow-400">
            <span>👤</span> <span>{t('profil') || 'Profil'}</span>
          </NavLink>
          <NavLink to="/podesavanja" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-yellow-400">
            <span>⚙️</span> <span>{t('podesavanja') || 'Podešavanja'}</span>
          </NavLink>
          <NavLink to="/faq" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-yellow-400">
            <span>❓</span> <span>{t('faq') || 'Pitanja i odgovori'}</span>
          </NavLink>
          <NavLink to="/oceni" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-yellow-400">
            <span>⭐</span> <span>{t('oceni') || 'Oceni aplikaciju'}</span>
          </NavLink>
          <NavLink to="/podeli" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-yellow-400">
            <span>📤</span> <span>{t('podeli') || 'Podeli aplikaciju'}</span>
          </NavLink>
          <NavLink to="/privatnost" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 hover:text-yellow-400">
            <span>📜</span> <span>{t('privatnost') || 'Politika privatnosti'}</span>
          </NavLink>
        </div>
      )}

      {/* Audio */}
      <audio ref={audioRef} src="/sinergija-audio.mp3" preload="auto" />
    </header>
  );
}

export default Header;
