// main flashcard Top Navbar

import React from "react";
import Logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav
        className="p-2 
        md:px-10
        lg:px-15
        xl:px-20
        bg-white
        shadow-md
      
      "
      >
        <div>
          <NavLink to={"/"}>
            <img className="w-32 " src={Logo} alt="fleshcard-generator" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
