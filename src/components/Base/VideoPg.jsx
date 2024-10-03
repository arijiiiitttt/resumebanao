"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { PiPlayCircleLight } from "react-icons/pi";

const VideoPg = () => {
    const router = useRouter();

    const handleDemoClick = () => {
        router.push('/newPage');
    };

    return (
        <div className='h-[60vh] w-full bg-[#F5F5F5] flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold mb-6'>Video Page</h1>
           
            <button
                onClick={handleDemoClick}
                className="flex items-center bg-white text-black py-4 px-7 rounded-full shadow-md hover:bg-orange-400 transition duration-300 ease-in-out"
                aria-label="Navigate to Video Demo Page"
            >
                <PiPlayCircleLight size={24} className="mr-2" />
                Video Demo
            </button>
        </div>
    );
}

export default VideoPg;
