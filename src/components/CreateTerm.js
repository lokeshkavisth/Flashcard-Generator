import React, { useState } from "react";
<<<<<<< HEAD

import { RiDeleteBin6Line} from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";



const CreateTerm = () => {
  const [data, setData] = useState();

 
  
=======
// import { FaAccessibleIcon } from "react-icons/fa";
import { RiDeleteBin6Line, RiDeleteBinLine, RiH1 } from "react-icons/ri";
// import { HiOutlinePencilAlt } from "react-icons/hi";

const CreateTerm = () => {
  const [data, setData] = useState("");

  console.log("data", data);
>>>>>>> master
  return (
    <div className="flex flex-col sm:flex-row bg-white mt-8  p-5 rounded-md ">
      <div className="mr-3">
        <span className="w-7 h-7  rounded-full bg-red-400 flex justify-center items-center mb-6 text-white">
          1
        </span>
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-row flex-wrap items-end gap-5 ">
          <div className="flex flex-col w-full lg:w-96 ">
            <label className="text-gray-500">Enter Term*</label>

            <Field
              type="text"
              name="term"
              id="term"
              required
              className=" border-2   border-gray-400 rounded-md  px-2 py-1 h-11 mt-2"
            />
            <p className="text-red-500">
              <ErrorMessage name="term" />
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-96 ">
            <label className="text-gray-500">Enter Defination*</label>
            <Field
              type="text"
              name="defination"
              id="defination"
              required
              className=" border-2   border-gray-400 rounded-md  px-2 py-1 h-11 mt-2"
            />
            <p className="text-red-500">
              <ErrorMessage name="defination" />
            </p>
          </div>
          <div className="flex flex-row">
            {!data ? (
              <button className="border-2 border-gray-400 px-4 py-1 h-11 text-lg rounded-md text-blue-600 break-keep min-w-max">
                <label htmlFor="image">Select Image</label>
              </button>
            ) : (
              <div className="flex ">
                <img className="w-40" src={data} alt="" />

                <div className="mt-3">
                  <RiDeleteBin6Line className="text-red-300 text-2xl" />

                  <label htmlFor="image">
                    <HiOutlinePencilAlt className="text-blue-400 text-2xl" />
                  </label>
                </div>
              </div>
            )}
            <input
              onChange={(e) => setData(URL.createObjectURL(e.target.files[0]))}
              // onChange={(e) => setData()}
              type="file"
              name="image"
              id="image"
              hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTerm;
