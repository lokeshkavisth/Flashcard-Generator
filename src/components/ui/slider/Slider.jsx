import React from "react";

const Slider = ({ term, definition, image, termRef }) => {
  return (
    <div ref={termRef} className="space-y-10 w-full mt-4 xl:mt-0">
      <div className="bg-white p-5 space-y-4 sm:space-y-0 shadow-sm rounded-md sm:min-h-[300px]">
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
          <p>{definition}</p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
