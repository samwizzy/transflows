import React from "react";
import { ManWoman } from "../TransflowImages/Aimages";
import { Truck } from "../TransflowImages/Aimages";
import { ShipWater } from "../TransflowImages/Aimages";
import { Container } from "../TransflowImages/Aimages";
import { TruckFlex } from "../TransflowImages/Aimages";
const Project = () => {
  return (
    <div>
      <div className="h-screen justify-center flex flex-col">
        <div className="h-96 w-full bg-white">
          <h1 className="font-bold text-2xl text-center">
            Transporting Across The World
          </h1>
        </div>
        <div className="h-96 w-full bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
          <div className="grid md:grid-cols-5 gap-3 justify-center items-center p-8 transform  -translate-y-72">
            <div className="p-2" style={{ position: "relative" }}>
              <img
                src={Truck}
                alt=""
                className="h-auto w-full object-contain"
                style={{
                  background:
                    "linearGradient(0deg, #091242 14.34%, rgba(60, 60, 60, 0) 43.86%)",
                }}
              />

              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Liquid Transportation</h1>
                <p className="text-[#FFB629] text-sm ">Premium Tankers</p>
              </div>
            </div>
            <div className="p-2 " style={{ position: "relative" }}>
              <img
                src={ManWoman}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Packaging Solutions</h1>
                <p className="text-[#FFB629] text-sm text-center">
                  Warehouse Management
                </p>
              </div>
            </div>
            <div className="p-2" style={{ position: "relative" }}>
              <img
                src={TruckFlex}
                alt=""
                className="h-auto w-full object-contain"
                style={{
                  background: `linear-gradient(rgba(9, 18, 66, 0), rgba(9, 18, 66, 1))`,
                }}
              />
              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Contract Logistics</h1>
                <p className="text-[#FFB629] text-sm text-center">
                  Road Transportation
                </p>
              </div>
            </div>
            <div className="p-2" style={{ position: "relative" }}>
              <img
                src={Container}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Warehouse & Distribution</h1>
                <p className="text-[#FFB629] text-sm ">Large Warehouse</p>
              </div>
            </div>
            <div className="p-2" style={{ position: "relative" }}>
              <img
                src={ShipWater}
                alt=""
                className="h-auto w-full object-contain"
              />
              <div className="items-start p-2 gap-4 absolute w-208 h-52 left-25 top-64 bottom-0">
                <h1 className="text-xl text-white">Specialized Transport</h1>
                <p className="text-[#FFB629] text-sm ">Ocean Transports</p>
              </div>
            </div>
            <div className="grid justify-center items-center h-full w-screen">
              <button className="bg-[#1F2A69] text-white text-sm  w-[200px]  rounded-md font-medium  py-3  mx-auto">
                More Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
