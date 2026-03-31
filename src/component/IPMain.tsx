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
  // states for query and coordinates
  const [query, setQuery] = useState<string>("");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null,
  );

  async function lookup(target?: string): Promise<void> {
    onLoading(true);
    onError(null);
    onDataFetched(null);
    try {
      const url: string = target
        ? `https://ipapi.co/${encodeURIComponent(target)}/json/`
        : "https://ipapi.co/json/";

      const res: Response = await fetch(url);
      const data: IPData & { error?: boolean; reason?: string } =
        await res.json();

      if (data.error) throw new Error(data.reason || "Invalid IP or domain");

      onDataFetched(data);
      setCoords({ lat: data.latitude, lng: data.longitude });
    } catch (e: unknown) {
      const msg: string =
        e instanceof Error ? e.message : "Could not fetch IP data";
      onError(msg);
    } finally {
      onLoading(false);
    }
  }

  useEffect(() => {
    lookup();
    console.log(coords);
    console.log(query);
  }, []);

  //
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    lookup(query.trim() || undefined);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setQuery(e.target.value);
  }

  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="relative w-full">
        <img
          src={ImgPatternMobile}
          alt="Background pattern"
          className="w-full h-50 md:h-70 object-cover md:hidden "
        />
        <img
          src={ImgPatternDesktop}
          alt="Background pattern"
          className="w-full h-50 md:h-70 object-cover hidden md:block"
        />

        {/* Title and form — centered over image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            IP Address Tracker
          </h1>

          {/* Single responsive form */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center w-full max-w-xl">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search for any IP address or domain"
              className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white p-4 rounded-r-lg hover:bg-gray-800 flex items-center justify-center">
              <img src={ImgArrow} alt="arrow" />
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-screen">
        {coords && <Map lat={coords.lat} lng={coords.lng} />}
      </div>
    </section>
  );
};

export default IPMain;
