import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ type,onSubmit }) => {
  //follwing code stores the data from login form to the useState Container in object form
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  //handleChange function handles any changes to the input fields
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    //calling setData function sets the name and value pair to the useState container

    setData({
      ...data, //leaves remaining data same
      [name]: value, //sets <input name="...."> to certain values
    });
  };

  //handles code after submit button is clicked
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page from loading during submission also hides the input from url
    console.log("Submission triggered");
    onSubmit(data);

	// if(type === 'REGISTER')
	// 	{
	// 		//HIT REGUSTER API 
	// 	}

	// 	else{
	// 		//hit login api
	// 	}

  };



  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl text-center font-semibold">
                {/* DYNAMIC INPUT USING PROPS */}

                {type === "LOGIN" ? "LOGIN" : "REGISTER"}
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* DYNAMIC INPUT FIELD USING PROPS */}

                  {type === "REGISTER" && (
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="username"
                        name="username"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="User Name"
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="username"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        User Name
                      </label>
                    </div>
                  )}

                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className=" flex">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1 flex-grow">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

		  {
		  type === 'REGISTER' ? (<Link to='/login' className="text-blue-500"> Go to Login</Link>) : (<Link to="/register" className="text-blue-500"ll>Go to register </Link>)
		  }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
