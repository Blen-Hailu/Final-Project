import React from "react";
import { useForm } from "react-hook-form";

export default function UserInput (props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form action="POST" enctype="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>

       {/*First Name input form*/} 
      <label for="firstName">First Name</label>
      <input {...register("firstName", 
       {required: true, 
        maxLength: 20, 
        message: 'Required field',
        })} />

       {/*Sur Name input form*/} 
      <label for="surName">Surname</label>
      <input {...register("surName", 
       {required: true, 
        maxLength: 20,
        message: 'Required field',
        })} />

      <label htmlFor="surName">Surname</label>
      <input ></input> {/*Ask birth year? day? and validation for undaerage*/}

      <label htmlFor={props.location}>{props.location}</label>
      <input >{/*multiple choice*/}</input> 

      <label htmlFor="email">E-mail</label>
      <input {...register("email", {pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/})} />

      <label htmlFor="tel">Phone Number</label>
      <input type="tel" {...register("phone")} />

      <label htmlFor={props.imgUpload}>{props.imgUpload}</label>
      <input type="file" accept = "image/png, image/jpeg,.pdf" /> 

      <label htmlFor="wishes">{props.Q}</label>
      <select {...register("wishes")}>
        <option value={props.option_1}>{props.option_1}</option>
        <option value={props.option_2}>{props.option_2}</option>
        <option value={props.option_2}>{props.option_3}</option>
      </select>
      <input type="submit" />
    </form>
  );
}