import React from "react";
import { useState } from 'react';

export const InputRadio =({place_1, place_2, place_3}) => { 
    //data
    const items = [place_1,place_2,place_3];
    //useState
    const [value, setValue] = useState(place_1);
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
