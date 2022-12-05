import React from "react";
import { useForm } from 'react-hook-form';


export const InputEmail =({ register }) => {
   const { formState: {errors} } = useForm();
   return (
      <>
      <label>E-mail</label>
        <input
        {...register("email",
        {pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
         required: "Email Address is required"})
         }
        id="E-mail"
        placeholder="e-mail address"
        />
        {errors.email && <span>Invalid Email</span>}
      </>
   )};

