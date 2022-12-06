import React from "react";

export const InputMultiple =({title, option_1,option_2,option_3, register, query_variables}) => {
    //data
    const items = [option_1,option_2,option_3];
  return (
    <>
       <fieldset>
        <legend>{title}</legend>
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