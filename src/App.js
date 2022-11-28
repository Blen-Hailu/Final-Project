import React from "react";
import './App.css';
import Home from './routes/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './routes/404.jsx';
import UserInput from './routes/SignUpForm.jsx';
import { Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <>
    <h1>Minae's version of Final Project</h1>
     <NavBar 
      menu_1='Home' 
      menu_2='About Us' 
      menu_3='Catering' 
      menu_4='SignUp' 
      menu_5='Log In'
      />
       <Routes>
           <Route index element={<Home />} />
           <Route path='/signup-cooks' element={<UserInput />}/> 
           <Route path='*' element={<NotFound />} />
       </Routes>
    <Footer />
    </>
  );
  }

export default App;
