import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SinergijaCenter = () => {
  const controls = useAnimation();
  const [isRotating, setIsRotating] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    let pauseTimeout;

    const loopAnimation = async () => {
      setIsRotating(true);
      await controls.start({ rotate: 360, transition: { duration: 4, ease: 'linear' } });
      controls.set({ rotate: 0 });
      setIsRotating(false);
      pauseTimeout = setTimeout(loopAnimation, 3000);
    };

    loopAnimation();

    return () => {
      clearTimeout(pauseTimeout);
    };
  }, [controls]);

  const handleClick = () => {
    navigate('/sinergija');
  };

  return (
    <div className="relative flex justify-center items-center w-[300px] h-[300px] cursor-pointer" onClick={handleClick}>
      {/* Prikaz oka u zavisnosti od rotacije */}
      <img
        src={isRotating ? "/zmija-otvoreno-oko.png" : "/zmija-zatvoreno-oko.png"}
        alt="Oko"
        className="absolute w-[160px] h-[160px] z-10"
      />

      {/* Rotirajuća zmija */}
      <motion.div
        animate={controls}
        className="absolute w-[250px] h-[250px]"
      >
        <img
          src="/zmija.png"
          alt="Zmija"
          className="w-full h-full"
        />
      </motion.div>

      {/* Natpis ispod */}
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 text-white font-medium text-lg z-30">
        {t('sinergija')}
      </div>
    </div>
  );
};

export default SinergijaCenter;
