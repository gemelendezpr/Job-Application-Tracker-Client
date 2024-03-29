import React from "react";
import { Grid, Typography, Link, Divider } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <Divider className="divider" variant="middle" />
      <Grid item container justifyContent="space-around" alignItems="center" className="footer-content">
        <div className="footer-section">
          <Typography variant="h6" className="footer-section-title">Community</Typography>
          <Link href="#" className="footer-link" sx={{ marginRight: 2 }}>
           
            <span className="footer-link-text">Youtube</span>
          </Link>
          <Link href="#" className="footer-link" sx={{ marginRight: 2 }}>
            
            <span className="footer-link-text">Github</span>
          </Link>
          <Link href="#" className="footer-link">
            
            <span className="footer-link-text">Discord</span>
          </Link>
        </div>

        <div className="footer-section">
          <Typography variant="h6" className="footer-section-title" >Social Media</Typography>
          <Link href="#" className="footer-link" sx={{ marginRight: 2 }}>
           
            <span className="footer-link-text">Instagram</span>
          </Link>
          <Link href="#" className="footer-link" sx={{ marginRight: 2 }}>
           
            <span className="footer-link-text">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com/in/gerardomelendezpr/" className="footer-link">
          
            <span className="footer-link-text">Linkedin</span>
          </Link>
        </div>

        <div className="footer-section">
          <Typography variant="h6" className="footer-section-title">About</Typography>
          <Link href="#" className="footer-link" sx={{ marginRight: 2 }}>
            <span className="footer-link-text">Become Sponsor</span>
          </Link>
          <Link href="#" className="footer-link" sx={{ marginRight: 2 }}>
            <span className="footer-link-text">Learning about me</span>
          </Link>
          <Link href="mailto:techtea@gmail.com" className="footer-link">
            <span className="footer-link-text">Teatech@email.com</span>
          </Link>
        </div>
      </Grid>

      <Typography variant="body2" className="footer-copyright">
        &copy; TechTea 2024 Inc. All rights reserved
      </Typography>
    </footer>
  );
};

export default Footer;
