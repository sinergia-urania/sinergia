import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeNavigation from './components/HomeNavigation';
import Djotis from './components/Djotis';
import JiDjing from './components/JiDjing';
import Numerologija from './components/Numerologija';
import Sinergija from './components/Sinergija';
import TarotHome from './pages/TarotHome';
import TarotArchive from './pages/TarotArchive';
import TarotMeaning from './pages/TarotMeaning';
import CheckMissingCardImages from './pages/CheckMissingCardImages';
import TarotOtvaranja from './pages/TarotOtvaranja';
import PitanjeIzbor from './pages/PitanjeIzbor';

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen text-white flex flex-col"
        style={{
          backgroundImage: "url('/background-space.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeNavigation />} />
            <Route path="/tarot" element={<TarotHome />} />
            <Route path="/tarot/arhiva" element={<TarotArchive />} />
            <Route path="/tarot/znacenje" element={<TarotMeaning />} />
            <Route path="/tarot/otvaranja" element={<TarotOtvaranja />} />
            <Route path="/tarot/izbor" element={<PitanjeIzbor />} />
            <Route path="/tarot/otvaranja/klasicno/:broj" element={<PitanjeIzbor />} />
            <Route path="/djotis" element={<Djotis />} />
            <Route path="/ji_djing" element={<JiDjing />} />
            <Route path="/numerologija" element={<Numerologija />} />
            <Route path="/sinergija" element={<Sinergija />} />
            <Route path="/test/slike" element={<CheckMissingCardImages />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
