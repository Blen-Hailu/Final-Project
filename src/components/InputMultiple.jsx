import React from "react";
import { useForm } from 'react-hook-form';

export const InputMultiple =({Q, option_1,option_2,option_3, register, query_variables}) => {
    const { formState: {errors} } = useForm();
    //data
    const items = [option_1,option_2,option_3];
  return (
    <>
       <fieldset>
        <legend>{Q}</legend>
        {items.map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              value={item}
              {...register(`${query_variables}`)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
        </fieldset>
      </>
    )
}