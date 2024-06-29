import React from "react";
import LoginForm from "./LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../config";

function Register() {
  //useNavigate hook to navigate from one page to other in this case from register to login
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      console.log(data, "Inside handle register"); //hitting api for Register Page ---->    https://react30.onrender.com/api/user/register
      //hitting api using axios package
      const response = await axios.post(baseUrl+'/register',data  );
    
      console.log(response);

      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <>
      {/* using LoginForm component */}

      <LoginForm type="REGISTER" onSubmit={handleRegister} />
    </>
  );
}

export default Register;
