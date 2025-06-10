import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TarotHeader from "../components/TarotHeader";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const oblasti = [
  {
    naziv: "Ljubav",
    ikonica: "❤️",
    pitanja: [
      "Da li me voli?",
      "Kakva je naša budućnost?",
      "Da li ćemo se pomiriti?",
      "Da li ću uskoro upoznati nekog posebnog?",
      "Kako mogu poboljšati svoj ljubavni život?",
      "Da li je moj partner iskren prema meni?",
    ],
  },
  {
    naziv: "Posao",
    ikonica: "💼",
    pitanja: [
      "Da li ću dobiti posao koji želim?",
      "Kakva me karijera čeka?",
      "Da li je vreme za promenu posla?",
      "Kako da napredujem na poslu?",
      "Da li će moj trud biti prepoznat?",
      "Kako da pronađem posao koji me ispunjava?",
    ],
  },
  {
    naziv: "Zdravlje",
    ikonica: "🧘",
    pitanja: [
      "Da li me očekuje oporavak?",
      "Na šta treba da obratim pažnju?",
      "Kako da unapredim svoje zdravlje?",
      "Da li je trenutni tretman pravi izbor?",
      "Kako mogu poboljšati mentalno zdravlje?",
      "Da li treba da tražim drugo mišljenje?",
    ],
  },
  {
    naziv: "Finansije",
    ikonica: "💰",
    pitanja: [
      "Kako da poboljšam svoje finansije?",
      "Da li je pametno ulaganje?",
      "Da li ću imati stabilnost?",
      "Kako da raspolažem novcem pametnije?",
      "Da li ću otplatiti dugove?",
      "Da li mi sledi dobitak?",
    ],
  },
  {
    naziv: "Duhovni razvoj",
    ikonica: "🌀",
    pitanja: [
      "Koja je moja svrha?",
      "Šta mi duša poručuje?",
      "Na čemu treba da radim duhovno?",
      "Koji je sledeći korak u mom razvoju?",
      "Kako da pronađem unutrašnji mir?",
      "Koja lekcija mi se ponavlja?",
    ],
  },
  {
    naziv: "Porodica i odnosi",
    ikonica: "🏡",
    pitanja: [
      "Kako da poboljšam porodične odnose?",
      "Da li će se situacija u porodici smiriti?",
      "Kako da pomognem članu porodice?",
      "Da li će se odnos sa [ime] popraviti?",
      "Kako da budem podrška partneru/partnerki?",
      "Da li nas očekuje mir u kući?",
    ],
  },
];

function Modal({ oblast, onSelect }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* START: Izmenjeni dugmići za oblast */}
      <Button
        onClick={() => {
          new Audio("/hover-click.mp3").play();
          setOpen(true);
        }}
        variant="outline"
        className="text-xl !bg-transparent border border-white hover:bg-white/10 text-yellow-400 rounded-lg px-4 py-2"
      >
        <span className="mr-2">{oblast.ikonica}</span>
        {oblast.naziv}
        <span className="ml-2">{oblast.ikonica}</span>
      </Button>
      {/* END: Izmenjeni dugmići za oblast */}

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-zinc-900 text-white p-6 rounded max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">{oblast.naziv} pitanja</h2>
            <div className="grid gap-2">
              {oblast.pitanja.map((p, idx) => (
                <Button
                  key={idx}
                  variant="secondary"
                  onClick={() => {
                    new Audio("/hover-click.mp3").play();
                    setOpen(false);
                    onSelect(p);
                  }}
                >
                  {p}
                </Button>
              ))}
            </div>
            <div className="text-right mt-4">
              <button
                onClick={() => setOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Zatvori
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function PitanjeIzbor() {
  const location = useLocation();
  const navigate = useNavigate();
  const { layoutTemplate, tip } = location.state || {};
  const [pitanje, setPitanje] = useState("");

  const handleNastavi = () => {
    if (!pitanje.trim()) return;
    navigate("/tarot/izbor-karti", {
      state: {
        layoutTemplate,
        pitanje,
        tip,
      },
    });
  };

  return (
    <div className="min-h-screen background-space text-white pb-10">
      <TarotHeader />
      <div className="max-w-2xl mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-center mb-6">Izaberi oblast pitanja</h2>

        {/* START: Oblasti u koloni (filtrirane ako je tip "ja-on-ona") */}
        <div className="flex flex-col gap-4 mb-10 items-center">
          {(tip === "ljubavno"
            ? oblasti.filter((o) => o.naziv === "Ljubav")
            : oblasti
          ).map((oblast) => (
            <Modal
              key={oblast.naziv}
              oblast={oblast}
              onSelect={(p) => {
                setPitanje(p);
                handleNastavi();
              }}
            />
          ))}
        </div>
        {/* END: Oblasti u koloni */}

        <h2 className="text-lg mb-2">Ili unesi svoje pitanje</h2>
        <div className="mb-10">
          <Input
            value={pitanje}
            onChange={(e) => setPitanje(e.target.value)}
            placeholder="Unesi pitanje"
            className="w-full max-w-md mb-4"
          />
          <div className="flex justify-center">
            <Button onClick={handleNastavi}>Izbor karata</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
