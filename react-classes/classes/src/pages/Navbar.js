import React, { useState } from "react";
import logo from "../images/crown.png";
import "./Navbar.css";
import cart from "../images/cart.png";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { signOutUser } from "../utils/firebase";
import Cart from "../components/Cart";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen, cartItems, cartItemsCount } =
    useContext(CartContext);

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
            <Link to="Check-Out">contact</Link>
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
          <li className="cart" onClick={() => setIsCartOpen(!isCartOpen)}>
            <div className="cart-logo" data-cart-count={cartItemsCount}>
              <img src={cart} alt="" />
            </div>
            {isCartOpen && <Cart />}
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
}
