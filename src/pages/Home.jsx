import React, { useEffect, useState } from "react";
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

  // Work on this logic to add filter functionality by topic
  // Add landing page with animation features to provide app mission and goals and functionalities

  const handleOptionClick = (option, setOption, filterType) => {
    setOption((prevOption) => (prevOption === option ? "" : option));
    
  let newFilter = {...filter}
  console.log("index",newFilter[filterType] && newFilter[filterType].findIndex( (filter) => filter === option) > -1)
  if (newFilter[filterType] && newFilter[filterType].findIndex( (filter) => filter === option) < 0) {
    newFilter[filterType] = [...newFilter[filterType], option]
  } else if ( newFilter[filterType] && newFilter[filterType].findIndex( (filter) => filter === option) > -1) {
    newFilter[filterType].splice(newFilter[filterType].findIndex( (filter) => filter === option), 1)
  } else if (!newFilter[filterType]){
    newFilter[filterType] = [option]
  }
    setFilter(newFilter)
  };

  const [filter, setFilter] = useState({
    companyFilter: undefined,
    locationFilter: undefined,
    interviewTypeFilter: undefined,
  });

  useEffect (( ) => {console.log("filter", filter)}, [filter]) 

  return (
    <Grid container spacing={3}>
      {/* Sentences */}
      <Stack direction="row" spacing={3} className="job-postings-section" style={{ padding: '0px 30px' }}>
        <Typography variant="h3" className="job-postings-heading" style={{ fontWeight: 'bold' }}>
          Connect with valuable interview experiences
          <span className="job-postings-subtext" style={{ color: '#2272FF' }}> shared daily</span>
        </Typography>
      </Stack>
      <Typography variant="body1" className="job-postings-description" style={{ padding: '16px 30px' }}>
      Explore valuable interview experiences shared daily. We curate posts from individuals who have recently undergone interviews, offering insightful perspectives for your job search journey      </Typography>

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
          title="Job Type"
          options={["Full Time", "Contract", "Intern", "Part Time"]}
          selectedOptions={[interviewType]} 
          filter = {filter}
          setFilter = {setFilter}
          filterType = {"interviewTypeFilter"}
          handleOptionClick={(option) => handleOptionClick(option, setInterviewType, "interviewTypeFilter")}
        />

        <FilterCard
          title="Location"
          options={["California", "Florida", "New York"]}
          selectedOptions={[location]}
          handleOptionClick={(option) => handleOptionClick(option, setLocation)}
        />

        <FilterCard
          title="Company"
          options={["Apple", "Google", "Microsoft"]}
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
