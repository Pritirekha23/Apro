import React from 'react';
import Grid from '@mui/material/Grid';
// import './style/Ir15t.css';
// import { Link } from 'react-router-dom';
import Typography from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';


const cardData = [
  {
    image: 'https://static.wixstatic.com/media/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg',
    alt:   '   Frame Assembly HN2T 80PD Parts',
    heading: ' Frame Assembly HN2T 80PD Parts',

  },
  {
    image: 'https://static.wixstatic.com/media/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg',
    alt:   ' Second Stage Suction Valve Assly. HN2T 80PD',
    heading:  '  Second Stage Suction Valve Assly. HN2T 80PD',
  },
  {

    image: "https://static.wixstatic.com/media/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg",
    alt:     '2 & 3 Stage Piston Assembly HN2T 80PD',
    heading: '2 & 3 Stage Piston Assembly HN2T 80PD',
  },

  {
    image: "https://static.wixstatic.com/media/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg",
    alt:     " 1 & 2 Stage Discharge Valve Assly. HN2T 80PD ",
    heading: '  1 & 2 Stage Discharge Valve Assly. HN2T 80PD',

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg",
    alt:     "First Stage Cylinder Assembly HN2T 80PD",
    heading: "First Stage Cylinder Assembly HN2T 80PD",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: '    First Stage Piston Assembly HN2T 80PD   ',
    heading: "  First Stage Piston Assembly HN2T 80PD ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' 2 & 3 Stage Cylinder Assembly HN2T 80PD  ',
    heading: "  2 & 3 Stage Cylinder Assembly HN2T 80PD",

  },
  
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     '    Compressed Dry Air Package Assly. HN2T 80PD',
    heading: "  Compressed Dry Air Package Assly. HN2T 80PD",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' First Stage Suction Valve Assly. HN2T 80PD',
    heading: "  First Stage Suction Valve Assly. HN2T 80PD",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     '   Third Stage Suction Valve Assly. HN2T 80PD',
    heading: "Third Stage Suction Valve Assly. HN2T 80PD",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: ' 3rd Stage Discharge Valve Assly. HN2T 80PD ',
    heading: '3rd Stage Discharge Valve Assly. HN2T 80PD',

  },
  
];


const Hh80pdp = () => {
  return (

    <Grid className="home-container-page">

      <Grid item xs={12} className="home-page-textf">
        <h1><u>HN2T HP 80PD Parts</u></h1>
        <Grid item xs={12} md={6} className="mt-5">
        Chicago Pneumatic PET Compressor HN2T HP 80PD Parts.
        </Grid>
        <Grid item xs={12} md={6} className="mt-5">
        Chicago Pneumatic HN2T HP 80PD Parts - Chicago Pneumatic PET Compressor Parts - Air Compressor Spare Parts.
        </Grid>
        <Grid item xs={12} md={6} className="mt-4">PFC- Parts for compressor is a global supplier of OEM Quality New Aftermarket Replacement Air Compressor Spare Parts - Chicago Pneumatic HN2T HP 80PD Parts - Chicago Pneumatic PET Compressor Parts from India.</Grid>
      </Grid>

      <Grid container className="home-page-images mt-5" spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }} className="card">
              <CardActionArea >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.alt}
                  className='card-media'
                  style={{ height: '150' }} // Adjust image height and width of the card here 
                /><hr />

                <CardContent className=' p-3 bg-primary bg-gradient text-white '  style={{ borderRadius: '40px 0px 40px 0px ' }}>
                  <Typography variant="h5" component="div" className='home-page-image-heading'>
                    {card.heading}
                  </Typography>
                </CardContent>

              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>


  );
};


export default Hh80pdp;
