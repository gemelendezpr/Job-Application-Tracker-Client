import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams, useNavigate } from "react-router-dom";
import { post } from '../services/authService';

const CreateCompany = () => {
  const { companyName } = useParams();

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newCompany = {
      companyName,
      industry: data.get('industry'),
      website: data.get('website'),
      phone: data.get('phone'),
      email: data.get('email'),
      location: data.get('location'),
      logo: data.get('logo') || 'https://qplexus.com/wp-content/uploads/2016/02/default-logo.png',
    };

    console.log("This is new company ====>", newCompany);

    post('/company', newCompany)
      .then((response) => {
        console.log("Added company", response.data)
        navigate('/add')
      })
      .catch((err) => {
        console.log(err)
      })

    // Add your logic to handle the new company data, e.g., send it to the server or update state
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#2196f3' }}>
            <BusinessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Company
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="industry"
                  label="Industry"
                  name="industry"
                  autoComplete="industry"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="website"
                  label="Website"
                  name="website"
                  autoComplete="website"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  autoComplete="location"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="logo"
                  label="Logo URL"
                  name="logo"
                  autoComplete="logo"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Company
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateCompany;



// companyName: { type: String },
// industry: { type: String },
// website: { type: String },
// phone: { type: String },
// email: { type: String },
// location: { type: String },
// logo: { type: String, default: "https://qplexus.com/wp-content/uploads/2016/02/default-logo.png"},