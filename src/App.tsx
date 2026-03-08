import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';

// Why Saudi Pages
import WhyInvest from '@/pages/why-saudi/WhyInvest';
import QualityOfLife from '@/pages/why-saudi/QualityOfLife';
import NationalStrategy from '@/pages/why-saudi/NationalStrategy';
import AboutMISA from '@/pages/why-saudi/AboutMISA';

// Sector Pages
import KeySectors from '@/pages/sectors/KeySectors';
import Regions from '@/pages/sectors/Regions';
import RealEstate from '@/pages/sectors/RealEstate';
import GigaProjects from '@/pages/sectors/GigaProjects';
import Incentives from '@/pages/sectors/Incentives';

// Setup Pages
import InvestorServices from '@/pages/setup/InvestorServices';
import EServices from '@/pages/setup/EServices';

// Programs Pages
import RHQ from '@/pages/programs/RHQ';
import StartupSaudi from '@/pages/programs/StartupSaudi';
import GSCRI from '@/pages/programs/GSCRI';
import Shareek from '@/pages/programs/Shareek';
import CatalyzeSaudi from '@/pages/programs/CatalyzeSaudi';

// Knowledge Pages
import Reports from '@/pages/knowledge/Reports';
import Events from '@/pages/knowledge/Events';
import Laws from '@/pages/knowledge/Laws';
import Dashboards from '@/pages/knowledge/Dashboards';

// Contact Page
import Contact from '@/pages/contact/Contact';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Why Saudi Routes */}
          <Route path="/why-saudi/why-invest" element={<WhyInvest />} />
          <Route path="/why-saudi/quality-of-life" element={<QualityOfLife />} />
          <Route path="/why-saudi/national-strategy" element={<NationalStrategy />} />
          <Route path="/why-saudi/about-misa" element={<AboutMISA />} />
          
          {/* Sector Routes */}
          <Route path="/sectors/key-sectors" element={<KeySectors />} />
          <Route path="/sectors/regions" element={<Regions />} />
          <Route path="/sectors/real-estate" element={<RealEstate />} />
          <Route path="/sectors/giga-projects" element={<GigaProjects />} />
          <Route path="/sectors/incentives" element={<Incentives />} />
          
          {/* Setup Routes */}
          <Route path="/setup/investor-services" element={<InvestorServices />} />
          <Route path="/setup/e-services" element={<EServices />} />
          
          {/* Programs Routes */}
          <Route path="/programs/rhq" element={<RHQ />} />
          <Route path="/programs/startup-saudi" element={<StartupSaudi />} />
          <Route path="/programs/gscri" element={<GSCRI />} />
          <Route path="/programs/shareek" element={<Shareek />} />
          <Route path="/programs/catalyze-saudi" element={<CatalyzeSaudi />} />
          
          {/* Knowledge Routes */}
          <Route path="/knowledge/reports" element={<Reports />} />
          <Route path="/knowledge/events" element={<Events />} />
          <Route path="/knowledge/laws" element={<Laws />} />
          <Route path="/knowledge/dashboards" element={<Dashboards />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
