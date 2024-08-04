import React from "react";
import { Link } from "react-router-dom";
import imgLaptop from "../../../assets/images/minionsLaptop.gif";
import imgPhone from "../../../assets/images/minionsPhone.gif";
import "./Blog.css";
import Logo from "../Logo/Logo";

const Blog = () => {
  const isMobile = () => {
    return /Mobi|Android/i.test(window.navigator.userAgent);
  };

  return (
    <div id="blog">
      <img src={isMobile() ? imgPhone : imgLaptop} alt="Minions" />
      <Logo />
      <div className="bg-gradient-to-r from-transparent to-transparent backdrop-blur-lg text-xxl shadow-lg border rounded-lg p-4 m-5 flex flex-col justify-center items-center">
        UNDER CONSTRUCTION
      </div>
    </div>
  );
};

export default Blog;
