import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, Grid, Button, TextField } from "@mui/material";
import { get } from "../services/authService";
import EditInterview from "./EditInterview";

const JobReviewDetail = () => {
  const { id } = useParams(); 
  const { user } = useContext(AuthContext)
  const [interview, setInterview] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const navigate = useNavigate()

  const getInterview = () => {
    console.log("ID from params", id)
    get(`/interview/${id}`)
      .then((response) => {
        console.log("found review", response.data)
        setInterview(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDelete = () => {
    get(`/interview/delete/${id}`)
      .then((response) => {
        console.log("Deleted", response.data)
        navigate('/profile')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getInterview()
  }, [])

  return (
    <>
      {interview && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card style={{ borderRadius: '12px' }}>
              <CardContent>
                {/* <img src={interview.company.logo} alt={interview.company.companyName} style={{ width: "100px", height: "100px" }} /> */}
                <Typography variant="h4" gutterBottom>
                  {interview.company.companyName}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {interview.jobDetails}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card style={{ borderRadius: '12px' }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Job Title: {interview.review}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Job Type: {interview.position}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Job Location: {interview.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card style={{ borderRadius: '12px' }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Interview Type: {interview.interviewType}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Interview Date: {new Date(interview.interviewDate).toLocaleDateString()}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Interview Difficulty: {interview.interviewDifficulty}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Interviewer: {interview.interviewer}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  LinkedIn: {interview.linkedin}
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Interview Questions / Coding Challenges:<TextField
                    fullWidth
                    multiline
                    value={interview.challenges}
                    variant="outlined"  
                    InputProps={{ readOnly: true }} 
                    />
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  User Notes: <TextField
                  fullWidth
                  multiline 
                  value={interview.userNotes} 
                  InputProps={{ readOnly: true }}
                  />
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {user && interview && user._id === interview.user._id && (
            <Grid item xs={12}>
              <Button
                variant="contained"
                style={{  marginBottom:"25px ",marginRight: "8px", color: "#FFFFFF", backgroundColor: "#ffaf22" }}
                onClick={() => setIsEditing(!isEditing)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                style={{ color: "#FFFFFF", backgroundColor: "#FF0000", marginBottom:"25px " }}
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Grid>
          )}

          {isEditing && <EditInterview interview={interview} isEditing={isEditing} setIsEditing={setIsEditing} />}
        </Grid>
      )}
    </>
  );
};

export default JobReviewDetail;
