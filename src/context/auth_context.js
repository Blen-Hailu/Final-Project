import {useContext, createContext, useEffect} from 'react';
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithRedirect,
   signOut,
   onAuthStateChanged
  } from 'firebase/auth';
import { auth } from '../FirebaseConfig.js';
import { useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
  const [user, setUser] = useState({});

  const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup (auth, provider)
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth)
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      console.log ('user', currentUser)
    });
    return () => {
      unSubscribe();
    };
    // eslint-disable-next-line
  },[]);

  return (
  <AuthContext.Provider value ={{googleSignIn, logOut, createUser, signIn, user}}>
    {children}
  </AuthContext.Provider>
  )
}
export const UserAuth =() => {
  return (
    useContext(AuthContext)
  )
};

