import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import * as fs from 'fs';

export const ImageUpload = ({ label, }) => {
  const [img, setImg] = useState('');


  const handleImgChange = async (file) => {
    const fs = require('fs');
    const bitmap =
      fs.readFileSync(file);
      return new
      Buffer.from(bitmap).toString('base64');
    }

    setImg(handleImgChange(img));
    console.log(img);

return(
    <label>
    <input type="file" accept = "image/png, image/jpeg" />
   </label>
  )
}


