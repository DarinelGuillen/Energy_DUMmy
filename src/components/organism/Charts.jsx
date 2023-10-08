import React, { useContext } from "react";
import Areachart from '../molecules/Areachart';
import Menu from '../atoms/Menu';
import UserContext from '../../contexts/UserContext';
import Cardinfo from "../molecules/Cardinfo";

function Charts() {
  const data = [
    { id: 1, title: "Charts", number: 4000, icon: "" },
    { id: 2, title: "Statistics", number: 3500, icon: "" },
    { id: 3, title: "Reports", number: 2800, icon: "" },
    { id: 4, title: "Analytics", number: 5000, icon: "" }
  ];

  const { User } = useContext(UserContext);

  return (
    <>
      <div className="flex absolute justify-center items-center w-full h-auto ">
        {!User.leftColumn && <Menu />}
      </div>
      <div className='flex flex-col items-center justify-center h-full w-full p-0'>
        {/* Top */}
        <div className='flex p-2 grow-0 w-full'>
          <div className="w-full h-full">
            <div className="grid grid-cols-12 gap-4">
              {data.map((cardData) => (
                <Cardinfo key={cardData.id} data={cardData} />
              ))}
            </div>
          </div>
        </div>
        {/* End Top */}
        
        {/* Center */}
        <div className='w-full grow md:h-1/6 lg:h-auto bg-slate-900 mt-4'>
          <Areachart/>
        </div>
        {/* End Center */}
        
        {/* Bottom */}
        <div className='grow mt-4 bg-slate-900 w-full h-auto'>
          <h2 className='text-2xl font-bold'>
            About the total energy expended in a month
          </h2>
          <p className='text-lg mt-2'>Some recommendations: turn off things, etc.</p>
        </div>
        {/* End Bottom */}
      </div>
    </>
  );
}

export default Charts;
