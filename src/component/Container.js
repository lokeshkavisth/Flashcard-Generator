import React from "react";
import CreateFlashcard from "../pages/CreateFlashcard";
import Subnav from "./Subnav";
import FlashCardDetails from "../pages/FlashCardDetails"
const Container = () => {
  return (
    <main
      className="max-w-screen-2xl px-3 mx-auto my-8 mt-20 xl:px-20 lg:px-14 md:px-10"
    >
      {/* <Subnav /> */}
      {/* <CreateFlashcard /> */}

      <FlashCardDetails />
      {/* <div className="mt-10 text-center ">
        <button className=" bg-red-500 text-white px-10 py-2 rounded-md">
          Create
        </button>
      </div> */}
    </main>
  );
};

export default Container
