import React from "react";
import ReactDOM from "react-dom";
import LoadableApp from "./LoadableApp";

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

