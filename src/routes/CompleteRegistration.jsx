import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { InputTextOptional } from "../components/InputTextOptional.jsx";
import { InputMultiple } from "../components/InputMultiple.jsx";

export default function CompleteRegistration () {
  const { handleSubmit, register } = useForm();
   const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    console.log(requestData); 
    console.log(responseData); 
   }
   return (
     <form action="POST" encType="multipart/form-data" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>

      {/*Nick name*/} 
      <InputTextRequired register={register} title='Nick Name' query_variable='user_name'/>
      {/*First name*/} 
      <InputTextRequired register={register} title='First name' query_variable='user_name'/>
      {/*Sur name*/} 
      <InputTextRequired register={register} title='Sur name' query_variable='user_name'/>
     
     {/*ad_1_street*/} 
     <InputTextRequired register={register} title='StreetAddress' query_variable='user_name'/>
     {/*ad_2_apt optional */} 
     <InputTextOptional register={register} title='Room, Apt, Suite etc' query_variable='user_name'/>
     {/*ad_3_city*/} 
     <InputTextRequired register={register} title='City' query_variable='user_name'/>
     {/*ad_4_postcode*/} 
     <InputTextRequired register={register} title='Postal Code' query_variable='user_name'/>
     {/*ad_5_country -- maybe dropdown list? */} 
     <InputTextRequired register={register} title='Country' query_variable='user_name'/>  

     {/*activities*/} 
     <InputMultiple register={register}  query_variable='user_name' />
    
     {/*phone number*/}
     {/*bio text area*/}
     {/*phone number*/}

       {/*Submit button*/} 
      <button type="submit">SUBMIT</button>  
      
       {/*Skip for now and ridirect to members page -- logged in*/} 
    </form>


  );
 }
