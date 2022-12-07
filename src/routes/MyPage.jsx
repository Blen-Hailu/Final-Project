import React from "react";
import { UserAuth } from '../context/auth_context.js';
import { useNavigate } from "react-router-dom";
import CompleteRegistration from "./CompleteRegistration.jsx";

const MyPage = () => {
  const { user, logOut } = UserAuth();
  const  navigate  = useNavigate();
  const handleSignOut = async () => {
    try {
     await logOut()
     navigate('/')
   } catch (e) {
     console.log(e.message)
   }
  }
  return (
    <div className="wrapper">
      <h1>My Page</h1>
       <p>Welcome, {user?.displayName}</p>
        <p>Complete your application as Zestii cook here.</p>
       <button className='btn' onClick={handleSignOut}>Log Out</button>
      <CompleteRegistration />
    </div>
)
};

export default MyPage;