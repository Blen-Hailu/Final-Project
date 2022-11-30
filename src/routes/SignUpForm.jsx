import React,  { useEffect, useState }  from "react";
import { useForm } from "react-hook-form";
import { addCooks } from "../query.js";
import { InputEmail } from "../components/InputEmail.jsx";
import { InputTextRequired } from "../components/InputTextRequired.jsx";
import { InputPassword } from "../components/InputPassword.jsx";
import { InputRadio } from "../components/InputRadio.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";

export default function UserInput () {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  
  const onSubmit = async (requestData) => {
    const responseData = await addCooks(requestData);
    try {
      await createUserWithEmailAndPassword(
      auth, requestData.email, requestData.password, requestData.name);
      alert ("User Created Successfully")
      } catch (error) {
      console.log(error);
      alert ("User creation failed");
    }
    console.log(requestData); 
    console.log(responseData);
    navigate('/complete-registration');
   }

   const [user, setUser] = useState("");
   useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

   return (
    <>
    {user ? (
       <Navigate to='/MyPage'/>) : (
     <>   
     <form action="POST" encType="multipart/form-data" autoComplete="on"
      onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      {/*UserName input form*/} 
      <InputTextRequired register={register} title='User Name' query_variable='user_name' type='text'/>
     
      {/*E-mail address */} 
      <InputEmail register={register} />
      {/*Location - single choice*/} 
      <InputRadio 
        option_1='Oulu' 
        option_2='Helsinki'
        option_3='Other cities'
        query_variable='service_location'
        register={register} />
    
      {/*Password*/}
      <InputPassword register={register} />
    
    <button type="submit">CREATE ACCOUNT</button>
    </form>

    <div onClick={()=>{navigate('/')}}>Back Home</div>
    </>  
    )}
  </>
  )
 }
