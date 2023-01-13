import React from "react";
import HotDeals from "./Cards/HotDeals";
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
      </div>
    </>
  );
}
