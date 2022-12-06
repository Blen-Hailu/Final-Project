import React from "react";
import { useForm } from 'react-hook-form';


export const InputTextArea =({title, query_variable, register, max }) => {
  const { formState: {errors} } = useForm();
  const onChange = (data) => console.log(data);
   return (
      <>
       <label>{title}</label>
         <textarea
         {...register(`${query_variable}`,
          {required: true,
           maxLength: {max},
           message: 'Required field',
           mode: onChange
          })}
          id={title}
          placeholder={title}
         />
          {errors?.name && errors.name.message}
      </>
  )};