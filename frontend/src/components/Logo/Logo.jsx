import React, { useEffect, useState } from "react";
import "./Logo.css";

const texts = ["Webflow Dev", "UI/UX Designer", "Entrepreneur"];

const Logo = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2300);

    return () => clearInterval(interval);
  }, []);

  return (
    <a href="/" className="p-2 my-4 rounded-md">
      <div className="dsg-nav_wrapper flex flex-col items-center">
        <div className="logo-bar ">
          <div className="logo-text text-black text-xl font-bold">
            Brian Otieno
          </div>
        </div>
        <div className="rotate-wrap ">
          <div className="rotating-text text-sm text-gray-600">
            {texts[currentTextIndex]}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Logo;
