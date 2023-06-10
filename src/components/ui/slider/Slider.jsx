import React from "react";

const Slider = ({ term, defination, image, termRef }) => {
  //   const { flashcards } = useSelector((state) => state.flashCardData);
  return (
    <div ref={termRef} className="space-y-10 w-full mt-4 xl:mt-0">
      <div className="bg-white p-5 space-y-4 sm:space-y-0 shadow-sm rounded-md sm:min-h-[300px]">
        {/* This code renders a `div` element if the `image` variable is not `null`. */}
        {/* The `div` element contains the term image. */}
        {image && (
          <div>
            <img
              src={image}
              alt={term}
              loading="lazy"
              className="sm:w-96 sm:float-left sm:mr-4 sm:mb-2 aspect-video w-full object-cover rounded-md"
            />
          </div>
        )}
        <div>
          <h2 className="font-semibold mb-2">{term}</h2>
          <p>{defination}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
