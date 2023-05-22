import React from "react";
import "./Loader.scss";

/**
 * @author Vetrivel Kumaravel
 * @function LandingPage
 **/

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-wrapper">
        <div className="loader-dot" />
        <div className="loader-dot" />
        <div className="loader-dot" />
      </div>
      <span className="loader-text" style={{ color: "#fff" }}>
        Loading...
      </span>
    </div>
  );
};

export default Loader;
