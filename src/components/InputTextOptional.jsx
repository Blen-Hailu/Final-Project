import React from "react";


export const InputTextOptional =({title, query_variable, register }) => { 
  const onChange = (data) => console.log(data); 
   return (
      <>
       <label>{title}</label>
         <input 
         {...register(`${query_variable}`, 
          {required: false, 
           maxLength: 20, 
           message: 'Required field',
           mode: onChange
          })}
          id={title} 
          placeholder={title} 
         />
      </>
  )};