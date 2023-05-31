import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const DisplayFlashCard = () => {
  const { flashCard } = useSelector((state) => state.actionReducer);
  console.log("redux data", flashCard);
  return (
    <div className="max-w-screen-2xl px-3 mx-auto my-8 mt-20 xl:px-20 lg:px-14 md:px-10">
      {flashCard.length === 0 ? (
        <div className="flex flex-col items-center gap-5">
          <p className="font-medium text-gray-600">
            You don't have any flashcards.
          </p>
          <Link
            to={"/"}
            className="px-6 py-2 bg-blue-500 text-white rounded-md"
          >
            Create Flashcard
          </Link>
        </div>
      ) : (
        flashCard.map((values, index) => (
          <div className="p-4 m-6 mx-auto flex flex-col space-y-3 items-center justify-center bg-white rounded-md text-black w-[23rem] h-[13rem] relative border-2 border-slate-200">
            <div className="absolute -top-9">
              <img
                className="rounded-full w-16 h-16 object-cover aspect-square"
                src={""}
                alt="img"
              />
            </div>
            <h2 className="font-bold text-lg">{values.group}</h2>
            <p className="text-center font-medium text-sm text-slate-600 line-clamp-2">
              {values.groupdesc}
            </p>
            <p className="font-medium text-sm text-slate-700">
              {index + 1} Cards
            </p>
            <Link to="/carddetails">
              <button className="py-1 px-16 text-red-600 font-bold rounded-sm border-red-600 ring-2 ring-red-600">
                View Cards
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayFlashCard;
