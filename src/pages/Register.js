import React from 'react';
import RegistrationForm from '../components/form';
//import {useNavigate} from 'react-router-dom';

export function Register(){
  /*const navigate= useNavigate();
 const handleClick= ()=>{
    navigate('/Home')
  }*/
  return(
    <div className='register'>
    <div>
        <RegistrationForm/>
    </div>
    
  
    </div>
  

  )
};
/*<div>
<button onClick ={handleClick}>Back to Home page</button>
</div>*/