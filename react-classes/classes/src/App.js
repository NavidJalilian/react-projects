import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Shope from "./pages/Shope";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Shope" element={<Shope />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}
