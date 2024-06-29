import React, { useEffect, useState } from 'react'
import Sturcture from '../../globalcomponents/layout/Sturcture'
import Formblog from '../../globalcomponents/form/Formblog'
import axios from 'axios'
import { baseUrl } from '../../../config'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    subtitle: "",
    category: "",
    description: "",
    imageUrl: "",
  });


  
 const handleUpdateBlog = async (data) => {
    try {
      const response = await axios.patch(`${baseUrl}/blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        navigate(`/blogs/${data._id}`); // Redirect to the updated blog page
      } else {
        alert("Failed to update blog");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Sturcture>
      <Formblog type="EDIT" onSubmit={handleUpdateBlog} />
    </Sturcture>
  )
}

export default EditBlog
