
//this is a component

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


const Formblog = ({type,onSubmit}) => {

  const[data,setData]=useState(
    {
      title:'',
      subtitle:'',
      description:'',
      image:'',
      category:'',
    }
  )

  //handles the change of made of input fields and stores the input values to useState Container
  const handleChange = (e) => {
    
    // const{name,value}= e.target

    const name=e.target.name
    const value=e.target.value

    setData(
      {
        ...data,
        [name]:name=== 'image' ? e.target.files[0]:value
      }
    )
  }
  //handles the change of made of input fields and stores the input values to useState Container
  
  

  const handleSubmit=(e) => {

    //calling the function when submit button is pressed
    //on pressing the button it passes the form data to AddBlog page with useState container by calling onSubmit() function of AddBlog page

  e.preventDefault()
  onSubmit(data) //userdefined function of AddBlog page

  }
  
  return (
    <div>
     
      <main className="w-screen flex flex-wrap items-center justify-between mx-auto ">
        <div className="w-screen h-screen dark:bg-gray-800 dark:text-white">
          <form
            className=" w-full p-4 rounded shadow-md"
            method="post"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200 text-center ">
             {type}BLOG
            </h2>
            <p className="text-gray-400 mb-4">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
             

              <div className="mb-4">
                <input
                  type="text"
                  name="title"
                  className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                  placeholder="Title*"
                  onChange={handleChange} //attribute of input field calling handlCHange function
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subtitle"
                  className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                  placeholder="Sub-Title*"
                  onChange={handleChange} //attribute of input field calling handlCHange function
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="category"
                  className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                  placeholder="Category*"
                  onChange={handleChange} //attribute of input field calling handlCHange function
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="file"
                  name="image"
                  className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
                  onChange={handleChange} //attribute of input field calling handlCHange function
                />
              </div>
              <div className="mb-4 col-span-1 md:col-span-3">
                <textarea
                  name="description"
                  className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
                  placeholder="Type your Blog Post....."
                  rows="5"
                  onChange={handleChange} //attribute of input field calling handlCHange function
                  required
                ></textarea>
              </div>
            </div>

            <Link to="/" className="flex justify-start ">
              <button
                type="submit"
                className=" py-4 px-6 mt-20 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800">
                Home 
              </button>
            </Link>
            <div className="flex justify-end">
              <button
                type="submit"
                className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
              >
                Post 
              </button>
            </div>
            
            
          </form>
        </div>
      </main>



 {/* <!-- component --> */}

      {/* w-screen: This class likely sets the width of the element to fill the entire width of the screen.

h-screen: This class likely sets the height of the element to fill the entire height of the screen.

flex: This class likely sets the display property of the element to flex, enabling flexbox layout.

justify-center: This class likely aligns the content of the element horizontally to the center along the main axis of the flex container.

items-center: This class likely aligns the content of the element vertically to the center along the cross axis of the flex container.

dark:bg-gray-900: This class seems to be conditional styling based on a dark mode. It sets the background color to a dark gray (#1a202c or similar).

mt-5: This class likely adds a margin of 5 units (could be pixels, ems, or rems) to the top of the element.

mx-5: This class likely adds a margin of 5 units to both the left and right sides of the element. */}
      {/* <main className="w-screen h-screen flex justify-center items-center dark:bg-gray-900 mt-5 mx-5 p-10 py-100"> */}

      {/* <main className="w-screen flex  items-center justify-center mx-auto bg-orange-500 ">
 
  <div className= " w-screen dark:bg-teal-800 dark:text-white">
    <form className=" w-full p-4 rounded shadow-md" action="/submit-comment" method="post">
      <h2 className="text-xl mb-4 tracking-wider font-lighter text-gray-900 dark:text-gray-200 text-center ">CREATE BLOG</h2>
      <p className="text-gray-400 mb-4">Your email address will not be published. Required fields are marked *</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="mb-4 col-span-1 md:col-span-3">
          <textarea
        id="comment"
        name="comment"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed resize-none"
        placeholder="Type your Blog Post....."
        rows="5"

        required
      ></textarea>
        </div>

        <div className="mb-4">
          <input
        type="text"
        id="Title"
        name="Title"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
        placeholder="Name*"
        required
      />
        </div>
        <div className="mb-4">
          <input
        type="Sub-Title"
        id="Sub-Title"
        name="Sub-Title"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
        placeholder="Sub-Title*"
        required
      />
        </div>
        <div className="mb-4">
          <input
        type="file"
        id="Address"
        name="Address"
        className="w-full px-3 py-2 dark:bg-gray-900 rounded-sm border dark:border-none border-gray-300 focus:outline-none border-solid focus:border-dashed"
       
      />
        </div>
      </div>
      <div className="flex justify-end">
        <button
        type="submit"
        className="py-4 px-6 bg-blue-950 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
      >
        Post →
      </button>
      </div>
    </form>
  </div>
</main> */}
    </div>
  );
};

export default Formblog;
