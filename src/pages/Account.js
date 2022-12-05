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
    <div className="account">
  <div>
    <p>Welcome, {user?.displayName} </p>
  </div>
    <div className='side-div'>
      <ul>
        <li>Profile</li>
        <li>Transactions</li>
        <li>Calendar</li>
        <li>Messages</li>

      </ul>
    </div>
    <div>
    <button onClick = {handleSignOut}>Logout</button>
    </div>
    </div>
  )
};