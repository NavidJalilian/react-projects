import { createContext, useContext, useEffect, useState } from "react";
import { getCollectionAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const fetchProducts = async () => {
      const categoriesMap = await getCollectionAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    fetchProducts();
  }, []);
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
