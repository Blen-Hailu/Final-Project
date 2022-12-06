import React from "react";
import { useForm } from 'react-hook-form';

export const InputMultiple =({Q, option_1,option_2,option_3, register, query_variable}) => {
    const { formState: {errors} } = useForm();
    //data
    const items = [option_1,option_2,option_3];
    // const query_variables = items.join(";");
  return (
    <>
       <fieldset>
        <legend>{Q}</legend>
        {items.map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              value={item}
              {...register(`${query_variable}`)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
        </fieldset>
      </>
    )
}