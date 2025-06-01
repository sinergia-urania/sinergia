// layoutTemplates.js

export const JEDNA_KARTA = {
  id: "jedna",
  label: "Jedna karta",
  brojKarata: 1,
  layout: [{ x: 0, y: 0 }],
};

export const LJUBAVNO_OTVARANJE = {
  id: "ljubavno",
  label: "Ljubavno otvaranje",
  brojKarata: 2,
  layout: [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ],
};

export const TRI_KARTE = {
  id: "tri",
  label: "Tri karte (prošlost, sadašnjost, budućnost)",
  brojKarata: 3,
  layout: [
    { x: -1.5, y: 0 },
    { x: 0, y: 0 },
    { x: 1.5, y: 0 },
  ],
};

export const PET_KARATA = {
  id: "pet",
  label: "Pet karata (linijski raspored)",
  brojKarata: 5,
  layout: [
    { x: -2, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 2, y: 0 },
  ],
};

export const KELTSKI_KRST = {
  id: "keltski",
  label: "Keltski krst",
  brojKarata: 10,
  layout: [
    { x: 0, y: 0 },      // 1
    { x: 0, y: 0 },      // 2 (preklapa 1)
    { x: -2, y: 0 },     // 3 levo
    { x: 0, y: 2 },      // 4 dole
    { x: 0, y: -2 },     // 5 gore
    { x: 2, y: 0 },      // 6 desno
    { x: 4, y: 2 },      // 7
    { x: 4, y: 1 },      // 8
    { x: 4, y: 0 },      // 9
    { x: 4, y: -1 },     // 10
  ]
};

export const ASTROLOSKO = {
  id: "astrološko",
  label: "Astrološko otvaranje (12 kuća)",
  brojKarata: 12,
  layout: Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 2 * Math.PI;
    return {
      x: Math.cos(angle) * 3,
      y: Math.sin(angle) * 3,
    };
  }),
};

export const KABALISTICKO = {
  id: "drvo",
  label: "Kabalističko otvaranje (Drvo života)",
  brojKarata: 10,
  layout: [
    { x: 0, y: -3 },
    { x: -1.5, y: -2 },
    { x: 1.5, y: -2 },
    { x: 0, y: -1 },
    { x: -1.5, y: 0 },
    { x: 1.5, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 2 },
    { x: 1, y: 2 },
    { x: 0, y: 3 },
  ],
};

export const DVE_KARTE = {
  id: "dve",
  label: "Dve karte (Ja / On-Ona)",
  brojKarata: 2,
  layout: [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
  ],
};