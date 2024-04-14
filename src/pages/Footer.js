import React from 'react'
import logoap from './assets/airprologo.jpeg';
import { Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <Grid container className="footer-section-of-AP text-white-50" sx={{ backgroundColor: '#161616', color: 'black', padding: '20px' }} spacing={2}>
      <Grid className="footer-content1 m-auto" item xs={12} sm={6} md={4}>
        <Typography className="footer-logo">
          <img src={logoap} alt="logoap" style={{ maxWidth: '20%', height: 'auto',borderRadius:'25%' }} />
        </Typography>

        <Typography style={{color:"#BDBBB5"}} className="footer-adress">F4F-54/4, ID Market Complex, IRC Village,</Typography>
        <Typography style={{color:"#BDBBB5"}}>Nayapalli, Bhubaneswar, Odisha, India</Typography>
        <Typography style={{color:"#BDBBB5" ,fontWeight:"600"}}>GST No: 21PYNPS5664G1ZO</Typography>
        <Typography style={{color:"#BDBBB5"}} className="f-num">Phone No: +91 6363681250</Typography>
        <Typography style={{color:"#BDBBB5"}}>Email Us: sales@airproindia.in</Typography>
        <Typography >
          <IconButton href="https://wa.me/6363681250" target="_blank" style={{ color: 'green' }}>
            <WhatsAppIcon />
          </IconButton>
          <IconButton href="https://www.facebook.com/people/Airpro-Pneumatics-Spares/61553618098816/?mibextid=ZbWKwL" target="_blank" style={{ color: 'blue' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.youtube.com/" target="_blank" style={{ color: 'red' }}>
            <YouTubeIcon />
          </IconButton>
          <IconButton href="https://twitter.com/" target="_blank" style={{ color: 'blue' }}>
            <TwitterIcon />
          </IconButton>
        </Typography>
      </Grid>
      <Grid className="navigation-pages" item xs={12} sm={6} md={4}>
        {/* <Typography variant="h6">Quick links</Typography>
        <Typography>Home</Typography>
        <Typography>AboutUs</Typography>
        <Typography>ContactUs</Typography> */}

        {/* Social Media Icons */}
        <Typography>
          Location here:
        </Typography>
        <Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29938.694615070097!2d85.77373541447314!3d20.286320649803503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d626fffc1d%3A0xe19f5ac0b78f8e62!2sNayapalli%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1706105982052!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{
              border: '0',
              maxWidth: '100%',
              width: '80%',
              height: '250px',
              margin: '0 auto', 
              // display: 'block',
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Typography>


      </Grid>

    </Grid>
  )
}

export default Footer;