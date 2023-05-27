import React, { useState } from "react";
// import { FaAccessibleIcon } from "react-icons/fa";
import { RiDeleteBin6Line, RiDeleteBinLine, RiH1 } from "react-icons/ri";
// import { HiOutlinePencilAlt } from "react-icons/hi";

const CreateTerm = () => {
  const [data, setData] = useState("");

  console.log("data", data);
  return (
    <div className="flex flex-col sm:flex-row bg-white mt-8  p-5 rounded-md ">
      <div className="mr-3">
        <span className="w-7 h-7  rounded-full bg-red-500 flex justify-center items-center mb-6 text-white">
          1
        </span>
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-row flex-wrap items-end gap-5 ">
          <div className="flex flex-col w-full lg:w-96 ">
            <label className="text-gray-500">Enter Term*</label>

            <input
              type="text"
              name="createGroup"
              id="createGroup"
              required
              className=" border-2   border-gray-400 rounded-md  px-2 py-1 h-11 mt-2"
            />
          </div>
          <div className="flex flex-col w-full lg:w-96 ">
            <label className="text-gray-500">Enter Defination*</label>
            <input
              type="text"
              name="create0group"
              id="create0Group"
              required
              className=" border-2   border-gray-400 rounded-md  px-2 py-1 h-11 mt-2"
            />
          </div>
          <div className="flex flex-row">
            <button className="border-2 border-gray-400 px-4 py-1 h-11 text-lg rounded-md text-blue-600 break-keep min-w-max">
              <label htmlFor="image">Select Image</label>
              <input
                onChange={(e) =>
                  setData(URL.createObjectURL(e.target.files[0]))
                }
                type="file"
                name="image"
                id="image"
                hidden
              />
            </button>
            <img src={data} alt="" />
            {/* <div>
              <RiDeleteBin6Line />

              <HiOutlinePencilAlt />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTerm;
