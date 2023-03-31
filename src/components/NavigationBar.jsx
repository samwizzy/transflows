import React from "react";
//import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className="bg-[#09124240] w-full">
      <div className=" max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center pl-4 list-none space-x-4">
            <li className="text-white text-sm font-medium border-b-2 border-transparent border-white py-2">Home</li>
            <div className="h-3 w-px bg-gray-300" />

            <li className=" flex-1 text-white text-sm font-medium ml-8 border-b-2 border-gray-600 border-transparent py-2">
              About
            </li>
            <div className="h-3 w-px bg-gray-300" />

            <li className="flex-1 text-white text-sm font-medium ml-8 border-b-2 border-transparent py-2">Pages</li>
            <div className="h-3 w-px bg-gray-300" />

            <li className="text-white text-sm font-medium ml-8 border-b-2 border-transparent py-2">Project</li>
            <div className="h-3 w-px bg-gray-300" />

            <li className="text-white text-sm font-medium ml-8 border-b-2 border-transparent py-2">Contact</li>
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
            <FaLinkedin />
          </li>
          <button className="bg-white text-[#091242] py-5 px-4 h-full  text-sm font-medium ">Request a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
