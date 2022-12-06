import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputPassword } from "../components/InputPassword.jsx";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from '../context/auth_context.js';


export default function UserInput () {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const {createUser, googleSignIn, user} = UserAuth();

  const onSubmit = async (requestData) => {
   const responseData = await addCooks(requestData);
      console.log(requestData);
      console.log(responseData);
    }

   };

   const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/MyPage')
    } catch (error){
      console.log(error);
    }
    };
    useEffect (() => {
      if(user != null) {
        navigate('/MyPage')
      }
      //eslint-disable-next-line
    }, [user])

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
    <button className="googleBtn" type="button" onClick={e => handleGoogleSignIn(e)}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join With Google
        </button>
        <GDPRConsent />


    <div onClick={()=>{navigate('/')}}>Back Home</div>
    </>
   )
  }

