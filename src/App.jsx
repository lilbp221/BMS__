import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/blog/Home";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import Register from "./pages/auth/Register";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addblog" element={<AddBlog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
