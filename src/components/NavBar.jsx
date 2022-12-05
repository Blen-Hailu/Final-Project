import React from 'react';
import { NavLink } from "react-router-dom";
import { UserAuth } from '../context/auth_context.js'

export default function NavBar () {
  const navMenu = [
    {'id': 1,
      'uri': '/',
      'name': 'Home',
    },
    {'id': 2,
      'uri': '/AboutUs',
      'name': 'About Us',
   },
   {'id': 3,
     'uri': '/Catering',
     'name': 'Catering',
    },
  {'id': 4,
     'uri': '/SignUp',
     'name': 'Sign Up',
 }
]

   const { user, logOut } = UserAuth();
   const handleSignOut = async () => {
     try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
   }

  return(
    <>
      <nav>
         {navMenu.map((menu) => {
          return(
          <div key={menu.id}>
           <NavLink to={menu.uri} end>{menu.name}</NavLink>
          </div>
          )
          }
         )}

         {user?.displayName ?(
         <button onClick={handleSignOut}>Logout</button> ) : ( <NavLink to='/LogIn'>Log In</NavLink> )}
      </nav>
   </>
  )
};