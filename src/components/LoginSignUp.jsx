import React, { useState } from 'react';
import loginPageImage from '../assets/images/The Alumni Association.png';
import ProfileSetup from './ProfileSetup'; 

const LoginSignUp = () => {

  //useStates
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false); 

  //executed when login button is clicked
  const handleLogin = () => 
  {
    // Clear previous error messages
    setEmailError('');
    setPasswordError('');

    // Validation for blank fields
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    //To check password must be 6 or more character long
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

  };

  //executed when sign up button is clicked
  const handleSignUp = () => 
  {
    // Clear previous error messages
    setEmailError('');
    setPasswordError('');
    setFullNameError('');
    setPhoneError('');

    // Validation for blank fields
    if (!fullName) {
      setFullNameError('Full Name is required');
      return;
    }
    if (!phoneNumber) {
      setPhoneError('Phone Number is required');
      return;
    }

    // Validation for phone number
    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneError('Please enter a valid phone number');
      return;
    }

    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }
    //To check password must be 6 or more character long
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    // Set signed-up state true and clear form after hitting sign up button
    setIsSignedUp(true);
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
  };

  const toggleSignUp = () => 
  {
    // reset all fields and error messages
    setIsSignUp(!isSignUp);
    setEmail('');  
    setFullName('');  
    setPhoneNumber('');  
    setPhoneError(''); 
    setPasswordError(''); 
    setEmailError(''); 
    setFullNameError(''); 
  };

  //Functon to validate phone number 
  const validatePhoneNumber = (number) => 
  {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  //FUnction to validate password
  const validatePassword = (password) => 
  {
    return password.length >= 6;
  };

  // Render the new component if signed up is true
  if (isSignedUp) {
    return <ProfileSetup />; 
  }

  return (


    <div className="flex flex-col lg:flex-row h-screen bg-green-200 font-sans">
      <div className="lg:w-1/2 hidden lg:flex lg:items-center lg:justify-center">
        <img
          className="w-full h-full object-cover"
          src={loginPageImage}
          alt="Alumni Association"
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full px-6 lg:px-10 font-notoSans">
        <div className="text-xl text-center font-bold text-black mb-4">
          Alumni Association
        </div>
        <div className="text-5xl text-center font-bold text-black mb-4">
          <h1>{isSignUp ? 'Create Your Account' : 'Welcome Back'}</h1>
        </div>
        <form className="mt-8 w-full max-w-md mx-auto space-y-4">
          <h3>{isSignUp ? 'Sign up to get started' : 'Login to manage your account'}</h3>
          {isSignUp && (
            <>
              <input
                type="text"
                className={`p-2 rounded-lg border w-full ${fullNameError ? 'border-red-500' : ''}`}
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setFullNameError(''); // Clear the error message while typing
                }}
              />
              {fullNameError && (
                <p className="text-red-500 text-sm">{fullNameError}</p>
              )}
              <input
                type="text"
                className={`p-2 rounded-lg border w-full ${phoneError ? 'border-red-500' : ''}`}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setPhoneError(''); // Clear the error message while typing
                }}
              />
              {phoneError && (
                <p className="text-red-500 text-sm">{phoneError}</p>
              )}
            </>
          )}
          <input
            type="email"
            className={`p-2 rounded-lg border w-full ${emailError ? 'border-red-500' : ''}`}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(''); // Clear the error message while typing
            }}
          />
          {emailError && (
            <p className="text-red-500 text-sm">{emailError}</p>
          )}
          <input
            type="password"
            className={`p-2 rounded-lg border w-full ${passwordError ? 'border-red-500' : ''}`}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(''); // Clear the error message while typing
            }}
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </form>
        <div className="text-black mt-4">
          {isSignUp ? (
            <p>
              Already have an account?{' '}
              <span
                className="text-blue-600 hover:text-blue-400 cursor-pointer"
                onClick={toggleSignUp}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className='px-5'>
              New here?{' '}
              <span
                className="text-blue-600 hover:text-blue-400 cursor-pointer"
                onClick={toggleSignUp}
              >
                Create an account
              </span>
            </p>
          )}
        </div>
        <button
          className="bg-blue-500 text-white text-center p-3 mt-4 hover:bg-blue-300 font-bold rounded-lg w-full max-w-md px-5"
          onClick={isSignUp ? handleSignUp : handleLogin}
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginSignUp;
