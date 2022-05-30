import React from "react";
import Card from "../components/Card";
import Data from "../components/Data";

export default function Home() {
  return (
    <>
      <div className="gallery">
        {Data.map(({ id, title, imageUrl }) => (
          <Card url={imageUrl} title={title} key={id} />
        ))}
      </div>
    </>
  );
}
