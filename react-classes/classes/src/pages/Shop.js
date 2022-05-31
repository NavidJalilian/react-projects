import React from "react";
import { shopData } from "../utils/Data";
import "./Shop.css";
export default function Shope() {
  return (
    <div className="shop gallery">
      {shopData.map(({ id, name, imageUrl, price }) => {
        return (
          <>
            <div className="shop-card" key={id}>
              <div className="shop-image">
                <img src={imageUrl} alt={name} />
                <button className="btn">add to cart</button>
              </div>
              <div className="shop-card-content">
                <span>{name}</span>
                <span>{price}$</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
