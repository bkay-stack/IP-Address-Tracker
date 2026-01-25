import React from "react";
import ImgPatternMobile from "../assets/images/pattern-bg-mobile.png";
import ImgPatternDesktop from "../assets/images/pattern-bg-desktop.png";

const IPMain = () => {
  return (
    <section className="relative w-full">
      {/* Mobile background */}
      <div className="relative w-full md:hidden">
        <img
          src={ImgPatternMobile}
          alt="Background pattern"
          className="w-full h-75 object-cover"
        />

        <div className="absolute inset-0 flex  justify-center mt-10">
          <h1 className="text-2xl text-white font-bold">IP Address Tracker</h1>
        </div>

        <form className="absolute inset-x-0 top-27 px-4 flex justify-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="w-80 p-3 rounded-l-lg bg-(--gray-950) border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-r-lg hover:bg-gray-800">
              &gt;
            </button>
          </div>
        </form>
      </div>

      {/* Desktop background */}
      <div className="relative w-full hidden md:block">
        <img
          src={ImgPatternDesktop}
          alt="Background pattern"
          className="w-full h-100 object-cover"
        />

        <div className="absolute inset-0 flex  justify-center  text-center mt-16">
          <h1 className="md:text-4xl text-white font-bold">
            IP Address Tracker
          </h1>
        </div>

        <form className="absolute inset-x-0 -bottom-6.25 px-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="w-full p-3 rounded-l-lg bg-(--gray-950) border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-r-lg hover:bg-gray-800">
              &gt;
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default IPMain;
