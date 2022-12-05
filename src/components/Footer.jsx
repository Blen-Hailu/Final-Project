import React from 'react'
import './footer.css'; 

  export default function Footer (){
    return (
      <div className= 'main-footer'>
        <div className ='footer-container'>
            <div className ='row'>
              {/*column 1*/}
              <div className= 'col'>
                <ul className='list-unstyled'>
                  <li>
                    <a href="/Terms and Conditions">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href= "/Privacy Policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              {/*column 2*/}
              <div className='col'>
                <h4>Follow Us on Social Media</h4>
                <ul className='list-unstyled'>
                  <li>
                    <a href= "/Instagram">Instagram</a>
                  </li>
                  <li>
                  <a href= "/LinkedIn">LinkedIn</a>
                  </li>
                </ul>
              </div>
          </div>
          <div className ='row'>
          <hr/>

            <p className ='col-sm'>
            &copy;{new Date().getFullYear()}KOTIBET HOME SERVICES  ||  ALL RIGHTS RESERVED
            </p>
          </div>
         
      </div>
    </div> 
    );
  }