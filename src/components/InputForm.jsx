import React from "react";
import { useForm } from "react-hook-form";

export default function UserInput (props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form action="POST" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
      <label for="firstName">First Name</label>
      <input {...register("firstName", {required: true, maxLength: 20 })} />

      <label for="surName">Surname</label>
      <input {...register("surName", {required: true, maxLength: 20 })} />

      <label for="surName">Surname</label>
      <input ></input> {/*Ask birth year? day? and validation for undaerage*/}

      <label for="address">Address</label>
      <input ></input> {/*Address*/}

      <label for="email">E-mail</label>
      <input {...register("email", {pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/})} />

      <label for="tel">Phone Number</label>
      <input type="tel" {...register("phone")} />

      <label for="surName">Your Hygienipassi Card</label>
      <input type="file" accept = "image/png, image/jpeg,.pdf" /> 

      <label for="wishes">What is your experience and wishes?</label>
      <select {...register("wishes")}>
        <option value="experienced">{props.option_1}</option>
        <option value="pro-to-be">{props.option_2}</option>
        <option value="apprenticeship">{props.option_3}</option>
      </select>
      <input type="submit" />
    </form>
  );
}