import React from "react";
import { useForm } from "react-hook-form";

export const InputName =({title, query_variable }) => { 
  const { register } = useForm();
  const onChange = (data) => console.log(data); 
   return (
      <>
       <label>{title}</label>
         <input 
         {...register(`${query_variable}`, 
          {required: true, 
           maxLength: 20, 
           message: 'Required field',
           mode: onChange
          })}
          id={title} 
          placeholder={title} 
         />
      </>
  )};