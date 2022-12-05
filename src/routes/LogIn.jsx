import React,  { useEffect } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../FirebaseConfig.js";
import { useNavigate, Link } from "react-router-dom";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { User_LogIn } from "../query.js";
import { UserAuth } from '../context/auth_context.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleButton } from 'react-google-button';


const LogIn = () => {
  const {googleSignIn, user} = UserAuth();
  const navigate= useNavigate();

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

   const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error){
      console.log(error)
    }
    };

    useEffect (()=>{
      if(user != null){
        navigate('/MyPage')
      }
      // eslint-disable-next-line
    },[user])

return (
 <>
  <form action="POST" autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
    <h2>Log In to your account</h2>
    <p>Don't have an account yet? <Link to='/SignUp'>Sign Up</Link></p>
      <InputEmail register={register} />
      <InputTextRequired register={register} type='password' title='Password'/>
      <button type="submit">LOG IN</button>
  </form>
    <GoogleButton onClick ={handleGoogleSignIn}/>
</>
)
}



export default LogIn;