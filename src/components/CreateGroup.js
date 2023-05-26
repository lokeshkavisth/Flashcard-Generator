import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Formik, useFormik, Form, Field, ErrorMessage } from "formik";
// import { SignUpSchema } from "../schemas";
import * as Yup from "yup";

const CreateGroup = () => {
  const [Img, setImg] = useState();

  // const defoaultValue = {
  //   name: "",
  //   groupdesc:"",
  // };

  // const validationSchema=Yup.object().shape({

  //   name: Yup.string().min(2).max(25).required("Please enter somthing"),
  //   groupdesc: Yup.string().min(2).max(1000).required("Please enter somthing")
  // })

  // console.log(formik)

  return (
    <div className="  bg-white p-5 pb-10 rounded-md mt-8 ">
      <div className="flex flex-col sm:flex-row  gap-5 ">
        <div className="flex flex-col  ">
          <label className="text-gray-500">Create Group*</label>
          <Field
            border
            type="text"
            name="group"
            id="group"
            required
            className=" border-2   border-gray-400 rounded-md w-full sm:w-80 px-2 py-1 h-11 mt-2"
          />
          <p className="text-red-500">
            <ErrorMessage name="group" />
          </p>
        </div>

        <div className=" sm:self-end ">
          {!Img ? (
            <button className="border-2 min-w-max border-gray-400 px-4 py-1 text-lg h-11 rounded-md text-blue-600  align-middle">
              <label htmlFor="profile">Upload Image</label>
            </button>
          ) : (
            <div className="flex">
              <img className="w-40" src={Img} alt="" />
              <div className="mt-3 ">
                <RiDeleteBin6Line className="text-red-300 text-2xl" />
                <label htmlFor="profile">
                  <HiOutlinePencilAlt className="text-blue-400 text-2xl" />
                </label>
              </div>
            </div>
          )}
          <Field
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            type="file"
            name="profile"
            id="profile"
            hidden
          />
        </div>
      </div>
      <div className="flex flex-col mt-4 ">
        <label className="text-gray-500" htmlFor="groupdesc ">
          Add Description
        </label>
        <textarea
          className=" border-2 border-gray-400 rounded-md px-2 py-1 w-full lg:max-w-4xl h-28 mt-2"
          name="groupdesc"
          id="groupdesc"
        ></textarea>

        <p className="text-red-500">
          <ErrorMessage name="groupdesc" />
        </p>
      </div>
    </div>
  );
};

export default CreateGroup;