import React from 'react';

const Tarot = () => {
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
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Tarot</h1>
      <p className="max-w-xl text-center">
        Ovde će biti prikaz za izvlačenje tarot karata, animacije i tumačenja.
        Možemo kasnije dodati kartice koje se "vuku" iz špila i nasumično prikazuju simboliku.
      </p>
    </div>
  );
};

export default Tarot;
