"use client"; 
import React from 'react';
import { useRouter } from 'next/navigation'; 



const FirstPg = () => {
  const router = useRouter();

  const handleFeedbackClick = () => {
    router.push('/newPage'); 
  };

  const handleResumesClick = () => {
    router.push('/resumebuilder');
  };

  return (
    <div className="h-[94vh] w-full bg-[#F5F5F5] flex items-center justify-center">
      <div className="text-center space-y-3">
        <p className='text-3xl font-light'>Tired with your Old Resume🥱</p>
        <h1 className="text-6xl text-[#08285f] font-bold bowl">Let's Build The Best Resume</h1>
        <h1 className="text-6xl text-red-700 font-bold bowl">That Speaks for You.</h1>
        <p className="text-lg text-red-800">" Create the Resume That Defines You and Opens Doors to Success🚀 "</p>

        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleFeedbackClick}
            className="bg-orange-500 text-md text-white py-3 px-6 rounded hover:text-orange-200"
          >
            Related Feedback
          </button>
          <button
            onClick={handleResumesClick} 
            className="bg-green-800 text-md text-white py-3 px-6 rounded hover:text-green-200"
          >
           Let's Build One
          </button>
        </div>
      </div>   
    </div>
  );
};

export default FirstPg;
