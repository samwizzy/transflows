import React, { useState } from "react";
import { Logo } from "../TransflowImages/Aimages";
import { clock } from "../TransflowImages/Aimages";
import { Call } from "../TransflowImages/Aimages";
import { Email } from "../TransflowImages/Aimages";
//import NavigationBar from '../components/NavigationBar';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-[#091242] py-2 md:py-4 lg:py-4 max-w-[1920px]">
      <div className="max-w-[850.99px] mx-auto flex justify-between items-center p-4  ml-72 ">
        <div className="flex items-center">
          <img className="h-10 w-25 mr-12" src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex items-center mr-8">
            <img className="h-6 w-6 mr-2" src={clock} alt="Clock" />
            <div>
              <p className="text-white text-sm font-medium">Mon-Sat</p>
              <p className="text-gray-400 text-xs font-medium">9.00 - 18.00</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-8">
              <img className="h-6 w-6 mr-2" src={Email} alt="Email" />
              <div>
                <p className="text-white text-sm font-medium">Email</p>
                <p className="text-gray-400 text-xs font-medium">
                  Contact@logistics.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex items-center  ">
            <img className="h-6 w-6 mr-2" src={Call} alt="Call" />
            <div>
              <p className="text-white text-sm font-medium">Call</p>
              <p className="text-gray-400 text-xs font-medium">
                +1 123 456 7890
              </p>
            </div>
          </div>
        </div>

        <div onClick={handleNav} className="md:hidden flex items-center">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r  border-r-[#091242] bg-[#091242] ease-in-out duration-500"
            : " ease-in-out duration 500 fixed left-[-100%]"
        }
      >
        <div className="flex items-center">
          <img className="h-6 w-6 mr-2" src={clock} alt="Clock" />
          <div className="p-4">
            <p className="text-white text-sm font-medium">Mon-Sat</p>
            <p className="text-gray-400 text-xs font-medium">9.00 - 18.00</p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-6 w-6 mr-2" src={Email} alt="Email" />
          <div className="p-4">
            <p className="text-white text-sm font-medium">Email</p>
            <p className="text-gray-400 text-xs font-medium">
              Contact@logistics.com
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img className="h-6 w-6 mr-2" src={Call} alt="Call" />
          <div className="p-4">
            <p className="text-white text-sm font-medium">Call</p>
            <p className="text-gray-400 text-xs font-medium">+1 123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
