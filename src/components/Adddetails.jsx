import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adddetails = () => {
  const [email, setEmail] = useState("");
  const [career, setCareer] = useState("");
  const navigate = useNavigate();
  const handleCareer = (event) => {
    console.log(event.target.value);
    setCareer(event.target.value);
  };
  const handlenext = () => {
    if (career === "Employed") {
      navigate("/employed");
    } else if (career === "Unemployed") {
      navigate("/unemployed");
    } else if (career === "Further Studies") {
      navigate("/further-studies");
    } else if (career === "Self Employed") {
      navigate("/Self-employed");
    } else {
      console.log("Please select a valid career status.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-200 font-sans ">
      <div className="containers bg-white p-8 rounded-lg ">
        <div className="text-5xl text-center font-bold text-black mb-4">
          <h1>Additional Details</h1>
        </div>
        <form className="mt-8 w-full max-w-md mx-auto space-y-4">
          <input
            type="number"
            className={`p-2 rounded-lg border w-full `}
            placeholder="Batch"
            min={1950}
            max={2024}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {/* <label htmlFor="">Select Department</label> */}
          <select
            className="p-2 rounded-lg border w-full "
            name=""
            id=""
            placeholder="Select department"
          >
            <option disabled selected value="">
              Select Department
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="AI-ML">AI-ML</option>
            <option value="AI-DS">AI-DS</option>
          </select>
          <select
            className="p-2 rounded-lg border w-full "
            name=""
            id=""
            placeholder="Select department"
            onChange={handleCareer}
          >
            <option disabled selected value="">
              Current Career Status
            </option>
            <option value="Employed">Employeed</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Further Studies">Further Studies</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </form>
        <div className="text-black mt-4"></div>
        <button
          className="bg-blue-500 text-white text-center p-3 mt-4 hover:bg-blue-300 font-bold rounded-lg w-full max-w-md px-5"
          onClick={handlenext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Adddetails;
