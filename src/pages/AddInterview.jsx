import React, { useEffect, useState, useContext } from 'react';
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import CreatableSelect from 'react-select/creatable';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../services/authService';
import { AuthContext } from '../context/auth.context';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const AddInterview = () => {
  const { user } = useContext(AuthContext);
  const [companies, setCompanies] = useState([]);
  const [interview, setInterview] = useState({
    user: user?._id,
    company: '',
    position: '',
    review: '',
    jobDetails: '',
    location: '',
    challenges: '',
    interviewType: '',
    interviewDifficulty: '',
    interviewDate: new Date(),
    interviewer: '',
    linkedin: '',
    userNotes: '',
  });
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const getCompanies = () => {
    get('/company')
      .then((response) => {
        console.log('Found companies ===>', response.data);
        setCompanies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sort = (array) => {
    return array.sort((a, b) => a.companyName.localeCompare(b.companyName));
  };

  const theseCompanies = companies.length
    ? [...sort(companies), { _id: '', companyName: 'Add new Company' }].map((company) => {
        return {
          key: company._id,
          label: company.companyName,
          value: company.companyName,
        };
      })
    : [];

  const theseOptions = companies.length ? theseCompanies : [{ key: '', label: 'Add new Company', value: 'Add new Company' }];

  const handleSelectChange = (e) => {
    console.log('Select change');

    if (!e) {
      setInterview(() => ({
        user: user?._id,
        company: '',
        position: '',
        review: '',
        jobDetails: '',
        location: '',
        challenges: '',
        interviewType: '',
        interviewDifficulty: '',
        interviewDate: new Date(),
        interviewer: '',
        linkedin: '',
        userNotes: '',
      }));
    } else {
      if (e.value === 'Add new Company') {
        navigate('/add-company');
      } else {
        setInterview({
          user: user?._id,
          company: e.key,
          position: '',
          review: '',
          jobDetails: '',
          location: '',
          challenges: '',
          interviewType: '',
          interviewDifficulty: '',
          interviewDate: new Date(),
          interviewer: '',
          linkedin: '',
          userNotes: '',
        });

        setOpenDialog(true);
      }
    }
  };

  const handleCreate = (name) => {
    navigate(`/add-company/${name}`);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting');

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

    console.log('This is new company ====>', newInterview);

    post('/interview', newInterview)
      .then((response) => {
        console.log('Created Interview', response.data);
        navigate('/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const defaultTheme = createTheme();

  return (
    <div>
      <h1>Add Interview</h1>

      <CreatableSelect id="selector" isClearable options={theseOptions} onChange={handleSelectChange} onCreateOption={handleCreate} />

      {user && interview.company && (
        <ThemeProvider theme={defaultTheme}>
          <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="xl">
            <DialogTitle>
              <Box display="flex" alignItems="center">
                <Avatar sx={{ m: 1, bgcolor: '#2272FF' }}>
                  <BusinessIcon />
                </Avatar>
                <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                  Add Interview
                </Typography>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Paper elevation={2} square sx={{ borderRadius: 2, mt: 2, p: 2, maxWidth: '1200px', margin: 'auto' }}>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField fullWidth id="Review" label="Job Title" name="review" autoComplete="Review" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="position"
                        label="Job Type"
                        name="position"
                        autoComplete="position"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField required fullWidth id="location" label="Location" name="location" autoComplete="location" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="JobDetails" label="Job Overview" name="jobDetails" autoComplete="JobDetails" multiline rows={6} sx={{ height: 'auto' }}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="Challenges" label="Interview Questions / Coding Challenges" name="challenges" autoComplete="Challenges" multiline rows={6} sx={{ height: 'auto' }}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="interviewType" label="Interview Type" name="interviewType" autoComplete="interviewType" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="interviewDifficulty" label="Interview Difficulty" name="interviewDifficulty" autoComplete="interviewDifficulty" />
                    </Grid>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                          <DatePicker label="Interview Date" name="Interview Date" fullWidth defaultValue={dayjs(new Date())} />
                        </DemoContainer>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="interviewer" label="Interviewer" name="interviewer" autoComplete="interviewer" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="linkedin" label="Interviewer LinkedIn" name="linkedin" autoComplete="linkedin" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth id="userNotes" label="User Notes" name="userNotes" autoComplete="userNotes" multiline rows={6} sx={{ height: 'auto' }} />
                    </Grid>
                    {/* <Grid item xs={12}>
                      <TextField fullWidth id="logo" label="Logo URL" name="logo" autoComplete="logo" />
                    </Grid> */}
                  </Grid>
                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor: '#2272FF' }}>
                    Submit Interview
                  </Button>
                </Box>
              </Paper>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              {/* <Button onClick={handleSubmit} variant="contained" sx={{ bgcolor: '#2272FF' }}>
                Submit Interview
              </Button> */}
            </DialogActions>
          </Dialog>

          <Container component="main" maxWidth="xl">
            {/* Rest of the code remains the same */}
          </Container>
        </ThemeProvider>
      )}
    </div>
  );
};

export default AddInterview;
