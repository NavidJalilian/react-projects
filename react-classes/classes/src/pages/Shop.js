import { useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import "./Shop.css";
import { CartContext } from "../contexts/cartContext";

export default function Shope() {
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        //

        return (
          <>
            <h2 className="section-title">{title}</h2>
            <div className="shop gallery">
              {categoriesMap[title].map((item) => {
                const { id, name, imageUrl, price } = item;
                const addProductToCart = () => addItemToCart(item);
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
      })}
    </>
  );
}
