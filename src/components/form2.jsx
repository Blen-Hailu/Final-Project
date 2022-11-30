import React from 'react';
import { useForm } from 'react-hook-form';
import { userRegistration } from '../insert-data';

export default function FreelancerRegsitrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (requestData) => {
    const response = await userRegistration (requestData);  
  
    console.log(response);
    console.log(errors);
  };
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, max: 10, min: 2, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {})} />
      <input type="text" placeholder="Street Address" {...register("Street Address", {})} />
      <input type="number" placeholder="Zipcode" {...register("Zipcode", {})} />
      <input type="text" placeholder="City" {...register("City", {required: true})} />
      <input type="text" placeholder="Country" {...register("Country", {})} />
      <input type="text" placeholder="Service Type " {...register("Service Type ", {required: true, min: 3, maxLength: 100})} />
      <input type="text" placeholder="password" {...register("password", {required:true, min: 8, maxLength: 16, pattern: / (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}/i})} />
      <input type="text" placeholder="Confirm Password " {...register("Confirm Password ", {required:true, min: 8, maxLength: 16, pattern: / (?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}/i})} />
      <input type="checkbox" placeholder="You must agree to our terms and conditions." {...register("You must agree to our terms and conditions.", {required: true})} />

      {errors.email &&<span>Invalid Email</span>}
      <input type="submit" />
    </form>
  );
}