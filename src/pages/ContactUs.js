import React from 'react';
import {Grid,Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style/ContactUs.css'
const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Grid className='contactus' container direction="column" alignItems="center" >
       <Typography  className='form-heading mt-2' fontSize="1.2rem">
        Request for Query
      </Typography>
      <Typography clasName="formsubheading" fontSize="2.5rem" >Let's Talk! Send Your <span className='formspan'>Inquiry</span></Typography>
      <form onSubmit={handleSubmit} className='formmain mt-5'>
        <Grid container spacing={2} className="forms" >
        
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              placeholder='Enter your Name'
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company Name"
              name="companyname"
              placeholder='Enter company Name'
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              placeholder='Enter Email'
              type="email"
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              placeholder='Enter Country Name'
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              variant="outlined"
              placeholder='Enter your Mobile number'
              required
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              fullWidth
              label="Make and Model"
              name="makeandmodel"
              variant="outlined"
              placeholder=''
              required
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" name="file" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="error" className='submit-btn' sx={{marginLeft:"40%"}}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default ContactUs;
