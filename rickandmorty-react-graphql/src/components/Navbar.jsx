import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

//import Logo from "../assets/logo.png";
// import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src="" alt="Logo Image" style={{ width: "200px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/">Characters</a>
        </li>
        <li>
          <a href="/episodes">Episodes</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">Characters</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/episodes">Episodes</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
