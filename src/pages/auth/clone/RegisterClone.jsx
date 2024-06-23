//this is a register clone page

import React from "react";
import RegisterForm from "./RegisterForm";
import axios from "axios";
import { baseUrl } from "../../../../config";
import { useNavigate } from "react-router-dom";

const RegisterClone = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      console.log(data, "Inside handle register"); //hitting api for Register Page ---->    https://react30.onrender.com/api/user/register

      const response = await axios.post(baseUrl + "/register", data);
      console.log(response);

      if (response.status === 201) {
        navigate("/loginclone");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return <RegisterForm onsubmit={handleRegister} type="Register" />;
};

export default RegisterClone;
