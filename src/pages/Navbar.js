import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import LogoImage from "./assets/logoap.jpeg";
import './style/Navbar.css'

const Navbar = () => {
  return (
    <div>
      {/* Upper Bar */}
      <BootstrapNavbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
        <BootstrapNavbar.Brand href="/">
          <img
            src={LogoImage}
            alt="logoap"
            style={{ height: 'auto', width: '70px', maxWidth: '100%', maxHeight: '100%' ,marginLeft:'90px'}}
            className="img-fluid"
          />
           {/* <div style={{ position: 'absolute', bottom: '-5px', left: '7%', transform: 'translateX(-20%)', color: 'white' , fontWeight:'700'}}>
              Air Pro
            </div> */}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav " />
        <BootstrapNavbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto navbar-nam "> {/* Centering the NavLinks */}
            <Nav.Link href="/" className="nav-link text-white">Home</Nav.Link>
            <span className="mx-3"></span>
            <Nav.Link href="/Menu" className="nav-link text-white">Menu</Nav.Link>
            <span className="mx-3"></span>
            <Nav.Link href="/AboutUs" className="nav-link text-white">AboutUs</Nav.Link>
            <span className="mx-3"></span>
            <Nav.Link href="/ContactUs" className="nav-link text-white">ContactUs</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
