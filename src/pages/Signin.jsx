import { post } from "../services/authService";

import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

const Signin = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleTextInput = (e) => {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post("/auth/signin", newUser)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={newUser.email}
            onChange={handleTextInput}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={newUser.password}
            onChange={handleTextInput}
          />
        </label>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
