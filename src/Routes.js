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


// import C from './pages/Courses/c';
// import Python from './pages/Courses/python';
// import Java from './pages/Courses/java';
// import Dsa from './pages/Courses/dsa';
// import Cpp from './pages/Courses/cpp';

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

        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
