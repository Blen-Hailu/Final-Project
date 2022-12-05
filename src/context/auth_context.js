import {useContext, createContext, useEffect}from 'react';
import {
   createUserWithEmailAndPassword,
   sinInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithRedirect,
   signOut,
   onAuthStateChanged
  } from 'firebase/auth';
import { auth } from '../FirebaseConfig.js';
import { useState } from 'react';

const UserContext = createContext();
const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email,password)
  }

  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup (auth, provider)
    signInWithRedirect(auth, provider);
  };
  const logOut = () =>{
    signOut(auth)
  }
  useEffect(()=>{

    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      console.log ('User', currentUser)
    });
    return()=> {
      unSubscribe();
    };
       // eslint-disable-next-line
  },[]);

  return (
  <AuthContext.Provider value ={{googleSignIn, logOut, createUser, user}}>
    {children}
  </AuthContext.Provider>
  )
}
export const UserAuth =() =>{
  return
    useContext(AuthContext);
    useContext(UserContext);
}

