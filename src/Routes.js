// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';

import Mspc from './pages/Components/RAC/Mspc';
import Tspc from './pages/Components/RAC/Tspc';
import Nltsbac from './pages/Components/RAC/Nltsbac';
import Nltspc from './pages/Components/RAC/Nltspc';
import Vc from './pages/Components/RAC/Vc';

import Ir10t3nlparts from './pages/Components/IngersollRandType30nlparts/Ir10t3nlparts';
import Ir5t2nlparts from './pages/Components/IngersollRandType30nlparts/Ir5t2nlparts';

import Aircopcovt4parts from './pages/Components/AirCopcoVT4Parts/Aircopcovt4parts';


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

// Ingersoll Rand ESV Parts
import Ir75elp from './pages/Components/IRESVparts/Ir75elp';
import Ir85elp from './pages/Components/IRESVparts/Ir85elp';
import Ir9125elp from './pages/Components/IRESVparts/Ir9125elp';
import Ir75enlp from './pages/Components/IRESVparts/Ir75enlp';
import Ir85enlp from './pages/Components/IRESVparts/Ir85enlp';
import Ir87enlp from './pages/Components/IRESVparts/Ir87enlp';
import Ir9125enlp from './pages/Components/IRESVparts/Ir9125enlp';
import Ir9127enlp from './pages/Components/IRESVparts/Ir9127enlp';
import Ir97enlp from './pages/Components/IRESVparts/Ir97enlp';
import Ir87elp from './pages/Components/IRESVparts/Ir87elp';
import Ir9127elp from './pages/Components/IRESVparts/Ir9127elp';
import Ir117elp from './pages/Components/IRESVparts/Ir117elp';
import Ir117enlp from './pages/Components/IRESVparts/Ir117enlp';
import Ir129enlp from './pages/Components/IRESVparts/Ir129enlp';
import Ir45enlp from './pages/Components/IRESVparts/Ir45enlp';

// Ingersoll Rand Air Compressor Parts
import Ir1277pp from './pages/Components/IRACParts/Ir1277pp';
import Ir1277inp from './pages/Components/IRACParts/Ir1277inp';
import Ir16107inp from './pages/Components/IRACParts/Ir16107inp';
import Petstarps4p from './pages/Components/IRACParts/Petstarps4p';
import Ir747epp from './pages/Components/IRACParts/Ir747epp';
import Ir557pbp from './pages/Components/IRACParts/Ir557pbp';
import Ir1067pnp from './pages/Components/IRACParts/Ir1067pnp';
import Ir4755enbp from './pages/Components/IRACParts/Ir4755enbp';
import Ir1277inop from './pages/Components/IRACParts/Ir1277inop';
import Ir12127inp from './pages/Components/IRACParts/Ir12127inp';
import Ir169b7in2p from './pages/Components/IRACParts/Ir169b7in2p';
import Ir547pn from './pages/Components/IRACParts/Ir547pn';
import Ir1277pnp from './pages/Components/IRACParts/Ir1277pnp';

// Chicago Pneumatic Air Compressor Parts
import H150180np from './pages/Components/ChicagoPneumaticAirCompressorParts/H150180np';
import H120215lp from './pages/Components/ChicagoPneumaticAirCompressorParts/H120215lp';
import Hh40pdp from './pages/Components/ChicagoPneumaticAirCompressorParts/Hh40pdp';
import Hh80pdp from './pages/Components/ChicagoPneumaticAirCompressorParts/Hh80pdp';
import Hh100pdp from './pages/Components/ChicagoPneumaticAirCompressorParts/Hh100pdp';

//homepage  readmore pages
import ReciprocatingAirCompressor from './pages/Components/Homereadmore/ReciprocatingAirCompressor';

import Wpicon from './pages/Wpicon.js'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} /> 
        
      
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Wpicon" element={<Wpicon />}/> 
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Menu/pages/Components/RAC/Mspc.js" element={<Mspc />} />
        <Route path="/Menu/pages/Components/RAC/Tspc.js" element={<Tspc />} />
        <Route path="/Menu/pages/Components/RAC/Nltsbac.js" element={<Nltsbac />} />
        <Route path="/Menu/pages/Components/RAC/Nltspc.js" element={<Nltspc />} />
        <Route path="/Menu/pages/Components/RAC/Vc.js" element={<Vc />} />
        <Route path="/Menu/pages/Components/IngersollRandType30nlparts/Ir5t2nlparts.js"  element={<Ir5t2nlparts />}/>
        <Route path="/Menu/pages/Components/IngersollRandType30nlparts/Ir10t3nlparts.js"  element={<Ir10t3nlparts />}/>
        <Route path="/Menu/pages/Components/AirCopcoVT4Parts/Aircopcovt4parts.js" element={<Aircopcovt4parts />}/>



        {/* Chicago Pneumatic Air Compressor Parts   */}
        <Route path="/Menu/pages/Components/Chicago PneumaticAirCompressorParts/Hn2t50180np.js" element={<H150180np />}/>
        <Route path="/Menu/pages/Components/ChicagoPneumaticAirCompressorParts/H120215lp.js" element={<H120215lp />}/>
        <Route path="/Menu/pages/Components/ChicagoPneumaticAirCompressorParts/Hh40pdp.js" element={<Hh40pdp />}/>
        <Route path="/Menu/pages/Components/ChicagoPneumaticAirCompressorParts/Hh80pdp.js" element={<Hh80pdp />}/>
        <Route path="/Menu/pages/Components/ChicagoPneumaticAirCompressorParts/Hh100pdp.js" element={<Hh100pdp />}/>


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


        {/* Ingersoll Rand ESV Parts */}

        <Route path="/Menu/pages/Components/IRESVparts/Ir75elp.js" element={<Ir75elp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir85elp.js" element={<Ir85elp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir9125elp.js" element={<Ir9125elp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir75enlp.js" element={<Ir75enlp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir85enlp.js" element={<Ir85enlp/>}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir87enlp.js" element={<Ir87enlp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir9125enlp.js" element={<Ir9125enlp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir9127enlp.js" element={<Ir9127enlp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir97enlp.js" element={<Ir97enlp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir87elp.js" element={<Ir87elp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir9127elp.js" element={<Ir9127elp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir117elp.js" element={<Ir117elp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir117enlp.js" element={<Ir117enlp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir129enlp.js" element={<Ir129enlp />}/>
        <Route path="/Menu/pages/Components/IRESVparts/Ir45enlp.js" element={<Ir45enlp />}/>
       
        {/* Ingersoll Rand Air Compressor Parts */}
        <Route path="/Menu/pages/Components/IRACParts/Ir1277pp.js" element={<Ir1277pp/>}/>  
        <Route path="/Menu/pages/Components/IRACParts/Ir1277inp.js" element={<Ir1277inp />}/>  
        <Route path="/Menu/pages/Components/IRACParts/Ir16107inp.js" element={<Ir16107inp />}/>  
        <Route path="/Menu/pages/Components/IRACParts/Petstarps4p.js" element={<Petstarps4p />}/>  
        <Route path="/Menu/pages/Components/IRACParts/Ir747epp.js" element={<Ir747epp />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir557pbp.js" element={<Ir557pbp />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir1067pnp.js" element={<Ir1067pnp />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir4755enbp.js" element={<Ir4755enbp />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir1277inop.js" element={<Ir1277inop />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir169b7in2p.js" element={<Ir169b7in2p />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir547pn.js" element={<Ir547pn />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir12127inp.js" element={<Ir12127inp />}/> 
        <Route path="/Menu/pages/Components/IRACParts/Ir1277pnp.js" element={<Ir1277pnp />}/>


        {/* homepage  readmore pages */}
        <Route path="/Menu/pages/Components/Homereadmore/ReciprocatingAirCompressor.js" element={<ReciprocatingAirCompressor />}/> 
        


      </Routes>
    </Router>
  );
};

export default AppRoutes;