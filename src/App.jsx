import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotDeals from "./Cards/HotDeals";
import Header from "./Components/Nav/Header";
import Home from "./Home";
import SingleElectronic from "./Page/SingleElectronic";
import SingleProduct from "./Page/SingleProduct";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<HotDeals />} />
          <Route path="/single/:id" element={<SingleProduct />} />
          <Route path="/electronic" element={<SingleElectronic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
