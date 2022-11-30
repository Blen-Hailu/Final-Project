import React from 'react';
import{NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Register} from "./pages/Register";
import {LogIn} from "./pages/LogIn";
import{NotFound} from "./pages/NotFound";
import{AboutUs} from "./pages/AboutUs";


function App() {

  return (
    <>
        <nav className ="nav">
          <ul>
            <li>
              <NavLink to= "/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to= "/AboutUs"> About Us</NavLink>
            </li>
            <li>
            <NavLink to= "/Services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Register">Join as a Freelancer</NavLink>
            </li>
            <li>
              <NavLink to= "/LogIn ">Log In </NavLink>
            </li>
          </ul>

        </nav>
    
        <Routes>
          <Route path= "/" element = {<Home />} />
          <Route path= "/aboutUs" element = {<AboutUs />} />
          <Route path= "/services" element = {<Services/>} />
          <Route path= "/register" element = {<Register/>} />
          <Route path= "/logIn" element = {<LogIn/>} />
          <Route path= "*" element = {<NotFound/>} />

        </Routes>
  </>
  );
}

export default App;
