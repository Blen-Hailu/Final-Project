import React,  { useState, useEffect } from "react";
import Header from '../components/Header.jsx';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "./FirebaseConfig.js";
import { Navigate } from "react-router-dom";

const LogIn = () => {


return(
 <>
  <Header />
  <h2>Log in Form</h2>
 </>
)
}

export default LogIn;