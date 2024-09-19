import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }
    navigate("/logged");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-200 font-sans ">
      <div className="containers bg-white p-8 rounded-lg ">
        <div className="text-5xl text-center font-bold text-black mb-4">
          <h1>Login</h1>
        </div>
        <form className="mt-8 w-full max-w-md mx-auto space-y-4">
          <h3>Login to manage your account</h3>
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
            New here?{" "}
            <span
              className="text-blue-600 hover:text-blue-400 cursor-pointer"
              onClick={() => (window.location.href = "/register")}
            >
              Create an account
            </span>
          </p>
        </div>
        <button
          className="bg-blue-500 text-white text-center p-3 mt-4 hover:bg-blue-300 font-bold rounded-lg w-full max-w-md px-5"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
