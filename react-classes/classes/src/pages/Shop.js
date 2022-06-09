import {  useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import "./Shop.css";
import Category from "../components/Category";

export default function Shope() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="">
      {Object.keys(categoriesMap).map((category) => {
        const item = categoriesMap[category];
        return <Category item={item} key={category} title={category} />;
      })}
    </div>
  );
}
