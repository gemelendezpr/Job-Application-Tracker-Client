import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams } from "react-router-dom";

import dayjs from 'dayjs';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { useNavigate } from 'react-router-dom';

import { post } from '../services/authService';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const EditInterview = ({ interview, setIsEditing }) => {
  const { id } = useParams(); 
  const { user } = useContext(AuthContext);

  const [thisInterview, setThisInterview] = useState({
    user: user?._id,
    company: "",
    position: "",
    review: "",
    jobDetails: "",
    location: "",
    challenges: "",
    interviewType: "",
    interviewDifficulty: "",
    interviewDate: new Date(),
    interviewer: "",
    linkedin: "",
    userNotes: "",
  });

  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting");

    const data = new FormData(e.currentTarget);

    const newInterview = {
      user: thisInterview.user._id,
      company: interview.company._id,
      position: data.get('position'),
      review: data.get('review'),
      jobDetails: data.get('jobDetails'),
      location: data.get('location'),
      challenges: data.get('challenges'),
      interviewType: data.get('interviewType'),
      interviewDifficulty: data.get('interviewDifficulty'),
      interviewDate: data.get('interviewDate'),
      interviewer: data.get('interviewer'),
      linkedin: data.get('linkedin'),
      userNotes: data.get('userNotes'),
    };

    console.log("This is new company ====>", newInterview);

    post(`/interview/update/${id}`, newInterview)
      .then((response) => {
        console.log("Created Interview", response.data);
        setIsEditing(false);
        setOpen(false);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setThisInterview(interview);
  }, [interview]);

  const defaultTheme = createTheme();

  return (
    <div>
    {user && interview && (
      <ThemeProvider theme={defaultTheme}>
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
            setIsEditing(false);
          }}
          TransitionComponent={Transition}
          maxWidth="xl"
        >
          <DialogTitle>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ m: 1, bgcolor: "#2196f3" }}>
                <BusinessIcon />
              </Avatar>
              <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                Edit Interview
              </Typography>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Container component="main" maxWidth="xl">
              <CssBaseline />
              <Paper elevation={2} square sx={{ borderRadius: 2, mt: 2, p: 2,  maxWidth: "1300px", margin: "auto" }}>  
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        defaultValue={interview.position}
                        id="position"
                        label="Job Type"
                        name="position"
                        autoComplete="position"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        defaultValue={interview.location}
                        id="location"
                        label="Location"
                        name="location"
                        autoComplete="location"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        defaultValue={interview.review}
                        id="review"
                        label="review"
                        name="review"
                        autoComplete="review"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        defaultValue={interview.jobDetails}
                        id="jobDetails"
                        label="Job Details"
                        name="jobDetails"
                        autoComplete="jobDetails"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                         fullWidth
                         multiline
                         defaultValue={interview.challenges}
                         rows={6}  
                         id="challenges"
                         label="Challenges"
                         name="challenges"
                         autoComplete="challenges"
                         variant="outlined"  // Use the outlined style for multiline
                         sx={{ height: 'auto' }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        defaultValue={interview.interviewType}
                        id="interviewType"
                        label="Interview Type"
                        name="interviewType"
                        autoComplete="interviewType"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        defaultValue={interview.interviewDifficulty}
                        id="interviewDifficulty"
                        label="Interview Difficulty"
                        name="interviewDifficulty"
                        autoComplete="interviewDifficulty"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Interview Date" name="interviewDate" fullWidth defaultValue={dayjs(interview.interviewDate)} />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        defaultValue={interview.interviewer}
                        id="interviewer"
                        label="Interviewer"
                        name="interviewer"
                        autoComplete="interviewer"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        defaultValue={interview.linkedin}
                        id="linkedin"
                        label="LinkedIn"
                        name="linkedin"
                        autoComplete="linkedin"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        defaultValue={interview.userNotes}
                        id="userNotes"
                        label="User Notes"
                        name="userNotes"
                        autoComplete="userNotes"
                        multiline  
                        rows={6}
                        sx={{ height: 'auto' }}
                      />
                    </Grid>
                  </Grid>
                  <DialogActions>
                  <Button onClick={() => setOpen(false)}>Cancel</Button>
                      <Button type="submit" variant="contained" sx={{ bgcolor: "#2272FF" }}>
                        Submit Changes
                      </Button>
                  </DialogActions>
                </Box>
              </Paper>
              </Container>
              </DialogContent>
              </Dialog>
        </ThemeProvider>
      )}
    </div>
  );
};

export default EditInterview;
