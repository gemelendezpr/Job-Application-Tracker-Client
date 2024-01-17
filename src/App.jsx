import "./App.css";
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/auth.context";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CompanySearch from "./pages/CompanySearch";
import JobReviewDetail from "./components/jobReviewDetail";
import Footer from "./components/Footer";
import AddInterview from "./pages/AddInterview";
import CreateCompany from "./pages/CreateCompany";
import CreateCompanyBlank from './pages/CreateCompanyBlank'

function App() {
  const { getToken } = useContext(AuthContext);

  const IsLoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/signin" />;
  };

  const IsLoggedOut = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div className="app-container">
      <Navbar />

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<CompanySearch />} />
          <Route path="/job-reviews/:id" element={<JobReviewDetail />} />
          
          <Route element={<IsLoggedOut />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<IsLoggedIn />}>
            <Route path="/profile" element={<Profile />} />
            <Route path='/add' element={<AddInterview />} />
            <Route path="/add-company/:companyName" element={<CreateCompany />} />
            <Route path='/add-company' element={<CreateCompanyBlank />} />
          </Route>
        </Routes>
      </div>
       <Footer />
    </div>
  );
}

export default App;