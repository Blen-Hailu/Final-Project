import React from "react";
import { useForm } from "react-hook-form";

export const InputEmail =() => { 
  const { register, formState: { errors } } = useForm();

   return (
      <>
      <label>E-mail</label>
        <input {...register("email", 
        {pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
         required: "Email Address is required"})} 
        aria-invalid={errors.mail ? "true" : "false"}/>
       {errors.email && <div>{errors.email.message}</div>}
      </>
   )};

