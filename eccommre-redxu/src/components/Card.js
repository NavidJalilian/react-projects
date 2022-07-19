import React from "react";
import { Link } from "react-router-dom";
import CardDetails from "../pages/CardDetails";

function getStars(filledCount, emptCount) {
  filledCount = Math.floor(filledCount);
  emptCount = Math.abs(filledCount - 5);

  let arr = [];
  for (let i = 0; i < filledCount; i++) {
    arr.push(
      <svg
        key={i}
        className={`w-5 h-5 fill-current text-gray-700`}
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
      </svg>
    );
  }
  for (let i = 0; i < emptCount; i++) {
    arr.push(
      <svg
        key={i + 100}
        className={`w-5 h-5 fill-current text-gray-300`}
        viewBox="0 0 24 24"
      >
        <path
          d="M12 17.27L18.18 21L16.54 13.97L22 
        9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
        />
      </svg>
    );
  }

  return arr;
}

export default function Card({
  title,
  id,
  price,
  description,
  rating,
  image,
  category,
}) {
  const shortTitle = title.toString().split(" ").slice(0, 2).join(" ");

  return (
    <div className="m-3 ">
      <div
        className="flex max-w-sm bg-white shadow-lg
       rounded-lg overflow-hidden"
      >
        <div
          className="w-2/5 bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">{shortTitle} </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, dolor?
          </p>
          <div className="flex item-center mt-2">
            {rating.rate && getStars(rating.rate)}
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
            <Link to={`products/${id}`}>
              <button
                className="px-3 py-2 bg-gray-500 text-white text-xs
             font-bold capitalize rounded"
              >
                detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
