import { useEffect, useState, useContext } from 'react';

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

import { get, post } from '../services/authService';

import { AuthContext } from '../context/auth.context';

import CreatableSelect from 'react-select/creatable';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const AddInterview = () => {

    const { user } = useContext(AuthContext)

    const [companies, setCompanies] = useState([])

    const [interview, setInterview] = useState({
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

    const getCompanies = () => {
        get('/company')
            .then((response) => {
                console.log("Found companies ===>", response.data)
                setCompanies(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const sort = (array) => {
        return array.sort((a, b) => a.companyName.localeCompare(b.companyName))
    }

    const theseCompanies = companies.length ? [...sort(companies), {_id: "", companyName: "Add new Company"}].map((company) => {
        return { 
            key: company._id,
            label: company.companyName,
            value: company.companyName   
        }
    }) : []

    const theseOptions = companies.length ? theseCompanies : [{key: "", label: "Add new Company", value: "Add new Company"}]

    const handleSelectChange = (e) => {

        console.log("Select change")

        if (!e) {
            setInterview(() => ({        
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
            }))
        } else {
            if (e.value === 'Add new Company') {
                navigate('/add-company')
            } else {
                setInterview({        
                    user: user?._id,
                    company: e.key,
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
            }
        }
    
    }

    const handleCreate = (name) => {
        navigate(`/add-company/${name}`)
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submitting")

        const data = new FormData(e.currentTarget);

        const newInterview = {
            user: interview.user,
            company: interview.company,
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

        post('/interview', newInterview)
            .then((response) => {
                console.log("Created Interview", response.data)
                navigate("/profile")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCompanies()
    }, []) 

    const defaultTheme = createTheme();

  return (
    <div>
        <h1>AddInterview</h1>

        <CreatableSelect id="selector" isClearable options={theseOptions} onChange={handleSelectChange} onCreateOption={handleCreate}/>

        { user && interview.company &&
        
        
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
              Add Interview
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
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
                    id="location"
                    label="location"
                    name="location"
                    autoComplete="location"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="Review"
                    label="Review"
                    name="review"
                    autoComplete="Review"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="JobDetails"
                    label="JobDetails"
                    name="jobDetails"
                    autoComplete="JobDetails"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="Challenges"
                    label="Challenges"
                    name="challenges"
                    autoComplete="Challenges"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="interviewType"
                    label="interviewType"
                    name="interviewType"
                    autoComplete="interviewType"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="interviewDifficulty"
                    label="interviewDifficulty"
                    name="interviewDifficulty"
                    autoComplete="interviewDifficulty"
                  />
                </Grid>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                <DatePicker label="Interview Date" name="interviewDate" fullWidth defaultValue={dayjs(new Date())} />
                </DemoContainer>
    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="interviewer"
                    label="interviewer"
                    name="interviewer"
                    autoComplete="interviewer"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="linkedin"
                    label="linkedin"
                    name="linkedin"
                    autoComplete="linkedin"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="userNotes"
                    label="userNotes"
                    name="userNotes"
                    autoComplete="userNotes"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="logo"
                    label="Logo URL"
                    name="logo"
                    autoComplete="logo"
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit Interview
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
        
        
        }

       

        </div>
  )
}

export default AddInterview