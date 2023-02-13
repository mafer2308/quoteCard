import React, { useState, useEffect } from "react";
import quotes from "../Data/quotes.json";

const Quotebox = () => {
  const [color, setColor] = useState("");
  const [index, setIndex] = useState(0);

  const getRandomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  const next = () => {
    let indexRandom = Math.floor(Math.random() * quotes.length);
    let colorRandom = getRandomColor();
    setColor(colorRandom);
    setIndex(indexRandom);
  }

  useEffect(() => {
    next();
  }, []);

  return (
    <div className="overall-container" style={{ background: `#${color}` }}>
      <div className="card-container">
        <section className="quote-container">
          <h1 className="icon" style={{ color: `#${color}` }}>
            "
          </h1>
          <p className="text" style={{ color: `#${color}` }}> {quotes[index].quote}</p>
        </section>
        <section>
          <h3 className="textA" style={{ color: `#${color}` }}>{quotes[index].author}</h3>
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
