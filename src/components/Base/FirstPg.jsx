"use client"; 
import React from 'react';
import { useRouter } from 'next/navigation'; 
const FirstPg = () => {
  const router = useRouter();

  const handleGitHubClick = () => {
    router.push('/newPage'); 
  };

  const handleResumesClick = () => {
    router.push('/secondPage');
  };

  return (
    <div className="h-[55vh] w-full bg-[#F5F5F5] flex items-center justify-center">
      <div className="text-center space-y-3">
        <p className='text-3xl '>Tiered with your Old Resume</p>
        <h1 className="text-6xl text-[#08285f] font-bold">Welcome to the Page</h1>
        <h1 className="text-6xl text-red-700 font-bold">Welcome to the Page</h1>
        <p className="text-lg text-red-800">Click a button to navigate to another page</p>

        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleGitHubClick}
            className="bg-orange-500 text-md text-white py-3 px-6 rounded hover:text-orange-200"
          >
            Go to First Page
          </button>
          <button
            onClick={handleResumesClick}
            className="bg-green-800 text-md text-white py-3 px-6 rounded hover:text-green-200"
          >
            Go to Second Page
          </button>
        </div>
      </div>   
    </div>
  );
};

export default FirstPg;
