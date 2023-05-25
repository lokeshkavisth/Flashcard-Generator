import React, { useState } from "react";
import { FaAccessibleIcon } from "react-icons/fa";
import { RiDeleteBin6Line, RiDeleteBinLine, RiH1 } from "react-icons/ri";
import { HiOutlinePencilAlt } from "react-icons/hi";

const CreateTerm = () => {
  const [data, setData] = useState("");

  console.log("data", data);

  function removeImage(id) {
    const newList = data.filter((l) => l.id !== id);
    StyleSheetList(newList);
  }

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
            {!data ? (
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
            ) : (
              data.map((todo) => {
                return (
                  <div className="flex ">
                    <img className="w-40" src={data} alt="" />

                    <div className="mt-3">
                      <RiDeleteBin6Line
                        onClick={() => removeImage(todo.id)}
                        className="text-red-300 text-2xl"
                      />

                      <HiOutlinePencilAlt className="text-blue-400 text-2xl" />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <button className="font-semibold text-blue-700 mt-4">
          {" "}
          + Add more
        </button>
      </div>
    </div>
  );
};

export default CreateTerm;
