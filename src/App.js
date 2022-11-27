import './App.css';
import React from "react";
import UserInput from './components/InputForm.jsx';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

function App() {
  
  return (
    <>
    <h1>Minae's version of Final Project</h1>
    <Header />
    <Body />
    <UserInput/>
    <Footer />
    </>
  );
  }

export default App;
