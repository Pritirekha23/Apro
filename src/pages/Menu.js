import React from 'react';
import { Grid } from '@mui/material';

const Internship = () => {
  const internships = [
    {
      title: "Python",
      description: "Learn Python programming language"
    },
    {
      title: "Django",
      description: "Build web applications using Django framework."
    },
    {
      title: "Web Development",
      description: "Master front-end and back-end web development."
    },
    {
      title: "Data Science",
      description: "Explore data analysis and visualization."
    },
    {
      title: "Machine Learning/AI",
      description: "Study machine learning and artificial intelligence."
    }

  ];
  // const styles = {
  //   backgroundColor: "white",
  //   width: "300px",
  //   marginBottom: "10px",
  //   padding: "10px",
  //   color: "green",
  //   boxShadow: "rgba(0,0,0,0.44) 0px 5px 5px",
  // };
  return (
    <>
      <Grid className="internship-page">
        {

          internships.map((internships, index) => (
            <div key={index}>
              <h3>{internships.title}</h3>
              <p>{internships.description}</p>
            </div>
          ))
        }
      </Grid>
    </>
  );
};

export default Internship; 
