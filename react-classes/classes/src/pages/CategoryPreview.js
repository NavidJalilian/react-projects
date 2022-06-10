import { useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import "./Shop.css";
import Category from "../components/Category";

export default function CategoryPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const item = categoriesMap[title];
        return <Category item={item} key={title} title={title} />;
      })}
    </>
  );
}
