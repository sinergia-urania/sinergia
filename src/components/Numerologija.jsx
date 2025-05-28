import React from 'react';

const Brojevi = () => {
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
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Brojevi</h1>
      <p className="max-w-xl text-center">
        Stranica za izračunavanje i tumačenje numeroloških brojeva.
        Ovde ćeš moći da uneseš svoje ime i datum rođenja i dobiješ značenje svog ličnog broja.
      </p>
    </div>
  );
};

export default Brojevi;
