import React from "react";
import { Glasses, Smith, Tylor } from "../TransflowImages";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Team = () => {
  return (
    <div className="bg-white w-full  mt-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center">
          <div className="h-7 w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] "></div>
          <p className="text-[#1C1F35] bg-[#E8E8E880] w-30 text-sm p-1 text-center">
            The Transporters
          </p>
        </div>
        <h1 className="font-extrabold text-[#1C1F35] text-3xl text-center mt-2">
          Meet the Expert Team
        </h1>
        <div className="flex mt-10 gap-10">
          <div>
            <div className="relative">
              <img src={Glasses} alt="" />
              <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] w-28 h-10 absolute bottom-0 translate-y-5 right-0">
                <h1 className="text-black text-xl font-bold absolute bottom-2 right-2">
                  <div className="flex gap-4">
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagram />
                  </div>
                </h1>
              </div>
            </div>
            <div className="bg-[#1C1F35] h-20 text-white p-4 ">
              <h1 className="text-xl font-bold ">Jessica Arow</h1>
              <p className="text-xs">Designer</p>
            </div>
          </div>

          <div>
            <div className="relative">
              <img src={Smith} alt="" />
              <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] w-20 h-10 absolute bottom-0 translate-y-5 right-0">
                <h1 className="text-black text-xl font-bold absolute bottom-2 right-2">
                  <div className="flex gap-4">
                    <FaLinkedin />
                    <FaTwitter />
                  </div>
                </h1>
              </div>
            </div>

            <div className="bg-[#1C1F35] h-20 text-white p-4 ">
              <h1 className="text-xl font-bold ">Kathleen Smith</h1>
              <p className="text-xs">Designer</p>
            </div>
          </div>
          <div>
            <div className="relative">
              <img src={Tylor} alt="" />
              <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] w-20 h-10 absolute bottom-0 translate-y-5 right-0">
                <h1 className="text-black text-xl font-bold absolute bottom-2 right-2">
                  <div className="flex gap-4">
                    <FaFacebook />
                    <FaInstagram />
                  </div>
                </h1>
              </div>
            </div>
            <div className="bg-[#1C1F35] h-20 text-white p-4 ">
              <h1 className="text-xl font-bold ]">Rebecca Tylor</h1>
              <p className="text-xs">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
