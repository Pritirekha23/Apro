import React from 'react';
import { Grid, Typography } from '@mui/material';
import './style/AboutUs.css';
import abtusimg1 from './assets/abtusimg1.jpeg';
import animation_cartoon from './assets/animation_cartoon.png'
import SCP from './assets/SCP.gif';
import oursevicess from './assets/oursevicess.jpg';

const AboutUS = () => {
  return (
    <Grid className="aboutus-page-main" style={{ marginTop: '3%' }}>

      <Grid className='abtus-grid1' item xs={12} sm={6} md={4} >
        <Grid className='abtus-grid1-contnet'>
          We have the pleasure to introduce ourselves as the leading supplier of replacement spares and service contractors for Ingersoll-Rand, Dresser-Rand, Chicago Pneumatics, Atlas Copco, and Kirloskar Make Air & Gas Compressors in North & South India.
        </Grid>

        <Grid className='abtus-grid1-contnet animate__animated animate__fadeIn'>
          <Typography className='aboutus-page-heading '>
            <b><u>COMPRESSED</u>  AIR POWER: INDISPENSABLE FOR MODERN INDUSTRY</b>
          </Typography>
          ‘Compressed Air Power’ has come to occupy a unique and critical position in different processes of various Industries. In many cases Air power is safer and cheaper than electric power. Consistency and quality of air power depends on the quality of air compressors and the replacement spares used.
        </Grid>

      </Grid>


      <Grid className="abtus-grid-2-with-image" container>
        <Grid item xs={12} sm={6} className='abtus-grid-2-content'>
          <Typography className='aboutus-page-heading'>
            <b> <u>BAC</u>KGROUND</b>
          </Typography>
          Sigma Pneumatics & Spares was setup 05 years back with the sole motto of quality service and spares at affordable rates in the field of Compressor servicing. From strength of merely 3 people the company has now grown to have more than 30 in its fold, including 18 service Engineers, and now operates from three locations. This on itself speaks volumes of the respect and trust the Industrial fraternity has reposed on us.
        </Grid>
        <Grid item xs={12} sm={6} className='abtus-grid-2-img' >
          <img src={abtusimg1} className="abtus-grid-2-image animate__animated animate__fadeInRight" alt="this is first image of about us page" />
        </Grid>
      </Grid><br /><br /><br />


      <Grid className='productandservices'>
        <Grid item xs={12} sm={6} className='abtus-grid-2-img hide-on-mobile b' >
          <img src={SCP} className="ab" alt="this is first image of about us page" style={{
            width: "600px",
            height: "120%",
            borderRadius: "2%"
          }} />
        </Grid>
        <Grid >
          <Typography className='aboutus-page-heading '><b> <u>PRO</u>DUCTS</b></Typography><br />
          For us Customer Satisfaction is not a means but an end on itself. Being the ex-workers of Ingersoll-Rand  and Chicago Pneumatics the leaders in Compressed Air technology and by virtue of the experience gained from the field we can safely call ourselves as experts in the field.
          We at Airpro Pneumatics & Spares, have successfully addressed to all the doubts and fears commonly expressed about suppliers of Compressor Spares. The replacement spares supplied by us are sourced from the OE suppliers. Coupled this with our low overheads we are able to supply genuine spares at considerably lower rates. There would be a minimum saving of 25% - 30% on your spares cost. All our spares are highly reliable and exactly adhere to OE specifications.  Most of the spares supplied by us are guaranteed for a minimum period of 12 months of defect-less performance.
        </Grid><br />



      </Grid>

      <br /> <br />  <br />

      <Grid class="onlyservices hide-on-mobile">

        <Grid>
          <Typography className='aboutus-page-heading '> <b>  <u>SER</u>VICES</b></Typography><br />
          You would definitely agree that for better & consistent supply of Air Power, servicing of the compressors should be of high quality. With this in mind we have a dedicated, qualified and highly experienced group of Engineers who would attend to your problems / break downs round-the-clock.

          On entering into an Annual Maintenance Contract with us you can be absolutely sure of trouble-free compressor operation throughout the contract period. In fact, we help you in achieving zero-break down for compressors throughout the year. Our team of service Engineers are available to you round-the-clock to attend to break down calls. As a further proof of our dedication we are in a position to carryout the maintenance of your Compressors on Sundays and National Holidays without affecting your production schedule. You also save a lot of expenditure by not employing people separately for the purpose of Compressor Maintenance and our AMC rates are heard to be believed.

          If you judge a Company by the clients it has or the business relations it keeps, you would agree that we are far above our competitors. Year after year we are able to meet the exacting standards set by the leading MNCs, PSUs & Indian Companies in different Industries.


          We, at Airpro, believe in and look forward to establishing long-term, mutually beneficial business relationships. Business with us means entering the realm of professionalism and leaving the ordinary behind. Kindly get in touch with Mr. Manas & Debasish to know more about our services. We would very much appreciate your kind gesture of letting us visit your premises to offer personalized service / solutions.
        </Grid>
        <Grid item xs={12} sm={6} className='abtus-grid-2-img' >
          <img src={oursevicess} className='b animate__animated animate__bounce' alt="this is first image of about us page" style={{
            width: "600px",
            height: "100%",
            borderRadius: "2%"
          }} />
        </Grid>

      </Grid>
    </Grid>






  );
};

export default AboutUS;
