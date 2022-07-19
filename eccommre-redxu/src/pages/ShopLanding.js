import React from "react";
import Card from "../components/Card";

export default function ShopLanding({ products }) {
  return (
    <div
      className="gallery pt-24 grid
        
         gap-4 place-items-center md:grid-cols-2 
       lg:grid-cols-3  sm:grid-cols-2 "
    >
      {products && products.map((data) => <Card key={data.id} {...data} />)}
    </div>
  );
}
