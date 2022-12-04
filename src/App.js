import React from 'react';
import{Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Register} from "./pages/Register";
import {UserLogIn} from "./pages/LogIn";
import{NotFound} from "./pages/NotFound";
import{AboutUs} from "./pages/AboutUs";
import Navbar from './components/Navbar';
import './App.css';


export default function App() {
  
  return (
    <>
      <Navbar/>

        <Routes>
              <Route path= "/" element = {<Home />} />
              <Route path= "/aboutUs" element = {<AboutUs />} />
              <Route path= "/services" element = {<Services/>} />
              <Route path= "/register" element = {<Register/>} />
              <Route path= "/logIn" element = {<UserLogIn/>} />
              <Route path= "*" element = {<NotFound/>} />
            </Routes>
      <Home/>
  
  </>
  );
  
}

//export default App;
