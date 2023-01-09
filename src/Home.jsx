import React from "react";
import HotDeals from "./Cards/HotDeals";
import Carousel from "./Components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="lg:mx-20 mx-2 py-5">
        <HotDeals />
      </div>
    </>
  );
}
