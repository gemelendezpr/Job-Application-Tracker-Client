
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Button, Avatar } from "@mui/material";

const JobReviews = () => {
  const [jobReviews, setJobReviews] = useState([]);

  useEffect(() => {
    // Fetch job reviews from your backend API or database
    // Example API call or fetch logic

    // const response = await fetch("your-api-endpoint");
    // const data = await response.json();
    // setJobReviews(data);

    // Example data for testing
    const mockData = [
      {
        id: 1,
        company: "JR Dunn Jewelers",
        position: "E-commerce Junior Web Developer",
        logoUrl: "https://example.com/logo.png", // URL to the company logo
        description: "Full-time, Retail",
        review: "Great company to work for!",
      },
      {
        id: 2,
        company: "JR Dunn Jewelers",
        position: "E-commerce Junior Web Developer",
        logoUrl: "https://example.com/logo.png", // URL to the company logo
        description: "Full-time, Retail",
        review: "Great company to work for!",
      },
      // Add more job reviews as needed
    ];

    setJobReviews(mockData);
  }, []);

  return (
    <Grid container spacing={1}>
      {jobReviews.map((review) => (
        <Grid item key={review.id} xs={11} sm={11} md={11.5} lg={11.65}>
          <Card className="job-review-card" style={{ borderRadius: '12px' }}>
            <Avatar className="job-review-card img" alt={review.company} src={review.logoUrl} />
            <CardContent >
              <Typography variant="h6" component="div">
                {review.company}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {review.position}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {review.description}
              </Typography>
              <Button variant="outlined" color="primary" href={`/job-reviews/${review.id}`}>
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobReviews;
