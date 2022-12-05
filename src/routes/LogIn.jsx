import React,  { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { UserAuth } from '../context/auth_context.js';
import { GoogleButton } from 'react-google-button';


const LogIn = () => {
  const {googleSignIn, signIn, user} = UserAuth();
  const navigate= useNavigate();
  const { handleSubmit, register } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const onSubmit = async (e) => {
     setError('');
    try {
      await signIn (email, password);
      navigate('/MyPage');
      } catch (e) {
      setEmail(email);
      setPassword(password);
      setError(error);
      console.log(e.message);
      alert ("E-mail address or password is wrong");
    }
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