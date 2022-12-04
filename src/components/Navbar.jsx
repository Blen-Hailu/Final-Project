import { NavLink } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from "react";

function Navbar(){

  const navRef = useRef();
  const showNavbar =() =>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (

  <header>
    <h2>Kotibet Home Services</h2>
    <nav ref ={navRef}>
      <ul>
        <li>
          <NavLink to= "/">Home</NavLink>
        </li>
        <li>
          <NavLink to= "/AboutUs"> About Us</NavLink>
        </li>
        <li>
        <NavLink to= "/Services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Join as a Freelancer</NavLink>
        </li>
        <li>
          <NavLink to= "/LogIn ">Log In </NavLink>
        </li>
      </ul>
      <button className='nav-btn nav-close-btn'onClick ={showNavbar}>
          <FaTimes />
      </button>
    </nav>
    <button className='nav-btn' onClick ={showNavbar}>
      <FaBars />
    </button>
  </header>

)
}


export default Navbar