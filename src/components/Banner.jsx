import React, { useState } from "react";
import { Hero, Explore, Hover } from "../TransflowImages/Aimages";
//import Header from './Header';
import NavigationBar from "./NavigationBar";
const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      role="banner"
      className="text-white h-screen w-screen"
      style={{
        backgroundImage: `url(${Hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <NavigationBar />
      <div className="max-w-4xl mx-auto mt-36 items-center">
        <div className="flex">
          <div className="h-7  w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]"></div>

          <p className="bg-[#041C3780] h-7 max-w-[244px] text-center font-display text-sm leading-14 p-1 align-top">
            Logistics & Supply Chain Solutions
          </p>
        </div>
        <h1 className="text-white text-4xl font-semibold font-display tracking-widest leading-10 max-w-sm mt-3">
          Your Gateway to any Destination in the World
        </h1>
        <p className="text-xs font-extralight mt-3 w-96 ">
          In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in
          arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
          finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
        </p>

        <img
          src={isHovered ? Hover : Explore}
          alt=""
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className=" h-10 object-cover mt-2"
        />
      </div>
    </div>
  );
};

export default Banner;
