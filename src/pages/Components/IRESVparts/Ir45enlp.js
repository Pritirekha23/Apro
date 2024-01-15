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
    alt:      '  House Main Bearing IR 7 x 5 ESV LUB Parts',
    heading: ' House Main Bearing IR 7 x 5 ESV LUB Parts',

  },
  {
    image: 'https://static.wixstatic.com/media/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg',
    alt:      ' Frame IR 7 x 5 ESV LUB Compressor Parts Editing',
    heading:  '  Frame IR 7 x 5 ESV LUB Compressor Parts Editing',
  },

  {

    image: "https://static.wixstatic.com/media/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg",
    alt:     " Air End IR 7 x 5 ESV LUB Air Compressor Parts",
    heading: ' Air End IR 7 x 5 ESV LUB Air Compressor Parts',
  },

  {
    image: "https://static.wixstatic.com/media/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg",
    alt:     " Head Frame IR 7 x 5 ESV LUB Air Compressor Parts",
    heading: 'Head Frame IR 7 x 5 ESV LUB Air Compressor Parts',

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg",
    alt:     "  Cross Head IR 7 x 5 ESV LUB Air Compressor Parts",
    heading: " Cross Head IR 7 x 5 ESV LUB Air Compressor Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     'Packing Metallic IR 7 x 5 ESV LUB Compressor Parts',
    heading: "Packing Metallic IR 7 x 5 ESV LUB Compressor Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     'Crankshaft IR 7 x 5 ESV LUB Air Compressor Parts  ',
    heading: " Crankshaft IR 7 x 5 ESV LUB Air Compressor Parts ",

  },
  
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     'Rod Connecting IR 7 x 5 ESV LUB Compressor Parts ',
    heading: " Rod Connecting IR 7 x 5 ESV LUB Compressor Parts  ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' Suction Pipe IR 7 x 5 ESV LUB Compressor Parts  ',
    heading: " Suction Pipe IR 7 x 5 ESV LUB Compressor Parts  ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     '  Frame Complete IR 7 x 5 ESV LUB Compressor Parts  ',
    heading: "  Frame Complete IR 7 x 5 ESV LUB Compressor Parts  ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' Valve Inlet & Unloader IR 7 x 5 ESV LUB Parts  ',
    heading: " Valve Inlet & Unloader IR 7 x 5 ESV LUB Parts  ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' Plate Port Outer End IR 7 x 5 ESV LUB Parts  ',
    heading: "  Plate Port Outer End IR 7 x 5 ESV LUB Parts  ",

  },
];


const Ir45enlp = () => {
  return (

    <Grid className="home-container-page">

      <Grid item xs={12} className="home-page-textf">
        <h1><u>IR 4 x 5 ESV NL Parts</u></h1>
        <Grid item xs={12} md={6} className="mt-5">
        Ingersoll Rand 4 x 5 ESV NL Air Compressor Parts - Ingersoll Rand ESV Parts - Air Compressor Spare Parts.
        </Grid>

        <Grid item xs={12} md={6} className="mt-4">PFC - parts for compressor is a Global Supplier of OEM quality new aftermarket replacement air compressor spare parts - Ingersoll Rand 4 x 5 ESV NL Air Compressor Parts - Ingersoll Rand ESV Parts from India.</Grid>
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

                <CardContent className=' p-3  text-white '  style={{ borderRadius: '40px 0px 40px 0px ' , background:'#F39C12 '}}>
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


export default Ir45enlp;
