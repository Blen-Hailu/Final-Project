import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import CompleteRegistration from "./CompleteRegistration.jsx";
import { Navigate, useNavigate } from "react-router-dom";

const MyPage = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  }

  return (
    <>
    {!loading && (
      <>
      {!user ? (
        <Navigate to={`/login/`} />
      ) : (
      <> 
      <h1>My Page</h1>
      <p>{user?.email}</p>
      <CompleteRegistration />
      <button onClick={logout}>Log Out</button>
    </> 
  )};
</> 
)};
</>
);
};

export default MyPage;