import React from "react";


export const InputTextRequired =({title, query_variable, register, type }) => { 
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
          type={type}
          id={title} 
          placeholder={title} 
         />
      </>
  )};