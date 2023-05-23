import React from "react";
import Navbar from "./component/Navbar";
import Container from "./component/Container";
import Myflashcard from "./component/Flashcard/Myflashcard";


function App() {
  return (
    <div className="bg-orange-50 pb-5 ">
      <Navbar />
      <Container />
      {/* <Myflashcard /> */}
      
    </div>

  );
}

export default App;
