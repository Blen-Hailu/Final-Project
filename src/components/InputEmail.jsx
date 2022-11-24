import React from "react";

export const InputEmail =({ register }) => { 

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
      </>
   )};

