import React from 'react'

const CreateTerm = () => {
  return (
    <div className=" bg-white mt-8  p-5 rounded-md ">
      <div className="flex items-end gap-5 ">
        <span className="w-7 h-7 rounded-full bg-red-500 flex justify-center items-center mb-6 text-white">
          1
        </span>
        <div className="flex flex-col ">
          <label className="text-gray-500">Enter term*</label>
          <input
            border
            type="text"
            name="group"
            id="group"
            required
            className=" border-2   border-gray-400 rounded-md w-96 px-2 py-1 h-11"
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
            className=" border-2   border-gray-400 rounded-md w-96 px-2 py-1 h-11"
          />
        </div>
        <div>
          <label
            htmlFor="profile"
            className="border-2 border-gray-400 px-4 py-2 text-lg rounded-md text-blue-600 max-w-max"
          >
            Select Image
          </label>
          <input type="file" name="profile" id="profile" hidden />
        </div>
      </div>
      <button className="font-semibold text-blue-700 mt-4 ml-11">+ Add more</button>
    </div>
  );
}

export default CreateTerm
