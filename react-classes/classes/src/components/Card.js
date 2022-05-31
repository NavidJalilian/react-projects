import React from "react";
import "./Card.css";

export default function Card({ title, url }) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <div className="card-heading">
        <h3>{title}</h3>
        <p>shop now</p>
      </div>
    </div>
  );
}
