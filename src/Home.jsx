import React from "react";
import Electronic from "./Cards/Electronic";
import HotDeals from "./Cards/HotDeals";
import Male from "./Cards/Male";
import NewArrival from "./Cards/NewArrival";
import Women from "./Cards/Women";
import Carousel from "./Components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="lg:mx-20 mx-2 py-5 w-[100wv] ">
        <HotDeals />
        <NewArrival />
        <Women />
        <Male />
        <Electronic />
      </div>
    </>
  );
}
