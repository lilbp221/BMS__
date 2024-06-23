import React from "react";
import RegisterForm from "./RegisterForm";
import { baseUrl } from "../../../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginClone = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(baseUrl + "/login", data);
      console.log(response);

      if (response.status == 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return <RegisterForm type="Login" onsubmit={handleLogin} />;
};

export default LoginClone;
