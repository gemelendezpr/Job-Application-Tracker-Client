import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import {
  Home,
  Search,
  Add,
  Person,
  ExitToApp,
  Login,
  PersonAdd,
} from "@mui/icons-material";
import { AuthContext } from "../context/auth.context";


const Navbar = () => {
  const { logOutUser, getToken } = useContext(AuthContext);

  return (
    <AppBar
      position="fixed"
      className="custom-navbar"
      sx={{
        backgroundColor: "hsla(0, 0%, 100%, 0.08)",
        backdropFilter: "blur(6px)",
        width: "97%",
        zIndex: 1000,
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "20px",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component={Link} to="/">
          Logo
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton component={Link} to="/" sx={{ color: "#2272FF" }}>
            <Home fontSize="large" />
          </IconButton>
          {/* <IconButton component={Link} to="/search" sx={{ color: "#2272FF" }}>
            <Search fontSize="large" />
          </IconButton> */}
          <IconButton component={Link} to="/add" sx={{ color: "#2272FF" }}>
            <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
          </IconButton>
          {getToken() ? (
            <>
              <IconButton component={Link} to="/profile" sx={{ color: "#2272FF" }}>
                <Person fontSize="large" />
              </IconButton>
              <IconButton onClick={logOutUser} sx={{ color: "#2272FF" }}>
                <ExitToApp fontSize="large" />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton component={Link} to="/signin" sx={{ color: "#2272FF" }}>
                <Login fontSize="large" />
              </IconButton>
              <IconButton component={Link} to="/signup" sx={{ color: "#2272FF" }}>
                <PersonAdd fontSize="large" />
              </IconButton>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
