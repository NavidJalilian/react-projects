import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import CardDetails from "./CardDetails";
import { setProcducts } from "../redux/actions/productAction";
import Card from "../components/Card";

export default function () {


  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
