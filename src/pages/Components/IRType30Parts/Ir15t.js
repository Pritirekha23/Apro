//Ir15t.js

import React from 'react';
import Grid from '@mui/material/Grid';
// import './style/Ir15t.css';
// import { Link } from 'react-router-dom';
import Typography from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const cardData = [
  {
    image: 'https://static.wixstatic.com/media/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg',
    alt: 'Overhaul Kit 32319501 IR 15T Replacement',
    heading: 'Overhaul Kit 32319501 IR 15T Replacement',

  },
  {
    image: 'https://static.wixstatic.com/media/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg',
    alt: 'Pistons, Rings & Cylinders IR 15T Parts',
    heading: 'Pistons, Rings & Cylinders IR 15T Parts',
  },
  {

    image: "https://static.wixstatic.com/media/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg",
    alt: "Ingersoll Rand Type 30 Model 15T Air Compressor Parts",
    heading: 'Ingersoll Rand Type 30 Model 15T Air Compressor Parts',

  },
  {
    image: "https://static.wixstatic.com/media/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg",
    alt: "Compressor Drive, Air Receiver IR 15T Parts",
    heading: 'Compressor Drive, Air Receiver IR 15T Parts',

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg",
    alt: "Cylinder and Piston Assembly IR 15T Parts",
    heading: "Cylinder and Piston Assembly IR 15T Parts ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: 'Intercooler Assembly IR 15T Air Compressor Parts0',
    heading: "Intercooler Assembly IR 15T Air Compressor Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: 'Valve Assembly - Bare Compressor IR 15T Parts',
    heading: " Valve Assembly - Bare Compressor IR 15T Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt: 'Compressor Frame Assembly IR 15T Parts',
    heading: "Compressor Frame Assembly IR 15T Parts",

  }

];

const Ir15t = () => {
  return (

    <Grid className="home-container-page">
      <Grid item xs={12} className="home-page-textf">
        <h1><u>IR 15T Parts</u></h1>
        <Grid item xs={12} md={6} className="mt-5">
          Ingersoll Rand 15T Air Compressor Parts - Ingersoll Rand Type 30 Parts - Air Compressor Spare Parts
          <Grid item xs={12} md={6} className="mt-4">
            PFC- Parts for compressor is a global supplier of OEM Quality New Aftermarket Replacement Air Compressor Spare Parts - Ingersoll Rand 15T Air Compressor Parts - Ingersoll Rand Type 30 Parts from India.
          </Grid>

        </Grid>

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

                <CardContent className=' p-3 bg-success text-white ' style={{ borderRadius: '40px 0px 40px 0px ' }} >
                  <Typography variant="h5" component="div" className='home-page-image-heading'   style={{ borderRadius: '40px 0px 40px 0px ' }}>
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


export default Ir15t;
