import React, { useState } from "react";
import { Grid, Typography, Select, MenuItem, Stack, FormControl, Input, Button } from "@mui/material";
import JobReviews from "../components/JobReviews";
import FilterCard from "../components/FilterCard";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";


const Home = () => {
  const [interviewType, setInterviewType] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const handleOptionClick = (option, setOption) => {
    setOption((prevOption) => (prevOption === option ? "" : option));
  };

  return (
    <Grid container spacing={3}>
      {/* Sentences */}
      <Stack direction="row" spacing={3} className="job-postings-section" style={{ padding: '0px 30px' }}>
        <Typography variant="h3" className="job-postings-heading">
          Connect with valuable interview experiences
          <span className="job-postings-subtext"> shared daily.</span>
        </Typography>
      </Stack>
      <Typography variant="body1" className="job-postings-description" style={{ padding: '16px 30px' }}>
        Discover insightful interview experiences shared daily. We curate posts from companies actively conducting interviews, providing valuable insights for your job search journey.
      </Typography>

      {/* Search Bar */}
      <Grid item xs={12}>
        <Box position="relative" mb="16px">
          <TextField
            height="56px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { xs: "350px", sm: "660px", md:"930px", lg: "1260px" },
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
            placeholder="Search for interviews"
            type="text"
          />
          <Button
            className="search-button"
            sx={{
              bgcolor: "#2272FF",
              borderRadius: "4px",
              color: "#fff",
              textTransform: "none",
              width: { xs: "110px", sm: "150px", md:"170px", lg: "173px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "18px", xs: "14px" },
            }}
          >
            Search
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        
        <FilterCard
          title="Interview Type"
          options={["Full Time", "Contract", "Intern", "Part Time"]}
          selectedOptions={[interviewType]}
          handleOptionClick={(option) => handleOptionClick(option, setInterviewType)}
        />

        <FilterCard
          title="Location"
          options={["Location 1", "Location 2", "Location 3"]}
          selectedOptions={[location]}
          handleOptionClick={(option) => handleOptionClick(option, setLocation)}
        />

        <FilterCard
          title="Company Name"
          options={["Company 1", "Company 2", "Company 3"]}
          selectedOptions={[companyName]}
          handleOptionClick={(option) => handleOptionClick(option, setCompanyName)}
        />
      </Grid>

      {/* Right Side - Job Reviews */}
      <Grid item xs={12} md={8}>
        {/* Sort by Section */}
        <Stack direction="row" alignItems="center" style={{ borderRadius: '12px', marginBottom: "16px" }}>
        <Typography variant="h5" style={{ width: '200%', marginBottom: { xs: '8px', md: '0' } }}>All Interviews</Typography>
          <Typography variant="h6" style={{ width: '25%', marginRight: { xs: '0', md: '0px' } }}>Sort By</Typography>
          <FormControl sx={{ minWidth: { xs: '30%', md: '200px', lg:'230px', backgroundColor: '#fff', borderRadius: '4px' } }} size="small">
          <Select
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
            label="Sort by"
          >
            
            <MenuItem value="">Select a value</MenuItem>
            <MenuItem value="mostRecent">Most Recent</MenuItem>
            <MenuItem value="CompanyAtoZ">Company: Ascending</MenuItem>
            <MenuItem value="CompanyZtoA">Company: Descending</MenuItem>
            <MenuItem value="TitleAtoZ">Title: Ascending</MenuItem>
            <MenuItem value="TitleZtoA">Title: Descending</MenuItem>
          </Select>
          </FormControl>
        </Stack>

        {/* Job Reviews Component */}
        <JobReviews />
      </Grid>
    </Grid>
  );
};

export default Home;
