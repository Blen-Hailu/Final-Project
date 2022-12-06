import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import { handleValidate } from "./Controller";

export const PhoneNumberInput = ({ register, query_variable }) => {
  const { control, formState: {errors} } = useForm();
 return (
  <>
    <label htmlFor="phone-input">Phone Number</label>
           <Controller
           name="phone-input"
           control={control}
           rules={{
            validate: (value) => handleValidate(value)
          }}
           render={({ field: { onChange, value } }) => (
            <PhoneInput
            {...register(`${query_variable}`)}
            value={value}
            onChange={onChange}
            defaultCountry="FI"
            id="phone-input"
            />
           )}
        />
        {errors["phone-input"] && (
              <p className="error-message">Invalid Phone</p>
            )}
  </>
 )

}