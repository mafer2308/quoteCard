import React from "react";
import quotes from "../Data/quotes.json";
import { useState } from "react";
console.log(quotes);

const Quotebox = () => {
  const [color, setColor] = useState("");
  const [index, setIndex] = useState(0);
  let indexRandom = Math.floor(Math.random() * quotes.length);
  let colorRandom = Math.floor(Math.random() * 16777215).toString(16);
  function next() {
    setColor(colorRandom);
    setIndex(indexRandom);
  }
  return (
    <div className="overall-container" style={{ background: `#${color}` }}>
      <div className="card-container">
        <section className="quote-container">
          <h1 className="icon" style={{ color: `#${color}` }}>
            "
          </h1>
          <p className="text" style={{ color: `#${color}` }}> {quotes[indexRandom].quote}</p>
        </section>
        <section>
          <h3 className="textA" style={{ color: `#${color}` }}>{quotes[indexRandom].author}</h3>
        </section>
        <section className="content-end">
          <button
            onClick={next}
            className="button"
            style={{ background: `#${color}` }}
          >
            {" "}
            {">"}{" "}
          </button>
        </section>
      </div>
    </div>
  );
};

export default Quotebox;
