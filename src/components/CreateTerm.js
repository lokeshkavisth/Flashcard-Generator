import React, { useState } from "react";
import { BiImageAdd } from "react-icons/bi";

import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { ErrorMessage, Field, FieldArray } from "formik";

const CreateTerm = ({ values, setFieldValue }) => {
  const [num, setNum] = useState(0);

  return (
    <div className="bg-white p-10 rounded-md shadow-md">
      <FieldArray
        name="terms"
        render={(formHelpers) => (
          <>
            <div>
              {values.terms.map((term, index) => {
                return (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <div className="mr-3">
                      <span className="w-7 aspect-square  rounded-full bg-red-400 grid place-items-center mb-6 text-white">
                        {index + 1}
                      </span>
                    </div>

                    <div className="flex flex-col  sm:flex-row flex-wrap items-end gap-5 mb-5 w-full">
                      <div className="flex flex-col w-full relative lg:w-96  ">
                        <label className="text-gray-500">Enter Term*</label>

                        <Field
                          type="text"
                          name={`terms.${index}.term`}
                          id="term"
                          required
                          className=" border-2   border-gray-400 rounded-md  px-2 py-1 h-11 mt-2"
                        />
                        <p className="text-red-500 absolute -bottom-5 left-0">
                          <ErrorMessage name={`terms.${index}.term`} />
                        </p>
                      </div>
                      <div className="flex flex-col w-full relative lg:w-96 ">
                        <label className="text-gray-500">
                          Enter Defination*
                        </label>
                        <Field
                          type="text"
                          name={`terms.${index}.defination`}
                          id="defination"
                          required
                          className=" border-2   border-gray-400 rounded-md  px-2 py-1 h-11 mt-2"
                        />
                        <p className="text-red-500  absolute -bottom-5 left-0">
                          <ErrorMessage name={`terms.${index}.defination`} />
                        </p>
                      </div>
                      <div className="flex flex-row">
                        {!term.image ? (
                          <button
                            type="button"
                            className="border-2 border-gray-400 px-4 py-1 h-11 text-lg rounded-md text-blue-500 break-keep min-w-max"
                          >
                            <label
                              htmlFor="image"
                              className="flex items-center gap-2 text-black"
                            >
                              <BiImageAdd className="text-xl text-blue-500" />
                              Select Image
                            </label>
                          </button>
                        ) : (
                          <div className="flex items-center gap-3">
                            <img
                              className="w-20 rounded-md"
                              src={term.image}
                              alt="term_image"
                              loading="lazy"
                            />

                            <div>
                              <button
                                type="button"
                                onClick={() =>
                                  setFieldValue(`terms.${index}.image`, "")
                                }
                              >
                                <RiDeleteBin6Line className="text-red-500 text-2xl m-1" />
                              </button>
                              <label htmlFor="image">
                                <HiOutlinePencilAlt className="text-blue-500 text-2xl m-1" />
                              </label>
                            </div>
                          </div>
                        )}
                        <input
                          onChange={(e) => {
                            const file = e.target.files[0];
                            const reader = new FileReader();

                            reader.readAsDataURL(file);
                            reader.onload = function (e) {
                              setFieldValue(
                                `terms.${num}.image`,
                                e.target.result
                              );
                            };
                          }}
                          type="file"
                          name={`terms.${index}.image`}
                          id="image"
                          hidden
                        />
                      </div>
                      {!index == 0 && (
                        <button
                          className="text-red-500 font-semibold"
                          type="button"
                          onClick={() => formHelpers.remove(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setNum((prev) => prev + 1);
                  formHelpers.push("");
                }}
                className="px-6 py-2 text-blue-500 font-semibold hover:text-blue-600 transition-all"
              >
                + Add More
              </button>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default CreateTerm;
