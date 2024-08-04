import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="dsg-nav_wrapper">
      <div className="logo-bar">
        <div className="logo-text">Brian Otieno</div>
      </div>
      <div className="rotate-wrap">
        <div className="rotating-text">Webflow Developer</div>
        <div className="rotating-text">UI/UX Designer</div>
        <div className="rotating-text">Entrepreneur</div>
      </div>
    </div>
  );
};

export default Logo;
