import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./styles/app.scss";
import slt from "./images/slt.png";
// import Demo from "./images/demo.svg";
import scooby from "./images/scooby.svg?url"
import sample from "./sample.csv";
import  Demo  from './images/demo.svg'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };
  return (
    <div className="App">
      <div> 
          <img src={slt} alt="slt logo" /> <hr/>
          <img src={scooby} alt="scooby" /><hr/>
        <p className="counter-text text-xl text-red-400">Counter for count</p>
        <p>{count}</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <header></header>
    </div>
  );
}

// console.log("scv", sample);

export default hot(module)(App);
