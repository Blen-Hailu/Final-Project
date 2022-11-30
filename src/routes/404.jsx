import React, { useEffect } from "react";
import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';

export default function NotFound () {
   const navigate = useNavigate();

   useEffect(()=> {
      setTimeout(() => {
       navigate('/')
      }, 3000)
      })
 return (
  <>
  <Header />
   <p> 404 Not Found. You came to the page that does not exist. We will take you home.</p>
   </>
)};