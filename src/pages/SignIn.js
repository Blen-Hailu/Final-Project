import GoogleButton from 'react-google-button';
import {UserAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export function SignIn(){
  const {googleSignIn, user} = UserAuth();
  const navigate= useNavigate()


const handleGoogleSignIn = async () => {
  try {
    await googleSignIn();
  }catch (error){
    console.log(error)
  }
  };

useEffect (()=>{
  if(user != null){
    navigate('/account')
  }  
  // eslint-disable-next-line
},[user])


  return(
    <div className='signin'>
          <h1 className='text-center text=3xl font-bold py-8'> Sign In </h1>
          <div className='max-w-[240px] m-auto py-4'>
            <GoogleButton onClick ={handleGoogleSignIn}/>
          </div>
        <div>
         <h3>What you need to do before you start</h3>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
         <h3>Frequently Asked Questions</h3>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
   
         </div>
  </div>
  )
};