// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SelfbaseC from './pages/SelfbaseC';

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
        {/* <Route path="/Courses/C" element={<C />} />
        <Route path="/Courses/Java" element={<Java />} />
        <Route path="/Courses/Python" element={<Python/>} />
        <Route path="/Courses/Cpp" element={<Cpp />} />
        <Route path="/Courses/Dsa" element={<Dsa />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
