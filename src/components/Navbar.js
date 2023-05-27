import React from "react";
import { Link } from 'react-router-dom'
import Logo from "../assets/almaImage.jpg";

const Navbar = () => {
  return (

    <nav className="bg-white shadow-md px-8 py-2" >
      <Link to='/'>
        <img className="w-28 m-2" src={Logo} alt="img"></img>
      </Link>
    </nav>


  );
};

export default Navbar;
