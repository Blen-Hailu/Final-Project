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
    <>
      <h1>My Page</h1>
      <p>Welcome, {user?.displayName}</p>
      <CompleteRegistration />
      <button onClick={handleSignOut}>Log Out</button>
    </>
)
};

export default MyPage;