import React from "react";
import Card from "../components/Card";
import { categories } from "../utils/Data";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="home">
        {categories.map(({ id, title, imageUrl }) => (
          <Card url={imageUrl} title={title} key={id} />
        ))}
      </div>
    </>
  );
}
