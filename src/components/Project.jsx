import React from "react";
import { ManWoman } from "../TransflowImages";
import { Truck } from "../TransflowImages";
import { ShipWater } from "../TransflowImages";
import { Container } from "../TransflowImages";
import { TruckFlex } from "../TransflowImages";
import "../styles/HomeStyles.css";

const Project = () => {
  return (
    <div className="mb-24">
      <div className="">
        <div className="w-full h-80 bg-white">
          <h1 className="font-bold text-2xl text-center text-[#1C1F35]">Transporting Across The World</h1>
        </div>

        <div className="h-96 w-full bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]">
          <div className="transform -translate-y-64">
            <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-x-4 justify-center items-start p-3 mb-16">
              <div className="h-80 relative bg-no-repeat bg-center p-2" style={{ backgroundImage: `url(${Truck})` }}>
                <div className="pb-4 absolute bottom-0">
                  <h1 className="text-xl text-white font-bold">Liquid Transportation</h1>
                  <p className="text-[#FFB629] text-xs ">Premium Tankers</p>
                </div>
              </div>
              <div className="h-80 p-2 relative bg-no-repeat" style={{ backgroundImage: `url(${ManWoman})` }}>
                <div className="pb-4 absolute bottom-0">
                  <h1 className="text-xl text-white">Packaging Solutions</h1>
                  <p className="text-[#FFB629] text-sm">Warehouse Management</p>
                </div>
              </div>
              <div className="h-80 p-2 relative bg-no-repeat" style={{ backgroundImage: `url(${TruckFlex})` }}>
                <div className="pb-4 absolute bottom-0">
                  <h1 className="text-xl text-white">Contract Logistics</h1>
                  <p className="text-[#FFB629] text-sm">Road Transportation</p>
                </div>
              </div>
              <div className="h-80 p-2 relative bg-no-repeat" style={{ backgroundImage: `url(${Container})` }}>
                <div className="pb-4 absolute bottom-0">
                  <h1 className="text-xl text-white">Warehouse & Distribution</h1>
                  <p className="text-[#FFB629] text-sm">Large Warehouse</p>
                </div>
              </div>
              <div className="h-80 p-2 relative bg-no-repeat" style={{ backgroundImage: `url(${ShipWater})` }}>
                <div className="pb-4 absolute bottom-0">
                  <h1 className="text-xl text-white">Specialized Transport</h1>
                  <p className="text-[#FFB629] text-sm ">Ocean Transports</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center h-full w-full">
              <button className="bg-[#091242] w-32 h-12 relative overflow-hidden text-[#ffffff] font-bold text-xs text-center">
                More Work
                <span className="absolute bottom-0 right-0">
                  <span
                    className="block h-8 w-8 bg-[#1F2A69]"
                    style={{
                      transform: "rotate(90deg)",
                      marginTop: "-5px",
                      marginRight: "-3px",
                      borderRadius: "0px 0px 0px 250px",
                      transition: "all 0.3s ease-in-out",
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
