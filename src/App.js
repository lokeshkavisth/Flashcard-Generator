import React from "react";
import Navbar from "./component/Navbar";



import Container from "./component/Container";
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
