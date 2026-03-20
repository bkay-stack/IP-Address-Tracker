// import React from "react";
import ImgPatternMobile from "../assets/images/pattern-bg-mobile.png";
import ImgPatternDesktop from "../assets/images/pattern-bg-desktop.png";

import ImgArrow from "../assets/images/icon-arrow.svg";
// import ImgMarker from "../assets/images/icon-location.svg";
import Map from "./Map";
import { useState, useEffect } from "react";
import type { IPData } from "../App";

type IPMainProps = {
  onDataFetched: (data: IPData | null) => void;
  onLoading: (loading: boolean) => void;
  onError: (error: string | null) => void;
};
const IPMain = ({
  onDataFetched,
  onLoading,
  onError,
}: IPMainProps): React.JSX.Element => {
  async function lookup(target?: string): Promise<void> {
    onLoading(true);
    onError(null);
    onDataFetched(null);
  }

  useEffect(() => {
    lookup();
  }, []);

  return (
    <section className="relative w-full">
      {/* Mobile background */}
      <div className="relative w-full md:hidden">
        <img
          src={ImgPatternMobile}
          alt="Background pattern"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex  justify-center mt-10">
          <h1 className="text-2xl text-white font-bold">IP Address Tracker</h1>
        </div>

        <form className="absolute inset-x-0 top-23 px-4 flex justify-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="w-80 p-3 rounded-l-lg bg-(--gray-950) border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white p-5 rounded-r-lg hover:bg-gray-800">
              <img src={ImgArrow} alt="arrow" />
            </button>
          </div>
        </form>
      </div>

      {/* Desktop background */}
      <div className="relative w-full hidden md:block h-full ">
        <img
          src={ImgPatternDesktop}
          alt="Background pattern"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex  justify-center  text-center mt-16">
          <h1 className="md:text-4xl text-white font-bold">
            IP Address Tracker
          </h1>
        </div>

        <form className="absolute inset-x-0 top-30 px-4">
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="w-196 p-3 rounded-l-lg bg-(--gray-950) border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white p-5 rounded-r-lg hover:bg-gray-800 flex  items-center justify-center">
              <img src={ImgArrow} alt="arrow" />
            </button>
          </div>
        </form>
      </div>
      <Map lat={51.505} lng={-0.09} />
    </section>
  );
};

export default IPMain;
