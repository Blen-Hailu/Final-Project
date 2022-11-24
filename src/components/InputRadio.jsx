import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";

export const InputRadio =({option_1, option_2, option_3, query_variable }) => { 
    const { register } = useForm();
    //data
    const items = [option_1,option_2,option_3];
    //useState
    const [value, setValue] = useState(option_1);
    //update
    const handleChange = (e) => {
      setValue(e.target.value);
    };

  return (
      <>
       {items.map((item) => {
          return (
            <div key={item}>
              <input
               {...register(`${query_variable}`)}
                id={item}
                type="radio"
                value={item}
                onChange={handleChange}
                checked={item === value}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
      </>
    )
   }
