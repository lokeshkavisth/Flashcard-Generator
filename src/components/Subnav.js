import React from 'react'
import { Link } from 'react-router-dom'

const Subnav = () => {
  return (
    <nav>
      <h2 className="self-center m-5 text-xl pb-2 font-semibold whitespace-nowrap dark:text-black">
        Create Flashcard
      </h2>


      <div className=" border-b-2  border-b-gray-300">
        <ul className="flex flex-row font-medium mt-0 px-5 gap-4 text-sm mb-2">
          <Link

            to="/"
            className="text-gray-500   hover:text-red-500 "
            aria-current="page"
          >
            Create New

          </Link>

          <Link to="/myFlashCard" className="text-gray-500  hover:underline">
            MyFlashcard
          </Link>

        </ul>
      </div>


    </nav>
  );
}

export default Subnav
