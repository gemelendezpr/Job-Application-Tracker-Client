import React from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, Grid } from "@mui/material";

const JobReviewDetail = () => {
  const { id } = useParams(); // Retrieve the job review ID from the URL

  // Fetch job review details based on the ID from your backend API or database
  // Example API call or fetch logic

  // const response = await fetch(`your-api-endpoint/${id}`);
  // const data = await response.json();

  // Example data for testing
  const mockData = {
    id: 1,
    company: "JR Dunn Jewelers",
    position: "E-commerce Junior Web Developer",
    logoUrl: "https://example.com/logo.png", // URL to the company logo
    review: "Great company to work for!",
    details: "Join our team as one of the most successful omni-channel luxury family-owned Independent Jewelers and grow with us! We are seeking a dynamic developer to join our team and leverage your skills for website development, UX/UI, coding, content management, page building, conversion optimization, site speed, SEO, and overall functionality to help us achieve the best experience possible for our clients.", // Additional details
    location: "City, Country",
    challenges: "Show test, exercises, code, etc",
    interviewType: "Behavioral Interview",
    interviewDifficulty: "Low",
    interviewDate: "2023-01-01",
    interviewer: "John Doe",
    linkedin: "https://linkedin.com/in/johndoe",
    userNotes: "User review/ experience in the interview...",
  };

  return (
    <Grid container spacing={2}>
      {/* First Card */}
      <Grid item xs={12} sm={6}>
        <Card style={{ borderRadius: '12px' }}>
          <CardContent>
            <img src={mockData.logoUrl} alt={mockData.company} style={{ width: "100px", height: "100px" }} />
            <Typography variant="h4" gutterBottom>
              {mockData.company}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {mockData.details}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} sm={6}>
        <Card style={{ borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {mockData.position}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {mockData.location}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {mockData.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Third Card */}
      <Grid item xs={12}>
        <Card style={{ borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Interview Type: {mockData.interviewType}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Interview Date: {mockData.interviewDate}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Intervie Difficulty: {mockData.interviewDifficulty}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Interviewer: {mockData.interviewer}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              LinkedIn: {mockData.linkedin}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Challenges: {mockData.challenges}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              User Notes: {mockData.userNotes}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default JobReviewDetail;
