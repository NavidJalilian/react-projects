import React, { isValidElement, useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  function isValid(e) {
    setColor(e.target.value);
    setError(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (e.target.value > 0) {
      setError(false);
    }
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (e) {
      setError(true);
    }
  }
  return (
    <>
      <section className="container">
        <h3>color generater</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => isValid(e)}
            placeholder="enter color : #15025"
            className={`${error ? "error" : ""} `}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} />
        ))}
      </section>
    </>
  );
}

export default App;
