import React from "react";
import Logo from "./image/almaImage.jpg";

const Navbar = () => {
  return (

    <nav className="bg-white shadow-md px-8 py-2">
      <img className="w-28 m-2" src={Logo} alt="img"></img>
    </nav>

  );
};

export default Navbar;
