import React from "react";
import { useForm } from "react-hook-form";

export const InputName =({title}) => { 
  const { register } = useForm();
  const onChange = (data) => console.log(data); 
   return (
      <>
       <label>{title}</label>
         <input id={title}
         {...register("{title}", 
          {required: true, 
           maxLength: 20, 
           message: 'Required field',
           mode: onChange
          })} 
         />
      </>
  )};