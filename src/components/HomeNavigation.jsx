import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomeNavigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const snakeSoundRef = useRef(null);
  const clickSoundRef = useRef(null);
  const [timeProgress, setTimeProgress] = useState(0);

  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play();
    }
  };

  useEffect(() => {
    let startTime = performance.now();
    let previousIsRotating = true;

    const interval = setInterval(() => {
      const now = performance.now();
      const elapsed = (now - startTime) % 7000;
      setTimeProgress(elapsed);

      const isNowRotating = elapsed < 4000;
      if (isNowRotating && !previousIsRotating) {
        if (snakeSoundRef.current) {
          snakeSoundRef.current.volume = 0.3;
          snakeSoundRef.current.currentTime = 0;
          snakeSoundRef.current.play();
        }
      }

      previousIsRotating = isNowRotating;
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const isRotating = timeProgress < 4000;

  const items = [
    { key: 'djotis', to: '/djotis', image: '/djotis.png' },
    { key: 'tarot', to: '/tarot', image: '/tarot.png' },
    { key: 'ji_djing', to: '/ji_djing', image: '/ji-djing.png' },
    { key: 'numerologija', to: '/numerologija', image: '/numerologija.png' },
  ];

  return (
    <div className="relative w-full h-[600px] flex flex-col items-center justify-center bg-space bg-cover bg-center">

      {/* Mobile raspored */}
      <div className="flex flex-col items-center justify-center space-y-4 sm:hidden">
        {/* Gornje dve ikonice */}
        <div className="flex space-x-6">
          {items.slice(0, 2).map((item, index) => (
            <NavLink key={index} to={item.to} onClick={playClickSound} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={t(item.key)}
                className="w-20 h-20 rounded-full object-contain bg-black/30 shadow-md border border-yellow-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,100,0.5)] transition-all duration-300"
              />
              <span className="mt-2 text-white text-base">{t(item.key)}</span>
            </NavLink>
          ))}
        </div>

        {/* Centralna zona */}
        <div
          className="relative w-52 h-52 cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,150,0.3)] transition-all duration-300"
          onClick={() => {
            playClickSound();
            navigate('/sinergija');
          }}
        >
          <img
            src="/zmija.png"
            alt="zmija"
            className={`absolute top-0 left-0 w-full h-full object-contain ${
              isRotating ? 'animate-spin-slow' : ''
            }`}
          />
          <div className="absolute top-1/2 left-1/2 w-36 h-36 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-[0_0_60px_20px_rgba(255,255,100,0.2)] animate-fade-in-eye opacity-40">
            <img
              src="/reptilsko-oko.gif"
              alt="reptilsko oko"
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 font-bold text-lg z-40 pointer-events-none">
            {t('sinergija')}
          </div>
        </div>

        {/* Donje dve ikonice */}
        <div className="flex space-x-6">
          {items.slice(2).map((item, index) => (
            <NavLink key={index} to={item.to} onClick={playClickSound} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={t(item.key)}
                className="w-20 h-20 rounded-full object-contain bg-black/30 shadow-md border border-yellow-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,100,0.5)] transition-all duration-300"
              />
              <span className="mt-2 text-white text-base">{t(item.key)}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Desktop raspored */}
      <div className="hidden sm:flex w-full h-full items-center justify-center relative">
        <div
          className="relative w-96 h-96 z-10 cursor-pointer hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,150,0.3)] transition-all duration-300"
          onClick={() => {
            playClickSound();
            navigate('/sinergija');
          }}
        >
          <img
            src="/zmija.png"
            alt="zmija"
            className={`absolute top-0 left-0 w-full h-full object-contain ${
              isRotating ? 'animate-spin-slow' : ''
            }`}
          />
          <div className="absolute top-1/2 left-1/2 w-44 h-44 transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-[0_0_60px_20px_rgba(255,255,100,0.2)] animate-fade-in-eye opacity-40">
            <img
              src="/reptilsko-oko.gif"
              alt="reptilsko oko"
              className="w-full h-full object-cover scale-125"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 font-bold text-xl z-40 pointer-events-none">
            {t('sinergija')}
          </div>
        </div>

        <NavLink to="/djotis" onClick={playClickSound} className="absolute top-0 left-1/2 -translate-x-[52%] flex flex-col items-center z-30">
          <img src="/djotis.png" alt={t('djotis')} className="w-24 h-24 rounded-full object-contain bg-black/30 shadow-md border border-yellow-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,100,0.5)] transition-all duration-300" />
          <span className="mt-2 text-white font-medium">{t('djotis')}</span>
        </NavLink>
        <NavLink to="/tarot" onClick={playClickSound} className="absolute top-1/2 left-[15%] -translate-y-1/2 flex flex-col items-center z-30">
          <img src="/tarot.png" alt={t('tarot')} className="w-24 h-24 rounded-full object-contain bg-black/30 shadow-md border border-yellow-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,100,0.5)] transition-all duration-300" />
          <span className="mt-2 text-white font-medium">{t('tarot')}</span>
        </NavLink>
        <NavLink to="/ji_djing" onClick={playClickSound} className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
          <img src="/ji-djing.png" alt={t('ji_djing')} className="w-24 h-24 rounded-full object-contain bg-black/30 shadow-md border border-yellow-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,100,0.5)] transition-all duration-300" />
          <span className="mt-2 text-white font-medium">{t('ji_djing')}</span>
        </NavLink>
        <NavLink to="/numerologija" onClick={playClickSound} className="absolute top-1/2 right-[15%] -translate-y-1/2 flex flex-col items-center z-30">
          <img src="/numerologija.png" alt={t('numerologija')} className="w-24 h-24 rounded-full object-contain bg-black/30 shadow-md border border-yellow-400 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,100,0.5)] transition-all duration-300" />
          <span className="mt-2 text-white font-medium">{t('numerologija')}</span>
        </NavLink>
      </div>

      {/* Audio elementi */}
      <audio ref={snakeSoundRef} src="/snake-hiss.mp3" preload="auto" />
      <audio ref={clickSoundRef} src="/hover-click.mp3" preload="auto" />
    </div>
  );
};

export default HomeNavigation;
