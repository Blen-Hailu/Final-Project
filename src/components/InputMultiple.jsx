import React from "react";
  {/*WIP--- Multiple choice questions*/} 
export const InputRadio =(props) => { 
  const RadioOptions = () => {
    //data
    const items = [{place_1},{place_2},{place_3}];
    //useState
    const [value, setValue] = useState({place_1});
    //update
    const handleChange = (e) => {
      setValue(e.target.value);
    };

  return (
      <>
 {/*Multiple choice questions*/} 
 <legend>{Q}</legend>
        <fieldset {...register(Q)}>
          <input type="checkbox" value={option_1}>{option_1}</input>
          <input type="checkbox" value={option_2}>{option_2}</input>
          <input type="checkbox" value={option_3}>{option_3}</input>
        </fieldset>
  


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
}