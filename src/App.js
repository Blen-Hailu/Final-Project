import React from 'react';
import{Link, Route, Routes} from 'react-router-dom';
import RegistrationForm from './components/form';
import './App.css';
import AddProfileData from './components/profile';
import FreelancerRegsitrationForm from './components/form2';
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Register} from "./pages/Register";
import {LogIn} from "./pages/LogIn";
import{NotFound} from "./pages/NotFound";


function App() {


  return (
    <>
        <nav className ="nav">
          <ul>
            <li>
              <Link to= "/">Home</Link>
            </li>
            <li>
            <Link to= "/Services">Services</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to= "/LogIn ">LogIn </Link>
            </li>
            <li>
              <Link to= "/NotFound ">NotFound </Link>
            </li>
          </ul>

        </nav>
    
        <Routes>
          <Route path= "/" element = {<Home />} />
          <Route path= "/services" element = {<Services/>} />
          <Route path= "/register" element = {<Register/>} />
          <Route path= "/logIn" element = {<LogIn/>} />
          <Route path= "*" element = {<NotFound/>} />

        </Routes>
      
      
      <div>
        <RegistrationForm/>
      </div>
      <div>
        <FreelancerRegsitrationForm/>
      </div>
      <div>
        <AddProfileData/>
      </div>

  

  </>
  );
}

export default App;
