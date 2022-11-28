import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar ({menu_1,menu_2, menu_3, menu_4, menu_5}) {
  const navMenu = [menu_1, menu_2, menu_3, menu_4, menu_5]

  return(
    <>
      <nav>
         {navMenu.map((menu, index) => {
          return (
          <div key={index}>
           <NavLink to={`/${menu}`} end>{menu}</NavLink>
          </div>
          )
          }
         )}
      </nav>
   </>
  )
};