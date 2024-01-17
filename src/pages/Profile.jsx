import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    photo: '',
    jobTitle: 'Software Developer',
    location: 'City, Country',
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Logic Dustin
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Card>
          <CardHeader
            title="Profile"
            action={
              <IconButton onClick={isEditing ? handleSaveClick : handleEditClick}>
                {isEditing ? <SaveIcon /> : <EditIcon />}
              </IconButton>
            }
          />
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ width: 100, height: 100 }} alt="User Photo" src={userProfile.photo} />
              {isEditing ? (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={userProfile.username}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography variant="h5">{userProfile.username}</Typography>
              )}
              {isEditing ? (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={userProfile.email}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography>{userProfile.email}</Typography>
              )}
              {isEditing ? (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="jobTitle"
                  label="Job Title"
                  name="jobTitle"
                  value={userProfile.jobTitle}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography>{userProfile.jobTitle}</Typography>
              )}
              {isEditing ? (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  value={userProfile.location}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography>{userProfile.location}</Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
