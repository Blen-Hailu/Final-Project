import React from 'react';
import RegistrationForm from '../components/form';
import {useNavigate} from 'react-router-dom';

export function Register(){
  const navigate= useNavigate();
  return(
    <>
        <h1> Regsiter as a Freelancer</h1>

    <div>
        <RegistrationForm/>
    </div>
    <div        onClick={()=> navigate('/')}> Back to Home Page 
    </div>
    </>


  )
};