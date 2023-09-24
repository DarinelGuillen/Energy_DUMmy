import React, { useState, useContext, useEffect, useRef } from "react";
import UserContext from "../../contexts/UserContext.js";
import Navbar from "../molecules/Navbar";

function Devices() {
  const dropdownRef = useRef(null);
  const { User, setUser } = useContext(UserContext);  

  useEffect(() => {
    console.log(User.isDropdownVisible);
  }, [User]);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      if (!event.target.closest("#dropdown-button")) {
        setUser({
          ...User,
          isDropdownVisible: false,
        });
      }
    }
  };

  useEffect(() => {
    if (User.isDropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [User.isDropdownVisible]);


  return (
    <>
    <div className="flex flex-col flex-grow h-full">
        <>
      <div
        ref={dropdownRef}
        id="dropdown"
        className={`z-20 absolute bottom-0 left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-0 bottom-0 dark:bg-gray-700 
          ${User.isDropdownVisible ? "block" : "hidden"}`}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 hover-bg-gray-100 dark-hover:bg-gray-600 dark-hover:text-white">Mockups</button>
          </li>
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 hover-bg-gray-100 dark-hover:bg-gray-600 dark-hover:text-white">Templates</button>
          </li>
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 hover-bg-gray-100 dark-hover:bg-gray-600 dark-hover:text-white">Design</button>
          </li>
          <li>
            <button type="button" className="inline-flex w-full px-4 py-2 hover-bg-gray-100 dark-hover:bg-gray-600 dark-hover:text-white">Logos</button>
          </li>
        </ul>
      </div>
        </>

        {/* Top row */}
        <div className="h-auto">
          <Navbar />
        </div>


      {/* Bottom row */}
      <div className="flex-grow">
        Content for the bottom row (90% of vh)
      </div>
    </div>
    </>
  );
}

export default Devices;
