import React from 'react'
import {
  RiDeleteBin6Line,
  HiOutlinePencilAlt,
  FaAccessibleIcon,
  RiDeleteBinLine,
} from "react-icons/fa";

const CreateTerm = () => {
  return (
    <div className="  bg-white mt-8  p-5 rounded-md ">
      <div className="">
        <span className="w-7 h-7 rounded-full bg-red-500 flex justify-center items-center mb-6 text-white">
          1
        </span>
      </div>
      <div className=" md:max-xl:flex">
        <div className="flex items-end gap-5 ">
          <div className="flex flex-col ">
            <label className="text-gray-500">Enter Term*</label>
            <input
              border
              type="text"
              name="group"
              id="group"
              required
              className=" border-2   border-gray-400 rounded-md w-96 px-2 py-1 h-11 mt-2"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-gray-500">Enter Defination*</label>
            <input
              border
              type="text"
              name="group"
              id="group"
              required
              className=" border-2   border-gray-400 rounded-md w-96 px-2 py-1 h-11 mt-2"
            />
          </div>
          <div className="max-w-max break-keep">
            <button className="border-2 border-gray-400 px-4 py-1 text-lg rounded-md text-blue-600 break-keep min-w-max">
              <label htmlFor="profile">Select Image</label>
              <input type="file" name="profile" id="profile" hidden />
            </button>
          </div>
          <div>
            <span>
              <FaAccessibleIcon />
              {/* <RiDeleteBin6Line /> */}
            </span>
            <span>{/* <HiOutlinePencilAlt/> */}</span>
          </div>
        </div>
      </div>
      <button className="font-semibold text-blue-700 mt-4">+ Add more</button>
    </div>
  );
}

export default CreateTerm
