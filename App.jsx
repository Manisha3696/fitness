import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./component/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
           <Route path="/" element={<Home/>} /> 
           <Route path="About" element={<About/>} /> 
           <Route path="Blog" element={<Blog/>} /> 
           <Route path="Contact" element={<Contact/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
