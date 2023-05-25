import React from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Container from "./containers/Container";
import FlashCardDetails from "./pages/FlashCardDetails";
import Error from "./components/Error";
import DisplayFlashCard from "./components/DisplayFlashCard";

function App() {
  return (
    <div className="bg-orange-50 pb-5 ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/myFlashCard" element={<DisplayFlashCard />} />
        <Route path="/carddetails" element={<FlashCardDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>


    </div>
  );
}

export default App;
