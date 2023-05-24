import React from "react";

const CreateGroup = () => {
  return (
    <div className="  bg-white p-5 pb-10 rounded-md mt-8 ">
      <div className="flex flex-col sm:flex-row  gap-5 ">
        <div className="flex flex-col  ">
          <label className="text-gray-500">Create Group*</label>
          <input
            border
            type="text"
            name="group"
            id="group"
            required
            className=" border-2   border-gray-400 rounded-md w-full sm:w-80 px-2 py-1 h-11 mt-2"
          />
        </div>
        <div className=" sm:self-end ">
          <button className="border-2 min-w-max border-gray-400 px-4 py-1 text-lg rounded-md text-blue-600  align-middle">
            <label htmlFor="profile">Upload Image</label>
            <input type="file" name="profile" id="profile" hidden />
          </button>
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
      </div>
    </div>
  );
};

export default CreateGroup;
