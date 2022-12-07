import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from '../context/auth_context.js';

const Login = () => {
  const {signIn, user, setLoggedIn} = UserAuth();
  const navigate= useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      setLoggedIn(true);
      } catch (e) {
      console.log(e.message);
    }
    console.log(signIn);

  };

  //  const handleGoogleSignIn = async () => {
  //   try {
  //     await googleSignIn();
  //     navigate('/MyPage');
  //   } catch (error){
  //     console.log(error)
  //   }
  //   };

    useEffect (()=>{
      if(user != null) {
        navigate('/MyPage')
      }
      // eslint-disable-next-line
    },[user])


  return (
    <div className="wrapper">
      <h1>Login</h1>
      <p>Not signed up yet? <Link to='/JoinUs'>Sign up here</Link></p>
      <form className="form" onSubmit={e => handleForm(e)}>
       <label>Email:
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="email"
          />
        </label>

        <label>Password:
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            value={password}
            type="password"
            placeholder="password"
          />
        </label>
        <button className="btn" type="submit">Login</button>
        </form>
        <hr />
        {/* <button className="googleBtn" type="button" onClick={handleGoogleSignIn}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button> */}
        <span>{error}</span>

    </div>
  );
};

export default Login;
