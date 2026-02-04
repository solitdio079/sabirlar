import * as React from "react";
import slider from "../images/slider1.jpg";
export default function Hero() {
  return (
    <div className="bg-base-100">
      <main className="h-90 md:h-screen">
        <div className="flex h-full relative flex-col justify-between gap-18 overflow-x-hidden pt-40 md:gap-24 md:pt-45 lg:gap-35 lg:pt-47.5">
         
          <img
            src={slider}
            alt="Dishes"
            className="min-h-67 absolute z-0 top-0  w-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}
