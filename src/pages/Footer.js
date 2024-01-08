import React from 'react'
import logoap from './assets/logoap.jpeg';
import { Grid, Typography } from '@mui/material'; 



function Footer() {
    return (
        <Grid container className="footer-section-of-AP text-white-50" sx={{ backgroundColor: 'black', color: 'white', padding: '20px' }} spacing={2}>
      <Grid className="footer-content1 m-auto" item xs={12} sm={6} md={4}>
        <Typography className="footer-logo">
          <img src={logoap} alt="logoap" style={{ maxWidth: '20%', height: 'auto' }} />
        </Typography>
        <Typography>AIR PRO</Typography>
        <Typography className="footer-adress">F4F-54/4, ID Market Complex, IRC Village,</Typography>
        <Typography>Nayapalli, Bhubaneswar, Odisha, India</Typography>
        <Typography className="f-num">+91 7639585623</Typography>
      </Grid>
      <Grid className="navigation-pages" item xs={12} sm={6} md={4}>
        <Typography variant="h6">Quick links</Typography>
        <Typography>Home</Typography>
        <Typography>AboutUs</Typography>
        <Typography>ContactUs</Typography>
   
      </Grid>
     
    </Grid>
    )
}

export default Footer
