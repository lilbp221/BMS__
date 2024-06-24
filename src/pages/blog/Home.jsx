import React, { useEffect, useState } from 'react'
import Navbar from '../../globalcomponents/navbar/Navbar'
import Sturcture from '../../globalcomponents/layout/Sturcture'
import Card from '../../globalcomponents/cards/Card'
import Formblog from '../../globalcomponents/form/Formblog'
import axios from 'axios'
import { baseUrl } from '../../../config'


//this is home page

const Home = () => {
  
  const[blogs,setBlogs]= useState([]) 

  const fetchBlogs= async() =>
    {
       const response= await axios.get(baseUrl+'/blog' )
      // console.log(response)

       if(response.status===200)
        {
          setBlogs(response.data.data)
        }

    }

    useEffect(()=>   //the two arguments of useEffect are (arrow function, dependency)
    {
      fetchBlogs()
    },[])

  return (
  <Sturcture>
    <div className="flex flex-wrap justify-center gap-10 my-2">
{
 blogs.length > 0 && blogs.map((blog)=>
{
 // console.log(blog)
return(
  <Card blog={blog} />
)
})
}

    
  
   
    
    </div>
    
    </Sturcture>
    
   
  )
}

export default Home