import React from "react";
import {
  Calender,
  Color,
  Carton,
  WaterShip,
  Button,
} from "../TransflowImages/Aimages";

const Blog = () => {
  return (
    <div className="w-screen h-screen mt-7" style={{ minHeight: "180vh" }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="h-7 w-1 bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] "></div>
          <p className="text-[#1C1F35] bg-[#E8E8E880] w-30 text-sm p-1 text-center">
            Our Blog
          </p>
        </div>
        <h1 className="font-bold text-[#1C1F35] text-2xl text-center">
          Our Latest News
        </h1>
        <div className=" border-t-2 border-[#D6D6D6] mt-7">
          <div className="flex flex-col">
            <div className="flex gap-2 justify-center items-center mt-4 max-w-4xl ">
              <div className="mt-7">
                <img
                  src={Color}
                  alt=""
                  className=""
                  style={{ width: "100vh" }}
                />
              </div>
              <div className="flex flex-col items-center w-60 mb-16">
                <img src={Calender} alt="" className="w-10 mb-1" />
                <div className="text-sm">
                  <p className="text-black text-5xl font-bold">08</p>
                  <p className="text-gray-500">September</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="w-2 h-60 border-r border-[#D6D6D6] mt-10 mr-6"></div>
              </div>
              <div className=" mt-12">
                <h1 className="text-2xl font-bold text-[1C1F35]">
                  Inland freight a worthy solution for your business
                </h1>
                <p className="mt-2 text-[#666C89] text-sm">
                  We are dedicated in creating added value for our customers by
                  implementing modern technology in our work.{" "}
                </p>
                <div className="mt-2 text[#666C89] ">
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                </div>
              </div>
            </div>
            <div className="flex  items-center ">
              <div className="mt-1 " style={{ position: "relative" }}>
                <img
                  src={Carton}
                  alt=""
                  className="bg-[#1C1F35]"
                  style={{ width: "100vh" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    height: "70%",
                    background: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ color: "white", margin: 0 }}>Read more</p>
                </div>
              </div>
              <div className="flex flex-col items-center w-60 mb-16">
                <img src={Calender} alt="" className="w-10 mb-1" />
                <div className="text-sm">
                  <p className="text-black text-5xl font-bold">12</p>
                  <p className="text-gray-500">September</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="w-2 h-60 border-r border-[#D6D6D6] mt-10 mr-6"></div>
              </div>
              <div className=" mt-12">
                <h1 className="text-2xl font-bold text-[#FFBE34]">
                  How technology can help redraw the supply chain map
                </h1>
                <p className="mt-2 text-[#666C89] text-sm">
                  We are dedicated in creating added value for our customers by
                  implementing modern technology in our work.{" "}
                </p>
                <div className="mt-2 text-[#666C89] ">
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                </div>
              </div>
            </div>
            <div className="flex  items-center mb-16">
              <div className="mt-8">
                <img src={WaterShip} alt="" style={{ width: "100vh" }} />
              </div>
              <div className="flex flex-col items-center w-60 mb-16">
                <img src={Calender} alt="" className="w-10 mb-1" />
                <div className="text-sm">
                  <p className="text-black text-5xl font-bold">25</p>
                  <p className="text-gray-500">September</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="w-2 h-60 border-r border-[#D6D6D6] mt-10 mr-6"></div>
              </div>
              <div className="w mt-12">
                <h1 className="text-2xl font-bold text-[#1C1F35]">
                  Five things you should have ready for your broker
                </h1>
                <p className="mt-2 text-[#666C89] text-sm">
                  We are dedicated in creating added value for our customers by
                  implementing modern technology in our work.{" "}
                </p>
                <div className="mt-2 text-[#666C89]">
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Reliable & experienced staffs</li>
                  <li>Urgent transport solutions</li>
                  <li>Reliable & experienced staffs</li>
                </div>
              </div>
            </div>
            <div className=" border-b-2 border-[#D6D6D6]"></div>
            <div className=" flex justify-center items-center mt-8">
              <img src={Button} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
