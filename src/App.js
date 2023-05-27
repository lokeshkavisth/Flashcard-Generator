import React from "react";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom"


import Container from "./containers/Container";
import Myflashcard from "./pages/Myflashcard";

function App() {
  return (
    
    <div className="bg-gray-200 pb-5 m-2">
      <Navbar />
     <Container />
      {/* <Myflashcard /> */}
=======
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


>>>>>>> master
    </div>
  );
}

export default App;
