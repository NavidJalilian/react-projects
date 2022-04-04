import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";
import clipboard from "./img_452029.png";
const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`color ${index > 8 && "color-light"} }`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>

      {alert && (
        <p className="alert">
          copied to clipboard
          <span className="clipboard">
            <img src={clipboard} alt="" className="" />{" "}
          </span>
        </p>
      )}
    </article>
  );
};

export default SingleColor;
