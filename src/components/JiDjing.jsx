import React from 'react';

const JiDjing = () => {
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
      <h1 className="text-4xl font-bold text-yellow-400 mb-4">Ji Đing</h1>
      <p className="max-w-xl text-center">
        Ovde će korisnik bacati novčiće, dobijati heksagrame i tumačenja.
        Biće omogućena vizuelizacija procesa i objašnjenje značenja svakog heksagrama.
      </p>
    </div>
  );
};

export default JiDjing;
