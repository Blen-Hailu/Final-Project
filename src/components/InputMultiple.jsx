import React from "react";
import { useState } from 'react';

export const InputMultiple =({title, option_1,option_2,option_3, register, query_variables}) => { 
    //data
    const items = [{option_1},{option_2},{option_3}];
    //useState
    const [value, setValue] = useState("");
    //update
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  return (
    <> 
       <fieldset> 
         <legend>{title}</legend>
            {items.map((item) => {
              return (
                <label key={item}>
                  <input
                    {...register(`${query_variables}`)}
                    id={item}
                    type="checkbox"
                    value={item}
                    onChange={handleChange}
                    checked={item === value}
                  />
                </label>
              )
            }
           )
          }
         </fieldset>
      </>
    )
}