import {useContext, createContext, useEffect}from 'react';
import { 
   GoogleAuthProvider, 
   signInWithPopup,
   signInWithRedirect,
   signOut, 
   onAuthStateChanged  
  } from 'firebase/auth';
import{auth} from '../Firebase';
import {useState } from 'react';



const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider =new GoogleAuthProvider();
    //signInWithPopup (auth, provider)
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
  <AuthContext.Provider value ={{googleSignIn, logOut, user}}>
    {children}
  </AuthContext.Provider>
  )
}
export const UserAuth =() =>{
  return useContext(AuthContext)
}