import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';


const cardData = [
  {
    image: 'https://static.wixstatic.com/media/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_0f8f3febcd9a48319fc12695180c72d3~mv2.jpg',
    alt:      ' Piping - Portplate Fau IR 8 X 7 ESV LUB Parts',
    heading: '  Piping - Portplate Fau IR 8 X 7 ESV LUB Parts',

  },
  {
    image: 'https://static.wixstatic.com/media/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_66aebf78a3f643af8dae91b8fe0b760a~mv2.jpg',
    alt:      ' Piston & Piston Rod IR 8 X 7 ESV LUB Air Compressor Parts',
    heading:  '  Piston & Piston Rod IR 8 X 7 ESV LUB Air Compressor Parts',
  },

  {

    image: "https://static.wixstatic.com/media/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_1bc6df37d92241ecb6fc309839de3512~mv2.jpg",
    alt:     " Accessories IR 8 X 7 ESV LUB Air Compressor Parts",
    heading: ' Accessories IR 8 X 7 ESV LUB Air Compressor Parts',
  },

  {
    image: "https://static.wixstatic.com/media/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f16a02_c66b6370fff2467f8ac29d73c00e9bde~mv2.jpg",
    alt:     " Cylinder & Head Complete IR 8 X 7 ESV LUB Air Compressor Parts",
    heading: 'Cylinder & Head Complete IR 8 X 7 ESV LUB Air Compressor Parts',

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_b870dd93e8f641aca875a71eb67cbf5f~mv2.jpg",
    alt:     " Frame & Gear IR 8 X 7 ESV LUB Air Compressor Parts",
    heading: " Frame & Gear IR 8 X 7 ESV LUB Air Compressor Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     'Ingersoll Rand 8 x 7 LUB Air Compressor Parts',
    heading: "Ingersoll Rand 8 x 7 LUB Air Compressor Parts",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     'Valve Discharge IR 8 X 7 ESV LUB Compressor Parts ',
    heading: "  Valve Discharge IR 8 X 7 ESV LUB Compressor Parts ",

  },
  
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' Valve-Fau & Inlet IR 8 X 7 ESV LUB Compressor Parts',
    heading: "Valve-Fau & Inlet IR 8 X 7 ESV LUB Compressor Parts ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     ' Auxiliary Valve IR 8 X 7 ESV LUB Air Compressor Parts ',
    heading: " Auxiliary Valve IR 8 X 7 ESV LUB Air Compressor Parts ",

  },
  {
    image: "https://static.wixstatic.com/media/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg/v1/fill/w_483,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d7032a_c22fe4a4b172454b8ef25dd2ad4e9e06~mv2.jpg",
    alt:     'Lubricator Type SVK IR 8 X 7 ESV LUB Compressor Parts ',
    heading: " Lubricator Type SVK IR 8 X 7 ESV LUB Compressor Parts ",

  },
 
];


const Ir87elp = () => {
  return (

    <Grid className="home-container-page">

      <Grid item xs={12} className="home-page-textf">
        <h1><u>IR 8  x 7 ESV 1 LUB Parts</u></h1>
        <Grid item xs={12} md={6} className="mt-5">
        Ingersoll Rand 8 X 7 ESV 1 LUB Air Compressor Parts - Ingersoll Rand ESV Parts - Air Compressor Spare Parts
        </Grid>

        <Grid item xs={12} md={6} className="mt-4">PFC - parts for compressor is a Global Supplier of OEM quality new aftermarket replacement air compressor spare parts - Ingersoll Rand 8 X 7 ESV 1 LUB Air Compressor Parts - Ingersoll Rand ESV Parts from India.</Grid>
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


export default Ir87elp;
