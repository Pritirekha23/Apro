// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AppRoutes from './Routes';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
const App = () => {
  return (
    <div>
      <Navbar/>
      <AppRoutes />
      <Footer/>
    </div>
  );
};

export default App;
