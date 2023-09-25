import React from "react";
import Devices from "../components/organism/Devices";
import Charts from "../components/organism/Charts";
import "../assets/styles/Main.css";

function Main() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen flex-grow-1">
      {/* Left Column */}
      <div className="flex bg-[--black] p-0 md:w-1/5 lg:w-1/6 flex-grow no-scrollbar component-box component-box-animation smooth-scroll">
        <Devices />
      </div>

      {/* Right Column */}
      <div className="hidden md:block flex-grow bg-[--black] p-4 component-box smooth-scroll component-box-animation right-column">
        <Charts />
      </div>
    </div>
  );
}

export default Main;
