import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md font-[popins]">
      <nav className="mx-auto px-6 py-4 ">
        <div className="flex justify-between items-center">
          <Link className="text-5xl font-bold" to="/">News Hub</Link>
          <div className="block lg:hidden top-10 right-10">
            <button onClick={toggleMenu} className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 absolute top-[75px] right-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-8">
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-items p-2 font-semibold text-lg text-start"><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
