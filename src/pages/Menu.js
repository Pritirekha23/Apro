import React from 'react';
import './style/Menu.css'
// import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography,CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const allmenuData = [
  {
    heading: 'Ingersoll Rand Type 30 Parts',
    data_1: 'IR 15T Parts',
    data_2: 'IR 2340 Parts',
    data_3: 'IR 2475 Parts',
    data_4: 'IR 2545 Parts',
    data_5: 'IR 3000 Parts',
    data_6: 'IR 7100 Parts',
    data_8: 'IR 15T2 Parts',
    data_9: 'IR 2540 Parts',
    data_10: 'IR 7T2 Parts',
    data_11: 'IR 231 Parts',
    data_12: 'IR 242 Parts',
    data_13: 'IR 234 Parts',
    data_14: 'IR 253 Parts',
    data_15: 'IR 71T2 Parts',

  },

  {
    heading: 'Ingersoll Rand ESV Parts',
    data_1: 'IR 7 * 5 ESV 1 LUB Parts',
    data_2: 'IR 8 * 5 ESV 1 LUB Parts',
    data_3: 'IR 9 1/2 * 5 ESV 1 LUB Parts',
    data_4: 'IR 7 * 5 ESV 1 NL Parts',
    data_5: 'IR 8 * 5 ESV 1 NL Parts',
    data_6: 'IR 8 * 7 ESV 1 NL Parts',
    data_8: 'IR 9 1/2 * 5 ESV 1 NL Parts',
    data_9: 'IR 9 1/2 * 7 ESV 1 NL Parts',
    data_10: 'IR 9 * 7 ESV 1 NL Parts',
    data_11: 'IR 8 * 7 ESV 1 LUB Parts',
    data_12: 'IR 91/2 *7 ESV 1 LUB Parts',
    data_13: 'IR 11 * 7 ESV 1 LUB Parts',
    data_14: 'IR 11 * 7 ESV 1 NL Parts',
    data_15: 'IR 12 * 9 ESV 1 NL Parts',
    data_16: 'IR 4 * 5 ESV 1 NL Parts',
  },

  {

    heading: "  Ingersoll Rand Air Compressor ",
    data_1: 'IR 12 * 7 * 7  PHE Parts',
    data_2: 'IR 12 * 7 * 7  IHE 5 NL Parts',
    data_3: 'IR 16 * 10 * 7  IHE NL Parts',
    data_4: 'PETStar PS4 Parts',
    data_5: 'IR 7*4*7 ESV  PHE-7 Parts',
    data_6: 'IR 5 * 5 * 7 PHE Booster Parts',
    data_8: 'IR 10 * 6 * 7 PHE 7 NL Parts',
    data_9: 'IR 4.75 * 5 ESV 5 NL Booster Parts',
    data_10: 'IR 12 * 7 * 7 IHE5 NL Old Parts',
    data_11: 'IR 12 * 12 * 7 IHE NL Parts',
    data_12: 'IR 16 * 9B * 7 IHE NL2',
    data_13: 'IR 5 * 4 * 7 PHE NL',
    data_14: 'IR 12 * 7 * 7 PHE7 NL-Pack',
  },

  {
    heading: 'Reciprocating Air Compressor',

    data_1: 
    {
      title:'Two Stage Piston Compressor',
      pageUrl:'./pages/RAC/Mspc.js',
    },
     data_2:
    {
      title: 'Multi Stage Piston Compressor',
      pageUrl:'./pages/RAC/Tspc.js',
    },
    
    data_3:
    {
      title:'Vacuum Compressor',
      pageUrl:'./pages/RAC/Vc.js',
    } ,
    data_4: 
    {
      title:'Non-Lubricated Two stage Bar 8 Bar Air Comp',
      pageUrl:'./pages/RAC/Nltsbac.js',
    },
    data_5: {
      title:'Non-Lubricated Three Stage PET Comp',
      pageUrl:'./pages/RAC/Nltspc',
    }
  },
  
  {

    heading: "Chicago Pneumatic Air Compressor Parts",
    data_1: 'HN2T 150-180 NP Parts',
    data_2: 'HN2T 120-215 LP Parts',
    data_3: 'HN2T  HP 40PD Parts',
    data_4: 'HN2T HP 80PD Parts',
    data_5: 'HN2T HP 100PD Parts',
  },
  {
    heading: ' Ingersoll Rand Type 30 NL Parts',
    data_1: 'IR 5T2NL Parts',
    data_2: 'IR 10T3NL Parts',
  },
  {

    heading: "Atlas Copco Compressor Parts",
    data_1: 'Air Copco VT 4 Parts',
  },



];


const Menu = () => {

  return (

    <Grid container className="mn m-5" spacing={3} >
      {allmenuData.map((menuItem, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: 345 , backgroundColor: 'lightpink' }} className="menucard">

            <CardActionArea className='menucardaction'>
              <CardContent className='cardContent'>

                <Typography  variant="h5" component="div"  className='headingofmenu'>
                  {menuItem.heading}
                </Typography><hr />
              
                {/* <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_1}
                </Typography> */}

                {Object.keys(menuItem)
                  .filter((key) => key.startsWith('data_'))
                  .map((key, subIndex) => (
                    <Typography key={subIndex} className='Menucardlinks' component="div">
                      {typeof menuItem[key] === 'object' ? (
                        <Link to={menuItem[key].pageUrl}>{menuItem[key].title}</Link>
                      ) : (
                        allmenuData[key]
                      )}
                    </Typography>
                  ))}


                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_2}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_3}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_4}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_5}
                </Typography>
                <Typography className='Menucardlinks'component="div" >
                  {allmenuData.data_6}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_7}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_8}
                </Typography >
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_9}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_10}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_11}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_12}
                </Typography>
                <Typography className='Menucardlinks' component="div"  >
                  {allmenuData.data_13}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_14}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_15}
                </Typography>
                <Typography className='Menucardlinks' component="div" >
                  {allmenuData.data_16}
                </Typography>


              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid> 

  );
};

export default Menu; 
