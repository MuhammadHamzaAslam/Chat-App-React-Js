import { Button } from "@mui/material";
import React, { useState } from "react";

const AddPerson = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  function AddUser() {
    console.log("userName:", userName);
    console.log("email:", email);
    console.log("number:", number);
    console.log("image:", image);
  }
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-gray-50">
      <div className="h-auto w-[350px] p-8 rounded-xl shadow-2xl bg-white">
        <h1 className="text-center font-bold text-3xl mb-8 text-purple-600">
          Add User
        </h1>

        {/* User Name Input */}
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg w-full p-3 mt-3">
          <i className="bx bx-user text-xl text-gray-500 ml-2"></i>
          <input
            type="text"
            placeholder="User Name"
            className="bg-transparent ml-3 w-full outline-none placeholder-gray-500"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg w-full p-3 mt-4">
          <i className="bx bx-envelope text-xl text-gray-500 ml-2"></i>
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent ml-3 w-full outline-none placeholder-gray-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number Input */}
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-lg w-full p-3 mt-4">
          <i className="bx bx-phone text-xl text-gray-500 ml-2"></i>
          <input
            type="number"
            placeholder="Phone Number"
            className="bg-transparent ml-3 w-full outline-none placeholder-gray-500"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        {/* Upload Image Input */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg w-full p-3 mt-4">
          <label className="text-gray-500 ml-2">Upload Profile Picture:</label>
          <input
            type="file"
            className="w-full mt-2 text-gray-600"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0].name)}
          />
        </div>

        {/* Add Button */}
        <div className="flex justify-center items-center mt-8">
          <button
            className="border border-purple-500 px-12 rounded-full bg-purple-500 text-white font-bold py-3 transition-transform transform hover:scale-105 shadow-lg"
            onClick={AddUser}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
