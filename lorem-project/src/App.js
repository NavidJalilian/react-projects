import React, { useState } from "react";
import data from "./data";
function App() {
  let [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    let amount = +count;
    console.log(count);
    setText(data.slice(0, amount));
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
  }
  return (
    <section className="section-center">
      <h3>tierd of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          max="10"
          min="1"
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
