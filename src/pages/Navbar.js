import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import LogoImg from "./assets/airprologo.jpeg";
import LogoImg2 from "./assets/airprologo2.jpeg";
import {IconButton } from '@mui/material';
import './style/Navbar.css';
import { Grid} from '@mui/material';




const Navbar = () => {
  return (
    <Grid>
      {/* Upper Bar */}
      <BootstrapNavbar className="navbar navbar-expand-lg text-dark nav2" expand="lg" >
        <BootstrapNavbar.Brand href="/">

          <img
            src={LogoImg2}
            alt="logoap"
            style={{ height: 'auto', width: '80px', maxWidth: '100%', maxHeight: '100%', marginLeft: '90px'}}
            className="img-fluid"
          />
        </BootstrapNavbar.Brand>

        <Nav.Link href="#" className="nav-link  m-3 navbar-top-company-name">AIRPRO PNEUMATICS & SPARES</Nav.Link>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav " />
        <BootstrapNavbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto navbarnam "> 
          {/* Centering the NavLinks */}

            <Nav.Link href="/" className="nav-link ">Home</Nav.Link>
            <span className="mx-3"></span>
            <Nav.Link href="/Menu" className="nav-link ">Menu</Nav.Link>
            <span className="mx-3"></span>
            <Nav.Link href="/AboutUs" className="nav-link ">AboutUs</Nav.Link>
            <span className="mx-3"></span>
            <Nav.Link href="/ContactUs" className="nav-link ">ContactUs</Nav.Link>
            <span className="mx-3"></span>
            <Nav.Link href="/Login" className="nav-link ">Login</Nav.Link>

         
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </Grid>
  );
};

export default Navbar;