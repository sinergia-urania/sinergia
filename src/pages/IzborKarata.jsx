
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TarotHeader from '../components/TarotHeader';
import IzborKarataModal from '../components/IzborKarataModal';
import getLayoutByTip from '../utils/getLayoutByTip';

const IzborKarata = () => {
  const location = useLocation();
  const { pitanje, tip } = location.state || {};

  const [layoutTemplate, setLayoutTemplate] = useState([]);

  useEffect(() => {
    if (tip) {
      const layout = getLayoutByTip(tip);
      setLayoutTemplate(layout.length > 0 ? layout : [{}]);
      console.log("🔁 Generisan layout za tip:", tip, layout);
    }
  }, [tip]);

  return (
    <div className="min-h-screen background-space text-white pb-10">
      <TarotHeader />
      <IzborKarataModal
        layoutTemplate={layoutTemplate}
        pitanje={pitanje}
        tip={tip}
        onClose={() => {}}
      />
    </div>
  );
};

export default IzborKarata;
