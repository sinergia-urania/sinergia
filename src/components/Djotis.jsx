import React from 'react';

const Djotis = () => {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/background-space.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Đotiš (Astro)</h1>
      <p className="max-w-xl text-center">
        Ovo je test varijanta Đotiš stranice pod nazivom "Astro".
        Ukoliko se ovo prikazuje, greška sa importom i keširanjem je uspešno rešena.
      </p>
    </div>
  );
};

export default Djotis;
