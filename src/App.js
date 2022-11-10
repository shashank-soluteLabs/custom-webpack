import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./styles/app.scss";
import slt from "./images/slt.png"
import sample from "./sample.csv"

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <img src={slt} alt="slt logo"/>
        </p>
        <p className="counter-text">Counter for count</p>
        <p>{count}</p>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

// console.log("scv", sample);

export default hot(module)(App);
