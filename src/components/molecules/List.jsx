import React from "react";
import Check from "../atoms/Check";
import Chartmini from "../atoms/Chartmini";
import "../../assets/styles/List.css";

function List() {
  return (
    <>
    <div className="flex justify-center  pt-5 w-[98%] md:w-[98%] lg:w-11/12 text-[#fff] mx-auto">

      <div className="bd-red-500 borderEspecial border-b-2 border-[--Lines] rounded-lg hover:bg-gray-700 flex h-auto w-full ">
        {/* left */}
        <div className="flex w-2/5  ">
          <div className=" w-full h-full flex flex-col justify-center  ">
            <h1 className="text-5xl font-montserrat font-bold">Foco 1 Foco 1 Foco 1</h1>
            <div className="label-container w-[50%] overflow-hidden whitespace-no-wrap overflow-ellipsis">
              <p className="label text-sm font-montserrat font-bold">
                This is a smaller label s is a smaller label s is a smaller label s is a smaller label
              </p>
            </div>
          </div>
        </div>
        {/* end left */}
        {/* center */}
        <div className="  flex  h-auto  overflow-hidden w-2/5">
          <Chartmini />
        </div>
        {/* end center */}
        {/* rihtg */}
        <div className="grow w-1/5  ">
          {/* Here goes turn on of device */}
          <div className="flex items-center justify-center w-full h-full">
            <Check />
          </div>

        </div>
        {/* end  */}

      </div>
      
    </div>
    
    
    </>
  );
}

export default List;
