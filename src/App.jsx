import { useState } from "react";
import LoginSignUp from "./components/LoginSignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Adddetails from "./components/Adddetails";
import Employed from "./components/Employed";
import Unemployed from "./components/Unemployed";
import Heigherstudies from "./components/Heigherstudies";
import Selfemployed from "./components/Selfemployed";
import Biophoto from "./components/Biophoto";
import Posts from "./components/Posts";
import ProfileSetup from "./components/ProfileSetup";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/details" element={<Adddetails />} />
          <Route path="/employed" element={<Employed />} />
          <Route path="/unemployed" element={<Unemployed />} />
          <Route path="/further-studies" element={<Heigherstudies />} />
          <Route path="/Self-employed" element={<Selfemployed />} />
          <Route path="/photo" element={<Biophoto />} />
          <Route path="/logged" element={<ProfileSetup />} />
        </Routes>
      </BrowserRouter>
      {/* <LoginSignUp /> */}
    </>
  );
}

export default App;
