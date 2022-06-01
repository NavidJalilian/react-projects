import { createContext, useState } from "react";
import { shopData } from "../utils/Data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);
  const value = { products };
  console.log("from products", products);
  console.log("from value", value);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
