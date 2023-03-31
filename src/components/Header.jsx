import React from "react";
import { Logo } from "../TransflowImages";
import { clock } from "../TransflowImages";
import { Call } from "../TransflowImages";
import { Email } from "../TransflowImages";

const Header = () => {
  return (
    <div className="bg-[#091242] py-2 md:py-4 lg:py-4 w-full">
      <div className="max-w-4xl mx-auto flex justify-between items-center p-3 ">
        <div className="flex items-center">
          <img className="h-10 w-25 mr-12" src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            <img className="h-10 w-10 mr-2" src={clock} alt="Clock" />
            <div>
              <p className="text-white text-sm font-medium">Mon — Sat</p>
              <p className="text-gray-400 text-xs font-medium">9.00 — 18.00</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-8">
              <img className="h-10 w-10 mr-2" src={Email} alt="Email" />
              <div>
                <p className="text-white text-sm font-medium">Email</p>
                <p className="text-gray-400 text-xs font-medium">Contact@logistics.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex items-center  ">
            <img className="h-10 w-10 mr-2" src={Call} alt="Call" />
            <div>
              <p className="text-white text-sm font-medium">Call</p>
              <p className="text-gray-400 text-xs font-medium">+1 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
