import React from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../config";

function Login() {

  //USING ENV FILE TO CREATE BASE URL
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      console.log(data, "Inside handle login"); //hitting api for Register Page ---->    https://react30.onrender.com/api/user/register
      //hitting api using axios package
      const response = await axios.post(baseUrl+'/login',
        data
      );
      console.log(response);

      if (response.status === 200) {
        console.log(response.data); 

        localStorage.setItem('token',response.data.token)  //for storing token value during lobin in local storage in key-value pair //also response.data.token gives taken value from response
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
