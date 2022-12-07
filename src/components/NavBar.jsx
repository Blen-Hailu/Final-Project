import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { UserAuth } from '../context/auth_context.js'
import './css/NavBar.css';
import './css/UtilityClasses.css';

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
     'uri': '/JoinUs',
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
    <div className="nav">
      <div className="float-left">
        <Link to="/">
         <img src={require('../images/header-logo.png')} alt="Zestii Kitchens main logo"/>
        </Link>
      </div>

      <nav className="main-navigation">
        {navMenu.map((menu) => {
          return(
            <div className="nav-item" key={menu.id}>
            <NavLink to={menu.uri} end>{menu.name}</NavLink>
            </div>
           )}
          )}
      </nav>

      <div className="btn">
         {user?.displayName ? (
          <button onClick={handleSignOut}>Logout</button> ) : (
          <NavLink to='/LogIn'>Login</NavLink>
         )}
      </div>

    </div>
   </>
  )
};