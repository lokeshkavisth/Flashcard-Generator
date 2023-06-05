// create term and defination page for the flashcard app

import React, { useState } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TbTrashX } from "react-icons/tb";
import Button from "./ui/button/Button";
import FieldInput from "./ui/input/FieldInput";
import { FieldArray } from "formik";

const CreateTerm = ({ values, setFieldValue }) => {
  const [num, setNum] = useState(0);
  const [activeBtn, setActiveBtn] = useState(true);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // This function returns a `div` element that contains the create term and definition form.
  return (
    <div className={!values.groups.group && "opacity-50 pointer-events-none"}>
      <FieldArray
        name="terms"
        render={(formHelpers) => (
          <ul className="bg-white md:p-10 rounded-md sm:p-5 p-5 shadow-md flex flex-col gap-8">
            {values.terms.map((item, index) => (
              <li
                key={index}
                className="flex gap-5 items-start md:flex-row flex-col sm:flex-col sm:w-full"
              >
                <span className="px-4 py-2 text-xl font-bold rounded-full bg-red-200">
                  {index + 1}
                </span>
                <div className="flex items-end flex-wrap gap-5 md:flex-row sm:flex-col flex-col w-full">
                  {/* Enter term input */}
                  <FieldInput
                    name={`terms.${index}.term`}
                    htmlFor={`Term${item}`}
                    label={"Enter Term"}
                    id={`Term-${item}`}
                    placeholder={"What is ISP?"}
                  />
                  {/* Enter Defination input */}
                  <FieldInput
                    name={`terms.${index}.defination`}
                    htmlFor={`Defination${item}`}
                    label={"Enter Defination"}
                    id={`Defination-${item}`}
                    placeholder={"An ISP (internet service provider) is..."}
                  />
                  {!item.image && (
                    <div>
                      {/* button for uploading term image */}
                      <Button
                        type={"button"}
                        btnclass={
                          "border-2 rounded-md  min-w-max font-semibold text-lg px-6 py-2"
                        }
                        text={
                          <>
                            <label
                              htmlFor={`cardImage-${item}`}
                              className="flex items-center cursor-pointer"
                            >
                              <AiFillFileImage className="text-blue-700" />
                              Upload Image
                              <input
                                type="file"
                                id={`cardImage-${item}`}
                                hidden
                                accept="image/*"
                                // taking the input data from the user and extracting the image link from file object using FileReader
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  const reader = new FileReader();
                                  reader.readAsDataURL(file);
                                  reader.onload = () => {
                                    const imageUrl = reader.result;
                                    setFieldValue(
                                      deleteIndex == null
                                        ? `terms.${num}.image`
                                        : `terms.${deleteIndex}.image`,
                                      imageUrl
                                    );
                                    setDeleteIndex(null);
                                    setActiveBtn(false);
                                  };
                                  setDeleteIndex(null);
                                }}
                              />
                            </label>
                          </>
                        }
                      />
                    </div>
                  )}
                  {/* This code renders a `div` element if the `item.image`
                  variable is not `null`. The `div` element contains the term
                  image, a trash button, and an edit button. */}
                  {item.image && (
                    <div className="flex items-center gap-5">
                      <div>
                        <img
                          className="w-20 aspect-square rounded-md"
                          src={item.image}
                          alt="term_image"
                          loading="lazy"
                        />
                      </div>

                      {
                        <div className="flex flex-col gap-5">
                          <Button
                            type={"button"}
                            text={
                              <TbTrashX className="text-3xl text-red-500" />
                            }
                            fn={() => {
                              setFieldValue(`terms.${index}.image`, "");
                              setActiveBtn(true);
                              setDeleteIndex(index);
                            }}
                          />
                          <Button
                            type={"button"}
                            text={
                              <label htmlFor={`cardImage-${item}`}>
                                <BiEdit className="text-blue-700 text-3xl cursor-pointer" />
                              </label>
                            }
                          />
                        </div>
                      }
                    </div>
                  )}
                  {/* This code checks if the index variable is equal to 0. // If
                  it is, then the code renders a button that allows the user to
                  remove the term from the list. */}
                  {Number(!index) === 0 && (
                    <div>
                      <Button
                        type="button"
                        btnclass={"font-semibold text-blue-700 mt-5"}
                        fn={() => formHelpers.remove(index)}
                        text={"- Remove"}
                        list
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}

            <li className="text-center md:text-left">
              <Button
                type="button"
                disabled={activeBtn}
                fn={() => {
                  formHelpers.push("");
                  setNum((prev) => prev + 1);
                  setActiveBtn(true);
                }}
                btnclass={"font-semibold text-blue-700 mt-5"}
                text={"+ Add more"}
              />
            </li>
          </ul>
        )}
      ></FieldArray>
    </div>
  );
};

export default CreateTerm;
