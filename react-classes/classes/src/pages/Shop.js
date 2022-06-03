import React, { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import "./Shop.css";
import { CartContext } from "../contexts/CartContext";

export default function Shope() {
  const { products } = useContext(ProductsContext);
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="shop gallery">
      {products.map((product) => {
        const { id, name, imageUrl, price } = product;
        const addProductToCart = () => addItemToCart(product);

        return (
          <div className="shop-card" key={id}>
            <div className="shop-image">
              <img src={imageUrl} alt={name} />
              <button className="btn btn-inverted" onClick={addProductToCart}>
                add to cart
              </button>
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
