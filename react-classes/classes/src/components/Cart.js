import React, { useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const buyButton = useRef(null);
  const scrollToBuyBtn = () =>
    buyButton.current.scrollIntoView({ block: "center", behavior: "smooth" });
  return (
    <div className="">
      <div className="bag" onLoad={scrollToBuyBtn}>
        <div className="bag-items">
          {cartItems.map(({ name, quantity, id, imageUrl, price }) => (
            <div className="bag-item" key={id}>
              <img src={imageUrl} alt={name} />
              <div className="bag-item-info">
                <h4>{name}</h4>
                <h5>
                  {quantity} X {price}$
                </h5>
              </div>
            </div>
          ))}
        </div>
        <button className="btn " ref={buyButton}>
          buy now
        </button>
      </div>
    </div>
  );
}
