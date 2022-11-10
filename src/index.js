import React from "react";
import ReactDOM from "react-dom";
import LoadableApp from "./LoadableApp";
import "./styles/index.css"

function renderApp() {
  ReactDOM.render(
    <React.StrictMode>
      <LoadableApp/>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
renderApp();
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept();
}

