import React from "react";
import Navbar from "./components/Navbar"
import Container from "./containers/Container";
import DisplayFlashCard from "./components/DisplayFlashCard";


function App() {
  return (
    <div className="bg-orange-50 pb-5 ">
      <Navbar />
      <Container />
      {/* <DisplayFlashCard /> */}

    </div>

  );
}

export default App;
