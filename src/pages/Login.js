import { React} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style/Login.css';


const Login = () => {
  return (
    <Grid className='login' container direction="column" alignItems="center" >

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
            label="Password"
            name="password"
            placeholder='Enter Password'
            variant="outlined"         
          />
        </Grid>

        <Grid item xs={12} sm={6} >
          <TextField
            fullWidth
            label="Re-Enter Password"
            name="password"
            placeholder='Re-Enter Password'
            variant="outlined"         
          />
        </Grid>

        <Grid item xs={12} >
          <Button type="submit" variant="contained" className='submit-btn ' sx={{ marginLeft: "40%", background:"black" }}>
            LOGIN
          </Button>
        </Grid>
      </Grid>
    </form>

  </Grid>
  );
};

export default Login;