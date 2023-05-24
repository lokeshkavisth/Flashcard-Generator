import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import { RiDeleteBin6Line, RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";

const CreateTerm = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-white mt-8  p-5 rounded-md ">
      <div className="mr-3">
        <span className="w-7 h-7  rounded-full bg-red-500 flex justify-center items-center mb-6 text-white">
          1
        </span>
      </div>
      <div className="">
        <div className="flex flex-col sm:flex-row  items-end gap-5 ">
          <div className="flex flex-col md:flex-wrap ">
            <label className="text-gray-500">Enter Term*</label>
            <input
              border
              type="text"
              name="group"
              id="group"
              required
              className=" border-2   border-gray-400 rounded-md w-full sm:w-80 px-2 py-1 h-11 mt-2"
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
              className=" border-2   border-gray-400 rounded-md w-full sm:w-80 px-2 py-1 h-11 mt-2"
            />
          </div>
          <div className="flex sm:flex-wrap flex-row">
            <button className="border-2 border-gray-400 px-4 py-1 text-lg rounded-md text-blue-600 break-keep min-w-max">
              <label htmlFor="profile">Select Image</label>
              <input type="file" name="profile" id="profile" hidden />
            </button>
            {/* <div>
              <RiDeleteBin6Line />

              <HiOutlinePencilAlt />
            </div> */}
          </div>
        </div>
        <button className="font-semibold text-blue-700 mt-4">+ Add more</button>
      </div>
    </div>
  );
};

export default CreateTerm;
