import React from 'react';

const Sinergija = () => {
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
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Sinergija</h1>
      <p className="max-w-xl text-center">
        Na ovoj stranici će se objediniti rezultati iz svih tehnika.
        Kombinacija Đotiša, Tarota, Numerologije i Ji Đinga daće dublji uvid i širu sliku.
      </p>
    </div>
  );
};

export default Sinergija;
