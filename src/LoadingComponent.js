import React from "react";
import ClipLoaderUI from "react-spinners/ClipLoader";
import "./styles/loader.scss";

function LoadingComponent(props) {
  return (
    <div className="center">
      <ClipLoaderUI {...props} className="text-center" />
      <h5 className="mt-2">{props.label || "Loading .."}</h5>
    </div>
  );
}
export default LoadingComponent;
