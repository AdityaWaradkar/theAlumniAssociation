import React, { useState } from "react";
import ProfileSetup from "./ProfileSetup";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = () => {
    setEmailError("");
    setPasswordError("");
    setFullNameError("");
    // setPhoneError("");

    if (!fullName) {
      setFullNameError("Full Name is required");
      return;
    }
    // if (!phoneNumber) {
    //   setPhoneError("Phone Number is required");
    //   return;
    // }
    // if (!validatePhoneNumber(phoneNumber)) {
    //   setPhoneError("Please enter a valid phone number");
    //   return;
    // }
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    setIsSignedUp(true);
    setFullName("");
    // setPhoneNumber("");
    setEmail("");
    setPassword("");
    navigate("/details");
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  if (isSignedUp) {
    return <ProfileSetup />;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-200 font-sans">
      <div className="containers bg-white p-4 rounded-lg py-8 lg:p-16 md:p-12">
        <div className="text-5xl text-center font-bold text-black mb-4">
          <h1>Create Your Account</h1>
        </div>
        <form className="mt-8 w-full max-w-md mx-auto space-y-4">
          <h3>Sign up to get started</h3>
          <input
            type="text"
            className={`p-2 rounded-lg border w-full ${
              fullNameError ? "border-red-500" : ""
            }`}
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setFullNameError("");
            }}
          />
          {fullNameError && (
            <p className="text-red-500 text-sm">{fullNameError}</p>
          )}

          {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
          <input
            type="email"
            className={`p-2 rounded-lg border w-full ${
              emailError ? "border-red-500" : ""
            }`}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          <input
            type="password"
            className={`p-2 rounded-lg border w-full ${
              passwordError ? "border-red-500" : ""
            }`}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && (
            <p className="text-red-500 text-sm">{passwordError}</p>
          )}
        </form>
        <div className="text-black mt-4">
          <p className="px-5">
            Already have an account?{" "}
            <span
              className="text-blue-600 hover:text-blue-400 cursor-pointer"
              onClick={() => (window.location.href = "/login")}
            >
              Login here
            </span>
          </p>
        </div>
        <button
          className="bg-blue-500 text-white text-center p-3 mt-4 hover:bg-blue-300 font-bold rounded-lg w-full max-w-md px-5"
          onClick={handleSignUp}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Signup;
