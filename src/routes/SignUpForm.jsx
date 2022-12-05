import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { InputPassword } from "../components/InputPassword.jsx";
import { InputRadio } from "../components/InputRadio.jsx";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from '../context/auth_context.js';
import { GoogleButton } from 'react-google-button';

export default function UserInput () {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const { createUser } = UserAuth();

  const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    try {
      await createUser(
      requestData.email, requestData.password, requestData.name);
      alert ("User Created Successfully")
      } catch (error) {
      console.log(error);
      alert ("User creation failed");
    }
    console.log(requestData);
    console.log(responseData);
    navigate('/complete-registration');
   }

   return (
    <>
     <form action="POST" encType="multipart/form-data" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>
      <h1>JOIN US AS A COOK!</h1>

      <p>Already have an account? <Link to='/LogIn'>Log in</Link></p>

      {/*UserName input form*/}
      <InputTextRequired register={register} title='User Name' query_variable='user_name' type='text'/>

      {/*E-mail address */}
      <InputEmail register={register} />
      {/*Location - single choice*/}
      <InputRadio
        option_1='Oulu'
        option_2='Helsinki'
        option_3='Other cities'
        query_variable='service_location'
        register={register} />

      {/*Password*/}
      <InputPassword register={register} />

    <button type="submit">CREATE ACCOUNT</button>

    </form>
    <GoogleButton onClick ={handleGoogleSignUp}/>
    <div onClick={()=>{navigate('/')}}>Back Home</div>
    </>
   )
  }

