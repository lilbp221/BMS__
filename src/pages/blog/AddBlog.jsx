//this is a page

import React from "react";
import Navbar from "../../globalcomponents/navbar/Navbar";
import Sturcture from "../../globalcomponents/layout/Sturcture";
import Formblog from "../../globalcomponents/form/Formblog";
import { baseUrl } from "../../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBlog() {
  const navigate = useNavigate();
  //inorder to fetch data from form of the blog and hit the api we create the handleCreateBlog function

  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(baseUrl + "/blog", data, {
        headers: {
          "Content-Type": "multipart/form-data", //for accepting multimedia data
          Authorization: localStorage.getItem("token"),
        },
      });
      //multipart form dataused for image upload
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  //incace of http or i/o request it takes time so we use await by making the function asynchronous

  return (
    <Sturcture>
      <Formblog type="ADD" onSubmit={handleCreateBlog}  />

      {/* sending the handleCreateBlog function to component Formblog so that the function can be used to pass data */}
    </Sturcture>
  );
}

export default AddBlog;