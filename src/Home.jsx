import React from "react";
import Electronic from "./Cards/Electronic";
import MultiCard from "./Cards/MultiCard";
import NewArrival from "./Cards/NewArrival";
import Carousel from "./Components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <div className="lg:mx-20 mx-2 py-5 w-[100wv] ">
        <NewArrival />
        <Electronic />
      </div>
    </>
  );
}
