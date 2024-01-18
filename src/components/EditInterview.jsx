import { useEffect, useState, useContext } from "react";
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
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

import { useNavigate } from 'react-router-dom';

import { post } from '../services/authService';



import { createTheme, ThemeProvider } from '@mui/material/styles';

const EditInterview = ({ interview, setIsEditing }) => {


    const { id } = useParams(); // Retrieve the job review ID from the URL

    const { user } = useContext(AuthContext)

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
    })

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting")

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
                console.log("Created Interview", response.data)
                setIsEditing(false)
                navigate("/profile")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {

        setThisInterview(interview)
        
    }, [interview]) 

    const defaultTheme = createTheme();

  return (
    <div>




        { user && interview &&
        
        
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#2196f3' }}>
              <BusinessIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit Interview
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    defaultValue={interview.position}
                    id="position"
                    label="position"
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
                    label="location"
                    name="location"
                    autoComplete="location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={interview.review}
                    id="Review"
                    label="Review"
                    name="review"
                    autoComplete="Review"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={interview.jobDetails}
                    id="JobDetails"
                    label="JobDetails"
                    name="jobDetails"
                    autoComplete="JobDetails"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={interview.challenges}
                    id="Challenges"
                    label="Challenges"
                    name="challenges"
                    autoComplete="Challenges"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={interview.interviewType}
                    id="interviewType"
                    label="interviewType"
                    name="interviewType"
                    autoComplete="interviewType"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={interview.interviewDifficulty}
                    id="interviewDifficulty"
                    label="interviewDifficulty"
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
                    label="interviewer"
                    name="interviewer"
                    autoComplete="interviewer"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={interview.linkedin}
                    id="linkedin"
                    label="linkedin"
                    name="linkedin"
                    autoComplete="linkedin"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    defaultValue={interview.userNotes}
                    id="userNotes"
                    label="userNotes"
                    name="userNotes"
                    autoComplete="userNotes"
                  />
                </Grid>


              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Changes
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
        
        
        }

       

        </div>
  )
}

export default EditInterview