import React from 'react';
import Areachart from '../molecules/Areachart';

function Charts(params) {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full w-full bg-slate-950 p-3'>
        {/* Top */}
        <div className='flex grow justify-around items-center w-full space-x-2 bg-slate-900'>
          <div className='grow h-16 bg-slate-800 '></div>
          <div className='grow h-16 bg-slate-800 '></div>
          <div className='grow h-16 bg-slate-800 '></div>
          <div className='grow h-16 bg-slate-800 '></div>
        </div>
        {/* End Top */}
        
        {/* Center */}
        <div className='w-full h-1/2 bg-slate-900 mt-4'>
          <Areachart/>
        </div>
        {/* End Center */}
        
        {/* Bottom */}
        <div className='grow mt-4 bg-slate-900 w-full h-1/4'>
          <h2 className='text-2xl font-bold'>About the total energy expended in a month</h2>
          <p className='text-lg mt-2'>Some recommendations: turn off things, etc.</p>
        </div>
        {/* End Bottom */}
      </div>
    </>
  );
}

export default Charts;
