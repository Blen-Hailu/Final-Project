import React from 'react';
import{Route, Routes} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Services} from "./pages/Services";
import {Register} from "./pages/Register";
import {ContactUs} from "./pages/ContactUs";
import{NotFound} from "./pages/NotFound";
import{AboutUs} from "./pages/AboutUs";
import {SignIn} from './pages/SignIn';
import{Account} from './pages/Account';
import Protected from './components/protected';
import Navbar from './components/Navbar';
import './App.css';
import { AuthContextProvider } from './context/AuthContext';
import Footer from './components/Footer';


export default function App() {
  
  return (
    <div ClassName= 'App'>
    <AuthContextProvider>
      <Navbar/>
        <Routes>
              <Route path= "/" element = {<Home />} />
              <Route path= "/aboutUs" element = {<AboutUs />} />
              <Route path= "/services" element = {<Services/>} />
              <Route path= "/register" element = {<Register/>} />
              <Route path= "/contactUs" element = {<ContactUs/>} />
              <Route path= "/signIn" element = {<SignIn/>} />
              <Route 
                path= "/account" element = {
                <Protected>
                  <Account/>
                </Protected>
              } 
              />
              <Route path= "*" element = {<NotFound/>} />
        </Routes>
      <Footer/>
    </AuthContextProvider>

    

  
  </div>
  );
  
}

//export default App;
