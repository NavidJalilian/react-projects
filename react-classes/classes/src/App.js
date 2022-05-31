import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Shop from "./pages/Shop";

import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Shope" element={<Shop />} />
          {/* <Route path="Contact" element={<Contact />} /> */}
          <Route path="Auth" element={<Authentication />} />
          <Route path="Sing-Up" element={<SignUpForm />} />
        </Route>
      </Routes>
    </>
  );
}
