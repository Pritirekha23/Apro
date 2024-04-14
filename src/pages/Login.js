import { React} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style/ContactUs.css';


const Login = () => {
  return (
    <Grid className='contactus' container direction="column" alignItems="center" >
    <Typography className='form-heading' fontSize="1.2rem"  style={{  marginTop: '2%' }}>
      {/* Request for Query */}
    </Typography>
    <Typography className="formsubheading" fontSize="2.5rem" > LogIn <span className='formspan'>New</span></Typography>
    <form onSubmit={'#'} className='formmain mt-3'>
      <Grid container spacing={2} className="forms" >

        <Grid item xs={12} sm={6} >
          <TextField
            fullWidth
            label="Name"
            name="name"
            placeholder='Enter your Name'
            variant="outlined"
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
            value={'Apro India'}           
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
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            fullWidth
            label="Country"
            name="country"
            placeholder='Enter Country Name'
            variant="outlined"         
          />
        </Grid>
        <Grid item xs={12}  >
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            variant="outlined"
            placeholder='Enter your Mobile number'           
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            fullWidth
            label="Make and Model"
            name="makeandmodel"
            variant="outlined"
            placeholder='makemodel'          
          />
        </Grid>
            {/* <br /><br /><br /><br /> */}

        <Grid item xs={12} className=' message m-4 p-1'>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"         
          />
        </Grid>
       
        <Grid item xs={12} >
          <Button type="submit" variant="contained" className='submit-btn ' sx={{ marginLeft: "40%", background:"blue" }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>

  </Grid>
  );
};

export default Login;