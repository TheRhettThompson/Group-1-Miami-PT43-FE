import './App.css';
import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './components/navbar';
import Home from './views/home';
import Footer from './components/footer';
import Landing from './views/landing';
import Register from './views/register';
import Login from './views/login';
import AboutUs from './views/aboutUs';


function App() {
  return (

    <div className="App">
     <BrowserRouter>
      <Navbar />
        
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/landing" element={<Landing />} />

        </Routes>
      <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
