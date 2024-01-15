import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Home, Search, Add, Person, ExitToApp, Login, PersonAdd } from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";


const Navbar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (
    <AppBar
      position="static"
      className="custom-navbar"
      sx={{ backgroundColor: "hsla(0, 0%, 100%, 0.08)", backdropFilter: "blur(16px)", width: "fit-content" }}
    >
      <Toolbar>
        {/* <Typography variant="h6" component={Link} to="/">
          Logo
        </Typography> */}
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton component={Link} to="/" color="inherit">
            <Home fontSize="large"/>
          </IconButton>
          <IconButton component={Link} to="/search" color="inherit">
            <Search fontSize="large" />
          </IconButton>
          <IconButton component={Link} to="/add" color="inherit">
            <AddCircleOutlineIcon fontSize="large"/>
          </IconButton>
          {getToken() ? (
            <>
              <IconButton component={Link} to="/profile" color="inherit">
                <Person fontSize="large"/>
              </IconButton>
              <IconButton onClick={logOutUser} color="inherit">
                <ExitToApp fontSize="large" />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton component={Link} to="/signin" color="inherit">
                <Login fontSize="large"/>
              </IconButton>
              <IconButton component={Link} to="/signup" color="inherit">
                <PersonAdd fontSize="large"/>
              </IconButton>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
