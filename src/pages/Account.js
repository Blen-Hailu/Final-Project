import React from 'react';
import { UserAuth } from '../context/AuthContext';
import './account.css';

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
    <h2>Welcome, {user?.displayName} </h2>
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
      <a href= 'http://localhost:3000/Register'>
      <button className='button-account'>Please build your profile by registering here</button>
      </a>
    </div>
    <div>
    <button onClick = {handleSignOut}>Logout</button>
    </div>
    </div>
  )
};