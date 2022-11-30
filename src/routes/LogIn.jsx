import React,  { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navigate } from "react-router-dom";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { User_LogIn } from "../query.js";


const LogIn = () => {
  const { handleSubmit, register } = useForm();
  
  const onSubmit = async (requestData) => {
    const responseData = await User_LogIn(requestData); 
    try {
      await signInWithEmailAndPassword(
      auth, requestData.email, requestData.password);
      } catch (error) {
      console.log(error);
      alert ("E-mail address or password is wrong");
    }
    console.log(requestData); 
    console.log(responseData);
   }

   const [user, setUser] = useState("");
   useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

return (
<>
 {user ? (
  <Navigate to={'/MyPage'} />
 ) : (
 <>
 <form action="POST" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
   <h2>Log In</h2>
    <InputEmail register={register} />
     <InputTextRequired register={register} type='password' title='Password'/>
    <button type="submit">LOG IN</button>
</form>
</>
)}
</>
);
}



export default LogIn;