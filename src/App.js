// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AppRoutes from './Routes';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Wpicon from './pages/Wpicon';

const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes />
      <Wpicon />
      <Footer/>
    </div>
  );
};

export default App;
