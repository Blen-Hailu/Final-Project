/*import {useState, useEffect} from 'react';
import jwt_decode from 'jwt-decode';*/
import FreelancerRegsitrationForm from '../components/form2';

export function UserLogIn(){
  /*const{user, setUser} =useState({});
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token:"+ response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }
  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;

  }
 useEffect(()=>{
  /* global google */
  /*google.accounts.id.initialize({
    client_id:"935853094554-teqh8vlhveeqgbug2h14bej5k3939pcf.apps.googleusercontent.com",
    callback: handleCallbackResponse
 });
 google.accounts.id.renderButton(
  document.getElementById("signInDiv"),
  {theme:"outline", size: "large"}
 );
 google.accounts.id.prompt();
 // if we have no user, sign in button
 // if we have user, show log out button
   // eslint-disable-next-line
 },[]);
 */
  return(
    <>
    <h1> Log In </h1>
    
    {/*<div id="g_id_onload"
     data-client_id="YOUR_GOOGLE_CLIENT_ID"
     data-login_uri="https://your.domain/your_login_endpoint"
     data-your_own_param_1_to_login="any_value"
     data-your_own_param_2_to_login="any_value">
  </div>*/}
    <div>
        <FreelancerRegsitrationForm/>
      </div>

      {/*<div id="signInDiv">
          {Object.keys(user).length !== 0 &&
              <button onClick ={(e)=>handleSignOut()}> Sign out</button>
          };
          {user &&

          <div>
            <img src = {user.picture} alt= "google profile pic"></img>
            <h3>{user.name}</h3>
          </div>
          }
        </div>*/}  
      
    </>
  )
};