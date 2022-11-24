import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputEmail } from "./InputEmail.jsx";
import { InputName } from "./InputName.jsx";
import { InputRadio } from "./InputRadio.jsx";

export default function UserInput () {
  const { handleSubmit, register } = useForm();
  const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    console.log(requestData); 
    console.log(responseData); 
   }

   return (
     <form action="POST" encType="multipart/form-data" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>

      {/*UserName input form*/} 
      <InputName register={register} title='User Name' query_variable='user_name'/>
     
      {/*E-mail address */} 
      <InputEmail register={register}  />

      {/*Location - single choice*/} 
      <InputRadio 
        option_1='Oulu' 
        option_2='Helsinki'
        option_3='Other cities'
        query_variable='service_location'
        register={register} />
    
       {/*Submit button*/} 
      <button type="submit">SIGN UP</button>  
  
    </form>
  


  );
 }
