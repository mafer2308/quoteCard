import React, { useState, useEffect } from "react";
import quotes from "../Data/quotes.json";
import "animate.css";


const Quotebox = () => {
  const [color, setColor] = useState("");
  const [index, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [animate, setAnimate] = useState(false);

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
      <div className={`card-container animate__animated ${animate ? 'animate__backInRight' : ''}`}>
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
            onClick={() => {
              next();
              setClicked(true);
              setAnimate(true);
              setTimeout(() => {
                setClicked(false);
                setAnimate(false);
              }, 1000); // reestablece el estado a falso después de 1 segundo
            }}
            className={`button ${clicked ? "animate__animated animate__heartBeat" : ""}`}
            style={{ background: `#${color}` }}
          >
            {" "}
            {">"}{" "}
          </button>
        </section>
      </div>
    </div>
  );
}  

export default Quotebox;


