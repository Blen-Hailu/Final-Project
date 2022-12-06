import React, { useState } from "react";
import { useForm } from 'react-hook-form';


export const ImageUpload = ({ label, register, query_variable, onSubmit }) => {
  const [img, setImgs] = useState('');

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setImgs(base64);
  };
  return (
      <>
          <label>{label}</label>
          <input
          type="file"
          name={label}
          id={label}
          accept='.jpeg, .jpg, .png'
          {...register(`${query_variable}`)}
          onChange={handleFileUpload}
          />
      </>

  );
}