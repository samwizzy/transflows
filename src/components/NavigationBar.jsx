import React from "react";
//import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className="bg-[#09124240] max-w-[1520px]">
      <div className=" max-w-[850.99px] mx-auto flex justify-between items-center ml-72">
        <div className="flex items-center">
          <div className="hidden md:flex items-center pl-4 list-none space-x-4">
            <li className="text-white text-sm font-medium border-b-2 border-transparent border-white pb-2">
              Home
            </li>
            <div className="h-3 mb-3 w-px bg-gray-300"></div>

            <li className=" flex-1 text-white text-sm font-medium ml-8 border-b-2 border-gray-600 border-transparent hover:border-white pb-2">
              About
            </li>
            <div className="h-3 mb-3 w-px bg-gray-300"></div>

            <li className="flex-1 text-white text-sm font-medium ml-8 border-b-2 border-transparent hover:border-white pb-2">
              Pages
            </li>
            <div className="h-3 mb-3 w-px bg-gray-300"></div>

            <li className="text-white text-sm font-medium ml-8 border-b-2 border-transparent hover:border-white pb-2">
              Project
            </li>
            <div className="h-3 mb-3 w-px bg-gray-300"></div>

            <li className="text-white text-sm font-medium ml-8 border-b-2 border-transparent hover:border-white pb-2">
              Contact
            </li>
          </div>
        </div>
        <div className="hidden md:flex items-center ml-auto list-none">
          <li className="text-white text-sm font-medium hover:underline mr-8">
            <FaInstagram />
          </li>
          <li className="text-white text-sm font-medium hover:underline mr-8">
            <FaFacebook />
          </li>
          <li className="text-white text-sm font-medium hover:underline mr-8">
            <FaTwitter />
          </li>
          <li className="text-white text-sm font-medium hover:underline mr-8">
            <FaLinkedinIn />
          </li>
          <button className="bg-white text-[#091242] py-5 px-4 h-full  text-sm font-medium ">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
