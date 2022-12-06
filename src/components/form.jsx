import React from 'react';
import {useState} from 'react';
import { userRegistration } from '../insert-data';
import './form.css';




function RegistrationForm(){ 
//states for regsitration 
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] =useState('');
  const [email, setEmail] = useState('');
  const [role, setRole]= useState ('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [consent, setConsent] = useState('');
  const [picture, setPicture] = useState('');



  //handling the changes in name, role and email
  const handleFirstNameChange = event => {
    setFirstName(event.target.value)
  };
  const handleLastNameChange = event => {
    setLastName(event.target.value)
  };
  const handleEmailChange = event => {
    setEmail(event.target.value)
  };
  const handleRoleChange =event => {
    setRole(event.target.value)
  };
  const handleStreetAddressChange =event => {
    setStreetAddress(event.target.value)
  };
  const handleZipcodeChange =event => {
    setZipcode(event.target.value)
  };
  
  const handleCityChange =event => {
    setCity(event.target.value)
  };
  const handleCountryChange =event => {
    setCountry(event.target.value)
  };
  const handlePhoneNumberChange =event => {
    setPhoneNumber(event.target.value)
  };
  //handling the consent
  const handleConsentChange =event=> {
    setConsent(event.target.value)
  }
  
  const handlePictureChange = async event => {
    const fileContent = encodeURIComponent(await event.target.files[0].text())
    setPicture(fileContent)
    console.log (fileContent);
  };
//handling form submission
const addData = async function() {
  const requestData = {first_name : firstName, last_name : lastName, email:email, service_type: role, street_address:streetAddress, zipcode: zipcode, city:city, country:country, phone_number:phoneNumber, picture:picture }  

    const response = await userRegistration (requestData)
    console.log (response);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const requestData = {first_name : firstName, last_name : lastName, email_address:email, service_type: role, street_address:streetAddress, zip_code: zipcode, city:city, country:country, phone_number:phoneNumber }  
    console.log (requestData);
     addData(requestData);
    };

  return (

    <div className ="registration-container">
      <div>
        <h2 className='regis-title'>Regsitration Form</h2>
      </div>
     
        <form className='form'>
                {/*Labels and inputs for form data */}
            <label className="label">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              onChange={handleFirstNameChange}
              value={firstName}
            />
             <label className="label">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              onChange={handleLastNameChange}
              value={lastName}
            />
            <label className="label">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleEmailChange}
              value={email}
            />
            <label className ="label" htmlFor="role">Register As</label>
            <input
              type="text"
              name="role"
              placeholder="Choose from options"
              onChange={handleRoleChange}
              value={role}
              list= "myOptions" />
              <datalist id="myOptions">
                <option>Customer</option>
                <option>Freelancer</option>
              </datalist>
              <label className="label">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Your Phone Number Here"
              onChange={handlePhoneNumberChange}
              value={phoneNumber}
            />

              <label className="label">street Address</label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Enter Street Address Here"
              onChange={handleStreetAddressChange}
              value={streetAddress}
            />
               <label className="label">Zipcode</label>
            <input
              type="text"
              name="zipcode"
              placeholder="Enter Zipcode Here"
              onChange={handleZipcodeChange}
              value={zipcode}
            />
               <label className="label">picture</label>
            <input
              type="file"
              name="picture"
              placeholder="Upload picture Here"
              onChange={handlePictureChange}
              
              />
               <label className="label">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City Here"
              onChange={handleCityChange}
              value={city}
            />
               <label className="label">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country Here"
              onChange={handleCountryChange}
              value={country}
            />
              <label className ="label" htmlFor ="terms">You Must Agree to Our Terms and Conditions.</label>
              <input
              type= "checkbox"
              name= "terms"
              onChange= {handleConsentChange}
              value= {consent}
              />
          
          
            <button onClick= {handleSubmit} type="submit" className= "submit-button">
              Submit
            </button>
        </form>

    </div>
  );
}
export default RegistrationForm;
