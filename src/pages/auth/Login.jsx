import React from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      console.log(data, "Inside handle login"); //hitting api for Register Page ---->    https://react30.onrender.com/api/user/register
      //hitting api using axios package
      const response = await axios.post(
        "https://react30.onrender.com/api/user/login",
        data
      );
      console.log(response);

      if (response.status === 200) {
        navigate("/");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    //using LoginForm component
    <LoginForm type="LOGIN" onSubmit={handleLogin} />
  );
}

export default Login;
