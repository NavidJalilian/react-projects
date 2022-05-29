import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import cookyImg from "./images/CmLnAO.jpg";
import pic from "./images/react-tutorial-start-screen.3a47fbd6dc.png";
import Data from "./components/Data";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="gallery">
        {Data.map(({id,title,imageUrl}) => (
          <Card url={imageUrl} title={title} key={id} />
        ))}
      </div>
    </>
  );
}
