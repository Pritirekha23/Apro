// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

import Mspc from './pages/Components/RAC/Mspc';
import Tspc from './pages/Components/RAC/Tspc';
import Nltsbac from './pages/Components/RAC/Nltsbac';
import Nltspc from './pages/Components/RAC/Nltspc';
import Vc from './pages/Components/RAC/Vc';
import Ir10t3nlparts from './pages/Components/IngersollRandType30nlparts/Ir10t3nlparts';
import Ir5t2nlparts from './pages/Components/IngersollRandType30nlparts/Ir5t2nlparts';
import Aircopcovt4parts from './pages/Components/AirCopcoVT4Parts/Aircopcovt4parts';
import Hn2t50180np from './pages/Components/ChicagoPneumaticAirCompressorParts/Hn2t50180np';

// Ingersoll Rand Type 30 Parts pages
import Ir15t from './pages/Components/IRType30Parts/Ir15t';
import Ir2340 from './pages/Components/IRType30Parts/Ir2340';
import Ir2475 from './pages/Components/IRType30Parts/Ir2475';
import Ir2545 from './pages/Components/IRType30Parts/Ir2545';
import Ir3000 from './pages/Components/IRType30Parts/Ir3000';
import Ir7100 from './pages/Components/IRType30Parts/Ir7100';
import Ir15t2 from './pages/Components/IRType30Parts/Ir15t2';
import Ir2540 from './pages/Components/IRType30Parts/Ir2540';
import Ir7t2 from './pages/Components/IRType30Parts/Ir7t2';
import Ir231 from './pages/Components/IRType30Parts/Ir231';
import Ir242 from './pages/Components/IRType30Parts/Ir242';
import Ir234 from './pages/Components/IRType30Parts/Ir234';
import Ir253 from './pages/Components/IRType30Parts/Ir253';
import Ir71t2 from './pages/Components/IRType30Parts/Ir71t2';






const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} /> 
        
      
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Menu/pages/Components/RAC/Mspc.js" element={<Mspc />} />
        <Route path="/Menu/pages/Components/RAC/Tspc.js" element={<Tspc />} />
        <Route path="/Menu/pages/Components/RAC/Nltsbac.js" element={<Nltsbac />} />
        <Route path="/Menu/pages/Components/RAC/Nltspc.js" element={<Nltspc />} />
        <Route path="/Menu/pages/Components/RAC/Vc.js" element={<Vc />} />
        <Route path="/Menu/pages/Components/IngersollRandType30nlparts/Ir5t2nlparts.js"  element={<Ir5t2nlparts />}/>
        <Route path="/Menu/pages/Components/IngersollRandType30nlparts/Ir10t3nlparts.js"  element={<Ir10t3nlparts />}/>
        <Route path="/Menu/pages/Components/AirCopcoVT4Parts/Aircopcovt4parts.js" element={<Aircopcovt4parts />}/>
        <Route path="/Menu/pages/Components/ChicagoPneumaticAirCompressorParts/Hn2t50180np.js" element={<Hn2t50180np />}/>


        {/* Ingersoll Rand Type 30 Parts pages */}
        <Route path="/Menu/pages/Components/IRType30Parts/Ir15t.js" element={<Ir15t />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir2340.js" element={<Ir2340 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir2475.js" element={<Ir2475 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir2545.js" element={<Ir2545 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir3000.js" element={<Ir3000 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir7100.js" element={<Ir7100 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir15t2.js" element={<Ir15t2 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir2540.js" element={<Ir2540 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir7t2.js" element={<Ir7t2/>}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir231.js" element={<Ir231 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir231.js" element={<Ir231 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir242.js" element={<Ir242 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir234.js" element={<Ir234 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir253.js" element={<Ir253 />}/>
        <Route path="/Menu/pages/Components/IRType30Parts/Ir71t2.js" element={<Ir71t2 />}/>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
