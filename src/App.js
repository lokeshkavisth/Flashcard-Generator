import React from "react";
<<<<<<< HEAD
import Navbar from "./component/Navbar";



import Container from "./component/Container";
import Myflashcard from "./pages/Myflashcard";

function App() {
  return (
    <div className="bg-gray-200 pb-5 m-2">
      <Navbar />
     <Container />
      {/* <Myflashcard /> */}
=======
import Navbar from "./components/Navbar"
import Container from "./containers/Container";
import DisplayFlashCard from "./components/DisplayFlashCard";


function App() {
  return (
    <div className="bg-orange-50 pb-5 ">
      <Navbar />
      <Container />
      {/* <DisplayFlashCard /> */}

>>>>>>> f66191e52bebf4ac5a053175def00dc0b6aecad9
    </div>
  );
}

export default App;
