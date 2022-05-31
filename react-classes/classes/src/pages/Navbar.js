import React from "react";
import logo from "../images/crown.png";
import "./Navbar.css";
import cart from "../images/cart.png";
import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <Link to="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/Shope">Shope</Link>
          </li>
          <li>
            <Link to="Contact">contact</Link>
          </li>
          <li>
            <Link to="Sign-in">sign in</Link>
          </li>
          <li>
            <Link to="" className="cart-logo">
              <img src={cart} alt="" />
            </Link>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
}
