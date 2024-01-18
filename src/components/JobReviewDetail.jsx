import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import { get } from "../services/authService";
import EditInterview from "./EditInterview";

const JobReviewDetail = () => {
  const { id } = useParams(); // Retrieve the job review ID from the URL

  const { user } = useContext(AuthContext)

  const [interview, setInterview] = useState(null)

  const [isEditing, setIsEditing] = useState(false)

  const navigate = useNavigate()

  // Fetch job review details based on the ID from your backend API or database
  // Example API call or fetch logic

  // const response = await fetch(`your-api-endpoint/${id}`);
  // const data = await response.json();

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

  // Example data for testing
  // const mockData = {
  //   id: 1,
  //   company: "JR Dunn Jewelers",
  //   position: "E-commerce Junior Web Developer",
  //   logoUrl: "https://example.com/logo.png", // URL to the company logo
  //   review: "Great company to work for!",
  //   details: "Join our team as one of the most successful omni-channel luxury family-owned Independent Jewelers and grow with us! We are seeking a dynamic developer to join our team and leverage your skills for website development, UX/UI, coding, content management, page building, conversion optimization, site speed, SEO, and overall functionality to help us achieve the best experience possible for our clients.", // Additional details
  //   location: "City, Country",
  //   challenges: "Show test, exercises, code, etc",
  //   interviewType: "Behavioral Interview",
  //   interviewDifficulty: "Low",
  //   interviewDate: "2023-01-01",
  //   interviewer: "John Doe",
  //   linkedin: "https://linkedin.com/in/johndoe",
  //   userNotes: "User review/ experience in the interview...",
  // };

  return (
    <>
      {interview &&
    
    <Grid container spacing={2}>

      
        <Grid item xs={12} sm={6}>
          <Card style={{ borderRadius: '12px' }}>
            <CardContent>
              <img src={interview.company.logo} alt={interview.company.companyName} style={{ width: "100px", height: "100px" }} />
              <Typography variant="h4" gutterBottom>
                {interview.company.companyName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {interview.details}
              </Typography>
            </CardContent>
          </Card>
        </Grid>



        <Grid item xs={12} sm={6}>
          <Card style={{ borderRadius: '12px' }}>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {interview.position}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {interview.location}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {interview.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third Card */}
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
                Intervie Difficulty: {interview.interviewDifficulty}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Interviewer: {interview.interviewer}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                LinkedIn: {interview.linkedin}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Challenges: {interview.challenges}
              </Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                User Notes: {interview.userNotes}
              </Typography>
            </CardContent>
          </Card>
        </Grid>


        <>
        
              {
                user && interview && user._id == interview.user._id &&

                <div>
                  <button onClick={() => setIsEditing(!isEditing)} >Edit</button>
                  <button onClick={handleDelete}>Delete</button>
                
                </div>
              }
        
        </>

        {
          isEditing && <EditInterview interview={interview} isEditing={isEditing} setIsEditing={setIsEditing} />
        }

      
      

    </Grid>
    
      }
    
    </>
  );
};

export default JobReviewDetail;
