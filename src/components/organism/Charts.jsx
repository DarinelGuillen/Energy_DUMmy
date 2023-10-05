import React from 'react';
import Areachart from '../molecules/Areachart';

function Charts(params) {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full w-full bg-slate-950 p-0'>
        {/* Top */}
        <div className='flex grow justify-around items-center w-full space-x-2 bg-slate-900'>
          {/* Start card */}
          <div className='flex  w-[25%] h-[100%] bg-red-500   flex-col '>
            <div className='h-[70%] bg-blue-500 bg-red-400 w-30 block flex'>
              {/* left icon center*/}
              <h1>ICON </h1>
              {/* here goes a number  */}
              <h1>50%</h1>
              <label> have save 40% last year</label>
            </div>
            <div className='h-[30%] bg-yellow-500 w-30 bg-blue-500'>
              <label> % increase 100</label>
            </div>
          </div>
          {/* end card */}
          <div className='grow h-16 bg-red-800 '></div>
          <div className='grow h-16 bg-red-800 '></div>
          <div className='grow h-16 bg-red-800 '></div>
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
