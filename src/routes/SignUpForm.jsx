import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { InputRadio } from "../components/InputRadio.jsx";
import { useNavigate } from "react-router-dom";

export default function UserInput () {
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();
   const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    console.log(requestData); 
    console.log(responseData);
    navigate('/complete-registration');
    
   }

   return (
    <>
    {/*redirected from initial signn-up page as popup window, with skip button to close*/} 
     <form action="POST" encType="multipart/form-data" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>

      {/*UserName input form*/} 
      <InputTextRequired register={register} title='User Name' query_variable='user_name'/>
     
      {/*E-mail address */} 
      <InputEmail register={register}  />

      {/*Location - single choice*/} 
      <InputRadio 
        option_1='Oulu' 
        option_2='Helsinki'
        option_3='Other cities'
        query_variable='service_location'
        register={register} />

    {/*Onclick -> confirmation e-mail*/}
    {/*Onclick -> Submission success menu*/}

       {/*Submit button*/} 
      <button type="submit">SIGN UP</button>
      
    </form>
  
    <div onClick={()=>{navigate('/Home')}}>Back Home</div>
    </>

  );
 }
