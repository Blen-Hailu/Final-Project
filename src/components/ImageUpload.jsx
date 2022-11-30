import React, { useState } from "react";

export const ImageUpload = () => {
  const [img, setImg] = useState('');
  const handleImgChange = async (event) => {
    const fileContent = encodeURIComponent (await event.target.files[0].text());
    setImg(fileContent);
    console.log(fileContent);
  }

return(
    <label>
    <input type="file" accept = "image/png, image/jpeg,.pdf" /> 
  </label>
  )
}


