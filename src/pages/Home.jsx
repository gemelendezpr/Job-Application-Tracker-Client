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
  const [searchTerm, setSearchTerm] = useState("");

  const [filter, setFilter] = useState({
    companyFilter: undefined,
    locationFilter: undefined,
    interviewTypeFilter: undefined,
  });

  const updateFilters = (newJobReviews) => {
    const newLocations = Array.from(new Set(newJobReviews.map((review) => review.location)));
    const newInterviewTypes = Array.from(new Set(newJobReviews.map((review) => review.interviewType)));
    const newCompanies = Array.from(new Set(newJobReviews.map((review) => review.company.companyName)));

    setFilter({
      companyFilter: newCompanies,
      locationFilter: newLocations,
      interviewTypeFilter: newInterviewTypes,
    });
  };

  const handleOptionClick = (option, filterType) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [filterType]: prevFilter[filterType]
        ? prevFilter[filterType].includes(option)
          ? prevFilter[filterType].filter((filter) => filter !== option)
          : [...prevFilter[filterType], option]
        : [option],
    }));
  };

  useEffect(() => {
    console.log("filter", filter);
  }, [filter]);

  return (
    <Grid container spacing={3}>
      {/* Sentences */}
      <Stack direction="row" spacing={3} className="job-postings-section" style={{ padding: "0px 30px" }}>
        <Typography variant="h3" className="job-postings-heading" style={{ fontWeight: "bold" }}>
          Connect with valuable interview experiences
          <span className="job-postings-subtext" style={{ color: "#2272FF" }}>
            {" "}
            shared daily
          </span>
        </Typography>
      </Stack>
      <Typography variant="body1" className="job-postings-description" style={{ padding: "16px 30px" }}>
        Explore valuable interview experiences shared daily. We curate posts from individuals who have recently undergone interviews, offering insightful perspectives for your job search journey
      </Typography>

      {/* Search Bar */}
      <Grid item xs={12}>
        <Box position="relative" mb="16px">
          <TextField
            height="56px"
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { xs: "350px", sm: "660px", md: "930px", lg: "1260px" },
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
            placeholder="Search for interviews"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            className="search-button"
            sx={{
              bgcolor: "#2272FF",
              borderRadius: "4px",
              color: "#fff",
              textTransform: "none",
              width: { xs: "110px", sm: "150px", md: "170px", lg: "173px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "18px", xs: "14px" },
            }}
          >
            Search
          </Button>
          {/* Clear Search Button */}
          <Button variant="outlined" onClick={() => setSearchTerm("")} sx={{ marginLeft: "10px" }}>
            Clear Search
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <FilterCard
          title="Job Type"
          options={["Full Time", "Contract", "Intern", "Part Time"]}
          selectedOptions={[interviewType]}
          setFilter={setFilter}
          filterType={"interviewTypeFilter"}
          handleOptionClick={(option) => handleOptionClick(option, "interviewTypeFilter")}
        />

        <FilterCard
          title="Location"
          options={filter.locationFilter || ["California", "Florida", "New York"]}
          selectedOptions={[location]}
          setFilter={setFilter}
          filterType={"locationFilter"}
          handleOptionClick={(option) => handleOptionClick(option, "locationFilter")}
        />

        <FilterCard
          title="Company"
          options={filter.companyFilter || ["Apple", "Google", "Microsoft"]}
          selectedOptions={[companyName]}
          setFilter={setFilter}
          filterType={"companyFilter"}
          handleOptionClick={(option) => handleOptionClick(option, "companyFilter")}
        />
      </Grid>

      {/* Right Side - Job Reviews */}
      <Grid item xs={12} md={8}>
        {/* Sort by Section */}
        <Stack direction="row" alignItems="center" style={{ borderRadius: "12px", marginBottom: "16px" }}>
          <Typography variant="h5" style={{ width: "200%", marginBottom: { xs: "8px", md: "0" } }}>
            All Interviews
          </Typography>
          <Typography variant="h6" style={{ width: "25%", marginRight: { xs: "0", md: "0px" } }}>
            Sort By
          </Typography>
          <FormControl sx={{ minWidth: { xs: "30%", md: "200px", lg: "230px", backgroundColor: "#fff", borderRadius: "4px" } }} size="small">
            <Select value={orderBy} onChange={(e) => setOrderBy(e.target.value)} label="Sort by">
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
        <JobReviews searchTerm={searchTerm} updateFilters={updateFilters} filter={filter} />
      </Grid>
    </Grid>
  );
};

export default Home;