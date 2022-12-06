import React from "react";
import { useForm } from "react-hook-form";
import { updateCooks } from "../query.js";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { InputTextOptional } from "../components/InputTextOptional.jsx";
import { InputMultiple } from "../components/InputMultiple.jsx";
import { ImageUpload } from "../components/ImageUpload";

export default function CompleteRegistration () {
  const { handleSubmit, register } = useForm();
   const onSubmit = async (requestData) => {
    const responseData = await updateCooks(requestData);
    console.log(requestData);
    console.log(responseData);
   }
      return (
        <form action="POST" encType="multipart/form-data" autoComplete="on"
          onSubmit={handleSubmit(onSubmit)}>
          {/*Nick name*/}
          <InputTextRequired register={register} title='Nick Name' query_variable='user_name' type='text'/>
          {/*First name*/}
          <InputTextRequired register={register} title='First name' query_variable='user_name' type='text'/>
          {/*Sur name*/}
          <InputTextRequired register={register} title='Sur name' query_variable='user_name'  type='text'/>

          {/*ad_1_street*/}
          <InputTextRequired register={register} title='StreetAddress' query_variable='user_name' type='text'/>
          {/*ad_2_apt optional */}
          <InputTextOptional register={register} title='Room, Apt, Suite etc' query_variable='user_name'  type='text'/>
          {/*ad_3_city*/}
          <InputTextRequired register={register} title='City' query_variable='user_name'  type='text'/>
          {/*ad_4_postcode*/}
          <InputTextRequired register={register} title='Postal Code' query_variable='user_name'  type='text'/>
          {/*ad_5_country -- maybe dropdown list? */}
          <InputTextRequired register={register} title='Country' query_variable='user_name'  type='text'/>

          {/*activities*/}
          <InputMultiple register={register} option_1='Pop Up' option_2='Catering' option_3='Workshop' query_variable='user_name' />

        {/*phone number*/}
        {/*bio text area*/}
        {/*image upload*/}
        <ImageUpload />
          {/*Submit button*/}
          <button type="submit">SUBMIT</button>
    </form>


  );
 }
