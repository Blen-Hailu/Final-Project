import React from "react";
import './App.css';
import Home from './routes/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './routes/404.jsx';
import AboutUs from './routes/AboutUs.jsx';
import Catering from './routes/Catering.jsx';
import UserInput from './routes/SignUpForm.jsx';
import MyPage from './routes/MyPage.jsx';
import { Routes, Route} from "react-router-dom";


function App() {
  
  return (
    <>
    <h1>Minae's version of Final Project</h1>
     <NavBar />
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/AboutUs' element={<AboutUs />} />
           <Route path='/Catering' element={<Catering />} />
           <Route path='/SignUp' element={<UserInput />}/> 
           <Route path='/MyPage' element={<MyPage />}/> 
           <Route path='*' element={<NotFound />} />
       </Routes>
    <Footer />
    </>
  );
  }

export default App;
