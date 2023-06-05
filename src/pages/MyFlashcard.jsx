// myflashcard page that shows all flashcards

import React from "react";
import Card from "../components/ui/card/Card";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MyFlashcard = () => {
  const { flashcards } = useSelector((state) => state.flashCardData);
  return (
    <div className="flex gap-3 flex-wrap mx-auto ">
      {/* if flashcard state data is not empty then shows cards else shows an message */}

      {flashcards.length == 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 text-center mx-auto">
          <p className="text-black text-2xl">You don't have any flashcards</p>
          <NavLink
            to={"/"}
            className={
              "px-6 py-2 bg-red-500 rounded-md text-xl font-semibold text-white hover:bg-red-700 transition-all"
            }
          >
            Create Flashcard
          </NavLink>
        </div>
      ) : (
        flashcards.map(({ id, groups, terms }) => (
          <Card
            key={id}
            id={id}
            group={groups.group}
            groupDesc={groups.groupDesc}
            terms={terms}
            image={groups.Profile}
          />
        ))
      )}
    </div>
  );
};

export default MyFlashcard;
