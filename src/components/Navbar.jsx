import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-green-800 h-16 sticky top-0 z-10">
      <ul className="flex text-white gap-5 items-center h-full cursor-pointer font-bold ml-6">
        <li
          className="hover:bg-green-300 p-2 hover:text-black"
          onClick={() => navigate("/")}
        >
          Dashboard
        </li>
        <li
          className="hover:bg-green-300 p-2 hover:text-black"
          onClick={() => navigate("/login")}
        >
          Login
        </li>
        <li
          className="hover:bg-green-300 p-2 hover:text-black"
          onClick={() => navigate("/register")}
        >
          Register
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
