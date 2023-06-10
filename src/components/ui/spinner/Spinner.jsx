import React from "react";

const Spinner = () => {
  return (
    <div className="relative h-screen w-full grid place-items-center">
      <span className="w-12 h-12 rounded-full absolute border-8 border-dashed border-gray-200"></span>

      <span className="w-12 h-12 rounded-full animate-spin absolute border-8 border-dashed border-blue-500 border-t-transparent"></span>
    </div>
  );
};

export default Spinner;

//  <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
//         <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
//       </div>
