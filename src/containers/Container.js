import React from "react";
import CreateFlashcard from "../pages/CreateFlashcard";
import Subnav from "../components/Subnav";
import { Route, Routes } from "react-router-dom";
import DisplayFlashCard from "../components/DisplayFlashCard";
import FlashCardDetails from "../pages/FlashCardDetails";
import Error from "../components/Error";
const Container = () => {
  return (
    <main className="max-w-screen-2xl px-3 mx-auto my-8 mt-20 xl:px-20 lg:px-14 md:px-10">
      <Subnav />

      <Routes>
        <Route path="/" element={<CreateFlashcard />} />
        <Route path="/myFlashCard" element={<DisplayFlashCard />} />
        <Route path="/carddetails" element={<FlashCardDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default Container;
