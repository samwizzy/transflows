import React from "react";
import { FairMan } from "../TransflowImages/Aimages";
import { WhiteMan } from "../TransflowImages/Aimages";
import { Comma } from "../TransflowImages/Aimages";

const Testimonial = () => {
  return (
    <div>
      <div className="ml-64">
        <div className="flex ">
          <div className="h-7 w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
          <p className="text-black bg-[#E8E8E880] w-28 text-sm p-1">
            Testimonial
          </p>
        </div>
        <div className="flex">
          <h1 className="font-bold font-display text-2xl">
            What Our Customer Say
          </h1>
          <img src="" alt="" />
        </div>
      </div>
      <div className="ml-64 flex">
        <div
          className=" bg-slate-200 w-1/3 h-96 p-9"
          style={{ width: "500px" }}
        >
          <div className="flex">
            <div className="flex gap-20">
              <div className="flex">
                <img src={WhiteMan} alt="" className="rounded-full w-20 h-20" />
                <div className="flex-col text-[#091242] ml-2">
                  <h1 className="font-bold text-2xl">Kathleen Smith</h1>
                  <p className="text-sm">Fuel Company</p>
                </div>
              </div>
              <img src={Comma} alt="" />
            </div>
          </div>
          <div className="flex-col">
            <p className="text-[#666C89] text-sm mt-4">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>
        </div>
        <div className="bg-[#091242] w-1/3 h-96 p-9" style={{ width: "500px" }}>
          <div className="flex">
            <div className="flex gap-20">
              <div className="flex">
                <img src={FairMan} alt="" className="rounded-full w-20 h-20" />
                <div className="flex-col text-white ml-3">
                  <h1 className="font-bold text-2xl">John Martin</h1>
                  <p className="text-sm">Restoration Company</p>
                </div>
              </div>
              <img src={Comma} alt="" className="ml-3" />
            </div>
          </div>
          <div className="flex-col">
            <p className="text-white text-sm mt-4">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
