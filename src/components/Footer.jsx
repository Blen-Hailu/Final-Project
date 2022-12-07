import React from "react";
import './css/UtilityClasses.css';
import './css/Footer.css';

export default function Footer () {

return (
  <>
  <div className="container">
    <p>This is the footer</p>
    <h3 className="headline t-small">Follow Us</h3>
      <ul className="social-icons-list">
        <li className="social-icons-list li">
          <a href="https://www.facebook.com/zestiikitchens/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li  className="social-icons-list li">
          <a href="https://www.linkedin.com/company/zestii-kitchens" ><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </li>
        <li  className="social-icons-list li">
          <a href="https://www.instagram.com/zestiikitchens/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
      </ul>
   </div>
  </>
);
}