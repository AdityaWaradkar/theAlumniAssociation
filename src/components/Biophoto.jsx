import React from "react";
import { useNavigate } from "react-router-dom";

const Biophoto = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-200 font-sans ">
      <div className="containers bg-white p-8 rounded-lg ">
        <div className="text-5xl text-center font-bold text-black mb-4">
          <h1>Profile Photo & Bio</h1>
        </div>
        <form className="mt-8 w-full max-w-md mx-auto space-y-4">
          <label htmlFor="pphoto">Upload your Profile Pic</label>
          <input type="file" name="pphoto" id="" />
          {/* <label htmlFor="">Select Department</label> */}
          <textarea
            className="p-2 rounded-lg border w-full h-auto"
            name=""
            id=""
            placeholder="Enter Something about yourself"
          ></textarea>
        </form>
        <div className="text-black mt-4"></div>
        <button
          className="bg-blue-500 text-white text-center p-3 mt-4 hover:bg-blue-300 font-bold rounded-lg w-full max-w-md px-5"
          onClick={() => navigate("/login")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Biophoto;
