// print template page

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PrintTemplate = ({ pdfRef }) => {
  // Get the flashcards from the redux store
  const { flashcards } = useSelector((state) => state.flashCardData);

  // Get the ID from the URL params
  const params = useParams();
  const { id } = params;

  // Check if the ID is in the flashcards array
  const flashcard = flashcards.find((item) => item.id === Number(id));

  // If the ID is in the flashcards array, render the template
  if (flashcard) {
    return (
      <div className="hidden">
        <div
          ref={pdfRef}
          key={flashcard.id}
          className="bg-white p-4 sm:p-8 max-w-4xl"
        >
          <div className="space-y-10">
            <div className="flex items-center flex-col md:flex-row gap-5 sm:flex-row">
              <div>
                <img
                  src={flashcard.groups.Profile}
                  alt="Group_image"
                  className="w-52 aspect-square rounded-md object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl text-center sm:text-left">
                  {flashcard.groups.group}
                </h2>
                <p className="text-gray-600">{flashcard.groups.groupDesc}</p>
              </div>
            </div>

            <div>
              <ul className="space-y-6 flex flex-col">
                {flashcard.terms.map(({ term, defination, image }, index) => (
                  <li key={index}>
                    <div className="flex gap-3 mb-4">
                      <span className="w-7 h-7 rounded-full aspect-square bg-blue-500 text-white grid place-items-center">
                        1
                      </span>
                      <h3 className="font-semibold">{term}</h3>
                    </div>

                    <div className="text-center">
                      <div>
                        <img
                          src={image}
                          alt="Group_image"
                          className="w-40 aspect-square object-cover rounded-md float-left mr-2 mb-2 mt-2"
                        />
                      </div>
                      <div>
                        <p className="text-gray-600 text-justify">
                          {defination}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If the ID is not in the flashcards array, return null
  return null;
};

export default PrintTemplate;
