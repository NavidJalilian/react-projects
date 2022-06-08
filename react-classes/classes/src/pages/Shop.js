import { Fragment, useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import "./Shop.css";
import { CartContext } from "../contexts/cartContext";
import Category from "../components/Category";

export default function Shope() {
  const { categoriesMap } = useContext(CategoriesContext);


  return  <div className=""> 
   { Object.keys(categoriesMap).map((title) => {
    const item = categoriesMap[title];
    return (<Category title={title} item={item} key={title} />) } </div>

  
      


