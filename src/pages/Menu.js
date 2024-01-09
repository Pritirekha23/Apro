import React from 'react';
import { Grid, Typography } from '@mui/material';


// const allmenu = [

//   {
//     title: "Reciprocating Air Compressor",
//     data_1: "Build web applications using Django framework.",
//     data_2: "Build web applications using Django framework.",
//     data_3: "Build web applications using Django framework.",
//     data_4: "Build web applications using Django framework."
//   },
//   {
//     title: "Ingersoll Rand Type 30 Parts",
//     data_1: "Master front-end and back-end web development.",
//     data_2: "Build web applications using Django framework.",
//     data_3: "Build web applications using Django framework.",
//     data_4: "Build web applications using Django framework."
//   },
//   {
//     title: "Ingersoll Rand ESV Parts",
//     data_1: "Explore data analysis and visualization.",
//     data_2: "Build web applications using Django framework.",
//     data_3: "Build web applications using Django framework.",
//     data_4: "Build web applications using Django framework."
//   },
//   {
//     title: "Ingersoll Rand Type 30 NL Parts",
//     data_1: "Study machine learning and artificial intelligence.",
//     data_2: "Build web applications using Django framework.",
//     data_3: "Build web applications using Django framework.",
//     data_4: "Build web applications using Django framework."
//   },
//   {
//     title: "Ingersoll Rand Compressor Parts",
//     data_1: "Study machine learning and artificial intelligence.",
//     data_2: "Build web applications using Django framework.",
//     data_3: "Build web applications using Django framework.",
//     data_4: "Build web applications using Django framework."
//   },
//   {
//     title: "Atlas Copcoo Compressor Parts",
//     data_1: "Study machine learning and artificial intelligence.",
//     data_2: "Build web applications using Django framework.",
//     data_3: "Build web applications using Django framework.",
//     data_4: "Build web applications using Django framework."
//   },
//   {
//     title: "Chicago pneumatic Air Compresssor Parts",
//     data_1: "Study machine learning and artificial intelligence.",
//     data_2: "Build web applications using Django framework.",
//     data_3: "Build web applications using Django framework.",
//     data_4: "Build web applications using Django framework.",
//     data_5: "Build web applications using Django framework.",
//     data_6: "Build web applications using Django framework.",
//     data_7: "Build web applications using Django framework."
//   },

// ];

const Menu = () => {
  
  // const styles = {
  //   backgroundColor: "white",
  //   width: "300px",
  //   marginBottom: "10px",
  //   padding: "10px",
  //   color: "green",
  //   boxShadow: "rgba(0,0,0,0.44) 0px 5px 5px",
  // };

  return (
    <Grid>
      <Grid maxWidth="lg">
        <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
          ALL MENUES
        </Typography>

        <Grid container spacing={5} style={{ marginTop: '20px' }}>
          {
            allmenu.map((allmenu, index) => (
              <Grid key={index}>
                {/* <h3>{allmenu.title}</h3>
              <p>{allmenu.data_1}</p>
              <p>{allmenu.data_2}</p>
              <p>{allmenu.data_3}</p>
              <p>{allmenu.data_4}</p>
              <p>{allmenu.data_5}</p>
              <p>{allmenu.data_6}</p>
              <p>{allmenu.data_7}</p> */}


               

              </Grid>
            ))
          }
        </Grid>

      </Grid>
      <h1>Menu</h1>
    </Grid>
  );
};

export default Menu; 
