import React from "react";
import { deals } from "../Storage/HotItems";

export default function Women() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="lg:my-24">
        <div className="text-xl font-extrabold mb-10">New Arrivals</div>
        <div className="relative flex items-center">
          <div
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
          >
            {" "}
            Left
          </div>
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {deals.map((item) => (
              <img
                className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.image}
                alt="/"
              />
            ))}
          </div>
          <div
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
          >
            right
          </div>
        </div>
      </div>
    </>
  );
}
