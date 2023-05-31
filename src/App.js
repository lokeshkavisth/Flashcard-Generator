import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./containers/Container";
import FlashCardDetails from "./pages/FlashCardDetails";
import Error from "./components/Error";
import DisplayFlashCard from "./components/DisplayFlashCard";

function App() {
  return (
    <div className="bg-slate-100 pb-5 min-h-screen">
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
