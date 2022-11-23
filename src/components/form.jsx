import React from 'react';
import {useState} from 'react';
import { userRegistration } from '../insert-data';

function RegistrationForm(){ 
//states for regsitration 
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] =useState('');
  const [email, setEmail] = useState('');
  const [role, setRole]= useState ('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipcode, setZipcode] = ('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [consent, setConsent] = useState('');



  //states for checking errors
  const [submitted, setSubmitted]= useState(false);
  const[error, setError]= useState(false);


  //handling the changes in name, role and email
  const handleFirstNameChange = event => {
    setFirstName(event.target.value)
    setSubmitted(false);
  };
  const handleLastNameChange = event => {
    setLastName(event.target.value)
    setSubmitted(false);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value)
    setSubmitted(false);                    
  };
  const handleRoleChange =event => {
    setRole(event.target.value)
    setSubmitted(false);
  };
  const handleStreetAddressChange =event => {
    setStreetAddress(event.target.value)
    setSubmitted(false);
  };
  const handleZipcodeChange =event => {
    setZipcode(event.target.value)
    setSubmitted(false);
  };
  const handleCityChange =event => {
    setCity(event.target.value)
    setSubmitted(false);
  };
  const handleCountryChange =event => {
    setCountry(event.target.value)
    setSubmitted(false);
  };
  const handlePhoneNumberChange =event => {
    setPhoneNumber(event.target.value)
    setSubmitted(false);
  };
  //handling the consent
  const handleConsentChange =event=> {
    setConsent(event.target.value)
    setSubmitted(false);
  }
  //handling the password change
  const handlePasswordChange = event => {
    setPassword(event.target.value)
    setSubmitted(false);
  };
  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value)
    setSubmitted(false);
  };
//handling form submission
  const handleSubmit = async(event) => {
    event.preventDefault();
    const onSubmitData = async(requestData) => {
      const response = await userRegistration (requestData)
      console.log (response);

    };

    if (firstName === '' || lastName === ''|| email === ''||
    phoneNumber==='' || role === '' || streetAddress === ''|| 
    zipcode === ''|| city=== ''|| country=== ''|| password === ''|| 
    confirmPassword === ''|| consent === ''
    )
    {setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      onSubmitData({firstName, lastName, email, role, phoneNumber, streetAddress, zipcode, city, country, password, confirmPassword, consent});
    };
  };
  
  //showing success message
  const successMessage =()=>{
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {firstName + lastName} successfully registered!!</h1>
      </div>
    );
  };
 
//showing error message if error is true 
const errorMessage = () => {
  return (
    <div
      className="error"
      style={{
        display: error ? '' : 'none',
      }}>
      <h1>Please enter all the fields</h1>
    </div>
  );
};
  return (


    <div className ="registration-container">
      <div>
        <h1>Regsitration Form</h1>
      </div>
      {/*calling to the methods*/}
      <div className ="messages">
        {errorMessage()}
        {successMessage()}
      </div>
        <form>
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
              <label className="label">Password</label>
            <input
              type="form-input"
              name="password"
              placeholder="Enter Password"
              onChange={handlePasswordChange}
              value={password}  
              />
              <label className="label">Confirm Passowrd</label>
            <input
              type="form-input"
              name="password"
              placeholder="Confirm your password"
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
              />

              <label className ="label" htmlFor ="terms">You Must Agree to Our Terms and Conditions.</label>
              <input
              type= "checkbox"
              name= "terms"
              onChange= {handleConsentChange}
              value= {consent}
              />
          
          <button onSubmit= {handleSubmit} type="submit" className= "submit-button">
            Submit
          </button>
        </form>

    </div>
  )
};
export default RegistrationForm;
