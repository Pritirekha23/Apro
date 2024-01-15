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
    alt:   '   15 HP Air Compressor - PFC 65T2 ',
    heading: '  15 HP Air Compressor - PFC 65T2',

  },
  {
    image: 'https://static.wixstatic.com/media/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg',
    alt:      '  12.5 HP Air Compressor - PFC 57T2' ,
    heading:  ' 12.5 HP Air Compressor - PFC 57T2',
  },
  {

    image: "https://static.wixstatic.com/media/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg",
    alt: '3 HP Air Compressor - PFC 281',
    heading: '3 HP Air Compressor - PFC 281',
  },

  {
    image: "https://static.wixstatic.com/media/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg",
    alt:  "  High Pressure Piston Air Compressor",
    heading: 'High Pressure Piston Air Compressor',

  },
 
 
];


const Mspc = () => {
  return (

    <Grid className="home-container-page">

      <Grid item xs={12} className="home-page-textf">
        <h1><u>Multi Stage Piston Compressor</u></h1>
        <Grid item xs={12} md={6} className="mt-5">
        Multi Stage Piston Compressor - Reciprocating Air Compressor
        </Grid>
        <Grid item xs={12} md={6} className="mt-4">PFC - parts for compressor is a Global Supplier of Multi Stage Piston Air Compressor - 15 HP Air Compressor - Bare Pump - PFC 65T2 , 12.5 HP Air Compressor - Bare Pump - PFC 57T2 , 3 HP Air Compressor - Bare Pump - PFC 281 from India.</Grid>
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

                <CardContent className=' p-3 bg-warning '  style={{ borderRadius: '40px 0px 40px 0px ' }}>
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


export default Mspc;
