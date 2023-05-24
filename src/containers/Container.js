import React from "react";
import CreateFlashcard from "../pages/CreateFlashcard";
import Subnav from "../components/Subnav";
import FlashCardDetails from "../pages/FlashCardDetails"
const Container = () => {
  return (
    <main
      className="max-w-screen-2xl px-3 mx-auto my-8 mt-20 xl:px-20 lg:px-14 md:px-10"
    >
<<<<<<< HEAD:src/component/Container.js
      <Subnav />
      <CreateFlashcard />
      <div className="mt-10 text-center ">
        <button className=" bg-red-500 text-white px-12 py-2 rounded-md">
=======
      {/* <Subnav /> */}
      {/* <CreateFlashcard /> */}

      <FlashCardDetails />
      {/* <div className="mt-10 text-center ">
        <button className=" bg-red-500 text-white px-10 py-2 rounded-md">
>>>>>>> f66191e52bebf4ac5a053175def00dc0b6aecad9:src/containers/Container.js
          Create
        </button>
      </div> */}
    </main>
  );
};

export default Container
