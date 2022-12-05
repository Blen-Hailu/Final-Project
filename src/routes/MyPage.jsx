import React from "react";
import { UserAuth } from '../context/auth_context.js';
import CompleteRegistration from "./CompleteRegistration.jsx";

const MyPage = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
     await logOut()
   } catch (error) {
     console.log(error)
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