import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputPassword } from "../components/InputPassword.jsx";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from '../context/auth_context.js';
import { GoogleButton } from 'react-google-button';

export default function UserInput () {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const {createUser, googleSignIn} = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const onSubmit = async (e) => {
      setError('');
      try {
      await createUser(email, password);
      navigate('/MyPage')
      } catch (e) {
      setEmail(email);
      setPassword(password);
      setError(error);
      console.log(e.message);
      alert ("User creation failed");
    }
   }

   const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error){
      console.log(error);
    }
    };

   return (
    <>
     <form action="POST" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>
        <h1>JOIN US AS A COOK!</h1>
          <p>Already have an account? <Link to='/LogIn'>Log in</Link></p>
            {/*E-mail address */}
            <InputEmail register={register} />
            {/*Password*/}
            <InputPassword register={register} />
          <button type="submit">CREATE ACCOUNT</button>
    </form>
    <GoogleButton onClick ={handleGoogleSignIn}/>
    <div onClick={()=>{navigate('/')}}>Back Home</div>
    </>
   )
  }

