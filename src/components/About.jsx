import React from "react";
import { Photo } from "../TransflowImages/Aimages";
import { Icon1 } from "../TransflowImages/Aimages";
import { Icon7 } from "../TransflowImages/Aimages";
import { Airplane } from "../TransflowImages/Aimages";
import { GirlWritings } from "../TransflowImages/Aimages";
const About = () => {
  return (
    <div className="" style={{ minHeight: "120vh" }}>
      <div
        className="text-white flex justify-center items-center h-96 w-screen  mx-auto"
        style={{
          backgroundImage: `linear-gradient(rgba(9, 18, 66, 0), rgba(9, 18, 66, 1)), url(${Photo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-screen">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-28 bg-white"
          style={{ width: "900px" }}
        >
          <div
            class="p-9 mx-auto max-w-4xl  grid md:grid-cols-2 gap-8"
            style={{ minHeight: "70vh" }}
          >
            <div>
              <div className="flex">
                <div className="h-7 w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
                <p className="text-[#1C1F35] bg-[#E8E8E880] w-28 text-sm p-1">
                  Why Us
                </p>
              </div>
              <h1 className="text-xl font-bold mt-2 text-[#1C1F35]">
                We provide full range global logistics solution
              </h1>
              <p className="text-sm mt-3 leading-5">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </p>
              <p className="text-sm mt-3 leading-5">
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </p>
              <div className="flex mt-5 list-none">
                <img className="h-10" src={Icon1} alt="" />
                <li className="p-1 text-2xl ml-2">Delivery on Time</li>
              </div>
              <div className="flex mt-4 list-none">
                <img className="h-10" src={Icon7} alt="" />
                <li className="p-1 text-2xl ml-2">Optimized Travel Cost</li>
              </div>
            </div>
            <div className="relative">
              <img
                src={Airplane}
                alt=""
                className=" w-full h-auto"
                style={{ overflow: "hidden" }}
              />
              <div className="absolute bottom-0 left-[-47px] top-[197px] w-[282px] h-[275px] bg-white"></div>
              <img
                src={GirlWritings}
                alt=""
                className="absolute bottom-0 left-[-47px] top-[227px] w-[252px] h-[205px] object-cover  "
                style={{ zIndex: "1" }}
              />
            </div>
          </div>
          <div className="mb-20 max-w-4xl mx-auto">
            <div className=" border-t-2  border-[#D4D4D4] h-px"></div>

            <div className="grid md:grid-cols-2 gap-8 ">
              <div className="flex justify-between w-96 ml-10 flex-row gap-4 p-0 align-middle">
                <h1 className="text-5xl  font-extrabold text-[#1C1F35]">
                  1294
                </h1>
                <div className="h-4 w-4 mt-4 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
                <p className="text-xl mr-4 mt-3 text-[#1C1F35]">
                  Delivered Packages
                </p>

                <div className="">
                  <div className="w-2 h-20 border-r border-[#D4D4D4] "></div>
                </div>
              </div>

              <div className="flex justify-between w-96 flex-row gap-4 p-0 align-middle">
                <h1 className="text-5xl font-extrabold text-[#1C1F35]">3594</h1>
                <div className="h-4 w-4 mt-4 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>
                <p className="text-xl mr-4 mt-3 text-[#1C1F35]">
                  Satisfied Clients
                </p>
              </div>
            </div>

            <div className=" border-b-2  border-[#D4D4D4] h-px"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
