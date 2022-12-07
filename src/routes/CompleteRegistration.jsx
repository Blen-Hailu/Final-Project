import React from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { InputTextOptional } from "../components/InputTextOptional.jsx";
// import { InputMultiple } from "../components/InputMultiple.jsx";
import { InputTextArea } from "../components/InputTextArea.jsx";
// import { ImageUpload } from "../components/ImageUpload";
import { PhoneNumberInput } from "../components/InputPhone.jsx";
import { InputRadio } from "../components/InputRadio.jsx";


export default function CompleteRegistration () {
  const { handleSubmit, register } = useForm();

   const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    console.log(requestData);
    console.log(responseData);
   }
      return (
      <div className="wrapper">
        <form className="form" action="POST" encType="multipart/form-data" autoComplete="on"
          onSubmit={handleSubmit(onSubmit)}>
          {/*Nick name*/}
          <InputTextRequired register={register} title='Nick Name' query_variable='nick_name' type='text'/>
          {/*First name*/}
          <InputTextRequired register={register} title='First name' query_variable='first_name' type='text'/>
          {/*Sur name*/}
          <InputTextRequired register={register} title='Sur name' query_variable='sur_name' type='text'/>

          {/*ad_1_street*/}
          <InputTextRequired register={register} title='StreetAddress' query_variable='ad_1_street' type='text'/>
          {/*ad_2_apt optional */}
          <InputTextOptional register={register} title='Room, Apt, Suite etc' query_variable='ad_2_apt' type='text'/>
          {/*ad_3_city*/}
          <InputTextRequired register={register} title='City' query_variable='ad_3_city' type='text'/>
          {/*ad_4_postcode*/}
          <InputTextRequired register={register} title='Postal Code' query_variable='ad_4_postcode' type='text'/>
          {/*ad_5_country -- maybe dropdown list? */}
          <InputTextRequired register={register} title='Country' query_variable='ad_5_country' type='text'/>
          {/*phone number*/}
          <PhoneNumberInput register={register} query_variable='phone_number' type='tel'/>

          {/*Hygienipassi*/}
          <InputTextRequired register={register} title='Hygienipassi certificate number' query_variable='hygienipassi' type='text'/>
          {/*Alcoholpassi*/}
          <InputTextOptional register={register} title='Alcoholpassi certificate number' query_variable='alcoholpassi' type='text'/>

          {/*activities*/}
          <InputRadio register={register} Q={'What kind of activity are you interested in as a cook?'} option_1='Pop Up Events' option_2='Catering Cook' option_3='Workshop Instructor' query_variable='activities' type='radio'/>

          {/*Bio*/}
          <InputTextArea register={register} title='Tell us about your self!' query_variable='bio' max={300} type='text' />
          {/* Profile image upload
          <ImageUpload register={register} query_variable='profile_picture' /> */}

          {/*Signature dish Text*/}
          <InputTextArea register={register} title='Tell us about your signature dish!' query_variable='signature_dishes' max={300} type='text' />
          {/* Signature dish image upload
          <ImageUpload register={register} query_variable='signature_dishes_picture' /> */}

          {/*Submit button*/}
          <button className='btn' type="submit">SUBMIT</button>
     </form>
    </div>

  );
 }
