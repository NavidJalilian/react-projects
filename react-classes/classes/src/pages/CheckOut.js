import React, { useContext, useEffect } from "react";
import "./CheckOut.css";
import { CartContext } from "../contexts/CartContext";

export default function CheckOut() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  return (
    <>
      <div className="checkOut">
        <ul className="grid grid-col-5">
          <li>products</li>
          <li>describtion</li>
          <li>price</li>
          <li>quantity</li>
          <li>remove</li>
        </ul>
        <div className="checkOut-items">
          {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
            <div className="checkOut-item grid grid-col-5" key={id}>
              <img src={imageUrl} alt={name} />
              <p>{name}</p>
              <span className="quantity">{price}$</span>
              <div className="checkOut-item-quantity">
                <span className="action-hover scale-up">&#10094;</span>
                <span>{quantity}</span>
                <span className="action-hover">&#10095;</span>
              </div>

              <p className="action-hover">&#10005;</p>
            </div>
          ))}
        </div>
        <hr />
        <span>Total: 0</span>
      </div>
    </>
  );
}
