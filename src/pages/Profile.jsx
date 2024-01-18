import React, { useEffect, useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { get, post } from "../services/authService";
import { AuthContext } from "../context/auth.context";

const Profile = () => {
  const { authToken } = useContext(AuthContext);

  const [isEditing, setEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) return;

    // Fetch user information when the component mounts
    get("/users/profile", token)
      .then((response) => {
        console.log(response.data);
        setUserProfile(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authToken]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    if (!userProfile) {
      console.error("User profile or user ID is missing.");
      return;
    }

    post(`/users/update/${userProfile?._id}`, userProfile, authToken)
      .then((updatedUser) => {
        console.log("User updated:", updatedUser);
        setEditing(false);
      })
      .catch((err) => {
        console.log("Error updating user:", err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const newPhoto = e.target.files[0];
    
    // Create a local URL for previewing the selected image
    const newPhotoURL = URL.createObjectURL(newPhoto);
  
    // Update the user profile with the new photo and photo URL
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      photo: newPhotoURL,
      newPhoto, // Save the new photo file separately if needed for uploading
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {userProfile && userProfile.photo && (
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  alt="User Photo"
                  src={userProfile.photo}
                />
              )}
              {isEditing ? (
                  <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={userProfile?.username}
                  onChange={handleInputChange}
                />
                </>
              ) : (
                <Typography variant="h5">{userProfile?.username}</Typography>
              )}
              {isEditing ? (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  value={userProfile?.email}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography>{userProfile?.email}</Typography>
              )}
              {/* Add other fields as needed */}
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
