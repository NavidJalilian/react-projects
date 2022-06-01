import React, { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import { shopData } from "../utils/Data";
import "./Shop.css";

export default function Shope() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop gallery">
      {products.map(({ id, name, imageUrl, price }) => {
        return (
          <div className="shop-card" key={id} >
            <div className="shop-image">
              <img src={imageUrl} alt={name} />
              <button className="btn btn-inverted">add to cart</button>
            </div>
            <div className="shop-card-content">
              <span>{name}</span>
              <span>{price}$</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
