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
    alt:   '    Air Cylinder Assly. 1st Stage HN2T HP 40PD',
    heading: '    Air Cylinder Assly. 1st Stage HN2T HP 40PD',

  },
  {
    image: 'https://static.wixstatic.com/media/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg',
    alt:      ' Suction Valve Cover Assembly HN2T HP 40PD Parts',
    heading:  ' Suction Valve Cover Assembly HN2T HP 40PD Parts',
  },
  {

    image: "https://static.wixstatic.com/media/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg",
    alt:     '2 & 3 Stage Piston Assly. HN2T HP 40PD',
    heading: '2 & 3 Stage Piston Assly. HN2T HP 40PD',
  },

  {
    image: "https://static.wixstatic.com/media/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg",
    alt:     "  Air Packing Assly. 1st Stage HN2T HP 40PD ",
    heading: '  Air Packing Assly. 1st Stage HN2T HP 40PD',

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg",
    alt:     " Discharge Valve Cover Assembly HN2T 40PD Parts",
    heading: " Discharge Valve Cover Assembly HN2T 40PD Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: '      Discharge Valve Cover Assly. HN2T HP 40PD ',
    heading: "  Discharge Valve Cover Assly. HN2T HP 40PD ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:   '  Suction Valve Cover & Blank Seating Assly.',
    heading: "  Suction Valve Cover & Blank Seating Assly.",

  },
  
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     '   First Stage Piston Assembly HN2T HP 40PD',
    heading: " First Stage Piston Assembly HN2T HP 40PD",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' Frame Assembly HN2T HP 40PD Parts',
    heading: "  Frame Assembly HN2T HP 40PD Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     '  2 & 3 Air Cylinder Assly. HN2T HP 40PD',
    heading: "2 & 3 Air Cylinder Assly. HN2T HP 40PD",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: ' HP 40 PD Compressor Block HN2T HP 40PD ',
    heading: 'HP 40 PD Compressor Block HN2T HP 40PD',

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: 'Air Packing Assly. 2nd Stage HN2T HP 40PD',
    heading: ' Air Packing Assly. 2nd Stage HN2T HP 40PD ',

  },
];


const Hh40pdp = () => {
  return (

    <Grid className="home-container-page">

      <Grid item xs={12} className="home-page-textf">
        <h1><u>HN2T HP 40PD Parts</u></h1>
        <Grid item xs={12} md={6} className="mt-5">
        Chicago Pneumatic PET Compressor HN2T HP 40PD Parts.
        </Grid>
        <Grid item xs={12} md={6} className="mt-5">
        Chicago Pneumatic HN2T HP 40PD Parts - Chicago Pneumatic PET Compressor Parts - Air Compressor Spare Parts.
        </Grid>
        <Grid item xs={12} md={6} className="mt-4">PFC- Parts for compressor is a global supplier of OEM Quality New Aftermarket Replacement Air Compressor Spare Parts - Chicago Pneumatic HN2T HP 40PD Parts - Chicago Pneumatic PET Compressor Parts from India.</Grid>
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


export default Hh40pdp;
