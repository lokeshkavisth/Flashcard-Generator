import React from "react";
import { Link } from "react-router-dom";

const Subnav = () => {
  return (
    <nav>
      <h2 className="self-center mb-5 text-2xl pb-2 font-semibold whitespace-nowrap dark:text-black">
        Create Flashcard
      </h2>

      <div className=" border-b-2  border-b-gray-200">
        <ul className="flex flex-row font-medium gap-4 text-md pb-2">
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:text-red-500 hover:border-b-2 border-red-500 pb-2 "
              aria-current="page"
            >
              Create New
            </Link>
          </li>
          <li>
            <Link
              to="/myFlashCard"
              className="text-gray-500 hover:text-red-500 hover:border-b-2 border-red-500 pb-2"
            >
              MyFlashcard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Subnav;
