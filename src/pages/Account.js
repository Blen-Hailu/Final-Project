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
         <h3>What you need to do before you start</h3>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
         <h3>Frequently Asked Questions</h3>
         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>

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