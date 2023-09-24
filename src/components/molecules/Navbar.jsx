import React, { useState, useContext } from "react";
import Icon from "../../assets/img/mas.png"; // Import your icon image here
import UserContext from "../../contexts/UserContext.js";

function Navbar() {
  const { User, setUser } = useContext(UserContext);

  const toggleDropdown = () => {
    setUser({
      ...User,
      isDropdownVisible: !User.isDropdownVisible,
    });
  };

  const handlerSearch = (e) => {
    e.preventDefault();
    console.log("Hello World!");
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Row 1: Icon aligned to the right */}
      <div className="flex w-full justify-end py-4">
        <img
          src={Icon}
          alt="Icon"
          className="h-6 w-6 mr-[7%] mx-auto ml-auto" // Use ml-auto to align to the right
        />
      </div>

      {/* Row 2: Search bar occupying 100% width with spacing */}
      <form className="align-items-center pt-0 px-2">
        <div className="flex relative text-white">
          <button
            id="dropdown-button"
            onClick={toggleDropdown}
            className="flex-shrink-0 inline-flex items-center text-sm font-medium text-center"
            type="button"
          >
            All
            <span className="material-symbols-outlined">expand_more</span>
          </button>

          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-[80%] z-20 text-sm text-[--white] rounded-full bg-[--Inputs-bg]"
              placeholder="Casa, Cuarto, oficina..."
              required
            />
            <button
              onClick={handlerSearch}
              type="submit"
              className="absolute top-0 right-0 p-2 h-full text-white"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
