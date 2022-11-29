import React from 'react';
import { NavLink } from "react-router-dom";

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
   },
   {'id': 5,
   'uri': '/LogIn',
   'name': 'Log In',
  }
  ]

  return(
    <>
      <nav>
         {navMenu.map((menu) => {
          return (
          <div key={menu.id}>
           <NavLink to={menu.uri} activeClassName="active" end>{menu.name}</NavLink>
          </div>
          )
          }
         )}

      </nav>
   </>
  )
};