import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  function isValid(e) {
    console.log("changed");
    setColor(e.target.value);
    try {
      handleSubmit(e);
    } catch (e) {
      setError(true);
    }
    setError(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10);
      setList(colors);
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
            onFocus={() => setColor("#")}
            onChange={(e) => isValid(e)}
            placeholder="Enter color : #15025"
            className={`${error ? "error" : ""} `}
            maxLength="8"
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor key={index} {...color} index={index} />
        ))}
      </section>
    </>
  );
}

export default App;
