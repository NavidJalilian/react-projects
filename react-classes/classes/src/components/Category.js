import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export default function Category({ title, item }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <>
      <h2 href="">
        <span className="section-title">{title}</span>
      </h2>

      <div className="shop gallery">
        {item
          .filter((_, idx) => idx < 4)
          .map((product) => {
            const { id, name, imageUrl, price } = product;
            const addProductToCart = () => addItemToCart(product);
            return (
              <div className="shop-card" key={id}>
                <div className="shop-image">
                  <img src={imageUrl} alt={name} />
                  <button
                    className="btn btn-inverted"
                    onClick={addProductToCart}
                  >
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
    </>
  );
}
