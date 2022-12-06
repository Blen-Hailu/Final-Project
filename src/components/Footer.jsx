import React from 'react'
import './styled/footer.css'; 

  export default function Footer (){
    return (
      <div className= 'main-footer'>
                <ul  className='list-unstyled'>
                  <li>
                    <a href="/Terms and Conditions">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href= "/Privacy Policy">Privacy Policy</a>
                  </li>

                  <li>
                    <a href= "https://instagram.com/kotibet.fi/">Instagram</a>
                  </li>
                  <li>
                  <a href= "https://linkedin.com/company/kotibet-home-services/">LinkedIn</a>
                  </li>
                </ul>
  
          <hr/>

            <p className ='col-sm'>
            &copy;{new Date().getFullYear()}KOTIBET HOME SERVICES  ||  ALL RIGHTS RESERVED
            </p>
  
    </div> 
    );
  }