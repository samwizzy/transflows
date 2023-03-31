import React from "react";
import {
  DreamLifter,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Iconn,
  Plane,
} from "../TransflowImages";
import "../styles/HomeStyles.css";

const WhyChooseUs = () => {
  return (
    <div className="WhyChooseUs w-full flex mt-8">
      <div className="bg-[#091242] w-1/2 flex justify-center items-center">
        <div className="WhyUs flex justify-center items-center">
          <img src={DreamLifter} alt="" className="WhyUs-Img" />
          <div className="Icon w-80 p-2 flex justify-center items-center">
            <div className="bg-[#ffffff] bg-opacity-20 absolute w-px h-full mr-48"></div>
            <img src={Plane} alt="" />
            <p className="font-normal text-xl ml-3 mt-3">
              Moving your products across borders
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] w-1/2  justify-center items-center flex flex-col">
        <div className="w-96  ">
          <div className="flex ">
            <div className="h-7 w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
            <p className="text-black bg-[#E8E8E880] w-28 text-sm p-1">
              Why Choose
            </p>
          </div>
          <h1 className="font-bold text-2xl mt-2">
            We create opportunity to reach potential
          </h1>
          <p className="text-[#666C89] text-sm mt-3">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.{" "}
          </p>
        </div>
        <div className="flex leading-8 justify-between w-96 mt-7">
          <div className="list-none">
            <div className="flex  items-center">
              <img src={Icon2} alt="" className="w-10 h-10" />
              <li className="ml-2 text-sm">Safe Package</li>
            </div>
            <div className="flex justify-center items-center mt-2">
              <img src={Icon3} alt="" className="w-10 h-10" />
              <li className="ml-2 text-sm">Global Tracking</li>
            </div>
            <div className="flex justify-center items-center mt-2">
              <img src={Icon4} alt="" className="w-10 h-10" />
              <li className="ml-2 text-sm">In Time Delivery</li>
            </div>
          </div>
          <div className="list-none">
            <div className="flex  items-center">
              <img src={Icon5} alt="" className="w-10 h-10" />
              <li className="text-sm ml-2">Ship Everyware</li>
            </div>
            <div className="flex  items-center mt-2">
              <img src={Icon6} alt="" className="w-10 h-10" />
              <li className="text-sm ml-2">24/7 Support</li>
            </div>
            <div className="flex  items-center mt-2">
              <img src={Iconn} alt="" className="w-10 h-10" />
              <li className="text-sm ml-2">Transparant Pricing</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
