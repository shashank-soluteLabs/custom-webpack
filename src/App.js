import React, { useState } from "react";
import { hot } from "react-hot-loader";
import "./styles/app.scss";
import slt from "./images/slt.png"

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
        <p>Counter for count</p>
        <p>{count}</p>
        <button onClick={handleClick}>Click Me</button>
      </header>
    </div>
  );
}

export default hot(module)(App);
