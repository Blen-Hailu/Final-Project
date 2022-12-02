import React from 'react';
import{NavLink, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Register} from "./pages/Register";
import {UserLogIn} from "./pages/LogIn";
import{NotFound} from "./pages/NotFound";
import{AboutUs} from "./pages/AboutUs";
import './App.css';


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
          <Route path= "/logIn" element = {<UserLogIn/>} />
          <Route path= "*" element = {<NotFound/>} />

        </Routes>

      <h1>KOTIBET HOME SERVICES</h1>
  </>
  );
}

export default App;
