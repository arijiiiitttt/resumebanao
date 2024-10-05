import { FaGithubAlt } from "react-icons/fa6";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'

const Fooder = () => {
  return (
    <div className="lg:text-[15px] text-center lg:py-2 text-black bg-white" id='contactPg'>
      <div className="flex flex-row  gap-[0.2rem] lg:gap-1.5 justify-center items-center cursor-pointer animate-bounce">
        <a href="https://github.com/arijiiiitttt" target="_blank" rel="noopener noreferrer">
          <FaGithubAlt className="lg:size-[1.02rem] " />
        </a>
        <a href="https://www.instagram.com/realarijiiiittttroyyy/" target="_blank" rel="noopener noreferrer">
          < TiSocialInstagramCircular className="lg:size-[1.02rem]" />
        </a>
        <a href="https://www.linkedin.com/in/realarijiiiitttt/" target="_blank" alt='linkedin'>
          < FaLinkedin className="lg:size-[1.02rem]" />
        </a>
      </div>
      <p className="text-xs md:text-sm lg:text-sm mt-[0.6px] md:mt-1">© Made with 💖 by realarijit</p>
    </div>
  )
}

export default Fooder
