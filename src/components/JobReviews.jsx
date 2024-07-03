import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Button, Avatar } from "@mui/material";

import { get } from "../services/authService";

const JobReviews = ({ searchTerm, updateFilters, filter }) => {
  const [jobReviews, setJobReviews] = useState([]);

  const getInterviews = () => {
    get('/interview', { params: { search: searchTerm } })
      .then((response) => {
        console.log("All interviews", response.data);
        setJobReviews(response.data);
        updateFilters(response.data); // Call the callback function
      })
      .catch((err) => {
        console.log("API Error:", err);
      });
  };

  useEffect(() => {
    getInterviews();
  }, [searchTerm]);

  const applyFilter = (interview) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const regex = new RegExp(lowerCaseSearchTerm.replace(/[-\s]/g, '[-\\s]?'), 'i');

    // Check if the interview matches the search term
    const matchesSearch = (
      regex.test(interview.company.companyName.toLowerCase()) ||
      regex.test(interview.location.toLowerCase()) ||
      regex.test(interview.position.toLowerCase())
    );

    // Check if the interview matches the selected filter options
    const matchesFilters = (
      (!filter.companyFilter || filter.companyFilter.includes(interview.company.companyName)) &&
      (!filter.locationFilter || filter.locationFilter.includes(interview.location)) &&
      (!filter.interviewTypeFilter || filter.interviewTypeFilter.includes(interview.interviewType))
    );

    return matchesSearch && matchesFilters;
  };

  const filteredInterviews = jobReviews.filter(applyFilter);

  return (
    <Grid container spacing={1}>
      {filteredInterviews.map((review) => (
        <Grid item key={review.id} xs={11} sm={11} md={11.5} lg={11.65}>
          <Card className="job-review-card" style={{ borderRadius: '12px' }}>
            <Avatar className="job-review-card img" alt={review.company.companyName} src={review.company.logo} />
            <CardContent>
              <Typography variant="h6" component="div">
                {review.company.companyName}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {review.review}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {review.position}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {review.location}
              </Typography>
              <Button variant="contained" style={{ color: "#FFFFFF", backgroundColor: "#2272FF" }} href={`/job-reviews/${review._id}`}>
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