import React from 'react'

const Subnav = () => {
  return (
    <nav>
      <h2 className="self-center m-5 text-xl pb-2 font-semibold whitespace-nowrap dark:text-white">
        Create Flashcard
      </h2>

      <div className=" border-b-2  border-b-gray-300">
        <ul className="flex flex-row font-medium mt-0 px-5 gap-4 text-sm mb-2">
          <li>
            <a
              href="/"
              className="text-gray-500  hover:text-red-500  "
              aria-current="page"
            >
              Create New
            </a>
          </li>
          <li>
            <a href="/" className="text-gray-500 hover:text-red-500">
              MyFlashcard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Subnav
