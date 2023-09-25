import React, { useState, useContext, useEffect, useRef } from "react";
import UserContext from "../../contexts/UserContext.js";
import Navbar from "../molecules/Navbar";
import List from "../molecules/List.jsx";

function Devices() {
  const { User, setUser } = useContext(UserContext);  

  useEffect(() => {
    console.log(User.isDropdownVisible);
  }, [User]);

  

  return (
    <>
    <div className="flex flex-col flex-grow h-full">
        

        {/* Top row */}
        <div className="h-auto">
          <Navbar />
        </div>


      {/* Bottom row */}
      <div className="flex-grow ">
        <List/>
        
      </div>
    </div>
    </>
  );
}

export default Devices;
