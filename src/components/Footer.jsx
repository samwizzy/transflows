import React from "react";
import { CallUs, Logo, Mail, WaterContainer } from "../TransflowImages";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/HomeStyles.css";

const Footer = () => {
  return (
    <footer className="bg-[#091242] text-gray-400 mt-4">
      <div>
        <img src={WaterContainer} alt="" />
      </div>

      <div className="w-full bg-[#ffffff40]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-x-0">
            <div className="bg-[#091242] flex justify-center items-center py-4 w-[35%]">
              <img src={Logo} alt="" />
            </div>

            <h4 className="text-lg font-bold text-white w-[22%] pl-7">Pages</h4>
            <h4 className="text-lg font-bold text-white w-[20%]">Utility</h4>
            <h4 className="text-lg font-bold text-white w-[23%]">Subscribe</h4>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 lg:py-12">
        <div className="flex justify-start items-start sm:gap-x-2 mb-8 xl:mb-0">
          <div className="w-[35%]">
            <p className="font-medium mb-4 text-xs text-white">
              Leverage agile frameworks to provide a robust synopsis for strategy collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="flex items-center">
              <img src={Mail} alt="" className="mr-3 w-10 h-10" />
              <div className="flex-col text-sm text-white">
                <p>Email</p>
                <p>contact@logistics.com</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img src={CallUs} alt="" className="mr-3 w-10 h-10" />
              <div className="flex-col text-sm text-white">
                <p>Call Us</p>
                <p>(00) 112 365 489</p>
              </div>
            </div>
          </div>

          <div className="mb-8 xl:mb-0 w-[22%] pl-6">
            <ul className="list-none text-white text-sm">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Our Team</li>
              <li className="mb-2">Our Project</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Contact</li>
            </ul>
          </div>

          <div className="mb-8 xl:mb-0 w-[20%]">
            <ul className="list-none text-white text-sm">
              <li className="mb-2">Style Guide</li>
              <li className="mb-2">Changelog</li>
              <li className="mb-2">Licenses</li>
              <li className="mb-2">Protected</li>
              <li className="mb-2">Not Found </li>
            </ul>
          </div>

          <div className="w-[23%]">
            <div className="">
              <input
                type="email"
                placeholder="Email here*"
                className="input text-white text-sm py-2 px-3 border-gray-400 w-30"
              />
            </div>
            <div className="flex gap-4 items-center">
              <button className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] text-white  py-2 px-4 mt-2">
                Subscribe
              </button>

              <div className="mt-4 flex list-none mr-2">
                <li className="text-white hover:text-white mr-4">
                  <FaLinkedin />
                </li>
                <li className="text-white hover:text-white mr-4">
                  <FaFacebook />
                </li>
                <li className="text-white hover:text-white mr-4">
                  <FaTwitter />
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#4E5683] h-px mt-8 py-8 flex justify-between text-xs">
          <p>Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
          <div className="flex list-none  gap-8 text-xs">
            <li>Style Guide</li>
            <li>Licenses </li>
            <li>Changelog</li>
            <li>Password</li>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
