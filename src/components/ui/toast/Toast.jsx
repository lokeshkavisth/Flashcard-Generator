import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const Toast = ({ fn, toastClass }) => {
  return (
    <div
      className={`p-5 space-y-4 bg-blue-600 w-72 sm:w-96 rounded-md text-white fixed top-2 ${toastClass} left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out z-50`}
    >
      <div>
        <h3 className="flex flex-col sm:flex-row items-center gap-2 text-xl font-semibold mb-2">
          <i className="text-2xl text-blue-200">
            <BsCheckCircle />
          </i>
          Your Flashcard is created.
        </h3>
        <p className="text-blue-200">
          Go to My Flashcard tab and check your all of your created flashcards.
        </p>
      </div>
      <div className="text-right">
        <button
          type="button"
          onClick={fn}
          className="font-semibold rounded-md px-4 py-1 text-blue-200 min-w-max hover:bg-blue-700 border-2 border-blue-300 transition-all hover:border-blue-700 active:animate-ping"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Toast;
