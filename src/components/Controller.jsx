import  { isValidPhoneNumber } from "react-phone-number-input";

export const handleValidate = (value) => {
  const isValid = isValidPhoneNumber(value);
  console.log({ isValid })
  return isValid
}

