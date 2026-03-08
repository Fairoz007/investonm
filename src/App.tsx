import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';
import AboutOman from '@/pages/AboutOman';
import KeySectors from '@/pages/KeySectors';
import WhoWeAre from '@/pages/WhoWeAre';
import Contact from '@/pages/Contact';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-oman" element={<AboutOman />} />
          <Route path="/key-sectors" element={<KeySectors />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
