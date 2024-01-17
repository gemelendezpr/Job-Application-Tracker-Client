import React from "react";
import { Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Grid container component="footer" justifyContent="center" alignItems="center" className="footer">
      <Grid item container justifyContent="space-around" alignItems="center" className="footer-content">
        <div className="footer-section">
          <Typography variant="h6" className="footer-section-title">Community</Typography>
          <Link href="#" className="footer-link">
           
            <span className="footer-link-text">Youtube</span>
          </Link>
          <Link href="#" className="footer-link">
            
            <span className="footer-link-text">Github</span>
          </Link>
          <Link href="#" className="footer-link">
            
            <span className="footer-link-text">Discord</span>
          </Link>
        </div>

        <div className="footer-section">
          <Typography variant="h6" className="footer-section-title">Social Media</Typography>
          <Link href="#" className="footer-link">
           
            <span className="footer-link-text">Instagram</span>
          </Link>
          <Link href="#" className="footer-link">
           
            <span className="footer-link-text">Twitter</span>
          </Link>
          <Link href="#" className="footer-link">
          
            <span className="footer-link-text">Linkedin</span>
          </Link>
        </div>

        <div className="footer-section">
          <Typography variant="h6" className="footer-section-title">About</Typography>
          <Link href="#" className="footer-link">
            <span className="footer-link-text">Become Sponsor</span>
          </Link>
          <Link href="#" className="footer-link">
            <span className="footer-link-text">Learning about me</span>
          </Link>
          <Link href="mailto:mifwebchain@gmail.com" className="footer-link">
            <span className="footer-link-text">mifwebchain@gmail.com</span>
          </Link>
        </div>
      </Grid>

      <Typography variant="body2" className="footer-copyright">
        &copy; Gateway 2024 Inc. All rights reserved
      </Typography>
    </Grid>
  );
};

export default Footer;
