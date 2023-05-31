import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Field, ErrorMessage } from "formik";
import { BiImageAdd } from "react-icons/bi";

const CreateGroup = ({ setFieldValue, values }) => {
  return (
    <div className="  bg-white p-10 rounded-md mt-8 shadow-md">
      <div className="flex flex-col sm:flex-row  gap-5 ">
        <div className="flex flex-col relative">
          <label className="text-gray-500">Create Group*</label>
          <Field
            border
            type="text"
            name="groups.group"
            id="group"
            required
            className=" border-2   border-gray-400 rounded-md w-full sm:w-80 px-2 py-1 h-11 mt-2"
          />
          <p className="text-red-500 absolute -bottom-6 left-0">
            <ErrorMessage name="group" />
          </p>
        </div>

        <div className=" sm:self-end ">
          {!values.groups.profile ? (
            <button
              type="button"
              className="border-2 min-w-max border-gray-400 px-4 py-1 text-lg h-11 rounded-md text-blue-600  align-middle"
            >
              <label
                htmlFor="profile"
                className="flex items-center gap-3 text-black"
              >
                <BiImageAdd className="text-xl text-blue-500" />
                Select Image
              </label>
            </button>
          ) : (
            <div className="flex items-center gap-4">
              <div>
                <img
                  className="w-20 rounded-md  aspect-square object-cover"
                  src={values.groups.profile}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between gap-3 text-2xl">
                <RiDeleteBin6Line className="text-red-500" />
                <label htmlFor="profile">
                  <HiOutlinePencilAlt className="text-blue-500" />
                </label>
              </div>
            </div>
          )}
          <Field
          

            onChange={(e) => {

            const file = e.target.files[0];
            const reader = new FileReader();

             reader.readAsDataURL(file);
            reader.onload = function (e) {
             
             setImg(e.target.result)

            };

           setFieldValue("proflie", Img);

            
          }}


            

            type="file"
            name="groups.profile"
            id="profile"
            value={""}
            hidden
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setFieldValue("groups.profile", reader.result);
              };
            }}
          />
        </div>
      </div>
      <div className="flex flex-col mt-4 ">
        <label className="text-gray-500" htmlFor="groupdesc ">
          Add Description
        </label>

        <Field
          as="textarea"
          className=" border-2 border-gray-400 rounded-md px-2 py-1 w-full lg:max-w-4xl h-28 mt-2 resize-none"
          name="gorups.groupdesc"
          id="groupdesc"
        />

        <p className="text-red-500">
          <ErrorMessage name="groupdesc" />
        </p>
      </div>
    </div>
  );
};

export default CreateGroup;
