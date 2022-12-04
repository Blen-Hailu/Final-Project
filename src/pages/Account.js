import React from 'react';
import { UserAuth } from '../context/AuthContext';


export function Account () {
  const {logOut, user} = UserAuth();
  const handleSignOut = async () =>{
    try{
      await logOut()
    }catch(error){
    console.log(error)
  }
}
  return (
    <>
  <div>
    <p>Welcome, {user?.displayName} </p>
  </div>
    <div>
    <button onClick = {handleSignOut}>Logout</button>
    </div>
    </>
  )
};