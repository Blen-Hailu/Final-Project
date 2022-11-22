import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";

export default function UserInput ({ 
  location, imgUpload, Q, 
  place_1, place_2, place_3, 
  option_1, option_2, option_3 }) 
{
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = async () => {
    const data = await addCooks();
    console.log(data);
  }; 
   return (
     <form action="POST" enctype="multipart/form-data" 
      onSubmit={handleSubmit(onSubmit)}>

      {/*First Name input form*/} 
      <label>First Name
        <input {...register("firstName", 
         {required: true, 
          maxLength: 20, 
          message: 'Required field',
         })} 
        />
        </label>

      {/*Sur Name input form*/} 
      <label>Surname
       <input {...register("surName", 
         {required: true, 
         maxLength: 20,
         message: 'Required field',
         })} 
        />
        </label>

      {/*Birthday input form - age check */} 
      <label>Date of Birth
      <input />{/*Ask birth year? day? and validation for undaerage*/}
      </label>
  
      {/*E-mail address */} 
      <label>E-mail
        <input {...register("email", 
        {pattern: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/})
        }/>
      </label>
      
      {/*Phone number - validation */} 
      <label>Phone Number
       <input type="tel" {...register("phone")} />
      </label>

     {/*Location - multiple choice*/} 
      <label>{location}</label>
        <input 
         type="radio" 
         value={place_1}
         name={location} 
         /> 
        <input 
         type="radio" 
         value={place_2}
         name={location}
         /> 
        <input 
         type="radio" 
         value={place_3}
         name={location}
        /> 

      {/*image upload*/} 
      <label>{imgUpload}
        <input type="file" accept = "image/png, image/jpeg,.pdf" /> 
      </label>
     
      {/*Multiple choice questions*/} 
      <label>{Q}
        <select {...register(Q)}>
          <option value={option_1}>{option_1}</option>
          <option value={option_2}>{option_2}</option>
          <option value={option_2}>{option_3}</option>
        </select>
      </label>

      {/*Phone number - validation */} 
      <label>
       <input type="tel" {...register("phone")} />
      </label>
      
       {/*Submit button*/} 
      <input type="submit">Submit</input>
      
    </form>
  );
}