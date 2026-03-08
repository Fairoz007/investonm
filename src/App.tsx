import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import Home from '@/pages/Home';

// Why Oman Pages
import WhyInvest from '@/pages/why-oman/WhyInvest';
import QualityOfLife from '@/pages/why-oman/QualityOfLife';
import NationalStrategy from '@/pages/why-oman/NationalStrategy';
import AboutInvestOman from '@/pages/why-oman/AboutInvestOman';

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
import StartupOman from '@/pages/programs/StartupOman';
import GSCRI from '@/pages/programs/GSCRI';
import Shareek from '@/pages/programs/Shareek';
import CatalyzeOman from '@/pages/programs/CatalyzeOman';

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

          {/* Why Oman Routes */}
          <Route path="/why-oman/why-invest" element={<WhyInvest />} />
          <Route path="/why-oman/quality-of-life" element={<QualityOfLife />} />
          <Route path="/why-oman/national-strategy" element={<NationalStrategy />} />
          <Route path="/why-oman/about-invest-oman" element={<AboutInvestOman />} />

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
          <Route path="/programs/startup-oman" element={<StartupOman />} />
          <Route path="/programs/gscri" element={<GSCRI />} />
          <Route path="/programs/shareek" element={<Shareek />} />
          <Route path="/programs/catalyze-oman" element={<CatalyzeOman />} />

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
