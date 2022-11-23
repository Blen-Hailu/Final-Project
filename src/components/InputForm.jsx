import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputEmail } from "./InputEmail.jsx";
import { InputName } from "./InputName.jsx";
import { InputRadio } from "./InputRadio.jsx";

export default function UserInput () {
  const { handleSubmit } = useForm();
  const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    console.log(responseData); 
   }

   return (
     <form action="POST" encType="multipart/form-data" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>

      {/*UserName input form*/} 
      <InputName title='User Name'/>
     
      {/*E-mail address */} 
      <InputEmail />

      {/*Location - single choice*/} 
      <InputRadio 
        place_1='Oulu' 
        place_2='Helsinki'
        place_3='Other cities'/>
    
       {/*Submit button*/} 
      <button type="submit" value="Submit">SIGN UP</button>      
    </form>
  );
 }
