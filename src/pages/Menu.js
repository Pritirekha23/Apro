import React from 'react';
import './style/Menu.css'
// import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const allmenuData = [
  {
    heading: 'Ingersoll Rand ESV Parts',

    data_1:
    {
      title: 'IR 7 * 5 ESV 1 LUB Parts',
      pageUrl: './pages/Components/IRESVparts/Ir75elp.js',
    },

    data_2:
    {
      title: 'IR 8 * 5 ESV 1 LUB Parts',
      pageUrl: './pages/Components/IRESVparts/Ir85elp.js',
    },

    data_3:
    {
      title: 'IR 9 1/2 * 5 ESV 1 LUB Parts',
      pageUrl: './pages/Components/IRESVparts/Ir9125elp.js',
    },

    data_4:
    {
      title: 'IR 7 * 5 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir75enlp.js',
    },

    data_5:
    {
      title: 'IR 8 * 5 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir85enlp.js',
    },

    data_6:
    {
      title: 'IR 8 * 7 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir87enlp.js',
    },

    data_7:
    {
      title: 'IR 9 1/2 * 5 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir9125enlp.js'
    },

    data_8:
    {
      title: 'IR 9 1/2 * 7 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir9127enlp.js'
    },

    data_9:
    {
      title: 'IR 9 * 7 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir97enlp.js',
    },

    data_10:
    {
      title: 'IR 8 * 7 ESV 1 LUB Parts',
      pageUrl: './pages/Components/IRESVparts/Ir87elp.js',
    },

    data_11:
    {
      title: 'IR 9 1/2 *7 ESV 1 LUB Parts',
      pageUrl: './pages/Components/IRESVparts/Ir9127elp.js',
    },
    data_12:
    {
      title: 'IR 11 * 7 ESV 1 LUB Parts',
      pageUrl: './pages/Components/IRESVparts/Ir117elp.js',
    },
    data_13:
    {
      title: 'IR 11 * 7 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir117enlp.js',
    },
    data_14:
    {
      title: 'IR 12 * 9 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir129enlp.js',
    },
    data_15:
    {
      title: 'IR 4 * 5 ESV 1 NL Parts',
      pageUrl: './pages/Components/IRESVparts/Ir45enlp.js',
    },
  },

  {

    heading: " Ingersoll Rand Air Compressor Parts",
    data_1:
    {
      title: 'IR 12 * 7 * 7  PHE Parts',
      pageUrl: './pages/Components/IRACParts/Ir1277pp.js',
    },

    data_2:
    {
      title: 'IR 12 * 7 * 7  IHE 5 NL Parts',
      pageUrl: './pages/Components/IRACParts/Ir1277inp.js',
    },

    data_3:
    {
      title: 'IR 16 * 10 * 7  IHE NL Parts',
      pageUrl: './pages/Components/IRACParts/Ir16107inp.js',
    },

    data_4:
    {
      title: 'PETStar PS4 Parts',
      pageUrl: './pages/Components/IRACParts/Petstarps4p.js',
    },

    data_5:
    {
      title: 'IR 7*4*7 ESV  PHE-7 Parts',
      pageUrl: './pages/Components/IRACParts/Ir747epp.js'
    },

    data_6:
    {
      title: 'IR 5 * 5 * 7 PHE Booster Parts',
      pageUrl: './pages/Components/IRACParts/Ir557pbp.js',
    },

    data_7:
    {
      title: 'IR 10 * 6 * 7 PHE 7 NL Parts',
      pageUrl: './pages/Components/IRACParts/Ir1067pnp.js'
    },

    data_8:
    {
      title: 'IR 4.75 * 5 ESV 5 NL Booster Parts',
      pageUrl: './pages/Components/IRACParts/Ir4755enbp.js'
    },

    data_9:
    {
      title: 'IR 12 * 7 * 7 IHE5 NL Old Parts',
      pageUrl: './pages/Components/IRACParts/Ir1277inop.js',
    },

    data_10:
    {
      title: 'IR 12 * 12 * 7 IHE NL Parts',
      pageUrl: './pages/Components/IRACParts/Ir12127inp.js',
    },

    data_11:
    {
      title: 'IR 16 * 9B * 7 IHE NL2',
      pageUrl: './pages/Components/IRACParts/Ir169b7in2p.js',
    },

    data_12:
    {
      title: 'IR 5 * 4 * 7 PHE NL',
      pageUrl: './pages/Components/IRACParts/Ir547pn.js',
    },

    data_13:
    {
      title: 'IR 12 * 7 * 7 PHE7 NL-Pack',
      pageUrl: './pages/Components/IRACParts/Ir1277pnp.js'
    },

  },

  {
    heading: 'Ingersoll Rand Type 30 Parts',
    data_1:
    {
      title: 'IR 15T Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir15t.js',
    },
    data_2: {
      title: 'IR 2340 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir2340.js'
    },

    data_3: {
      title: 'IR 2475 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir2475.js',
    },

    data_4: {
      title: 'IR 2545 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir2545.js',
    },

    data_5: {
      title: 'IR 3000 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir3000.js',
    },

    data_6: {
      title: 'IR 7100 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir7100.js'
    },

    data_7: {
      title: 'IR 15T2 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir15t2.js'
    },

    data_8: {
      title: 'IR 2540 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir2540.js',
    },
    data_9: {
      title: 'IR 7T2 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir7t2.js'
    },

    data_10: {
      title: 'IR 231 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir231.js'
    },

    data_11: {
      title: 'IR 242 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir242.js'
    },

    data_12: {
      title: 'IR 234 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir234.js',
    },
    data_13: {
      title: 'IR 253 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir253.js'
    },
    data_14: {
      title: 'IR 71T2 Parts',
      pageUrl: './pages/Components/IRType30Parts/Ir71t2.js',
    },

  },




  {
    heading: 'Reciprocating Air Compressor',

    data_1:
    {
      title: 'Two Stage Piston Compressor',
      pageUrl: './pages/Components/RAC/Mspc.js',
    },
    data_2:
    {
      title: 'Multi Stage Piston Compressor',
      pageUrl: './pages/Components/RAC/Tspc.js',
    },

    data_3:
    {
      title: 'Vacuum Compressor',
      pageUrl: './pages/Components/RAC/Vc.js',
    },
    data_4:
    {
      title: 'Non-Lubricated Two stage Bar 8 Bar Air Comp',
      pageUrl: './pages/Components/RAC/Nltsbac.js',
    },
    data_5: {
      title: 'Non-Lubricated Three Stage PET Comp',
      pageUrl: './pages/Components/RAC/Nltspc',
    }
  },

  {

    heading: "Chicago Pneumatic Air Compressor Parts",

    data_1:
    {
      title: 'HN2T 150-180 NP Parts',
      pageUrl: './pages/Components/Chicago PneumaticAirCompressorParts/Hn2t50180np.js',
    },

    data_2: {
      title: 'HN2T 120-215 LP Parts',
      pageUrl: './pages/Components/ChicagoPneumaticAirCompressorParts/H120215lp.js'
    },

    data_3:
    {
      title: 'HN2T  HP 40PD Parts',
      pageUrl: './pages/Components/ChicagoPneumaticAirCompressorParts/Hh40pdp.js'
    },
    data_4:
    {
      title: 'HN2T HP 80PD Parts',
      pageUrl: './pages/Components/ChicagoPneumaticAirCompressorParts/Hh80pdp.js'
    },
    data_5: {
      title: 'HN2T HP 100PD Parts',
      pageUrl: './pages/Components/ChicagoPneumaticAirCompressorParts/Hh100pdp.js'
    }
  },


  {
    heading: ' Ingersoll Rand Type 30 NL Parts',
    data_1:
    {
      title: 'IR 5T2NL Parts',
      pageUrl: './pages/Components/IngersollRandType30nlparts/Ir5t2nlparts.js',
    },
    data_2: {
      title: 'IR 10T3NL Parts',
      pageUrl: './pages/Components/IngersollRandType30nlparts/Ir10t3nlparts.js',
    },
  },

  {

    heading: "Atlas Copco Compressor Parts",
    data_1:
    {
      title: 'Air Copco VT 4 Parts',
      pageUrl: './pages/Components/AirCopcoVT4Parts/Aircopcovt4parts.js'
    }
  },

];


const Menu = () => {

  return (


    <Grid className="home-container-page" style={{marginTop:"6%"}}>

      <Grid item xs={12} className="home-page-textf">
        <h2>ALL Menus are Here</h2>
      </Grid>

      <Grid container className="home-page-images mt-5" spacing={3}>
        {allmenuData.map((menuItem, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, background: "#1D2B53", color: "#fff" }}  >
              <CardActionArea >
                <CardContent >
                  <Typography variant="h5" component="div" className='headingofmenu'>
                    {menuItem.heading}
                  </Typography><hr />
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

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>

  );
};

export default Menu; 
