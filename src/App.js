import React from "react";
import './App.css';
import Home from './routes/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './routes/404.jsx';
import AboutUs from './routes/AboutUs.jsx';
import Catering from './routes/Catering.jsx';
import JoinUs from './routes/JoinUs.jsx';
import MyPage from './routes/MyPage.jsx';
import LogIn from './routes/LogIn.jsx';
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route} from "react-router-dom";
import { AuthContextProvider } from "./context/auth_context";



function App() {

  return (
    <>
    <h1>Minae's version of Final Project</h1>
     <AuthContextProvider>
       <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/Catering' element={<Catering />} />
            <Route path='/JoinUs' element={<JoinUs />}/>
            <Route path='/MyPage' element={<PrivateRoute><MyPage /></PrivateRoute>}/>
            <Route path='/LogIn' element={<LogIn />}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
       <Footer />
     </AuthContextProvider>
    </>
  )
  };

export default App;
