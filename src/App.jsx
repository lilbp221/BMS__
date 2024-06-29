import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import Register from "./pages/auth/Register";
import EditBlog from "./pages/blog/EditBlog";
import SingleBlog from "./pages/blog/SingleBlog";
import RegisterClone from "./pages/auth/clone/RegisterClone";
import LoginClone from "./pages/auth/clone/LoginClone";

//App is the default component invoked in main.jsx page. Further main.jsx page refers to index.html
function App() {
  // const [count, setCount] = useState(0);
  //curly braces in react denotes object
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />   
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
       <Route path="/blogs/add" element={<AddBlog/>} />
       <Route path="/blogs/edit/:id" element={<EditBlog/>} />
       <Route path="/blogs/:id" element={<SingleBlog/>} />
       <Route path="/registerclone" element={<RegisterClone/>}/>
       <Route path="/loginclone" element={<LoginClone/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
