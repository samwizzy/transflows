import React from "react";
import { Hicons1 } from "../TransflowImages/Aimages";
import { Hicons2 } from "../TransflowImages/Aimages";
import { Hicons3 } from "../TransflowImages/Aimages";
import { Hicons4 } from "../TransflowImages/Aimages";
const Services = () => {
  return (
    <div className=" w-screen mx-auto py-16">
      <div className="flex max-w-4xl mx-auto">
        <div>
          <div className="flex">
            <div className="h-7  w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>

            <p className="text-black bg-[#E8E8E880] w-28 text-sm p-1">
              WHAT WE DO
            </p>
          </div>
          <h1 className="font-display font-semibold text-4xl w-72 mt-2 text-[#1C1F35]">
            {" "}
            Safe & Reliable Cargo Solutions
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-[1240px] mx-auto ">
          <div className="flex">
            <img src={Hicons1} alt="" />
            <div className="h-16 mb-3 w-px bg-gray-300"></div>

            <div className="flex-col ml-5 max-w-[267px]">
              <h1 className="text-xl font-bold">Sea Transport Services</h1>
              <p className="text-sm">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="flex">
            <img src={Hicons2} alt="" />
            <div className="h-16 mb-3 w-px bg-gray-300"></div>

            <div className="flex-col ml-5 max-w-[267px]">
              <h1 className="text-xl font-bold">Warehousing Services</h1>
              <p className="text-sm">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="flex">
            <img src={Hicons3} alt="" />
            <div className="h-16 mb-3 w-px bg-gray-300"></div>

            <div className="flex-col ml-5 max-w-[267px]">
              <h1 className="text-xl font-bold">Air Fright Services</h1>
              <p className="text-sm">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
          <div className="flex">
            <img src={Hicons4} alt="" />
            <div className="h-16 mb-3 w-px bg-gray-300"></div>

            <div className="flex-col ml-5 max-w-[267px]">
              <h1 className="text-xl font-bold">Local Shipping Services</h1>
              <p className="text-sm">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
