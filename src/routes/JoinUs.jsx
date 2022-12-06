import React, { useState, useEffect } from "react";
import { UserAuth } from '../context/auth_context.js';
import { useNavigate, Link } from "react-router-dom";
import GDPRConsent from "../components/GDPRConsent.jsx";


const JoinUs = () => {
  const {createUser, setLoggedIn, user} = UserAuth();
  const navigate= useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      setLoggedIn(true);
      alert ("User Created Successfully")
      } catch (e) {
      console.log(e.message);
      alert ("User creation failed");
    }
    console.log(createUser);
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //     navigate('/MyPage');
  //   } catch (error){
  //     console.log(error)
  //   }
  //   };

    useEffect (() => {
      if(user != null) {
      navigate('/MyPage')
      }
      //eslint-disable-next-line
    }, [user])

  return (
    <div>
      <h1>Join</h1>
      <p>Already have an account? <Link to='/LogIn'>Log in</Link></p>
      <form onSubmit={e => handleForm(e)}>
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
           <button type="submit">Sign Up</button>
        </form>
        <hr />
        {/* <button className="googleBtn" type="button" onClick={handleGoogleSignIn}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Sign Up With Google
        </button> */}
        <GDPRConsent />
        <span>{error}</span>

    </div>
  );
};

export default JoinUs;