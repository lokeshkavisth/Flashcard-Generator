import React, { useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { ErrorMessage, Field, FieldArray } from "formik";

const CreateTerm = ({ values }) => {

  const [data, setData] = useState([]);

  

 
  return (
    <div className="bg-white mt-8  p-5 rounded-md ">
      <FieldArray
        name="terms"
        render={(arrayHelpers) => (
          <>
            <div>
              {values.terms.map((term, index) => {
                return (
                  <div key={index} className="flex flex-col sm:flex-row">
                    <div className="mr-3">
                      <span className="w-7 h-7  rounded-full bg-red-400 flex justify-center items-center mb-6 text-white">
                        {index + 1}
                      </span>
                    </div>

                    <div>
                      <div className="flex flex-col sm:flex-row flex-wrap items-end gap-5 ">
                        <div className="flex flex-col w-full relative lg:w-96 ">
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
                          {!data ? (
                            <button
                              type="button"
                              className="border-2 border-gray-400 px-4 py-1 h-11 text-lg rounded-md text-blue-600 break-keep min-w-max"
                            >
                              <label htmlFor="image">Select Image</label>
                            </button>
                          ) : (
                            <div className="flex ">
                              <img
                                className="w-28 rounded-md"
                                src={data}
                                alt=""
                              />

                              <div>
                                <button type="button"
                                onClick={()=>setData(data,"")}>
                                  <RiDeleteBin6Line className="text-red-300 text-2xl m-1" />
                                </button>
                                <label htmlFor="image">
                                  <HiOutlinePencilAlt className="text-blue-400 text-2xl m-1" />
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
                                setData([...data, e.target.result]);

                                // setData(data.filter((e,i)=>i!==e))
                              };
                            }}
                            type="file"
                            name="image"
                            id="image"
                            hidden
                          />
                        </div>
                        {!index == 0 && (
                          <button
                            className="text-red-300 font-semibold border bg-bule"
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <button
                type="button"
                onClick={() => arrayHelpers.push("")}
                className="px-6 py-2 text-blue-600 font-bold"
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
