import React, { useState } from 'react';
import { Grid, Typography,Snackbar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style/ContactUs.css';
import emailjs from '@emailjs/browser';


const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [makeandmodel, setMakeandmodel] = useState('');
  const [message, setMessage] = useState('');
  // const [file, setFile] = useState(null);


  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here

    // Your service ID,template ID and Public key
    const serviceId = 'service_y6qgrot';
    const templateId = 'template_wufcybr';
    const publicKey = 'dp53uXQ5o0WpjgOVn';

    //object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_name: email,
      company_name: companyname,
      country: country,
      phone_number: phone,
      product_model: makeandmodel,
      to_name: 'pritirekha',
      message: message,


      
    };

    // const formData = new FormData();
    // formData.append('file', file); 
    // templateParams.file = formData; 

    //send email now
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
            console.log('Email sent successfully!', response);
            setName('');
            setEmail('');
            setCountry('');
            setCompanyname('');
            // setFile(null);
            setMakeandmodel('');
            setPhone('');
            setMessage('');

            setShowSnackbar(true);

    })
    .catch((error) => {
      console.error('Error sending Email',error);
    });


  };

return (
  <Grid className='contactus' container direction="column" alignItems="center" >
    <Typography className='form-heading mt-2' fontSize="1.2rem">
      Request for Query
    </Typography>
    <Typography className="formsubheading" fontSize="2.5rem" >Let's Talk! Send Your <span className='formspan'>Inquiry</span></Typography>
    <form onSubmit={handleSubmit} className='formmain mt-5'>
      <Grid container spacing={2} className="forms" >

        <Grid item xs={12} sm={6} >
          <TextField
            fullWidth
            label="Name"
            name="name"
            placeholder='Enter your Name'
            variant="outlined"
            required
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            fullWidth
            label="Company Name"
            name="companyname"
            placeholder='Enter company Name'
            variant="outlined"
            required
            value={companyname}
            onChange={(e)=> setCompanyname(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder='Enter Email'
            type="email"
            variant="outlined"
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            fullWidth
            label="Country"
            name="country"
            placeholder='Enter Country Name'
            variant="outlined"
            required
            value={country}
            onChange={(e)=> setCountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}  >
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            variant="outlined"
            placeholder='Enter your Mobile number'
            required
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            fullWidth
            label="Make and Model"
            name="makeandmodel"
            variant="outlined"
            placeholder='makemodel'
            required
            value={makeandmodel}
            onChange={(e)=> setMakeandmodel(e.target.value)}
          />
        </Grid>
            {/* <br /><br /><br /><br /> */}

        <Grid item xs={12} className=' message m-3 p-2'>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"
            required
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <input
           type="file" name="file"
           value={file}
            onChange={(e)=> setFile(e.target.files[0])}
           />
        </Grid> */}
        <Grid item xs={12} >
          <Button type="submit" variant="contained" className='submit-btn ' sx={{ marginLeft: "40%", background:"blue" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>

    <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Email sent successfully!"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
              Close
            </Button>
          </React.Fragment>
        }
      />
  </Grid>

);
};

export default ContactUs;
