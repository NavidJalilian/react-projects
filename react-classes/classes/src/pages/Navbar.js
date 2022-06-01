import React from "react";
import logo from "../images/crown.png";
import "./Navbar.css";
import cart from "../images/cart.png";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../utils/firebase";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);

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
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="Contact">contact</Link>
          </li>
          <li>
            {!currentUser ? (
              <Link to="Auth">sign in</Link>
            ) : (
              <span className="sign-out-link" onClick={signOutUser}>
                Sign out
              </span>
            )}
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
