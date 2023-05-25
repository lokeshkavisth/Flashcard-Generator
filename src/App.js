import React from "react";
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
    </div>
  );
}

export default App;
