import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { baseUrl } from '../../../config'
import axios from 'axios'

const SingleBlog = () => {
   
    const {id}= useParams()
    const[blog,setBlog] = useState({}) //i want object in useState so {}
    const fetchBlog= async ()=>
        {
            const response= await axios.get(`${baseUrl}/blog/${id}`)

            if(response.status===200)
                {
                    setBlog(response.data.data)
                }

        }

        useEffect(
            () =>{
fetchBlog()
            }, []

        )

    

  return (
    <sturcture>
    <div className="bg-gray-100 dark:bg-gray-800 py-8 h-screen">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={blog.imageUrl} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
           
           {/* using link to redirect edit button to edit page */}
               
               
                    <div className="w-1/2 px-2">
                        <button className="  bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Delete</button>
                    </div>
                   

                    <Link to='/blogs/edit'>
                    <div className="w-1/2 px-2">
                        <button className="w-20 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 " >Edit</button>
                    </div>
                    </Link>
                    
                    
                </div>
            </div>
            <div className="md:flex-1 px-4 h-screen"> 
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {blog.subtitle}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                        <span className="text-gray-600 dark:text-gray-300">{blog.category}</span>
                    </div>
                    {/* <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Published At:</span>
                        <span className="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div> */}
                </div>
                
                
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Blog Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                       {blog.description}
                    </p>
                </div>

                <Link to="/">
                    <div className="px-2">
                        <div className='flex justify-end mt-20'>
                        <button className="w-30 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 flex ">Home</button>

                        </div>
                    </div>
                    </Link>
            </div>
        </div>
    </div>
</div>


    </sturcture>
  )
}

export default SingleBlog