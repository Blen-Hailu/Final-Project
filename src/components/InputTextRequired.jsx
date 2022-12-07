import React from "react";
import { useForm } from 'react-hook-form';


export const InputTextRequired =({title, query_variable, register, type }) => {
  const { formState: {errors} } = useForm();
  const onChange = (data) => console.log(data);
   return (
      <>
       <label>{title}
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
         </label>
          {errors?.name && errors.name.message}
      </>
  )};