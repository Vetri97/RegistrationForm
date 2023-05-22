import React from "react";
import "./OverlayLoader.scss";

/**
 * @author Vetrivel Kumaravel
 * @function LandingPage
 **/

const OverlayLoader = () => {
  return (
    <div className="loading-overlay">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="loading-spinner" />
        <div className="loading-message">Loading, please wait...</div>
      </div>
    </div>
  );
};

export default OverlayLoader;
