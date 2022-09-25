import "./New.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sinup from "./component/Sinup";
import Login from "./component/Login";
import React, { useState, useEffect } from 'react';
import Addproduct from "./component/Addproduct";
import Productlist from "./component/Productlist";
import Profile from "./component/Profile";

function App() {
  return (
  
    <div className="container">
      <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/p" element={<Productlist/>}/>
    <Route path="/add" element={<Addproduct/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/sinup" element={<Sinup/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  
  );
}

export default App;